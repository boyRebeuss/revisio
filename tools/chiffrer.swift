// Lit « clé\ncode » sur l'entrée standard, écrit js/cle-famille.js.
// PBKDF2-SHA256 + AES-256-GCM, compatible WebCrypto (voir js/famille.js).
import Foundation
import CryptoKit
import CommonCrypto

let entree = String(data: FileHandle.standardInput.readDataToEndOfFile(), encoding: .utf8)!
let parts = entree.split(separator: "\n", maxSplits: 1, omittingEmptySubsequences: false).map(String.init)
guard parts.count == 2 else { FileHandle.standardError.write("entrée invalide\n".data(using: .utf8)!); exit(1) }
let cle = parts[0]
// Même normalisation que normaliserCode() dans js/famille.js
let code = String(String.UnicodeScalarView(parts[1].decomposedStringWithCanonicalMapping.unicodeScalars
  .filter { !(0x300...0x36F).contains($0.value) })).lowercased()
  .components(separatedBy: .whitespacesAndNewlines).joined()
let iter: UInt32 = 600_000
var sel = Data(count: 16)
_ = sel.withUnsafeMutableBytes { SecRandomCopyBytes(kSecRandomDefault, 16, $0.baseAddress!) }
var derivee = Data(count: 32)
let codeData = Data(code.utf8)
let st = derivee.withUnsafeMutableBytes { d in
  sel.withUnsafeBytes { s in
    codeData.withUnsafeBytes { c in
      CCKeyDerivationPBKDF(CCPBKDFAlgorithm(kCCPBKDF2), c.baseAddress!.assumingMemoryBound(to: Int8.self), codeData.count,
                           s.baseAddress!.assumingMemoryBound(to: UInt8.self), 16, CCPseudoRandomAlgorithm(kCCPRFHmacAlgSHA256),
                           iter, d.baseAddress!.assumingMemoryBound(to: UInt8.self), 32)
    }
  }
}
guard st == 0 else { exit(1) }
let boite = try! AES.GCM.seal(Data(cle.utf8), using: SymmetricKey(data: derivee))
let iv = Data(boite.nonce), data = boite.ciphertext + boite.tag
let js = """
// Clé Gemini chiffrée par le code famille (généré par tools/chiffrer-cle.sh).
// null = pas de clé intégrée : chaque appareil saisit sa clé dans Réglages.
export const CLE_CHIFFREE = { iter: \(iter), sel: "\(sel.base64EncodedString())", iv: "\(iv.base64EncodedString())", data: "\(data.base64EncodedString())" };

"""
try! js.write(toFile: CommandLine.arguments[1], atomically: true, encoding: .utf8)
print("ok")

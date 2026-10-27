#!/bin/zsh
# La clé d'administration (secret ADMIN_KEY) est maintenant calculée depuis le secret maître d'Iteria : la page /admin
# s'ouvre depuis Iteria (https://iteria.kaurio-app.workers.dev/admin → bouton Admin), sans rien retaper.
# Nouvelle clé (pour toutes les applis d'un coup) : zsh ~/Documents/Applis/Portail/Web/tools/passe-iteria.sh nouveau
print "La clé vient maintenant d'Iteria : ouvrez l'admin depuis https://iteria.kaurio-app.workers.dev/admin"
print "Pour changer toutes les clés : zsh ~/Documents/Applis/Portail/Web/tools/passe-iteria.sh nouveau"

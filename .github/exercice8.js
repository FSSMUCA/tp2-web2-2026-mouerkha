let nom               = "   Fatima   "
let age               = "23"
let email             = "fatima@example"
let scoreJeu          = "150pts"
let estAdmin          = "false"
let derniereConnexion = null
let nombreConnexions  = "0"
let nomCorrige = nom.trim()
let nomMessage
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
    nomMessage = "vide après trim → valeur par défaut"
} else {
    nomMessage = "corrigé : espaces supprimés"
}
let ageCorrige = parseInt(age)
let ageMessage
if (Number.isNaN(ageCorrige) || ageCorrige <= 0) {
    ageMessage = "invalide"
} else {
    ageMessage = "valide"
}
let emailMessage
let indexArobase = email.indexOf("@")
if (indexArobase === -1) {
    emailMessage = "invalide : pas de @"
} else {
    let indexPoint = email.indexOf(".", indexArobase)
    if (indexPoint === -1) {
        emailMessage = "invalide : pas de point après @"
    } else {
        emailMessage = "valide"
    }
}
let scoreCorrige = parseInt(scoreJeu)
if (Number.isNaN(scoreCorrige)) {
    scoreCorrige = 0
}

let estAdminCorrige = (estAdmin === "true")
let estAdminMessage = "attention : Boolean(\"false\") = true, conversion manuelle requise"
let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté"
let derniereConnexionMessage
if (derniereConnexion === null || derniereConnexion === undefined) {
    derniereConnexionMessage = "valeur par défaut via ??"
} else {
    derniereConnexionMessage = "valeur existante"
}

let connexionsCorrige = Number(nombreConnexions)
let connexionsAffiche
if (connexionsCorrige === 0) {
    connexionsAffiche = "Aucune connexion"
} else {
    connexionsAffiche = connexionsCorrige
}

console.log("===== RAPPORT UTILISATEUR =====")
console.log("nom              : \"" + nomCorrige               + "\" (" + nomMessage + ")")
console.log("age              : "   + ageCorrige               + " (" + ageMessage + ")")
console.log("email            : \"" + email                    + "\" (" + emailMessage + ")")
console.log("scoreJeu         : "   + scoreCorrige             + " (extrait depuis \"" + scoreJeu + "\")")
console.log("estAdmin         : "   + estAdminCorrige          + " (" + estAdminMessage + ")")
console.log("derniereConnexion: \"" + derniereConnexionCorrige + "\" (" + derniereConnexionMessage + ")")
console.log("nombreConnexions : \"" + connexionsAffiche        + "\" (" + connexionsCorrige + " après conversion)")
console.log("================================")
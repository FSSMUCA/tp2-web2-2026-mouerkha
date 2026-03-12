let nomProduit           = "Clavier mécanique"
let prix                 = 89.99
let quantite             = 3
let codePromo            = null
let reductionPourcentage = 10
let estMembre            = true
let soldeCompte          = 250

let sousTotal = Math.round(prix * quantite * 100) / 100
console.log("Sous-total : " + sousTotal.toFixed(2) + " MAD")

let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0
console.log("Réduction  : " + reduction + " MAD")

let total = Math.round((sousTotal - reduction) * 100) / 100
console.log("Total final: " + total + " MAD")

let paiementAccepte = soldeCompte >= total
if (paiementAccepte) {
    console.log("Statut     : Paiement accepté")
} else {
    console.log("Statut     : Solde insuffisant")
}

let nouveauSolde = null
if (paiementAccepte) {
    nouveauSolde = soldeCompte - total
    console.log("Nouveau solde : " + nouveauSolde + " MAD")
}

let soldeAffiche = nouveauSolde ?? "N/A"

console.log("")
console.log("===== RÉCAPITULATIF =====")
console.log("Produit   : " + nomProduit)
console.log("Quantité  : " + quantite)
console.log("Prix unit.: " + prix + " MAD")
console.log("Sous-total: " + sousTotal.toFixed(2) + " MAD")
console.log("Réduction : " + reduction.toFixed(2) + " MAD")
console.log("Total     : " + total.toFixed(2) + " MAD")
console.log("Statut    : " + (paiementAccepte ? "Paiement accepté" : "Solde insuffisant"))
console.log("Solde     : " + soldeAffiche + " MAD")
console.log("=========================")
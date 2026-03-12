let nom   = null
let age   = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
    { nom: "nom",   val: nom   },
    { nom: "age",   val: age   },
    { nom: "ville", val: ville },
    { nom: "score", val: score },
    { nom: "actif", val: actif }
]

console.log("----- Partie A : ?? -----")
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]
    let resultat = v.val ?? "valeur par défaut"
    console.log(v.nom.padEnd(6) + " ?? \"valeur par défaut\" -> " + resultat)
}

console.log("")
console.log("----- Partie B : || -----")
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]
    let resultat = v.val || "valeur par défaut"
    console.log(v.nom.padEnd(6) + " || \"valeur par défaut\" -> " + resultat)
}

console.log("")
console.log("----- Partie C : comparaison -----")
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]
    let resultatNullish = v.val ?? "valeur par défaut"
    let resultatOr      = v.val || "valeur par défaut"

    if (String(resultatNullish) === String(resultatOr)) {
        console.log(v.nom.padEnd(6) + " : ?? et || -> même résultat")
    } else {
        console.log(v.nom.padEnd(6) + " : ?? et || -> résultat différent")
    }
}
let paires = [
    [0,        ""],
    [0,        "0"],
    [0,        false],
    ["",       false],
    [null,     undefined],
    [null,     false],
    [NaN,      NaN],
    [1,        "1"],
    [" \t\n ", 0]
]

let compteur = 0

for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0]
    let b = paires[i][1]

    let reprA = JSON.stringify(a) !== undefined ? JSON.stringify(a) : String(a)
    let reprB = JSON.stringify(b) !== undefined ? JSON.stringify(b) : String(b)

        if (Number.isNaN(a)) reprA = "NaN"
    if (Number.isNaN(b)) reprB = "NaN"

    let egaleAbstraite = (a == b)
    let egaleStricte   = (a === b)

        let colonneGauche = reprA + " == " + reprB

    console.log(
        colonneGauche.padEnd(20) + " -> " + String(egaleAbstraite).padEnd(5) +
        " |   " + (reprA + " === " + reprB).padEnd(20) + " -> " + egaleStricte
    )
        if (egaleAbstraite !== egaleStricte) {
        compteur++
    }
}

console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")
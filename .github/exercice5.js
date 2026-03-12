let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0]

for (let i = 0; i < nombres.length; i++) {
    let n = nombres[i]
        let affichage = String(n)

    let categorie

    if (Number.isNaN(n)) {
        categorie = "INVALIDE"

    } else if (n === Infinity || n === -Infinity) {
        categorie = "INFINI"
    } else if (1 / n === -Infinity) {
        categorie = "ZERO NEGATIF"

    } else if (Number.isInteger(n) && Math.abs(n) > Number.MAX_SAFE_INTEGER) {
              categorie = "ENTIER HORS LIMITES"

    } else if (Number.isInteger(n)) {
        categorie = "ENTIER SUR"

    } else {
        categorie = "DECIMAL"
    }

    console.log(affichage + " -> " + categorie)
}
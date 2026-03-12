let valeurs =[0, 1,"","0",null ,undefined ,NaN ,false ,[],{}]

for (let i=0;i < valeurs.length ;i++){
    let val = valeurs[i]
    let affichage 
    if (String(val )=== ""){
      affichage = "(chaine vide )"
    }else {
      affichage = String(val)
    }

    if (val){
      console.log(affichage + " -> truthy")
    }else {
      console.log (affichage + " -> falsy")
    }

}


$("#submit2").click(function(){
    cpt = localStorage.getItem('cpt');
    if (cpt === null){
        cpt=4;
        aventuriersLocal = [
            {
                "id": "1",
                "nom": "Oral Schmeler IV",
                "couleur": "#6c6b67",
                "avatar" : "http://placeimg.com/640/480/fashion"
            },
            {
                "id": "2",
                "nom": "Tad McLaughlin",
                "couleur": "#5d5c62",
                "avatar" : "http://placeimg.com/640/480/animals"
            },
            {
                "id": "3",
                "nom": "Matteo Wunsch",
                "couleur": "#454f41",
                "avatar" : "http://placeimg.com/640/480/technics"
            },
            {
                "id": "4",
                "nom": "Jack Beahan MD",
                "couleur": "#386b1f",
                "avatar" : "http://placeimg.com/640/480/abstract"
            }
        ];
    }
    else{
        aventuriersLocal = JSON.parse(localStorage.getItem('aventuriersLocal'))
    }
    $nom = $("#nom2").val();
    $couleur = $("#couleur2").val()
    $avatar = "http://placeimg.com/640/480/abstract"
    const aventurier = {'id': ++cpt, 'nom': $nom, 'couleur': $couleur, 'avatar': $avatar}
    aventuriersLocal.push(aventurier);
    localStorage.setItem('aventuriersLocal',JSON.stringify(aventuriersLocal));
    localStorage.setItem('cpt', JSON.stringify(cpt))
})
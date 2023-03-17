
aventuriersLocal = JSON.parse(localStorage.getItem('aventuriersLocal'))
    for (card of aventuriersLocal){
        $("#aventurier").append(`<div class="card col-lg-4" ">
                                    <img src="${card.avatar}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${card.nom}</h5>
                                        <label for="couleur" >Couleur preferé:</label>
                                        <input disabled value="${card.couleur}" id="couleur" type="color" class="card-text"></input>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                 </div>`)

    }
localStorage.setItem('aventuriersLocal',JSON.stringify(aventuriersLocal));


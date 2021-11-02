/*PENDU */
const MOT_A_DEVINER = document.getElementById("motAdeviner");
const INPUT = document.getElementById("input");
const PROPOSER = document.getElementById("proposer");
const MAUVAISE_LETTRE = document.getElementById("mauvaiseLettre");

let motChoisi = motAleatoire();
let motCache = "";

let lettreJoue = "";

let vie = 0;
let coupJoue = 0;

for(let i = 0; i < motChoisi.length; i++){
    motCache += "_";
}

MOT_A_DEVINER.innerHTML = motCache;

PROPOSER.addEventListener("click", () =>{

    if(INPUT.value != ""){
        let boolATrouveLettre = false;

        let lettre = INPUT.value;
        lettre = lettre[0];

        for(let i = 0; i < motChoisi.length; i++){
            if(lettre == motChoisi[i]){
                motCache = remplaceLettre(i, lettre, motCache);
                boolATrouveLettre = true;
            }
        }
    /********************************************** */
        if(boolATrouveLettre == false){
        
            let boolTrouveLettreJouee = false;

            for(let i = 0; i < lettreJoue.length; i++){
                if(lettreJoue[i] == lettre){
                    boolTrouveLettreJouee = true;
                }
            }

            if(boolTrouveLettreJouee == false){
                lettreJoue += lettre;
                vie++;
            }

            MAUVAISE_LETTRE.innerHTML = lettreJoue;
        }
    /************************************************ */
        if(vie == 10){
            console.log("game over");
        }

        if(motChoisi == motCache){
            console.log("vous avez gagné");
        }

        MOT_A_DEVINER.innerHTML = motCache;
        INPUT.value = "";
    }
});


function remplaceLettre(positionLettre, lettre, mot){
    let motReturn = "";

    for(let i = 0; i < mot.length; i++){
        
        if(positionLettre == i){
            motReturn += lettre;
        } 
        else{
            motReturn += mot[i];
        }
    }
    return motReturn;
}

function motAleatoire(){
    let indicealeatoire = 0;
    let listeMot = [
        "pomme",
        "poire",
        "abricot"
    ]
    indicealeatoire = Math.floor(Math.random() * listeMot.length);
    return listeMot[indicealeatoire];
}


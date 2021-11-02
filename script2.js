/**MOT MELANGE*/
const MOT_A_DEVINER = document.getElementById("motAdeviner");
const INPUT = document.getElementById("input");
const PROPOSER = document.getElementById("proposer");

let motChoisi = "quelconque";
let motMelange = "";
let vie = 0;

let tailleMot = motChoisi.length;

for(let i = 0; i < tailleMot; i++){

    let positionLettre = Math.floor(Math.random() * motChoisi.length)
    let lettre = motChoisi[positionLettre];

    motChoisi = enleverLettre(positionLettre, motChoisi);
    motMelange = ajouterLettre(lettre, motMelange);
}

MOT_A_DEVINER.innerHTML = motMelange;

PROPOSER.addEventListener("click", () =>{
    let motPropose = INPUT.value;

    if(motPropose != motMelange){
        vie++;
    }

    if(vie == 5){
        console.log("game over");
    }

    INPUT.value = "";
});

function enleverLettre(positionLettre, mot){
    let motReturn = "";
    for(let i = 0; i < mot.length; i++){
        if(positionLettre != i){
            motReturn += mot[i];
        }
    }
    return motReturn;
}

function ajouterLettre(lettre, mot){
    mot += lettre;

    return mot;
}
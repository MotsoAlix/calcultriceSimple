const clavier = [...document.querySelectorAll('.button')];
const listeKeyCode = clavier.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown',(e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listeKeyCode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listeKeyCode.indexOf(valeur);
                const touche = clavier[indexKeyCode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error',(e)=>{
    alert('une erreur est survenue dans votre calcul: '+ e.message);
    
}) 
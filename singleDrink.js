import displayDrink from './src2/displayDrink.js';

const presentDrink=async()=>{
    let drinkID = localStorage.getItem('drink');

    if(!drinkID){
        window.location.replace('index.html');
    }
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
    
    const response = await fetch(url);
    const data = await response.json();
    displayDrink(data);
}

window.addEventListener('DOMContentLoaded',presentDrink);
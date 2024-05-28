//Vytvořte stránku, kde po kliknuti na nadpis se změní barva nadpisu na zelenou na 5 sekund a pak se vrati zpět na černou.

let h1 = document.querySelectorAll("h1")[0];

h1.addEventListener("click", () => {
    h1.style.color = "green"; 

setTimeout(() => {
    h1.style.color = "black";    
}, 5000);
 }) 


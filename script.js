var loginstatus=false
window.addEventListener("Load", selEnglish())
function selEnglish(){
    if(loginstatus){
        login.innerHTML="Logged In"
    }
    else{
        login.innerHTML="Password: "
        password.placeholder="Manager Login Here"
    }
    document.getElementsByTagName("h1")[0].innerHTML="Fruit Shelf"
    pickaf.innerHTML="Pick a fruit:"
    Fruit.innerHTML="Fruit"
    Amount.innerHTML="Inventory"
    Price.innerHTML="Price(CAD)"
    Tax.innerHTML="Tax(%)"
    Purchase.innerHTML="Purchase"
    Apple.innerHTML="Apple"
    Banana.innerHTML="Banana"
    Lime.innerHTML="Lime"
    Durian.innerHTML="Durian"
    Blackberry.innerHTML="Blackberry"
    Mango.innerHTML="Mango"
    Lemon.innerHTML="Lemon"
    Cherry.innerHTML="Cherry"
    Orange.innerHTML="Orange"
    Olive.innerHTML="Olive"
    document.getElementsByTagName("h2")[0].innerHTML="Basket" 
    english.style.color="#BB78FF"
    french.style.color="#47B3D7"
}
english.onclick=function(){selEnglish()}
french.onclick=function(){
    if(loginstatus){
        login.innerHTML="Connecté"
    }
    else{
        login.innerHTML="Mot de Passe:"
        password.placeholder="Authentification Directeur Ici"
    }
    document.getElementsByTagName("h1") [0].innerHTML="Plateau de Fruits"
    pickaf.innerHTML="Cueillir un fruit:"
    Fruit.innerHTML="Fruit"
    Amount.innerHTML="Inventaire"
    Price.innerHTML="Prix(CAD)"
    Tax.innerHTML="Impôt(%)"
    Purchase.innerHTML="Acheter"
    Apple.innerHTML="Pomme"
    Banana.innerHTML="Banane"
    Lime.innerHTML="Citron Vert"
    Durian.innerHTML="Durian"
    Blackberry.innerHTML="La Mûre"
    Mango.innerHTML="Mangue"
    Lemon.innerHTML="Citron"
    Cherry.innerHTML="Cerise"
    Orange.innerHTML="Orange"
    Olive.innerHTML="Olive" 
    document.getElementsByTagName("h2")[0].innerHTML="Panier"
    english.style.color="#47B3D7" 
    french.style.color="#BB78FF" 
}
password.onkeyup=function(){
    if(event.keyCode==13){
        if (this.value == "1234"){
            password.style.display='none'
            if(english.style.color=="rgb(187, 120, 255)"){
                login.innerHTML="Logged In"
            }
            else{
                login.innerHTML="Connecté"
            }
            loginstatus=true;
        }
        else{
            if(english.style.color=="rgb(187, 120, 255)"){
                alert('Wrong Password')
            }
            else{
                alert("Mauvais Mot de Passe")
            }
        }
    }
}
newfruit.onkeyup=function(){
    for ( var i = 1; row = fruitTable.rows[i]; i++ ) {
        j=document.getElementById("fruitTable").rows[i].cells[1].innerHTML.toLowerCase()
        if(!(j.includes(this.value.toLowerCase()))){
            document.getElementById("fruitTable").rows[i].style.display ='none'; 
        }
        if(event.keyCode==8||event.charCode==46){
            if((j.includes(this.value.toLowerCase()))){
                document.getElementById("fruitTable").rows[i].style.display ='';
            }
        }
    }
}
// window.addEventListener("Load", function(){
//     for ( var i = 1; row = fruitTable.rows[i]; i++ ) {
//         if(Math.random){
//             document.getElementById("fruitTable").rows[i].cells[4].innerHTML="0"
//         }
//         else{
//             document.getElementById("fruitTable").rows[i].cells[4].innerHTML="13"
//         }
//     }
// })

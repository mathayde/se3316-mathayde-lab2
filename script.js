var loginstatus=false
var stock = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
var taxstock=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
window.addEventListener("Load", populate())

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

function populate(){
    for ( var i = 1; row = fruitTable.rows[i]; i++ ) {
        if(Math.floor((Math.random() * 10) + 1)<5){
            document.getElementById("fruitTable").rows[i].cells[4].innerHTML="0"
        }
        else{
            document.getElementById("fruitTable").rows[i].cells[4].innerHTML="13"
            taxstock[i-1]=13 
        }
    }
}
function erroralert(x="1",y="1"){
    x=parseInt(x)
    y=parseInt(y)
    if(x<y)
    {
        alert("There are only "+x+" items in stock at the moment please select a lower value.")
        return false
    }
    if(y<0){
        alert("Please input a value greater than zero to add to cart.")
        return false
    }
    return true
}
add1.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[1].cells[2].innerHTML,amount1.value)){
        alert("yo")
    }
}
add2.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[2].cells[2].innerHTML,amount2.value)){
        alert("yo")
    }
}
add3.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[3].cells[2].innerHTML,amount3.value)){
        alert("yo")
    }
}
add4.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[4].cells[2].innerHTML,amount4.value)){
        alert("yo")
    }
}
add5.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[5].cells[2].innerHTML,amount5.value)){
        alert("yo")
    }
}
add6.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[6].cells[2].innerHTML,amount6.value)){
        alert("yo")
    }
}
add7.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[7].cells[2].innerHTML,amount7.value)){
        alert("yo")
    }
}
add8.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[8].cells[2].innerHTML,amount8.value)){
        alert("yo")
    }
}
add9.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[9].cells[2].innerHTML,amount9.value)){
        alert("yo")
    }
}
add10.onclick=function(){
    if (erroralert(document.getElementById("fruitTable").rows[10].cells[2].innerHTML,amount10.value)){
        alert("yo")
    }
}
english.onclick=function(){
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
    Inventory.innerHTML="Inventory"
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
    Inventory.innerHTML="Inventaire"
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
    alert(document.getElementById("fruitTable").rows[1].cells[5].innerHTML.value) 
}
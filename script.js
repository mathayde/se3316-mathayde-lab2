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
    x=1
    y=amount1
    z=Apple.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add2.onclick=function(){
    x=2
    y=amount2
    z=Banana.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add3.onclick=function(){
    x=3
    y=amount3
    z=Lime.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add4.onclick=function(){
    x=4
    y=amount4
    z=Durian.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add5.onclick=function(){
    x=5
    y=amount5
    z=Blackberry.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add6.onclick=function(){
    x=6
    y=amount6
    z=Mango.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add7.onclick=function(){
    x=7
    y=amount7
    z=Lemon.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add8.onclick=function(){
    x=8
    y=amount8
    z=Cherry.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add9.onclick=function(){
    x=9
    y=amount9
    z=Orange.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
add10.onclick=function(){
    x=10
    y=amount10
    z=Olive.innerHTML
    if (erroralert(document.getElementById("fruitTable").rows[x].cells[2].innerHTML,y.value)){
        var table = document.getElementById("resettbody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(z)
        var td2 = document.createElement("td");
        var txt2 = document.createTextNode(y.value)
        var td3 = document.createElement("td");
        hold1=parseFloat(y.value)*parseFloat(document.getElementById("fruitTable").rows[x].cells[3].innerHTML)
        var txt3 = document.createTextNode(hold1)
        hold2=hold1*(taxstock[x]/100)
        var td4 = document.createElement("td");
        var txt4= document.createTextNode(hold2)
        var td5 = document.createElement("td");
        var txt5 = document.createTextNode(hold2+hold1)

        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1)
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }
}
function setTotals(){}
function resetCart(){
    var new_tbody = document.createElement('tbody');
    var old_tbody = document.getElementById("resettbody")
    var parentDiv= old_tbody.parentNode
    parentDiv.replaceChild(new_tbody, old_tbody)
}
buy.onclick=function(){
    resetCart()
}
cancel.onclick=function(){
    if(confirm("Are you sure you want to empty your cart?")){
        resetCart()
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
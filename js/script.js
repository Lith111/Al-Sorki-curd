/* the varibale of input*/
let vaRtitle = document.getElementById("title");
let vaRprice = document.getElementById("price");
let vaRtaxes = document.getElementById("taxes");
let vaRdiscount =  document.getElementById("discount");
let vaRads = document.getElementById("ads")
let vaRtotle = document.getElementById("totle");
let vaRcount = document.getElementById("count")
let vaRcatagory = document.getElementById("catagory");
let inputSearch = document.getElementById("inputSearch");
let inputPro = document.getElementById("procurement");
/* end in varible of input*/
/*varible input*/
let vaRcreate = document.getElementById("create");
/*varbile totle */
let vaRtolte = document.getElementById("totle"); 
let vaRdiVtotle = document.getElementsByClassName("totle-style");
/* audio auto play*/
/* the first function totle */
function getTotel(){
    if (vaRprice != "") {
        let reslut = (+vaRprice.value + +vaRtaxes.value + +vaRads.value) - +vaRdiscount.value ;
        vaRtolte.innerHTML = reslut;
        vaRdiVtotle[0].style. background = "#4caf50";
    }
    else{
        vaRdiVtotle[0].style. background = "#FF0000";
    }
}
/*the two function create  */
let  alLdata;
if (    localStorage.product != null) {
    alLdata = JSON.parse(localStorage.product);
}  
else{
  alLdata= [];
}
vaRcreate.onclick = function (){
    if (vaRtitle.value === "") {
        vaRtitle.value = `enter name of  product`;
        vaRtitle.style.background = "#ff0000";
        vaRtitle.style.color ="#fff";
   }
   else if(vaRprice.value === ""){
    vaRprice.value = `00000`;
    vaRprice.style.background = "#ff0000";
    vaRprice.style.color ="#fff";
   }
   else{
    vaRtitle.style.background = "#fff";
        vaRtitle.style.color ="#212529";
        vaRprice.style.background = "#fff";
        vaRprice.style.color ="#212529";
    let data = {
        title : vaRtitle.value,
        price : vaRprice.value,
        ads: vaRads.value,
        taxes:vaRtaxes.value,
        discount : vaRdiscount.value,
        totle : vaRtotle.innerHTML,
        cout : vaRcount.value,
        catagoty : vaRcatagory.value,
    };
    alLdata.push(data);
   console.log(alLdata);
   localStorage.setItem("product",JSON.stringify(alLdata));
}
/*display();*/
readFun();
claerFun();
}
/* claer input */
function claerFun() {
    vaRtitle.value = "";
    vaRprice.value = " ";
    vaRads.value = " ";
    vaRtaxes.value = " ";
    vaRtolte.innerHTML = " ";
    vaRcount.value = " ";
    vaRcatagory.value = " ";
    vaRdiscount.value = " ";

}
/* read data */
function readFun(){
    let tabel = " ";
    for (let index = 0; index < alLdata.length; index++) {
       const element = alLdata[index];
       tabel  += `
       <tr>
         <th scope="row">${index+1}</th>
         <td>${element.title}</td>
         <td>${element.price}</td>
         <td>${element.taxes}</td>
         <td>${element.ads}</td>
         <td>${element.discount}</td>
         <td>${element.totle}</td>
         <td> ${element.catagoty}</td>
         <td>${element.cout}</td>
         <td class="btn-style"><button type="button" class="btn " onclick = "deletFun(${index})" style="background-color: #FF0000; color:#fff; margin-right: 10px;">deleta</button> <button type="button" class="btn " onclick = "updataFun(${index})" style="background-color: #FF0000; color: #fff;">updata</button></td>
       </tr>`;
    }
    document.getElementById("tabla").innerHTML = tabel;
   }
readFun();
function deletFun(i){
    let tabel = document.getElementById("tabla");
    tabel.innerHTML = ""
    alLdata.splice(i,1);
    localStorage.product = "";
    localStorage.product = JSON.stringify(alLdata);
    console.log(alLdata);
    document.getElementById("tabla").innerHTML = " ";
    readFun();

}
/*function delet all */ 
let deletAll = document.getElementById("deletAll");
deletAll.onclick = function deletAllFun(){
    deletAll.innerHTML = `deleat all `;

    if (alLdata.length > 0) {
   alLdata.splice(0,alLdata.length);
   localStorage.product = JSON.stringify(alLdata);
   readFun();
}
else{
    deletAll.innerHTML = `desn't deleat `;
}
}
/* function updata*/
function updataFun (i){
   let element =  alLdata[i];
   vaRtitle.value = element.title;
   vaRprice.value = element.price;
   vaRads.value = element.ads;
   vaRtaxes.value = element.taxes;
//    vaRtolte.innerHTML = element.totle;
getTotel();
   vaRcount.value = element.cout;
   vaRcatagory.value = element.catagoty;
   vaRdiscount.value = element.discount;
   window.scroll({
    top : 600,
    behavior: "smooth", 
   })
   deletFun(i);
}
let modeSeach = "title";
let temp ; 

function secondleSearch (elem){ 
    temp = "";
    if (modeSeach === "title"){
      for (let index = 0; index < alLdata.length; index++) {
        const element = alLdata [index];
        if (element.title === elem) {
            temp = element;
            break;
        }
        else{
            null;
        }
      }
    }
    console.log(temp);
    
   }
  function firstsearch(){
    let searchOutpot =` <div class="product-card">
    <div  class="container">
   <table class="table table-dark table-striped table-style" style="margin-top: 30px;" >
       <thead>
         <tr>
           <th scope="col" class = "bg-danger" style = "cursor: pointer;" onclick ="delatSearch()">X</th>
           <th scope="col" >title</th>
           <th scope="col">price</th>
           <th scope="col" >taxes</th>
           <th scope="col" >ads</th>                  
           <th scope="col">discount</th>                  
           <th scope="col">totle</th>
           <th scope="col">catagory</th>
           <th scope="col">conut</th>         
         </tr>
       </thead>
       <tbody >
       <tr>
       <th scope="row">${1}</th>
       <td>${temp.title}</td>
       <td>${temp.price}</td>
       <td>${temp.taxes}</td>
       <td>${temp.ads}</td>
       <td>${temp.discount}</td>
       <td>${temp.totle}</td>
       <td> ${temp.catagoty}</td>
       <td>${temp.cout}</td>
     </tr>
       </tbody>
     </table>
     </div>
  </div>`;
    console.log(temp);
    document.querySelector(".header-title").innerHTML = searchOutpot;
    document.querySelector("textarea").value ="";

 }  
 function delatSearch(){
    let searchOutpot = `<h1 style="color: #ff0000;">al sorki</h1>
    <h2 >Various product management</h2>`;
    document.querySelector(".header-title").innerHTML = searchOutpot;
 }
 /* function to pro */
  
 let proHtml = ` <div class="sals">
 <div class="container">
<span class="bg-danger" id ="X" style="
position: relative;
    /* padding: 10px; */
    border-radius: 100%;
    height: 50px;
    width: 50px;
    z-index: 3;
    top: 10px;
    padding: 5px 10px;
    left: -18px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
cursor: pointer;" onclick ="deletpro()">X</span>
<div class="input-group">
 <span class="form-control"> index</span>
 <span class="form-control">name</span>
 <span class="form-control">price</span>
 <span class="form-control">count</span>
 <span class="form-control">all price</span>
</div>
<div class="input-group  price">
<input type="number" class="form-control" placeholder="index" onkeyup ="saerchPro(+this.value)" >
<input type="text" class="form-control" placeholder="name"  onkeyup ="saerchPro(this.value)">
<input type="number" class="form-control" placeholder="price">
<input type="number" class="form-control" placeholder="count">
<input type="number" class="form-control" placeholder="all prices">
</div>
<div class="input-group  price">
<input type="number" class="form-control" placeholder="index" >
<input type="text" class="form-control" placeholder="name" >
<input type="number" class="form-control" placeholder="price">
<input type="number" class="form-control" placeholder="count">
<input type="number" class="form-control" placeholder="all prices">
</div>
<div class="input-group  price">
<input type="number" class="form-control" placeholder="index" >
<input type="text" class="form-control" placeholder="name" >
<input type="number" class="form-control" placeholder="price">
<input type="number" class="form-control" placeholder="count">
<input type="number" class="form-control" placeholder="all prices">
</div>
</div>
</div>`;
let delpro = `<table class="table table-dark table-striped table-style" style="margin-top: 30px;" >
<thead>
  <tr>
    <th scope="col" >#</th>
    <th scope="col" >title</th>
    <th scope="col">price</th>
    <th scope="col" >taxes</th>
    <th scope="col" >ads</th>                  
    <th scope="col">discount</th>                  
    <th scope="col">totle</th>
    <th scope="col">catagory</th>
    <th scope="col">conut</th>
    <th scope="col">updata/delete</th>

  </tr>
</thead>
<tbody id="tabla">
  
  
</tbody>
</table>
</div>`;
 inputPro.onclick  = function (){
  document.getElementById("inputs").innerHTML = proHtml;
  document.getElementById("titleH2").innerHTML = `<h2 class="text-center" id="titleH2" style="color: #FFF ;" >tabel of <span style="color: #FF0000;"> procurement </span></h2>`;
  window.scroll({
    top : 1000,
    behavior :"smooth",
  });
}
 function deletpro (){
  document.getElementById("inputs").innerHTML = delpro;
  readFun();
}
function saerchPro(elem){
  for (let index = 0; index < alLdata.length; index++) {
    const element = alLdata[index];
   if(typeof(elem) ==="string"){
      if (elem === element.title) {
        console.log(element);
        index++;
        break;
      }
      else{
        index++;
      }
    }
  }
}



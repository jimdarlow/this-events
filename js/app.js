/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
// //==============good==============
// navmenu.addEventListener('click',showPrice);
// function showPrice(){
//     var getPrice=this.querySelectorAll('.inner')[0];
//     if(getPrice.style.display==='block'){
//         getPrice.style.display='none';
//     }else{
//         getPrice.style.display='block';
//     };
 
//  console.log(this.innerHTML);
// }
// //======================good==========
// Tony========================
// var clickNav = document.getElementsByClassName('navi');
// for(var i = 0; i<clickNav.length; i++){
//    clickNav[i].addEventListener('click', showMenu);
// }
// console.log(this.innerHTML);
// function showMenu(){
//    //console.log(this.innerHTML);
//    var getNav = this.querySelectorAll('.navi')[0];
//    if(getNav.style.display === 'block'){
//       getNav.style.display = 'none;'
//    }else{
//         getNav.style.display = 'block';
//     }
// }
///////////////////////tony///////////////////
var clickNavi = document.getElementsByClassName('navi');
for(var i = 0; i<clickNavi.length; i++){
   clickNavi[i].addEventListener('click', showHome);
}
console.log(clickNavi);
function showHome(){
    var getHome=this.querySelectorAll('.inner')[0];
    if(getHome.style.display==='block'){
        getHome.style.display='none';
    }else{
        getHome.style.display='block';
    };
   
 console.log(this.innerHTML);
}

// navmenu[1].addEventListener('click',showLocation);
// function showLocation(){
//     var getLocation=this.querySelectorAll('.inner')[1];
//     if(getLocation.style.display==='block'){
//         getLocation.style.display='none';
//     }else{
//         getLocation.style.display='block';
//     };
   
//  console.log(this.innerHTML);
  
/*2) to each restaurant name that will show and hide (toggle) 
the secret menu item for that particular restaurant.*/

var clickName=document.getElementsByClassName('name');
for(var i=0;i<clickName.length;i++){
  clickName[i].addEventListener('click', showSecretMenu);
}  
console.log(this.innerHTML);

function showSecretMenu(){
  var getSecretMenu=this.querySelectorAll('.menu')[0];
  if(getSecretMenu.style.display==='block'){
    getSecretMenu.style.display='none';
  }else{
    getSecretMenu.style.display='block';
  }
 console.log(this.innerHTML);   
  }
  

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var clickThumb=document.getElementsByClassName('thumb');
for(var i=0;i<clickThumb.length;i++){
  clickThumb[i].addEventListener('click', addOne);
}  
//console.log(this.innerHTML);

//function addOne(){
//   var getaddOne=this.querySelectorAll('.far fa-thumbs-down')[0];
   var count = 0;

function addOne(){
    count++;
    document.getElementsByClassName('far fa-thumbs-down').innerHTML = count;
 //   }
//    div.innerHTML = "Hello";
    document.getElementById("far fa-thumbs-down").appendChild(div);
}
// var clicks = 0;
//     function onClick() {
//         clicks += 1;
//       console.log(clicks);
//         document.getElementById("clicks").innerHTML = clicks;
//     };

// function addOne(){
//     var count=document.getElementsByClassName
//     ('far fa-thumbs-down');
//     count.innerHTML=(clicks);
//     }


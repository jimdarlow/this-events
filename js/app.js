//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
/*==============good==============
navmenu.addEventListener('click',showPrice);

function showPrice(){
    var getPrice=this.querySelectorAll('.inner')[0];
    if(getPrice.style.display==='block'){
        getPrice.style.display='none';
    }else{
        getPrice.style.display='block';
    };
 
 console.log(this.innerHTML);
}
======================good==========
*/
navmenu.addEventListener('click',showPrice);

function showPrice(){
    var getPrice=this.querySelectorAll('.inner')[0];
    if(getPrice.style.display==='block'){
        getPrice.style.display='none';
    }else{
        getPrice.style.display='block';
    };
 
 console.log(this.innerHTML);
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

thumb.addEventListener('click',addOne);

var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

// function addOne(){
//     var count=document.getElementsByClassName
//     ('far fa-thumbs-down');
//     count.innerHTML=(clicks);
//     }


//Fonctionnalité 1
// step 1 : find the element we want the event on 
//let footerEl = document.querySelector("footer")
//
//// step 2 : define the event listener function
//let onFooterClick = function() {
//		
//    console.log(" clique ");
//	
//};

// step 3 : attach event listener to element 

//Fonctionnalité 1 bis:

// step 1 : find the element we want the event on 

let footerEl = document.querySelector("footer")
let count = 1;
// step 2 : define the event listener function

let onFooterClick = function() {
		
    console.log(" clique " + count);
	++count
};

// step 3 : attach event listener to element 
//
footerEl.addEventListener("click", onFooterClick);


//Fonctionnalité 2: 

let menu = document.getElementById("navbarHeader");
let btnMenu = document.querySelector(".navbar-toggler");

let onMenuClick = function() {
 menu.classList.toggle("collapse")
};

btnMenu.addEventListener("click", onMenuClick);

//Fonctionnalité 3: 
// step 1 : find the element we want the event on 

let btnEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
// step 2 : define the event listener function
let onBtnClick = function() { document.getElementsByClassName("card-text")[0].style.color = 'red';

		
    console.log("clique");
};
// step 3 : attach event listener to element 
btnEl.addEventListener("click", onBtnClick);


//Fonctionnalité 4: 
let card2El = document.getElementsByClassName("card mb-4 box-shadow")[1];
let btn2El = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]

    btn2El.addEventListener("click", function(){
    if (card2El.style.color === 'green'){
        card2El.style.color = 'black' ;
        }else {
        card2El.style.color = 'green';}
    });

//Fonctionnalité 5: 

let navabar = document.getElementById('navbarHeader');

navabar.addEventListener('dblclick', function (e) {
  if ( document.styleSheets[0].disabled == true) {
    document.styleSheets[0].disabled = false;
} else if ( document.styleSheets[0].disabled == false) {
    document.styleSheets[0].disabled = true;
}
});


//Fonctionnalité 6: 

for (let i=0 ; i <= 6 ; i++) {
	let viewBtnEl = document.querySelectorAll("button.btn-success")[i];
	let imgEl = document.getElementsByClassName("card-img-top")[i];
	let cardTextEl = document.getElementsByClassName("card-text")[i];
	
	imgEl.style.width = '100%';
	
	
	viewBtnEl.addEventListener('mouseover', function() {
		if( imgEl.style.width === '100%') {
			
			imgEl.style.width = '20%';
		} else {
			
			imgEl.style.width = '100%';
		};
		if (cardTextEl.style.display === "none") {
	    cardTextEl.style.display = "block";
	  } else {
	    cardTextEl.style.display = "none";
	  }
	});
}

//Fonctionnalité 7: 


//
//let cards = document.querySelectorAll(".col-md-4")[0]; 
//console.log(cards)
//let btnGrey = document.querySelectorAll(".btn-secondary")[0]
//console.log(btnGrey);

//let order = btnGrey.insertBefore(document.querySelectorAll(".col-md-4")[5], document.querySelectorAll(".col-md-4")[0])
//	
//
//btnGrey.addEventListener("click", order);
//	
//


	
	







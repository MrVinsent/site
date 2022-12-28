//бургер меню
$(document).ready(function() {
	$('.header__menu').click(function(event) {
		$(this).toggleClass('active')
		$('.header-menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

});

//слайдер
let slider = ItcSlider.getOrCreateInstance('.itc-slider');

document.addEventListener('DOMContentLoaded', () => {
	const slider = ItcSlider.getOrCreateInstance('.itc-slider');
  });
//========================================================
//читать дальше
let btnsText = document.querySelectorAll('.check-item__btn');

btnsText.forEach(function(btn){
	btn.addEventListener('click', myFunction)
})

const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || 'inline';
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
	  el.style.opacity = 1;
	}, 10);
  };

  const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;
  
	setTimeout(() => {
	  el.style.display = 'none';
	}, timeout);
  };

  function myFunction(){
	let dots = this.previousElementSibling.firstElementChild;
	let moreText = this.previousElementSibling.lastElementChild;

	if (dots.style.display === "none") {
		//закрытие
	  dots.style.display = "inline";
	  //btnText.innerHTML = "Читать больше";
	  moreText.style.display = "none";
	  fadeOut(moreText, 1000);
	} else {
		//открытие
	  dots.style.display = "none";
	  //btnText.innerHTML = "Читать меньше";
	  moreText.style.display = "inline";	
	  fadeIn(moreText, 1000, 'inline');
	}
  }

//=================================================================
  let btnLern = document.querySelectorAll('.btn-lern');
  btnLern.forEach((btn)=>{
	  btn.addEventListener('click', readLern)
  })

  function readLern(){
	if(document.querySelector('.services__items_min').classList.contains('services__items-active')){
		this.classList.add('services-lern')
		document.querySelector('.services__items_min').classList.remove('services__items-active')
		
	}else{
		this.classList.remove('services-lern')
		document.querySelector('.services__items_min').classList.add('services__items-active')
		
	}
  }
//======================================================================
  let btnAll = document.querySelectorAll('.btn-all');
    btnAll.forEach((btn)=>{
  	btn.addEventListener('click', readAll)
	  
    })
  function readAll(){
	if(document.querySelector('.check__items_min').classList.contains('check__items-active')){
		this.classList.add('services-lern')
		document.querySelector('.check__items_min').classList.remove('check__items-active')
	}else{
		this.classList.remove('services-lern')
		document.querySelector('.check__items_min').classList.add('check__items-active')	
	}
  }

  

//==============================================================
let arr =[1,23,5,96]
function fff(arr){
   let f = arr.slice(2,(arr.length))
   return f
}
console.log(fff(arr))

function wave(str){
	let waveArr = [];
  for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
    } 
  }
  return waveArr;
  }

console.log(wave("gapp"))
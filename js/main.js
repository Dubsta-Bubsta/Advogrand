$(document).ready(function () {
  $('.slider').bxSlider({
    auto: false,
    controls: true,
    pager: false,
    nextText: '<i class="fa fa-arrow-right"></i>',
    prevText: '<i class="fa fa-arrow-left"></i>'
  });
});

//Showing logo descripting on hover
let partnerBlock = document.querySelectorAll('.partner-list a');
partnerBlock.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    let img = item.querySelector('img');
    let p = item.querySelector('p');  

    p.style.opacity = '1';
    img.style.display = 'none';    
  });

  item.addEventListener('mouseleave', (event) => {
    let img = item.querySelector('img');
    let p = item.querySelector('p');
   
    p.style.opacity = '0';
    img.style.display = 'block';   
  });
});

document.querySelector('#call-me-btn').addEventListener('click', togglePopUp);

document.querySelector('.bg-popup').addEventListener('click', togglePopUp);
document.querySelector('.submit-button').addEventListener('click', togglePopUp);


function togglePopUp() {
  document.querySelector('.popup-fast').classList.toggle('active');
  document.querySelector('.bg-popup').classList.toggle('active');  

}



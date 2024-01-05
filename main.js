// change navar style on scroll

window.addEventListener('scroll', () => {
document.querySelector('nav').classList.toggle
('window-scroll', window.scrollY > 100)

})


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})


const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";

}

closeBtn.addEventListener('click', closeNav);





function facebook() {
  location.replace("https://web.facebook.com/profile.php?id=100089189082444&mibextid=ZbWKwL&_rdc=1&_rdr")
}
function insta() {
  location.replace("https://www.instagram.com/kapekita.ph/?fbclid=IwAR0fmr99eofrANh0UMYrmhlmjQS9LyhkjefQyenxnU1HfcbHpe4_yK8aNoM")
}
function mail() {
  location.replace("https://mail.google.com//")
}
function twitter() {
  location.replace("https://twitter.com/kapekitaph?t=ZE6C9OK0Fw3wlsjTJ2Lh_w&s=07&fbclid=IwAR1uPvrMpuv5ScRCG2oR4FN9WzrvZ67faFRj-n_sTTzP8aRr5TwcfNHgumM")
}
function messenger() {
  location.replace("https://www.messenger.com/")
}

function btn() {
  document.getElementById('Product').scrollIntoView()
}



function myFunction() {
  var input, filter, cards, cardContainer, title, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("Products");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector("h3");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}



    var noti = document.querySelector('.shop');
    var select = document.querySelector('.select');
    var button = document.getElementsByClassName('add-to-cart');
    
    for (but of button)
    {
      but.addEventListener('click', (e) =>{
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');


          var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText= "Learn More";
        if(clone){
          noti.onclick =()=>{
            select.classList.toggle('display');
          }
        }


      })
    }


function toggle(){
  var blur = document.getElementById('Product');
  blur.classList.toggle('active');

  var popup = document.getElementById('popup');
  popup.classList.toggle('active',);
  
}

function reload(){
  location.reload();
}


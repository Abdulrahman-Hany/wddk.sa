// swiper
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.list-item');
  
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove "checked" class from all items
        listItems.forEach(i => i.classList.remove('checked'));
        // Add "checked" class to the clicked item
        item.classList.add('checked');
      });
    });
  });
  

const menuContainer = document.querySelector('.menu-container');
const userButton = document.querySelector('.user');

userButton.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
});

const filter = document.querySelector('.filter');
const filterSlider = document.querySelector('.fa-sliders');
filterSlider.addEventListener("click" , () => {
    filter.classList.toggle('open');
})


const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    wrapper.classList.add('scroll');
    header.classList.add('scroll');
  } else {
    wrapper.classList.remove('scroll');
    header.classList.remove('scroll');
  }
});


// svg
// تحديد جميع العناصر التي تحتوي على svg من الفئتين "card" و "heart"
const allSvgElements = document.querySelectorAll('.card svg, .heart svg');

// التحقق من حالة العناصر عند تحميل الصفحة
allSvgElements.forEach((svg, index) => {
    // استخدام مفتاح فريد لكل عنصر بناءً على نوعه
    const type = svg.closest('.card') ? 'card' : 'heart';
    const storageKey = `${type}State-${index}`;

    // استرجاع الحالة من localStorage
    if (localStorage.getItem(storageKey) === "full") {
        svg.classList.add("full");
    }

    // إضافة حدث النقر لكل عنصر
    svg.addEventListener("click", (event) => {
        event.stopPropagation(); // منع تأثير النقر من الانتقال للعناصر الأب
        svg.classList.toggle("full"); // تبديل الفئة "full"

        // تحديث localStorage بناءً على الحالة الحالية
        if (svg.classList.contains("full")) {
            localStorage.setItem(storageKey, "full");
        } else {
            localStorage.setItem(storageKey, "");
        }
    });
});


/*Verify Phone Number*/

const OTPinputs = document.querySelectorAll('.verify-inputs input'); 
const button = document.querySelector('#verify-btn');

window.onload = () => OTPinputs[0].focus();

OTPinputs.forEach((input)=>{
  input.addEventListener('input', ()=>{
      const currentInput = input
      const nextInput = currentInput.nextElementSibling

      if(currentInput.value.length > 1 && currentInput.value.length == 2){
          currentInput.value = "";
      }


      if(nextInput !== null && nextInput.hasAttribute('disabled') && currentInput.value !== ""){
          nextInput.removeAttribute('disabled')
          nextInput.focus()
      }

      if(!OTPinputs[3].disabled && OTPinputs[3].value !== ""){
          button.classList.add("active")
      }else{
          button.classList.remove('active')
      }
  })

  input.addEventListener('keyup', (e)=>{
      console.log(e);
      if(e.key == "Backspace"){
          if(input.previousElementSibling != null){
              e.target.value = ""
              e.target.setAttribute("disabled", true)
              input.previousElementSibling.focus()
          }
      }
  })
})
// botonBooking
let botonBooking = document.querySelector(".boton-elegante");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        botonBooking.classList.add("show");
    } else {
        botonBooking.classList.remove("show");
    }
});

// loader
window.addEventListener("load", () => {
  const overlay = document.querySelector(".overlay");

  overlay.classList.add("overlay-hidden");

  overlay.addEventListener("transitionend", () => {
      document.body.removeChild(overlay); 
  });

  document.body.classList.remove("no-scroll");
});

document.body.classList.add("no-scroll");


// restaurant-details.html

// Date Navigation
const dateElement = document.getElementById("current-date");
const prevDateBtn = document.querySelector(".fa-chevron-left");
const nextDateBtn = document.querySelector(".fa-chevron-right");

let currentDate = new Date("2024-10-27");

prevDateBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDate();
});

nextDateBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDate();
});

function updateDate() {
  dateElement.textContent = currentDate.toISOString().split("T")[0].replace(/-/g, " - ");
}

// gallery-container
function changeImage(element) {
  const mainImage = document.getElementById("displayed-image");

  mainImage.src = element.src;

  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
  });
  element.classList.add("active");
}

const container = document.querySelector('.thumbnail-container');

let isDragging = false;
let startX;
let scrollLeft;

// عند الضغط على الماوس داخل العنصر
container.addEventListener('mousedown', (e) => {
    isDragging = true; 
    startX = e.pageX - container.offsetLeft; 
    scrollLeft = container.scrollLeft; 
    container.style.cursor = 'grabbing'; 
});

// عند تحريك الماوس
container.addEventListener('mousemove', (e) => {
    if (!isDragging) return; 
    e.preventDefault(); 
    const x = e.pageX - container.offsetLeft; 
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk; 
});

// عند إفلات الماوس
container.addEventListener('mouseup', () => {
    isDragging = false; 
    container.style.cursor = 'grab'; 
});

// إذا خرج الماوس خارج العنصر
container.addEventListener('mouseleave', () => {
    isDragging = false; 
    container.style.cursor = 'grab'; 
});


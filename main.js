
//NAVBAR//

const toggle = document.querySelector('.toggle')
const links = document.querySelector('.nav-links')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})


//SLIDER INDEX//

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel-container").forEach((carousel) => {
      insertNumbers(carousel);
  
      carousel.querySelector(".prev").addEventListener("click", (e) => {
        minusItem(carousel);
      });
  
      carousel.querySelector(".next").addEventListener("click", () => {
        plusItem(carousel);
      });
  
      insertDots(carousel);
  
      carousel.querySelectorAll(".dot").forEach((dot) => {
        dot.addEventListener("click", (e) => {
          let item = Array.prototype.indexOf.call(
            e.target.parentNode.children,
            e.target
          );
  
          showItems(carousel, item);
        });
      });
  
      showItems(carousel, 0);
    });
  });
  
  function insertNumbers(carousel) {
    const length = carousel.querySelectorAll(".item").length;
    for (let i = 0; i < length; i++) {
      const nmbr = document.createElement("div");
      nmbr.classList.add("numbertext");
      nmbr.innerText = i + 1 + " / " + length;
  
      carousel.querySelectorAll(".item")[i].append(nmbr);
    }
  }
  
  function insertDots(carousel) {
    const dots = document.createElement("div");
    dots.classList.add("dots");
  
    carousel.append(dots);
  
    carousel.querySelectorAll(".item").forEach((elem) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
  
      carousel.querySelector(".dots").append(dot);
    });
  }
  
  function plusItem(carousel) {
    let item = currentItem(carousel);
  
    carousel
      .querySelectorAll(".item")
      [item].nextElementSibling.classList.contains("item")
      ? showItems(carousel, item + 1)
      : showItems(carousel, 0);
  }
  
  function minusItem(carousel) {
    let item = currentItem(carousel);
  
    carousel.querySelectorAll(".item")[item].previousElementSibling != null
      ? showItems(carousel, item - 1)
      : showItems(carousel, carousel.querySelectorAll(".item").length - 1);
  }
  
  function currentItem(carousel) {
    return [...carousel.querySelectorAll(".item")].findIndex(
      (item) => item.style.display == "block"
    );
  }
  
  function showItems(carousel, item) {
    if (carousel.querySelectorAll(".item")[currentItem(carousel)] != undefined)
      carousel.querySelectorAll(".item")[currentItem(carousel)].style.display =
        "none";
    carousel.querySelectorAll(".item")[item].style.display = "block";
  
    if (carousel.querySelector(".dot.active") != null)
      carousel.querySelector(".dot.active").classList.remove("active");
    carousel.querySelectorAll(".dot")[item].classList.add("active");
  }
  



//GALERIA 1//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/LPDA-LUNAPARK/DSC_0020-1 SOMBRAS.jpg' },
        { img: './img/LPDA-LUNAPARK/DSC_0054-1.jpg' },
        { img: './img/LPDA-LUNAPARK/DSC_0066.jpg' },
        { img: './img/LPDA-LUNAPARK/DSC_0078-1.jpg' },
        { img: './img/LPDA-LUNAPARK/DSC_0094.jpg' },
        { img: './img/LPDA-LUNAPARK/DSC_0091-2.jpg' },
        { img: './img/LPDA-LUNAPARK/DSC_0082 - SOMBRAS.jpg' },
        { img: './img/WhatsApp Image 2022-10-18 at 14.13.01.jpeg' },
    ];

    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshows = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar)
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn-cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden"; 
    }
})





//NAVBAR//

const toggle = document.querySelector('.toggle')
const links = document.querySelector('.nav-links')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})

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
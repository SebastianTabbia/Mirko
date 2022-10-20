
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
        { img: './img/1.jpg' },
        { img: './img/2.jpg' },
        { img: './img/3.jpg' },
        { img: './img/4.jpg' },
        { img: './img/5.jpg' },
        { img: './img/6.jpg' },
        { img: './img/7.jpg' },
        { img: './img/8.jpg' },
        { img: './img/9.jpg' },
        { img: './img/10.jpg' },
        { img: './img/11.jpg' },
        { img: './img/12.jpg' },
        { img: './img/13.jpg' },
        { img: './img/14.jpg' },
        { img: './img/15.jpg' },
        { img: './img/16.jpg' },
        { img: './img/17.jpg' },
        { img: './img/18.jpg' },
        { img: './img/19.jpg' },
        { img: './img/20.jpg' },
        { img: './img/21.jpg' },
        { img: './img/22.jpg' },
        { img: './img/23.jpg' },
        { img: './img/24.jpg' },
        { img: './img/25.jpg' },
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
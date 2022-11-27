
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
        { img: './img/LPDA-LUNAPARK/1.jpg' },
        { img: './img/LPDA-LUNAPARK/2.jpg' },
        { img: './img/LPDA-LUNAPARK/3.jpg' },
        { img: './img/LPDA-LUNAPARK/4.jpg' },
        { img: './img/LPDA-LUNAPARK/5.jpg' },
        { img: './img/LPDA-LUNAPARK/6.jpg' },
        { img: './img/LPDA-LUNAPARK/7.jpg' },
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

//GALERIA 2//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/LATAS/1.jpg' },
      { img: './img/LATAS/2.jpg' },
      { img: './img/LATAS/3.jpg' },
      { img: './img/LATAS/4.jpg' },
      { img: './img/LATAS/5.jpg' },
      { img: './img/LATAS/6.jpg' },
      { img: './img/LATAS/7.jpg' },
      { img: './img/LATAS/8.jpg' },
      { img: './img/LATAS/9.jpg' },
      { img: './img/LATAS/10.jpg' },
      { img: './img/LATAS/11.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow1');
  const overlay = document.querySelector('.overlay1');
  const galeria_imagenes = document.querySelectorAll('.galeria1 img');
  const img_slideshows = document.querySelector('.slideshow1 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 3//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/Berlina/1.jpg' },
      { img: './img/Berlina/2.jpg' },
      { img: './img/Berlina/3.jpg' },
      { img: './img/Berlina/4.jpg' },
      { img: './img/Berlina/5.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow2');
  const overlay = document.querySelector('.overlay2');
  const galeria_imagenes = document.querySelectorAll('.galeria2 img');
  const img_slideshows = document.querySelector('.slideshow2 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 4//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/AMERICANBLUE/1.jpg' },
      { img: './img/AMERICANBLUE/2.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow3');
  const overlay = document.querySelector('.overlay3');
  const galeria_imagenes = document.querySelectorAll('.galeria3 img');
  const img_slideshows = document.querySelector('.slideshow3 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 5//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/29 DE JUNIO/1.jpg' },
      { img: './img/29 DE JUNIO/2.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow4');
  const overlay = document.querySelector('.overlay4');
  const galeria_imagenes = document.querySelectorAll('.galeria4 img');
  const img_slideshows = document.querySelector('.slideshow4 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 6//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/ORBITA 29/1.jpg' },
      { img: './img/ORBITA 29/2.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow5');
  const overlay = document.querySelector('.overlay5');
  const galeria_imagenes = document.querySelectorAll('.galeria5 img');
  const img_slideshows = document.querySelector('.slideshow5 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 7//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/UN RE BARDO/1.jpg' },
      { img: './img/UN RE BARDO/2.jpg' },
      { img: './img/UN RE BARDO/3.jpg' },
      { img: './img/UN RE BARDO/4.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow6');
  const overlay = document.querySelector('.overlay6');
  const galeria_imagenes = document.querySelectorAll('.galeria6 img');
  const img_slideshows = document.querySelector('.slideshow6 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 8//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/MUNICH BEER HOUSE/1.jpg' },
      { img: './img/MUNICH BEER HOUSE/2.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow7');
  const overlay = document.querySelector('.overlay7');
  const galeria_imagenes = document.querySelectorAll('.galeria7 img');
  const img_slideshows = document.querySelector('.slideshow7 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 9//

document.addEventListener('DOMContentLoaded', function() {

  let imagenes = [
      { img: './img/PATAGONIA ARGENTINA/1.jpg' },
      { img: './img/PATAGONIA ARGENTINA/2.jpg' },
  ];

  let contador = 0
  const contenedor = document.querySelector('.slideshow8');
  const overlay = document.querySelector('.overlay8');
  const galeria_imagenes = document.querySelectorAll('.galeria8 img');
  const img_slideshows = document.querySelector('.slideshow8 img');


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
          const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

//GALERIA 11//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/DESTILERIA MORETTI/1.jpg' },
        { img: './img/DESTILERIA MORETTI/2.jpg' },
        { img: './img/DESTILERIA MORETTI/3.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow10');
    const overlay = document.querySelector('.overlay10');
    const galeria_imagenes = document.querySelectorAll('.galeria10 img');
    const img_slideshows = document.querySelector('.slideshow10 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

  //GALERIA 12//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/FACEBOOK/1.jpg' },
        { img: './img/FACEBOOK/2.jpg' },
        { img: './img/FACEBOOK/3.jpg' },
        { img: './img/FACEBOOK/4.jpg' },
        { img: './img/FACEBOOK/5.jpg' },
        { img: './img/FACEBOOK/6.jpg' },
        { img: './img/FACEBOOK/7.jpg' },
        { img: './img/FACEBOOK/8.jpg' },
        { img: './img/FACEBOOK/9.jpg' },
        { img: './img/FACEBOOK/10.jpg' },
        { img: './img/FACEBOOK/11.jpg' },
        { img: './img/FACEBOOK/12.jpg' },
        { img: './img/FACEBOOK/13.jpg' },
        { img: './img/FACEBOOK/14.jpg' },
        { img: './img/FACEBOOK/15.jpg' },
        { img: './img/FACEBOOK/16.jpg' },
        { img: './img/FACEBOOK/17.jpg' },
        { img: './img/FACEBOOK/18.jpg' },
        { img: './img/FACEBOOK/19.jpg' },
        { img: './img/FACEBOOK/20.jpg' },
        { img: './img/FACEBOOK/21.jpg' },
        { img: './img/FACEBOOK/22.jpg' },
        { img: './img/FACEBOOK/23.jpg' },
        { img: './img/FACEBOOK/24.jpg' },

    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow11');
    const overlay = document.querySelector('.overlay11');
    const galeria_imagenes = document.querySelectorAll('.galeria11 img');
    const img_slideshows = document.querySelector('.slideshow11 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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
  
   //GALERIA 13//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/CIALE ALTA/1.jpg' },
        { img: './img/CIALE ALTA/2.jpg' },
        { img: './img/CIALE ALTA/3.jpg' },
        { img: './img/CIALE ALTA/4.jpg' },
        { img: './img/CIALE ALTA/5.jpg' },
        { img: './img/CIALE ALTA/6.jpg' },
        { img: './img/CIALE ALTA/7.jpg' },
        { img: './img/CIALE ALTA/8.jpg' },
        { img: './img/CIALE ALTA/9.jpg' },
        { img: './img/CIALE ALTA/10.jpg' },
        { img: './img/CIALE ALTA/11.jpg' },
        { img: './img/CIALE ALTA/12.jpg' },
        { img: './img/CIALE ALTA/13.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow12');
    const overlay = document.querySelector('.overlay12');
    const galeria_imagenes = document.querySelectorAll('.galeria12 img');
    const img_slideshows = document.querySelector('.slideshow12 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

   //GALERIA 15//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/1.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/2.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/3.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/4.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/5.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/6.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/7.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/8.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/9.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/10.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/11.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/12.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/13.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/14.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/15.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/16.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/17.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/18.jpg' },
        { img: './img/FAUSTO PALERMO HOLLYWOOD - SAN ANTONIO DE ARECO - CAPITAN SARMIENTO/19.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow13');
    const overlay = document.querySelector('.overlay13');
    const galeria_imagenes = document.querySelectorAll('.galeria13 img');
    const img_slideshows = document.querySelector('.slideshow13 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

  //GALERIA 16//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/CONCIENTIZACION AL VOLANTE/1.jpg' },
        { img: './img/CONCIENTIZACION AL VOLANTE/2.jpg' },
        { img: './img/CONCIENTIZACION AL VOLANTE/3.jpg' },
        { img: './img/CONCIENTIZACION AL VOLANTE/4.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow14');
    const overlay = document.querySelector('.overlay14');
    const galeria_imagenes = document.querySelectorAll('.galeria14 img');
    const img_slideshows = document.querySelector('.slideshow14 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

   
  
    var span = document.getElementsByClassName("btn-cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden"; 
    }

     //GALERIA 17//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/BURMA/1.jpg' },
        { img: './img/BURMA/2.jpg' },
        { img: './img/BURMA/3.jpg' },
        { img: './img/BURMA/4.jpg' },
        { img: './img/BURMA/5.jpg' },
        { img: './img/BURMA/6.jpg' },
        { img: './img/BURMA/7.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow15');
    const overlay = document.querySelector('.overlay15');
    const galeria_imagenes = document.querySelectorAll('.galeria15 img');
    const img_slideshows = document.querySelector('.slideshow15 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

   
  
    var span = document.getElementsByClassName("btn-cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden"; 
    }

    //GALERIA 18//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/NUEVA YORK/1.jpg' },
        { img: './img/NUEVA YORK/2.jpg' },
        { img: './img/NUEVA YORK/3.jpg' },
        { img: './img/NUEVA YORK/4.jpg' },
        { img: './img/NUEVA YORK/5.jpg' },
        { img: './img/NUEVA YORK/6.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow16');
    const overlay = document.querySelector('.overlay16');
    const galeria_imagenes = document.querySelectorAll('.galeria16 img');
    const img_slideshows = document.querySelector('.slideshow16 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

   
  
    var span = document.getElementsByClassName("btn-cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden"; 
    }

     //GALERIA 19//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/ORLANDO/1.jpg' },
        { img: './img/ORLANDO/2.jpg' },
        { img: './img/ORLANDO/3.jpg' },
        { img: './img/ORLANDO/4.jpg' },
        { img: './img/ORLANDO/5.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow17');
    const overlay = document.querySelector('.overlay17');
    const galeria_imagenes = document.querySelectorAll('.galeria17 img');
    const img_slideshows = document.querySelector('.slideshow17 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

   
  
    var span = document.getElementsByClassName("btn-cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden"; 
    }

         //GALERIA 20//

document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/CAMPAÑA VIOLENCIA DE GENERO/1.jpg' },
        { img: './img/CAMPAÑA VIOLENCIA DE GENERO/2.jpg' },
        { img: './img/CAMPAÑA VIOLENCIA DE GENERO/3.jpg' },
        { img: './img/CAMPAÑA VIOLENCIA DE GENERO/4.jpg' },
        { img: './img/CAMPAÑA VIOLENCIA DE GENERO/5.jpg' },
        { img: './img/CAMPAÑA VIOLENCIA DE GENERO/6.jpg' },
    ];
  
    let contador = 0
    const contenedor = document.querySelector('.slideshow18');
    const overlay = document.querySelector('.overlay18');
    const galeria_imagenes = document.querySelectorAll('.galeria18 img');
    const img_slideshows = document.querySelector('.slideshow18 img');
  
  
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
            const imagen_seleccionada = +(event.target.dataset.imgMostrar1)
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

   
  
    var span = document.getElementsByClassName("btn-cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden"; 
    }

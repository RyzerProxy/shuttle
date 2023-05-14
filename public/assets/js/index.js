//particlesJS("particles-js", {"particles":{"number":{"value":558,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9700642968236413,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"bottom","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":292.33117874427535,"line_linked":{"opacity":0.2714664122011815}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv.sw-handler.js', { scope: __uv$config.prefix })
}

function fullscreen() {
  var elem = document.getElementById('ifr')
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function changeFavicon(f) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = f;
}
window.onload = () => {
  if(localStorage.getItem('title')) {
    document.title = localStorage.getItem('title')
  }
  if(localStorage.getItem('favicon')) {
    changeFavicon(localStorage.getItem('favicon'))
  }
}
/*document.addEventListener("visibilitychange", () => {
  var l = localStorage.getItem('autoCloak')
  if(!l) return;
  if (document.visibilityState === 'hidden') {
    switch (l) {
      case 'low':
        changeFavicon('https://google.com/favicon.ico')
        document.title = 'Google'
      case 'high':
        document.location.href = 'https://google.com'
    }
  } else if (document.visibilityState === 'visible') {
    changeFavicon(localStorage.getItem('favicon'))
    document.title = localStorage.getItem('title')
  } else{ console.log('Visibility Change: ' + document.visibilityState) }
});*/

var curzr = `<div class="curzr" hidden></div>`
document.body.insertAdjacentHTML('beforeend', curzr)




    if (CSS.supports("backdrop-filter", "invert(1)")) {
      this.cursorStyle.backdropFilter = 'invert(1)'
      this.cursorStyle.backgroundColor = '#fff0'
    } else {
      this.cursorStyle.backgroundColor = '#222'
    }

    this.init(this.cursor, this.cursorStyle)
  }

  init(el, style) {
    Object.assign(el.style, style)
    this.cursor.removeAttribute("hidden")
    
    document.body.style.cursor = 'none'
    document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
      el.style.cursor = 'inherit'
    })
  }

  move(event) {
    this.previousPointerX = this.pointerX
    this.previousPointerY = this.pointerY
    this.pointerX = event.pageX + this.root.getBoundingClientRect().x
    this.pointerY = event.pageY + this.root.getBoundingClientRect().y
    this.distanceX = Math.min(Math.max(this.previousPointerX - this.pointerX, -10), 10)
    this.distanceY = Math.min(Math.max(this.previousPointerY - this.pointerY, -10), 10)

    if (event.target.localName === 'button' || 
        event.target.localName === 'a' || 
        event.target.onclick !== null ||
        event.target.className.includes('curzr-hover')) {
      this.hover()
    } else {
      this.hoverout()
    }

    this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
    this.cursor.style.boxShadow = `
      ${+this.distanceX}px ${+this.distanceY}px 0 ${this.glitchColorB}, 
      ${-this.distanceX}px ${-this.distanceY}px 0 ${this.glitchColorR}`
    this.stop()
  }

  hover() {
  }

  hoverout() {
  }

  click() {
    this.cursor.style.transform += ` scale(0.75)`
    setTimeout(() => {
      this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, '')
    }, 35)
  }

  stop() {
    if (!this.moving) {
      this.moving = true
      setTimeout(() => {
        this.cursor.style.boxShadow = ''
        this.moving = false
      }, 50)
    }
  }

  remove() {
    this.cursor.remove()
  }
}

(() => {
  const cursor = new GlitchEffect()
  if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.onmousemove = function (event) {
      cursor.move(event)
    }
    document.onclick = function () {
      cursor.click()
    }
  } else {
    cursor.remove()
  }
})()

var splash = [
  "Surf the web incognito...or at least try to.",
  "Access the internet like a ninja!",
  "Go ahead, browse your ex's social media profiles. We won't judge.",
  "Bypass those pesky internet filters with ease.",
  "Your boss will never know you're shopping online...probably.",
  "Because sometimes, the internet just needs to mind its own business.",
  "Unlock the full potential of the internet!",
  "Experience the internet as it was meant to be - unrestricted!",
  "No more geographical restrictions! Bring on the Netflix binges.",
  "Your secret online identity is safe with us.",
  "Because why settle for one IP address when you can have them all?",
  "We make the internet more fun...and a little bit sneaky.",
  "Be whoever you want to be on the internet!",
  "Anonymity is our middle name. (Actually, it's Proxy, but you get the point.)",
  "Bypass censorship and unlock the power of information!",
  "Hide your tracks like a pro!",
  "Because everyone deserves a little privacy online.",
  "Access the web like a pro without leaving a trace!",
  "We take your online privacy as seriously as your ex takes stalking your social media profiles.",
  "tristan on top",
  "hi dad",
]

var p = document.querySelector("#splash")
p.innerHTML = splash[Math.floor(Math.random() * (splash.length))]

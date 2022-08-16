
/*Scrolling Reveal*/
function Scrolling(){
    ScrollReveal().reveal(".primarySquare", {delay: 100})
    ScrollReveal().reveal(".self-section", {delay: 200})
    ScrollReveal().reveal(".photo-section", {delay: 200})
    ScrollReveal().reveal(".square", {delay: 400})
    ScrollReveal().reveal("#S1", {delay: 500})
    ScrollReveal().reveal("#S2", {delay: 600})
    ScrollReveal().reveal("#S3", {delay: 700})
    ScrollReveal().reveal(".heading_project", {delay: 100})
    ScrollReveal().reveal(".projects", {delay: 200})
    ScrollReveal().reveal(".square_project", {delay: 400})
    ScrollReveal().reveal(".labelProject1", {delay: 200})
    ScrollReveal().reveal(".portfolio_button", {delay: 300})
}


//Using this to correct the viewport height
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.2rem solid var(--redStrong)}";
    document.body.appendChild(css);
};



/*HAMBURGER MENU*/

function hambMenu () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))
}

/*About Section*/

function btnPlus (){
    const plusIcon = document.getElementById("plus");
    const aboutActive = document.getElementById('about_overlay');


    plusIcon.addEventListener("click", () =>{
        plusIcon.classList.toggle('active')
        if(plusIcon.classList.contains('active')){
            aboutActive.classList.toggle('active')
        }else {
            aboutActive.classList.remove('active')
        }

    })
}

/*projects overlay*/
function overlayOnProjects (){
    const project = document.getElementById("project");
    const shadowImage = document.getElementById("image1_project");
    const projOverlay =document.getElementsByClassName("proj_overlay")[0];

    project.addEventListener("mouseover", () =>{
        projOverlay.classList.toggle("active");
        if(projOverlay.classList.contains("active")){
            shadowImage.style.boxShadow =  "14px 12px var(--black)";
        }
    })

    project.addEventListener("mouseout", () =>{
        projOverlay.classList.remove('active');
        shadowImage.style.boxShadow = "none";

    })
}



overlayOnProjects();
Scrolling();
hambMenu();
btnPlus();













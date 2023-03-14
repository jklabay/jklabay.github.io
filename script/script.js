// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(document.body.scrollTop>=100) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.opacity = "0.5";
        document.getElementById("logo").style.fontSize = "25px";
    }
    else {
        document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("navbar").style.opacity = "1";
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

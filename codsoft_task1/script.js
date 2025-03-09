/*----------------------toggle icon navbar----------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*---------------scroll section active link--------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href"=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');

};

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, headline',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-contrainer, .portfolio-box, .contact-box, .contact form',{origin:'button'});
ScrollReveal().reveal('.home-contact hi, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});


const typed = new Typed('.multiple-text',{
    strings:['Fronted Developer','Web Deisgner'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay:1000,
    loop:true
});
document.getElementById("downloadCV").addEventListener("click", function() {
    const cvUrl = "cv.pdf";  // Ensure the file is inside your project folder

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf";  // The file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


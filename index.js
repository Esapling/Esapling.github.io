document.addEventListener("DOMContentLoaded", function () {
    var emailLink = document.getElementById('email-link');
    var user = 'sirssapling';
    var domain = '@gmail.com';
    var subject = 'Hello%20There';
    var body = 'I%20would%20like%20to%20connect%20with%20you.';
    emailLink.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
});
document.addEventListener("DOMContentLoaded", function () {
    var link = document.getElementById("project-link-button");
    link.href = "https://github.com/Esapling/Shopping-Website-Database-Project";
});

// navbar-link-scroll-down


document.addEventListener("DOMContentLoaded", function ()  //ensure dom is loaded
{
    var button_ = document.getElementById("cv-button");
    path_ = "https://docs.google.com/document/d/1AhWERJgiGLpSdl0xCX1blWXbOJZkUGmL/edit?usp=sharing&ouid=110354566317262535635&rtpof=true&sd=true"
    if (button_) {
        button_.addEventListener("click", function () {
            button_.href = path_;
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    var header = document.querySelector(".m-header");
    var lastKnownScrollPosition = window.scrollY;
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > lastKnownScrollPosition) {
                header.classList.add('header-scroll-down');
            }
            else {
                header.classList.remove('header-scroll-down');
            }
            lastKnownScrollPosition = window.scrollY; // Update the last scroll position

        });

    }

});


document.addEventListener("DOMContentLoaded", function () {

    var hamburgerMenu = document.getElementById('hamburger-menu');
    var mobileMenu = document.getElementById('menu-list');
    if(hamburgerMenu)
        {
            hamburgerMenu.addEventListener('click', function(){
                mobileMenu.classList.toggle('menu-list-open');
                hamburgerMenu.classList.toggle('hamburger-open');
            });
        }

});



window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});



// var logoIndex = document.getElementsByClassName("logo");


// logoIndex.addEventListener()

// logo-hidden {
//     opacity: 0;
//     visibility: hidden;
//     transition: opacity 0.3s ease, visibility 0.3s ease;
// }
$(document).ready(function () {
    $(window).scroll(function () { 
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
    });
});

var typed = new Typed (".sid",{
    strings: ["YouTuber", "Developer", "Producer"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
});

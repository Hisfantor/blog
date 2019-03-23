$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');     
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}
        
// Animate the scroll to top
function totop(){         
    $('html, body').animate({scrollTop: 0}, 300);
}
/*archive*/
 function togglearchive(){
    $('#archive').toggleClass('archiveout');
    $('#contentbox').toggleClass('contentmargin');
}

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
/* darkmode --------------------------------------------------------
var x = 0;

function toggledark(){
    if (x == 0) {
        $('#contentbox').css({
            'background-color' : 'rgba(30, 41, 62, 1)',
            'color' : 'white'
        });
        $('pre, code, .highlighter-rouge, .highlight code, div.highlighter-rouge .highlight').css({
            'background-color' : 'rgba(58, 71, 84, 1)'
        });
        $('html body').css({
            'background-color' : 'rgba(58, 71, 84, 1)'
        });
        $("#contentbox table tr, #contentbox table th").css({
            'background-color' : 'rgba(58, 71, 84, 1)',
            'color' : 'white'
        });
        x+=1;
        return x;
    }
    else {
        $('#contentbox').css({
            'background-color' : '#fdfdfd',
            'color' : '#111'
        });
        $('pre, code, .highlighter-rouge, .highlight code, div.highlighter-rouge .highlight').css({
            'background-color' : 'rgb(188, 196, 204)'
        });
        $('html body').css({
            'background-color' : 'rgb(188, 196, 204)'
        });
        $("#contentbox table tr, #contentbox table th").css({
            'background-color' : 'white',
            'color' : '#111'
        });
        $('table tr:nth-child(even)').css({
            'background-color' : '#f7f7f7'
        });
        x-=1;
        return x;
    }
}
*/
/*archive*/
 function togglearchive(){
    $('#archive').toggleClass('archiveout');
    $('#contentbox').toggleClass('contentmargin');
}

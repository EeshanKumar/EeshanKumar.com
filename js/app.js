//Initiate Varables
var flyGif;

//Preload Images
function preloader() {
    //Yin Yang Background Images
    var backgroundImage1 = new Image(); 
    backgroundImage1.src = "images/Black.png";
    var backgroundImage2 = new Image(); 
    backgroundImage2.src = "images/White.png";
    
    //Fly Gif
    flyGif = new Image();
    flyGif.src = "images/fly.gif";
}


//Call Functions
(function() {
    responsiveFont();
    var slideHeight = $('#yinyangWrap').height();
    $('.slide').height(slideHeight);
})();

//Set responsive Function
$(window).resize(function(){
    responsiveFont();
});

//Yin Yang Hover Effects
$('.black').hover(function() {
    $('#wrap').addClass('blackHover');
    if ($('#wrap').hasClass('blackClick')) {
        $('#wrap').addClass('blackBack');
    }
    else velocityBackgroundRight('.blackAnimate');
},
function () {
    $('#wrap').removeClass('blackHover');
    $('#wrap').removeClass('blackBack')
});

$('.white').hover(function() {
    $('#wrap').addClass('whiteHover');
    if ($('#wrap').hasClass('whiteClick')) {
        $('#wrap').addClass('whiteBack');
    }
    else velocityBackgroundLeft('.whiteAnimate');
}, function () {
    $('#wrap').removeClass('whiteHover');
    $('#wrap').removeClass('whiteBack')
});

//Yin Yang Click Effects
$('.black').click(function() {
    $('#wrap').removeClass('whiteClick');
    $('.textWrap').removeClass('active');
    if (!$('#wrap').hasClass('hideLinks') && $('#wrap').hasClass('blackClick')) {
        $('#wrap').removeClass('blackClick');        
    }
    else $('#wrap').addClass('blackClick');
    $('#wrap').removeClass('hideLinks');
});
$('.white').click(function() {
    $('#wrap').removeClass('blackClick');
    $('.textWrap').removeClass('active');
    if (!$('#wrap').hasClass('hideLinks') && $('#wrap').hasClass('whiteClick')) {
        $('#wrap').removeClass('whiteClick');
    }
    else $('#wrap').addClass('whiteClick');
    $('#wrap').removeClass('hideLinks');
});




$('.blackLinks a, .whiteLinks a').click(function() {
    // Hide other content
    $('.textWrap').removeClass('active');

    // Show this content
    var elemID = '.' + this.id;
    $(elemID).addClass('active');

    //Hide the links
    $('#wrap').addClass('hideLinks');

    // Special click option (Fly!)
    if ($(elemID).hasClass('fly')) {
        var timestamp = new Date().getTime();
        $('#flyGif').attr('src', flyGif.src+"?ver="+timestamp);
        setTimeout(function() {
            $(elemID).removeClass('active');
        }, 1260);
        $('#wrap').removeClass('hideLinks');
    }
});


//Functions
function velocityBackgroundRight(obj) {
    if ($('#wrap').hasClass('blackHover')) { 
        $(obj).velocity({
            'background-position-x': ["-=5%"]
            }, {
                duration: 250,
                easing: 'linear',
                complete: function() {velocityBackgroundRight(obj);}
        });
    }
}

function velocityBackgroundLeft(obj) {
    if ($('#wrap').hasClass('whiteHover')) {
        $(obj).velocity({
            'background-position-x': ["+=5%"]
            }, {
                duration: 250,
                easing: 'linear',
                complete: function() {velocityBackgroundLeft(obj);}
        });
    }
}

function responsiveFont() {
    $(".fontHeader").each(function(index,obj) {
        $(this).css('font-size',parseFloat($(this).width()*34/400));
        $(this).css('letter-spacing',parseFloat($(this).width()*6/400));
    })
    $('.slide').each(function(index,obj) {
        $(this).css('font-size',parseFloat($(this).width()/20));
    });
    $('.back').each(function(index,obj) {
        $(this).css('font-size',parseFloat($(this).width()/2.3))
    });
}
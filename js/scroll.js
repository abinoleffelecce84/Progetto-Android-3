function scrollapage() {

    $('.page-top').click(function(){
        $("html,body").animate({scrollTop: 0},500);
    });
    $('a.link').click(function(){
        $("html,body").animate({
            scrollTop: $(($this).attr('href')).offset().top},
            2000,
            "easeInOutQuad");
    });
});
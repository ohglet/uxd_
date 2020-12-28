$(document).ready(function(){
    
    $(".menu").click(function(){
        let documentHeight = $(document).height();
        
        $('.box').css('height',documentHeight);
        $('#gnb').css('height',documentHeight);
        
        $('#gnb').animate({left:0, opacity:1},'slow');
        $('.box').show();
    });
   $('.box,.mclose').click(function(){
       $('#gnb').animate({left:'-100%',opacity:0},'fast');
       $('.box').hide();
   });
    
});
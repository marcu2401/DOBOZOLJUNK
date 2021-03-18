$(document).ready(function(){
    $(".more-items").click(function(){
        $(this).parent().find(".more").slideToggle();
    });

});
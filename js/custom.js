$(document).ready(function(){
  $("#MenuIcon").click(function(){

    $("#NavigationMenu").animate({width:"350px"},400);
});
  $("#CloseIcon").click(function(){
    $("#NavigationMenu").animate({width:"0px"},400);
  });
$("#servicesHide").hide();
  $("#MoreServices").click(function(){
      $("#servicesHide").slideDown('slow');
  });

  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();


});

$(document).ready(function(){
$('.thankyou').hide();
$('#form').submit(function(e) {
          $('form').hide('slow');
          $('.thankyou').show('slow');
      });
});

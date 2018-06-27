(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();

    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space 

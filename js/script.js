//waits until page is ready
$(document).ready(function() {
 
//$('.card_para').addClass('hide');

   $('.card_image').click(function(){
       $('.card_para').slideUp('fast');
       $(this).next().children('p').slideDown(1000);
   });

    
    //When a card is clicked on, the background color is highlighted – e.g., set background-color to pink via adding a new class. When the card is clicked again, it is unhighlighted

 $('.card').click(function(){
     
     $(this).toggleClass('highlight');
     
 });
    
    
$('#select_btn').click(function() {
  
  $(".card:not(.highlight)").hide();
 
});
  
$('#all_btn').click(function() {
  
  $(".card").show();
}); 

  
});


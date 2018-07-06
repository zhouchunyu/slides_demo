allButtons = $(".buttons > button")
allButtons.each(function(index, btn){
  $(btn).on("click", function(event){
    distance = $(event.currentTarget).index() * 300;
    $('.images').css({transform: `translateX(-${distance}px)`});
  });
});

var n = 0;
var size = allButtons.length;
trigger_button(allButtons, n, size);
var timeId = setInterval(() => {
  n += 1;
  trigger_button(allButtons, n, size);
}, 1000);

function trigger_button(buttons, n, size) {
  buttons.eq(n%size).trigger('click');
  buttons.removeClass('red');
  buttons.eq(n%size).addClass('red');
}

$('.window').on('mouseenter', function(){
  window.clearInterval(timeId);
})


$('.window').on('mouseleave', function(){
  timeId = setInterval(() => {
    n += 1;
    trigger_button(allButtons, n, size);
  }, 1000);  
})
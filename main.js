allButtons = $(".buttons > button");
var n = 0;
var size = allButtons.length;
allButtons.each(function(index, btn){
  $(btn).on("click", function(event){
    btn = $(event.currentTarget)
    n = btn.index()
    distance = btn.index() * 300;
    $('.images').css({transform: `translateX(-${distance}px)`});
    btn.addClass('red').siblings().removeClass('red')
  });
});
trigger_button(allButtons, n, size);

var timeId = setInterval(() => {
  n += 1;
  trigger_button(allButtons, n, size);
}, 2000);

function trigger_button(buttons, n, size) {
  buttons.eq(n%size).trigger('click');
}

$('.window').on('mouseenter', function(){
  window.clearInterval(timeId);
})


$('.window').on('mouseleave', function(){
  timeId = setInterval(() => {
    n += 1;
    trigger_button(allButtons, n, size);
  }, 2000);  
})
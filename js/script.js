$(function() {
  // 「#login-show」要素に対するclickイベントを作成してください
  $('#login-show').click(function() {
    console.log(1234);
    $('#login-modal').fadeIn();
  });
  
   $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
  })
});
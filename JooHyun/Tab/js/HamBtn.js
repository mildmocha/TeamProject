const du = 400; 
let open = 0;

$('#lnb_btn').click(function(){
  if( open == 0 ) {
    $('#lnb').animate({right:0}, du);
    $('#lnb_btn').find('img').attr({'src':'img/img_topSerchCancel.png', 'alt':'메뉴닫기'})
    $('.cover').fadeIn(du);
    open = '열림';
  } else {
    $('#lnb').animate({right:-274}, du);
    $('#lnb_btn').find('img').attr({'src':'img/bg_header_lnb.png', 'alt':'메뉴열기'})
    $('.cover').fadeOut(du);
    open = 0;
  }
  
})
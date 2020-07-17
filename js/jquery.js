'use strict';

//hoverによる画像の切り替え
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}
// cross fade

new function(){
  function setRollOver2(){
    if(!document.images){return;}
    var imgs = document.images;
    var insert = [];
    for(var i=0;i<imgs.length;i++){
      var splitname = imgs[i].src.split('_off.');
      if((splitname[1])&&(imgs[i].parentNode.tagName=='A')){
        var rolloverImg = document.createElement('img');
        rolloverImg.src = splitname[0]+'_on.'+splitname[1];
        var alpha = 0;
        rolloverImg.currentAlpha = alpha;
        rolloverImg.style.opacity = alpha/100;
        rolloverImg.style.filter = 'alpha(opacity='+alpha+')';
        rolloverImg.style.position = 'absolute';
        addEvent(rolloverImg,'mouseover',function(){setFader(this,100);});
        addEvent(rolloverImg,'mouseout',function(){setFader(this,0);});

        insert[insert.length] = {position:imgs[i],element:rolloverImg};
      }
    }
    for(var i=0;i<insert.length;i++){
      var parent = insert[i].position.parentNode;
      parent.insertBefore(insert[i].element,insert[i].position);
    }
  }


  function setFader(targetObj,targetAlpha){
    targetObj.targetAlpha = targetAlpha;
    if(targetObj.currentAlpha==undefined){
      targetObj.currentAlpha = 100;
    }
    if(targetObj.currentAlpha==targetObj.targetAlpha){
      return;
    }
    if(!targetObj.fading){
      if(!targetObj.fader){
        targetObj.fader = fader;
      }
      targetObj.fading = true;
      targetObj.fader();
    }
  }

  function fader(){
    this.currentAlpha += (this.targetAlpha - this.currentAlpha)*0.2;
    if(Math.abs(this.currentAlpha-this.targetAlpha)<1){
      this.currentAlpha = this.targetAlpha;
      this.fading = false;
    }
    var alpha = parseInt(this.currentAlpha);
    this.style.opacity = alpha/100;
    this.style.filter = 'alpha(opacity='+alpha+')';
    if(this.fading){
      var scope = this;
      setTimeout(function(){fader.apply(scope)},30);
    }
  }

  function addEvent(eventTarget, eventName, func){
    if(eventTarget.addEventListener){
      eventTarget.addEventListener(eventName, func, false);
    }else if(window.attachEvent){
      // IE
      eventTarget.attachEvent('on'+eventName, function(){func.apply(eventTarget);});
    }
  }

  addEvent(window,'load',setRollOver2);

}
    //hoverによる画像の切り替ええend



    //スクロールボタン

$(function() {
    $('a[href^="#"]').on('click', function() {
        let href = $(this).attr('href');
        let target = $(href == '#' || href == '' ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, 500, 'swing');
        return false;
    });
    
    $('#page-top').hide();
    //スクロールが500に達したらボタン表示
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('#page-top').fadeIn();
            console.log('谷保！')
        } else {
            $('#page-top').fadeOut();
        }
    });
    //スクロールしてトップ
    $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

    //スクロールボタンend




    //Gナビ固定

$(function() {
	
	//ロード or スクロールされると実行
	$(window).on('load scroll', function(){
		
		//ヘッダーの高さ分(80px)スクロールするとfixedクラスを追加
		if ($(window).scrollTop() > 300) {
			$('nav').addClass('fixed');
		} else {
			//80px以下だとfixedクラスを削除
			$('nav').removeClass('fixed');
		}
		
	});
	
});

    //Gナビ固定end


    //カルーセルスライド
$(function() {
	$('.slider').slick({
		dots: true, // スライダー下部に表示される、ドット状のページネーションです
		infinite: true, // 無限ループ
		speed: 500, // 切り替わりのスピード
		slidesToShow: 3, //通常 1024px以上の領域では4画像表示
		slidesToScroll: 3, 
		responsive: [{
			breakpoint: 1024,settings: { //601px～1024pxでは3画像表示
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 600,settings: { //481px～600pxでは2画像表示
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,settings: {//480px以下では1画像表示
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
});
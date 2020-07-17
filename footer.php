		<div id="footer" class="clearfix">
		 <article class="footer_inner">
		 	<section>
		 	 <ul class="logo_f">
		 	 	<li><a href="https://sakuma.fines-dev.com/cuppa/"><img src="https://sakuma.fines-dev.com/cuppa/img/cuppalogo_f.png" width="220px"></a></li>
		 	 </ul>
		 	</section>
		 	<section>
		 	 <ul>		
		 	 	<li>営業時間</li> 
		 	 	<li>平日　 10am～21pm 　（L.O　20：30）</li> 
		 	 	<li>土日祝　9am～21pm　（L.O　20：30）</li> 		 	 			 	 		 			 	 	
		 	 </ul>		 		
		 	</section>
		 	<section>
		 	 <ul>
		 	 	<li>contact</li>
		 	 	<li>Email <a href="mailto:">xoxoxoxoxxoxo@xxxx.xx.xx</a></li>
		 	 	<li>TEL   <a href="tel:">xxx-xxxxx-xxxx</a></li>
		 	 </ul>		 		
		 	</section>
		 </article>
		 <p class="center">Copyright © cuppa All Rights Reserved.</p>
		</div>
		 <p id="page-top"><a href="#main">topへ</a></p>	


<script src="./js/slick.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
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
</script>
</body>
</html>
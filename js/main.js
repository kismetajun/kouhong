// 导航
        var index=0;
		var length=$('#content div').length;
		var timer=setInterval(moveNext,2000);
		$('#banner li').click(function(){
			$(this).addClass('current').siblings().removeClass('current');
			index=$(this).index();//修改索引
			$('#content div').eq(index).addClass('current').siblings().removeClass('current');
		});
		$('#box').hover(function(){
			$('.arrow').show();
		 },function(){
			timer=setInterval(moveNext,2000);
			$('.arrow').hide();
		});
		$('.arrow-right').click(function(){
			moveNext();
		});
		$('.arrow-left').click(function(){
			movePre();
			console.log('left')
		});
		function moveNext(){
			index++;
			if(index==length){
				index=0;
			}
			$('#content div').eq(index).addClass('current').siblings().removeClass('current');
			$('#banner li').eq(index).addClass('current').siblings().removeClass('current');
		}
		function movePre(){
			index--;
			if(index==-1){
				index=length-1;
			}
			$('#content div').eq(index).addClass('current').siblings().removeClass('current');
			$('#banner li').eq(index).addClass('current').siblings().removeClass('current');
		}

// 动画
$(function() {
    $('#dowebok').fullpage({
        sectionsColor: ['#fff', '#fff', '', '','', ''],
        'navigation': true,
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.main2-l-top').find('img').animate({
                    'left': '255px',
                }, 1000, 'easeOutExpo');
                $('.main2-l-top').find('img').css({
                    'width': '170px',
                    'height': '157px',
                    'display': 'block',
                    'transform': 'rotate(360deg)',
                });
                $('h3').eq(0).delay(100).animate({
                    'left': '45px',
                }, 500, 'easeOutExpo');
                $('.main2-l-bottomB').delay(100).animate({
                    'left': "90px",
                }, 500, 'easeOutExpo');

                $('.img01').animate({
                    'right': "215px",
                }, 500, 'easeOutExpo');
                $('.img02').delay(100).animate({
                    'right': "354px",
                }, 500, 'easeOutExpo');
                $('.img03').delay(100).animate({
                    'right': "163px",
                }, 500, 'easeOutExpo');
            }
            if (index == 3) {
                $('.main3-l-top').find('img').animate({
                    'right': '260px',
                }, 1000, 'easeOutExpo');
                $('h3').eq(1).delay(100).animate({
                    'right': '85px',
                }, 500, 'easeOutExpo');
                $('.main3-l-bottomB').delay(100).animate({
                    'right': "85px",
                }, 500, 'easeOutExpo');
                $('.main3-r').animate({
                    'left': '215px',
                }, 1000, 'easeOutExpo');
            }
            if (index == 4) {
                $('.main4-l').find('img').eq(0).delay(500).animate({
                    'left': "25%",
                }, 500, 'easeOutExpo');
                $('.main4-l-btm').delay(100).animate({
                    'left': "40%",
                }, 500, 'easeOutExpo');
                $('.main4-m-top').delay(100).animate({
                    'left': "25%",
                }, 500, 'easeOutExpo');
                $('.main4-m-bottom').delay(100).animate({
                    'left': "5%",
                }, 500, 'easeOutExpo');
                $('.main4-r-btm').find('img').eq(0).delay(100).animate({
                    'left': "5%",
                    // show();
                }, 500, 'easeOutExpo');
                $('.main4-r-btm').find('img').eq(1).delay(100).animate({
                    'left': "1%",
                    // show();
                }, 500, 'easeOutExpo');

            }
            if (index == 5) {
                $('.section2').find('p').delay(100).animate({
                    'left': '18%'
                }, 1000, 'easeOutExpo');
                $('.section2').find('h3').delay(100).animate({
                    'left': '30%'
                }, 1000, 'easeOutExpo');
            }
        },
        onLeave: function(index, direction,nextIndex){
            // console.log(index,nextIndex,direction);
            if(index == '2'){
                $('.main2-l-top').find('img').animate({
                    'left': '0px',
                }, 500, 'easeOutExpo');
                $('.main2-l-top').find('img').css({
                    'width': '170px',
                    'height': '157px',
                    'display': 'block',
                    'transform': 'rotate(360deg)',
                });
                $('h3').eq(0).delay(100).animate({
                    'left': '0px',
                }, 500, 'easeOutExpo');
                $('.main2-l-bottomB').delay(100).animate({
                    'left': "0px",
                }, 500, 'easeOutExpo');

                $('.img01').animate({
                    'right': "0px",
                }, 500, 'easeOutExpo');
                $('.img02').delay(100).animate({
                    'right': "0px",
                }, 500, 'easeOutExpo');
                $('.img03').delay(100).animate({
                    'right': "0px",
                }, 500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.main3-l-top').find('img').animate({
                    'right': '0px',
                }, 1000, 'easeOutExpo');
                $('h3').eq(1).delay(100).animate({
                    'right': '0px',
                }, 500, 'easeOutExpo');
                $('.main3-l-bottomB').delay(100).animate({
                    'right': "0px",
                }, 500, 'easeOutExpo');
                $('.main3-r').animate({
                    'left': '0px',
                }, 1000, 'easeOutExpo');
            }
            if(index == '4'){
                $('.main4-l').find('img').eq(0).delay(500).animate({
                    'left': "0%",
                }, 500, 'easeOutExpo');
                $('.main4-l-btm').delay(100).animate({
                    'left': "0%",
                }, 500, 'easeOutExpo');
                $('.main4-m-top').delay(100).animate({
                    'left': "0%",
                }, 500, 'easeOutExpo');
                $('.main4-m-bottom').delay(100).animate({
                    'left': "0%",
                }, 500, 'easeOutExpo');
                $('.main4-r-btm').find('img').eq(0).delay(100).animate({
                    'left': "0%",
                    // show();
                }, 500, 'easeOutExpo');
                $('.main4-r-btm').find('img').eq(1).delay(100).animate({
                    'left': "0%",
                    // show();
                }, 500, 'easeOutExpo');
            }
            if(index == '5') {
                $('.section2').find('p').delay(500).animate({
                    'left': '0%'
                }, 1000, 'easeOutExpo');
                $('.section2').find('h3').delay(500).animate({
                    'left': '0%'
                }, 1000, 'easeOutExpo');
            }
        }
    })
})

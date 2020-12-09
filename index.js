/**
 * CSS3 答题卡翻页效果 jQuery Transit 
 * @authors SherryLynn <286556658@qq.com>
 * @date    2016-9-27 15:30:18
 * @version v1.0.1
 */
$.fn.answerSheet = function(options) {
	var defaults = {
		mold: 'card',
	};
	var opts = $.extend({}, defaults, options);
	return $(this).each(function() {
		var obj = $(this).find('.card_cont');
		var _length = obj.length,
			_b = _length - 1,
			_len = _length - 1,
			_cont = '.card_cont';
		for (var a = 1; a <= _length; a++) {
			obj.eq(_b).css({
				'z-index': a
			});
			_b -= 1;
		}
		$(this).show();
		//答题卡模式
		if (opts.mold == 'card') {
			//选择答案切换题目
			obj.find('ul li label').click(function() {
				var _idx = $(this).parents(_cont).index(),
					_cards = obj,
					_cardcont = $(this).parents(_cont);
				if (_idx == _len) {
					//此处：选择结果答案处理方法
					$('.btn_commit').css('display', 'block');
				} else {
					$('.btn_commit').css('display', 'none');
					setTimeout(function() {
						_cardcont.addClass('cardn');
						setTimeout(function() {
							_cards.eq(_idx + 3).addClass('card3');
							_cards.eq(_idx + 2).removeClass('card3').addClass('card2');
							_cards.eq(_idx + 1).removeClass('card2').addClass('card1');
							_cardcont.removeClass('card1');
						}, 200);
					}, 100);
				}
			})
			//上一题
			$('.card_bottom').find('.prev').click(function() {
				var _idx = $(this).parents(_cont).index(),
					_cardcont = $(this).parents(_cont);
				obj.eq(_idx + 2).removeClass('card3').removeClass('cardn');
				obj.eq(_idx + 1).removeClass('card2').removeClass('cardn').addClass('card3');
				obj.eq(_idx).removeClass('card1').removeClass('cardn').addClass('card2');
				setTimeout(function() {
					obj.eq(_idx - 1).addClass('card1').removeClass('cardn');
				}, 200);
			})
		}
	});
};

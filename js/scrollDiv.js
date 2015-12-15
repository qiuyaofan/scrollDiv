$.fn.extend({
    Scroll: function(opt, callback) {
        //参数初始化
        var defaults={
        	line: 3,
            speed: 1000,//调速度
            timer: 5000 //调时间
        }
        var opt=$.extend({},defaults,opt);
        var $ul=$(this).find('ul');
        $.each($ul,function(index,el){
			var $this=$(el);
			var lineH=$this.find('li').eq(0).height();
			var scrollH=0-lineH*opt.line;
			setInterval(function(){
				roll($this,scrollH);
			},opt.timer);
			roll($this,scrollH);

		});
		// roll();
		function roll(ele,scrollH){
			var $li=ele.find('li');
			ele.animate({
				marginTop: scrollH
			}, opt.speed, function() {
				for (var i = 0; i < opt.line; i++) {
					ele.append($li.eq(i));
				};
				ele.css('margin-top','0');
			});
		}


    }
})
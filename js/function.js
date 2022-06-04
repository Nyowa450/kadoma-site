$(".menuIco").click(function () {
	$(this).toggleClass('active');
    $(".header-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".nav-circle").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$(".header-nav").click(function () {
    $(".menuIco").removeClass('active');//activeクラスを除去
    $(".header-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".nav-circle").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

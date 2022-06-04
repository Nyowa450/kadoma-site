$(".menuIco").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".header-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".nav-circle").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$(".header-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".menuIco").removeClass('active');//ボタンの activeクラスを除去し
    $(".header-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $("nav-circle").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});
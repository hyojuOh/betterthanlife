$('.slide').slick({
    slide: 'li',
    dots:true,
    fade:true,
    prevArrow : $('.prev'),     // 이전 화살표 모양 설정
    nextArrow : $('.next'),     // 다음 화살표 모양 설정
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,       // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동  시 마우스 호버하면 슬라이더 멈추게 설정
});

// 반응형 슬라이드
$('.slide2').slick({
    slide: 'li',
    dots:true,
    fade:true,
    prevArrow : $('.prev'),     // 이전 화살표 모양 설정
    nextArrow : $('.next'),     // 다음 화살표 모양 설정
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,       // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동  시 마우스 호버하면 슬라이더 멈추게 설정
});

var time = 3600; /* 기준시간작성 */
var min = ""; /* 분 */
var sec = ""; /* 초 */

var x = setInterval(function(){
    min = parseInt(time/60);
    sec = time%60;

    document.getElementById("demo").innerHTML = min + "분" + sec + "초";
    time--;

    if (time < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "타임아웃";
    }
},1000);



// 팝업네비
$(".hamburger").click(
    function(){
        $("#p-nav").fadeIn();
    }
)
$(".close").click(
    function(){
        $("#p-nav").fadeOut();
    }
)



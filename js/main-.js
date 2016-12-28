'use strict';
if ( typeof EJ === 'undefined' ) { $.EJ = new Object(); }

(function($){

  $(".button-collapse").sideNav();

  // Custom scrollbar init
  var el = document.querySelector('.custom-scrollbar');
  Ps.initialize(el);










    var dropZoneId = "drop-zone";
  var buttonId = "clickHere";
  var mouseOverClass = "mouse-over";
var dropZone = $("#" + dropZoneId);
 var inputFile = dropZone.find("input");
 var finalFiles = {};
$(function() {
  

  
  var ooleft = dropZone.offset().left;
  var ooright = dropZone.outerWidth() + ooleft;
  var ootop = dropZone.offset().top;
  var oobottom = dropZone.outerHeight() + ootop;
 
  document.getElementById(dropZoneId).addEventListener("dragover", function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.addClass(mouseOverClass);
    var x = e.pageX;
    var y = e.pageY;

    if (!(x < ooleft || x > ooright || y < ootop || y > oobottom)) {
      inputFile.offset({
        top: y - 15,
        left: x - 100
      });
    } else {
      inputFile.offset({
        top: -400,
        left: -400
      });
    }

  }, true);

  if (buttonId != "") {
    var clickZone = $("#" + buttonId);

    var oleft = clickZone.offset().left;
    var oright = clickZone.outerWidth() + oleft;
    var otop = clickZone.offset().top;
    var obottom = clickZone.outerHeight() + otop;

    $("#" + buttonId).mousemove(function(e) {
      var x = e.pageX;
      var y = e.pageY;
      if (!(x < oleft || x > oright || y < otop || y > obottom)) {
        inputFile.offset({
          top: y - 15,
          left: x - 160
        });
      } else {
        inputFile.offset({
          top: -400,
          left: -400
        });
      }
    });
  }

  document.getElementById(dropZoneId).addEventListener("drop", function(e) {
    $("#" + dropZoneId).removeClass(mouseOverClass);
  }, true);


  inputFile.on('change', function(e) {
    finalFiles = {};
    $('#filename').html("");
    var fileNum = this.files.length,
      initial = 0,
      counter = 0;

    $.each(this.files,function(idx,elm){
       finalFiles[idx]=elm;
    });

    for (initial; initial < fileNum; initial++) {
      counter = counter + 1;
      $('#filename').append('<div id="file_'+ initial +'"><span class="fa-stack fa-lg"><i class="fa fa-file fa-stack-1x "></i><strong class="fa-stack-1x" style="color:#FFF; font-size:12px; margin-top:2px;">' + counter + '</strong></span> ' + this.files[initial].name + '&nbsp;&nbsp;<span class="fa fa-times-circle fa-lg closeBtn" onclick="removeLine(this)" title="remove"></span></div>');
    }
  });



})

function removeLine(obj)
{
  inputFile.val('');
  var jqObj = $(obj);
  var container = jqObj.closest('div');
  var index = container.attr("id").split('_')[1];
  container.remove(); 

  delete finalFiles[index];
  //console.log(finalFiles);
}
  


<div class="sub_Banner">
                                    <div class="sub01">
                                        <div>
                                            <span>메인</span>
                                            <span class="remove_img">-</span>
                                        </div>
                                        <!-- 업로드 될 이미지 -->
                                        <img src="imgs/banner1.gif" alt="메인 배너 이미지">
                                        <!-- 이미지 없을 경우 -->
                                        <!-- <img src="imgs/img_blank02.gif" alt="업로드 된 이미지가 없습니다."> -->
                                    </div>
                                    <div class="sub02">
                                        <div>
                                            <span>서브-1</span>
                                            <span class="remove_img">-</span>
                                        </div>
                                        <!-- 업로드 될 이미지 -->
                                        <img src="imgs/banner1.gif" alt="서브 배너 이미지1">
                                        <!-- 이미지 없을 경우 -->
                                        <!-- <img src="imgs/img_blank02.gif" alt="업로드 된 이미지가 없습니다."> -->
                                    </div>
                                    <div class="sub03">
                                        <div>
                                            <span>서브-2</span>
                                            <span class="remove_img">-</span>
                                        </div>
                                        <!-- 업로드 될 이미지 -->
                                        <img src="imgs/banner1.gif" alt="서브 배너 이미지2">
                                        <!-- 이미지 없을 경우 -->
                                        <!-- <img src="imgs/img_blank02.gif" alt="업로드 된 이미지가 없습니다."> -->
                                    </div>
                                </div>
                                
                                
 var menuA = $("#gallery > li > a");
 var h = $(".box").height()*-1;		// 재사용성 및 확장성을 위해 요소가 가진 수치 자체를 변수로 만들어 준다 ^^*	x-1 은 음수값으로 보이게 하기 때문 	// css position 값은 건들지 않는다
 //alert(h);
 menuA.hover(function(){			// mouseenter + mouseleave = hover , 그러므로 function은 두 개 생성
	$(this).find("img").attr("src", $(this).find("img").attr("src").replace("off","on"));		// 파일명은 늘 바뀌기 때문에 하는 설정	// 특정 문자만 치환하는 replace
	$(this).find(".box").stop().animate({top:h},1000,"easeOutQuart");
//	 alert($(this).find("img").attr("src"));
//	alert("in");
 }, function(){
		$(this).find("img").attr("src", $(this).find("img").attr("src").replace("on","off"));
		$(this).find(".box").stop().animate({top:0},500,"easeOutQuart");
//	alert("out");
 });
 
 
 
 
 var dvImages = $('.image img');  //array of usethis images
var liImages = $('#contentA img'); //array of item images

$.each(dvImages, function(index){
    if(index == liImages.length)
        return false;
    $(liImages[index]).attr('src', $(this).attr('src'));
});

$('.image img').each(function(i){
   $('#contentA').find('li:eq('+i+') img').attr('src', $(this).attr('src'));
});

 



})(jquery);

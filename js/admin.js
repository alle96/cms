'use strict';
if (typeof JY === 'undefined') { $.JY = new Object(); }

(function($){



    
    $('.btn-mais-info').on('click', function(event) {
        $( '.open_info' ).toggleClass( "hide" );
    });
    
    
 
/*    $('tbody > tr').on('click', function(event) {
        event.preventDefault();
        $('#staffModal').modal('show');
    })
    
    $('.btn-mais-info').on('click', function(event) {
        $( '.open_info' ).toggleClass( "hide" );
    })*/
    
    
    /*
    * 생년월일 입력, 초기 셋팅은 오늘 날짜로
    */
    /*$('.datepicker').pickadate();*/

        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
       $('#datepicker').val(today);

    
    
    
    /*
    *  자택주소 입력위한 우편번호 찾기 api - go host!
    */
    var width = 500;
    var height= 500;
    var themeObj = {
       bgColor: "#4E4C6D", //바탕 배경색
       outlineColor: "#F1EFEF" //테두리
    };
    
    function home_addFind() {
        new daum.Postcode({
        width:width,
        height:height,
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = ''; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수

                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    fullAddr = data.roadAddress;

                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    fullAddr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                if(data.userSelectedType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('home_postcode').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('home_address').value = fullAddr;

                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('home_address2').focus();
            },
            theme: themeObj
        }).open({
            left: (window.screen.width / 2) - (width / 2),
            top: (window.screen.height / 2) - (height / 1.5)
        });

/*        $("#new_add").click(function(ev){
            ev.preventDefault();
            $("#addStaffModal").modal({backdrop: "false"});
        });*/
    
/*    
    // modal
    var dialog = new BootstrapDialog ({
            message: '<p>설정 저장 후 로그아웃 하시겠습니까?</p>',
            buttons: [{
                icon: 'glyphicon glyphicon-ok',
                label: '확인',
                cssClass: 'btn-default',
                autospin: true,
                action: function(dialogRef){
                    dialogRef.enableButtons(false);
                    dialogRef.setClosable(false);
                    dialogRef.getModalBody().html('<p class='+'waiting'+'>3초 후에 자동으로 닫힙니다.</p>');
                    setTimeout(function(){
                        dialogRef.close();
                    }, 3000);
                }
            }, {
                icon:'glyphicon glyphicon-remove',
                label: '취소',
                action: function(dialogRef){
                    dialogRef.close();
                },
                
            }], closable: false
            
        });

    $('.btn_staffAdd').on("click", function(ev){
        ev.preventDefault();
        dialog.realize();
        dialog.getModalHeader().hide();
        dialog.getModalContent().css({'background-color': '#fff' , 'border': '5px solid #fc322c'});
        dialog.getModalBody().css('color', '#777');
        dialog.open();
    });*/
    
    
    // validator
/*    $("#user_form").bootstrap3Validate(function(e, data) { 
    e.preventDefault();

    var self = $(this);

    $('.process', self).show();
    $("[type='submit']", self).hide();
    $(".alert-danger", self).hide();

    $.ajax({
        url: self.attr('action'),
        data: data,
        type: self.attr('method'),
    })
    .done(function() {
        self[0].reset(); // Clear form
    })
    .fail(function() {
        $('.alert-danger', self).text('Error!').show();
    })
    .always(function() {
        $('.process', self).hide();
        $("[type='submit']", self).show();
    });
})*/


/*    $("#user_form").validate({
        rules: {
            userName: {
                minlength: 2,
                required: true
            },
            userPass: {
                required: true,
				minlength: 6
                }
             },
            highlight: function (element) {
                $(element).closest(".control-group").removeClass("success").addClass("error");
            }, 
            success: function (element) {
                element.text("ok!!!!!").addClass("valid").closest(".control-group").removeClass("error").addClass("success");
            }
        
        
    });
    */
    
/*        $("#user_form").validate({
        rules: {
            userName: {
                minlength: 2,
                required: true
            },
            userPass: {
                required: true,
				minlength: 6
              //  field: 'confirmPassword',
                password: true,
                identical: {
                    field: 'confirmPassword',
                //    message: 'Confirm your password below - type same password please'
                }
                
                identical: {
                    field: 'password',
                    message: 'The password and its confirm are not the same'
                }
                
             },
            highlight: function (element) {
                $(element).closest(".control-group").removeClass("success").addClass("error");
            }, 
            success: function (element) {
                element.text("ok!!!!!").addClass("valid").closest(".control-group").removeClass("error").addClass("success");
            }
        
        
    });*/
    
    
    
    
    /*
     $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');
        }
    });
    
    */

})(jQuery);

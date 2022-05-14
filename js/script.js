$(document).ready(function(){
    // 패스워드 클릭 시 문구생성
    $('.register-wrap input[type="password"]').click(function(){
        if($(this).hasClass('wrong-active')) {           
            $(this).removeClass('wrong-active')
            $('.register-wrap .password-group span').hide()
        } else {
            $(this).addClass('wrong-active')
            $('.register-wrap .password-group span').show()
        }
    })

    //계정찾기 시 아이디찾기 or 비밀번호 찾기
    $('.find-wrap li > span').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')

        } else {
            $('.find-wrap li > span').removeClass('active')       
            $(this).addClass('active')

        }
    })

    //계정찾기 - 휴대폰으로 찾기 클릭 시 하단메뉴변경
    $('.find-wrap .radio-group .radio:first-child input').click(function(){
        $('.fine-wrap .input-box.phone-active').show()
        $('.fine-wrap .input-box.email-active').hide()

    })
    $('.find-wrap .radio-group .radio:nth-child(2) input').click(function(){
        $('.fine-wrap .input-box.phone-active').hide()
        $('.fine-wrap .input-box.email-active').show()

    })
    // $('.find-wrap .radio label:nth-child(2) input').click(function(){
    //     $('.fine-wrap .input-box').removeClass(phone-active)
    //     $('.fine-wrap .input-box').addClass(email-active)
    // })



});
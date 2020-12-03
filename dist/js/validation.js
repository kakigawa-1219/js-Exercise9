$(function(){
    $('#add-user-form-submit').prop('disabled',true);
    var _this;
//エラー時　フラグ付与
function flagin(){
    $(_this).addClass("flag");
    if($('.flag').length!=0){
        $('#add-user-form-submit').prop('disabled',true);
        }
}
//エラー時　フラグ削除　＋　活性化（フラグなしの場合）
function flagout(){
    $(_this).removeClass("flag");
    if($('.flag').length==0){
    $('#add-user-form-submit').prop('disabled', false);
    $('#add-user-form-submit').removeAttr('disabled');
    }
}
//姓（漢字）
$('input[name="lastName"]').on('blur' , function(){
    _this=this;
    let value = $(this).val();
var regexp = new RegExp(/^[\u4E00-\u9FFF]+$/);
if(value==""){
    $('.error_required_lastName').text("※入力必須項目です");
    flagin();
}
if(value!=""&&regexp.test(value)==false){
    $('.error_required_lastName').text("※漢字で入力してください");
    flagin();
}
if(regexp.test(value)==true){
    $('.error_required_lastName').text("");
    flagout();
}
});
//名（漢字）
$('input[name="firstName"]').on('blur' , function(){
    _this=this;
    let value = $(this).val();
    var regexp = new RegExp(/^[\u4E00-\u9FFF]+$/);
if(value==""){
    $('.error_required_firstName').text("※入力必須項目です");
    flagin();
}
if(value!=""&&regexp.test(value)==false){
    $('.error_required_firstName').text("※漢字で入力してください");
    flagin();
}
if(regexp.test(value)==true){
    $('.error_required_firstName').text("");
    flagout();
}
});



//住所（文字数）
    let getClass = $('#tags').attr('class');
    let classVal = getClass.split(' ');
    let val= classVal[1];
    var count = val.replace(/[^0-9]/g, '');
$('.max'+count).on('blur',function(){
    _this=this;
    let value = $(this).val();
    let value_count = $(this).val().length;
    if(value==""){
        $('.error_num').text("");
        flagin();
    }
    if(value_count>count){
        $('.error_num').text("※"+count+"文字以内にしてください");
        flagin();
    }
    if(value!=""&&value_count<=count){
        $('.error_num').text("");
        flagout();
    }
});
//姓（ひらがな）
$('input[name="lastKana"]').on('blur' , function(){
    _this=this;
    let value = $(this).val();
var regexp =new RegExp(/^[\u3040-\u309f]+$/);
if(value==""){
    $('.error_kana_lastKana').text("");
    flagin();
}
if(value!=""&&regexp.test(value)==false){
    $('.error_kana_lastKana').text("※ひらがなで入力してください");
    flagin();
}
if(regexp.test(value)==true){
    $('.error_kana_lastKana').text("");
        flagout();
}
});
//名（ひらがな）
$('input[name="firstKana"]').on('blur' , function(){
    _this=this;
    let value = $(this).val();
var regexp =new RegExp(/^[\u3040-\u309f]+$/);
if(value==""){
    $('.error_kana_firstKana').text("");
    flagin();
}
if(value!=""&&regexp.test(value)==false){
    $('.error_kana_firstKana').text("※ひらがなで入力してください");
    flagin();
}
if(regexp.test(value)==true){
    $('.error_kana_firstKana').text("");
    flagout();
}
});

//連絡先
$('.phone').on('blur' , function(){
    _this=this;
    let value = $(this).val();
    var regexp =/^0\d{1}0-\d{4}-\d{4}$/;
if(value==""){
    $('.error_required_phone').text("※入力必須項目です");
    $('.error_phone').text("");
    flagin();
}
if(value!=""&&regexp.test(value)==false){
    $('.error_phone').text("※正しく入力してください");
    $('.error_required_phone').text("");
    flagin();
}
if(regexp.test(value)==true){
    $('.error_required_phone').text("");
    $('.error_phone').text("");
        flagout();
}
});

//メールアドレス
$('.email').on('blur' , function(){
    let value = $(this).val();
    _this=this;
    flagin();
var regexp =/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-].+(?:\.[a-zA-Z0-9-]+)*$/
if(value==""){
    $('.error_email').text("");
   
}
if(value!=""&&regexp.test(value)==false){
    $('.error_email').text("※正しく入力してください");
    flagin();
}
if(regexp.test(value)==true){
    $('.error_email').text("");
    flagout();
}
});


}); 
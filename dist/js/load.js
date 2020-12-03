$(function() {
   
  $.ajax({
    type: 'GET',
    url: 'https://kakigawa-1219.github.io/js-Exercise7/dist/js/include.json',
    dataType: 'json',
    success: function(json){
      var len = json.length;        
      for(var i=0; i < len; i++){
        var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
        +   '<div class="thumbnail">'
        +       '<div class="thumbnail-image">'
        +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
        +       '</div>'
        +       '<div class="user-indicator"></div>'
        +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
        +       `<div class="user-division">${json[i].division}</div>`
        +       `<div class="user-position">${json[i].position}</div>`
        +      '<div class="text-center"></div>'
        +   '</div>'
        + '</li>';

        var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
        +   '<div class="thumbnail">'
        +       '<div class="thumbnail-image">'
        +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
        +       '</div>'
        +       '<div class="user-indicator"></div>'
        +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
        +       `<div class="user-division">${json[i].division}</div>`
        +       `<div class="user-position">${json[i].position}</div>`
        +      '<div class="text-center"></div>'
        +   '</div>'
        + '</li>';

        if(json[i].gender=="男"){
            $("#loadarea").append(htmltext);
        }
        else{
            $("#loadarea").append(htmltext1);
        }
    
    
    }





//五十音順 
    $("#sorting-name").click(function(){
        $("#loadarea").empty();
    json.sort(function(val1, val2) {
        return ( val1.lastKana > val2.lastKana ? 1 : -1);
   });
 
    for(var i=0; i < len; i++){
      var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
      +   '<div class="thumbnail">'
      +       '<div class="thumbnail-image">'
      +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
      +       '</div>'
      +       '<div class="user-indicator"></div>'
      +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
      +       `<div class="user-division">${json[i].division}</div>`
      +       `<div class="user-position">${json[i].position}</div>`
      +      '<div class="text-center"></div>'
      +   '</div>'
      + '</li>';

      var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
      +   '<div class="thumbnail">'
      +       '<div class="thumbnail-image">'
      +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
      +       '</div>'
      +       '<div class="user-indicator"></div>'
      +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
      +       `<div class="user-division">${json[i].division}</div>`
      +       `<div class="user-position">${json[i].position}</div>`
      +      '<div class="text-center"></div>'
      +   '</div>'
      + '</li>';

      if(json[i].gender=="男"){
          $("#loadarea").append(htmltext);
      }
      else{
          $("#loadarea").append(htmltext1);
      }
     }
});





//入社日順

$("#sorting-hireday").click(function(){
    $("#loadarea").empty();
json.sort(function(val1, val2) {
    return ( val1.hireday < val2.hireday ? 1 : -1);
});

for(var i=0; i < len; i++){
  var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
  +   '<div class="thumbnail">'
  +       '<div class="thumbnail-image">'
  +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
  +       '</div>'
  +       '<div class="user-indicator"></div>'
  +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
  +       `<div class="user-division">${json[i].division}</div>`
  +       `<div class="user-position">${json[i].position}</div>`
  +      '<div class="text-center"></div>'
  +   '</div>'
  + '</li>';

  var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
  +   '<div class="thumbnail">'
  +       '<div class="thumbnail-image">'
  +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
  +       '</div>'
  +       '<div class="user-indicator"></div>'
  +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
  +       `<div class="user-division">${json[i].division}</div>`
  +       `<div class="user-position">${json[i].position}</div>`
  +      '<div class="text-center"></div>'
  +   '</div>'
  + '</li>';

  if(json[i].gender=="男"){
      $("#loadarea").append(htmltext);
  }
  else{
      $("#loadarea").append(htmltext1);
  }
 }
});



//生年月日順

$("#sorting-birthday").click(function(){
    $("#loadarea").empty();
json.sort(function(val1, val2) {
    return ( val1.birthday < val2.birthday ? 1 : -1);
});

for(var i=0; i < len; i++){
  var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
  +   '<div class="thumbnail">'
  +       '<div class="thumbnail-image">'
  +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
  +       '</div>'
  +       '<div class="user-indicator"></div>'
  +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
  +       `<div class="user-division">${json[i].division}</div>`
  +       `<div class="user-position">${json[i].position}</div>`
  +      '<div class="text-center"></div>'
  +   '</div>'
  + '</li>';

  var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
  +   '<div class="thumbnail">'
  +       '<div class="thumbnail-image">'
  +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
  +       '</div>'
  +       '<div class="user-indicator"></div>'
  +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
  +       `<div class="user-division">${json[i].division}</div>`
  +       `<div class="user-position">${json[i].position}</div>`
  +      '<div class="text-center"></div>'
  +   '</div>'
  + '</li>';

  if(json[i].gender=="男"){
      $("#loadarea").append(htmltext);
  }
  else{
      $("#loadarea").append(htmltext1);
  }
 }
});



//絞り込み
$("#query-division").change(function(){
    $("#loadarea").empty();
json.sort(function(val1, val2) {
    return ( val1.birthday < val2.birthday ? 1 : -1);
});

for(var i=0; i < len; i++){
  var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
  +   '<div class="thumbnail">'
  +       '<div class="thumbnail-image">'
  +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
  +       '</div>'
  +       '<div class="user-indicator"></div>'
  +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
  +       `<div class="user-division">${json[i].division}</div>`
  +       `<div class="user-position">${json[i].position}</div>`
  +      '<div class="text-center"></div>'
  +   '</div>'
  + '</li>';

  var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
  +   '<div class="thumbnail">'
  +       '<div class="thumbnail-image">'
  +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
  +       '</div>'
  +       '<div class="user-indicator"></div>'
  +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
  +       `<div class="user-division">${json[i].division}</div>`
  +       `<div class="user-position">${json[i].position}</div>`
  +      '<div class="text-center"></div>'
  +   '</div>'
  + '</li>';
if(json[i].division==$('option:selected').val()){
  if(json[i].gender=="男"){
    $("#loadarea").append(htmltext);
  }
  else{
      $("#loadarea").append(htmltext1);
  }
}
else if($('option:selected').val()==""){
    if(json[i].gender=="男"){
        $("#loadarea").append(htmltext);
      }
      else{
          $("#loadarea").append(htmltext1);
      }
}
 }
});


//並び替えクリア

$("#sorting-clear").click(function(){
    $("#loadarea").empty();
    json.sort(function(val1, val2) {
        return ( val1.number > val2.number ? 1 : -1);
   });
 
    for(var i=0; i < len; i++){
      var htmltext =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
      +   '<div class="thumbnail">'
      +       '<div class="thumbnail-image">'
      +           '<img class="img-circle" src="dist/img/jinbutsu_male.jpg">'
      +       '</div>'
      +       '<div class="user-indicator"></div>'
      +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
      +       `<div class="user-division">${json[i].division}</div>`
      +       `<div class="user-position">${json[i].position}</div>`
      +      '<div class="text-center"></div>'
      +   '</div>'
      + '</li>';

      var htmltext1 =  '<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center">'
      +   '<div class="thumbnail">'
      +       '<div class="thumbnail-image">'
      +           '<img class="img-circle" src="dist/img/jinbutsu_female.jpg">'
      +       '</div>'
      +       '<div class="user-indicator"></div>'
      +       `<div class="user-name">${json[i].lastName}${json[i].firstName}</div>`
      +       `<div class="user-division">${json[i].division}</div>`
      +       `<div class="user-position">${json[i].position}</div>`
      +      '<div class="text-center"></div>'
      +   '</div>'
      + '</li>';

      if(json[i].gender=="男"){
          $("#loadarea").append(htmltext);
      }
      else{
          $("#loadarea").append(htmltext1);
      }
     }
});









    }
  });
  });


  
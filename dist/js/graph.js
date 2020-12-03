$(function() {
 $.ajax({
    type: 'GET',
    url: 'https://kakigawa-1219.github.io/js-Exercise7/dist/js/include.json',
    dataType: 'json',
    success: function(json){

var len = json.length;  
var malenum = femalenum = 0;
var syusa = katyo = katyodairi = 0;
var age20 = age30 = age40 = age50 = 0;
var age20_ITI = age20_SMT = age20_WEB= 0;
var age30_ITI = age30_SMT = age30_WEB = 0;
var age40_ITI= age40_SMT = age40_WEB = 0;
var age50_ITI = age50_SMT = age50_WEB = 0;
var join_2011 = join_2012 = join_2015 = join_2016 = join_2018 = 0;




for(var i=0;i<len;i++){
    if(json[i].gender=="男"){
        malenum+=1;
        
    }
    else if(json[i].gender=="女"){
       femalenum+=1;
    }
    
    if(json[i].position=="主査"){
        syusa+=1;
        
    }
    else if(json[i].position=="課長"){
       katyo+=1;
    }
    else if(json[i].position=="課長代理"){
        katyodairi+=1;
    }
   

}


function getAge(year, month, day){
 
  //誕生年月日
  var birthday  = new Date(year, month-1, day);
 
  //今日
  var today = new Date();
 
  //今年の誕生日
  var thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());  
 
  //今年-誕生年
  var age = today.getFullYear() - birthday.getFullYear();
 
  //今年の誕生日を迎えていなければage-1を返す
  return (today < thisYearBirthday)?age-1:age;
  
}
for(var i=0;i<len;i++){
  
    var birt1= json[i].birthday.split('/');
    var birtyear=birt1[0];
    var birtmouth=birt1[1];
    var birtday=birt1[2];
    var age = getAge(birtyear,birtmouth,birtday);
    if(age<30){
        
        age20+=1;

        //年代別役職
        if(json[i].divisionn=="ITI"){
          age20_ITI+=1;
          
      }
      else if(json[i].division=="SMT"){
        age20_SMT+=1;
      }
      else if(json[i].division=="WEB"){
        age20_WEB+=1;
      }
        
    }
    else if(age<40){
        age30+=1;
            //年代別役職
            if(json[i].division=="ITI"){
              age30_ITI+=1;
              
          }
          else if(json[i].division=="SMT"){
            age30_SMT+=1;
          }
          else if(json[i].division=="WEB"){
            age30_WEB+=1;
          }

    }
    else if(age<50){
        age40+=1;
            //年代別役職
            if(json[i].division=="ITI"){
              age40_ITI+=1;
              
          }
          else if(json[i].division=="SMT"){
            age40_SMT+=1;
          }
          else if(json[i].division=="WEB"){
            age40_WEB+=1;
          }
    }
    else {
        age50+=1;
            //年代別役職
            if(json[i].division=="主査"){
              age50_ITI+=1;
              
          }
          else if(json[i].division=="課長"){
            age50_SMT+=1;
          }
          else if(json[i].division=="課長代理"){
            age50_WEB+=1;
          }
    }

    //入社数
    if(json[i].hireday.indexOf('2011') != -1){
      join_2011+=1;
    }
    else if(json[i].hireday.indexOf('2012') != -1){
      join_2012+=1;
    }
    else if(json[i].hireday.indexOf('2015') != -1){
      join_2015+=1;
    }
    else if(json[i].hireday.indexOf('2016') != -1){
      join_2016+=1;
    }
    else if(json[i].hireday.indexOf('2018') != -1){
      join_2018+=1;
    }


}
//男女比
var ctx = document.getElementById("stage");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['男','女'],
      datasets: [{
          backgroundColor: [
              "blue",
              "red"
          ],
          data: [malenum, femalenum]
      }]
    },
    options: {
      title: {
        display: true,
        text: '男女比'
      }
    }
});
//役職者比
var ctx = document.getElementById("stage2");



  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['主査','課長','課長代理'],
      datasets: [{
          backgroundColor: [
              "yellow",
              "green",
              "yellowgreen"
          ],
          data: [syusa,katyo,katyodairi]
      }]
    },
    options: {
      title: {
        display: true,
        text: '役職者比'
      },
      
    }
});

//年代別
var ctx = document.getElementById("stage3");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20代','30代', '40代', '50代' ],
    datasets: [
      {
        label: 'A店 来客数',
        data: [age20, age30, age40, age50],
        backgroundColor: [
            "#4b0082",
            "#9370db",
            "#1e90ff"
        ],
      }  
    ]
  },
  options: {
    title: {
      display: true,
      text: '年代別'
    },
    legend: {
      display: false
   },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 10,
          suggestedMin: 0,
          stepSize: 1,
          callback: function(value, index, values){
            return  value 
          }
        }
      }]
    },
  }
});



//年代別
var ctx = document.getElementById("stage3");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20代','30代', '40代', '50代' ],
    datasets: [
      {
     
        data: [age20, age30, age40, age50],
        backgroundColor: [
            "#4b0082",
            "#9370db",
            "#1e90ff"
        ],
      }  
    ]
  },
  options: {
    title: {
      display: true,
      text: '年代別'
    },
    legend: {
      display: false
   },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 10,
          suggestedMin: 0,
          stepSize: 1,
          callback: function(value, index, values){
            return  value 
          }
        }
      }]
    },
  }
});

//役職年代別
var ctx = document.getElementById("stage4");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20代','30代', '40代', '50代'],
    datasets: [
      {
        label: 'WEB',
        data: [age20_WEB,age30_WEB,age40_WEB,age50_WEB],
        backgroundColor: "#3399FF"
      },
     {
        label: 'SMT',
        data: [age20_SMT,age30_SMT,age40_SMT,age50_SMT],
        backgroundColor: "#66CC66"
      },
      {
        label: 'ITI',
        data: [age20_ITI,age30_ITI,age40_ITI,age50_ITI],
        backgroundColor: "#FF9933"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: '支店別 来客数'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 5.0,
          suggestedMin: 0,
          stepSize: 0.5,
          callback: function(value, index, values){
            return  value 
          }
        }
      }]
    },
  }
});
//入社数
var ctx = document.getElementById("stage5");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['"2011-04-01"', '2012-04-01' , '2015-04-01', '2011604-01', '2018-04-01'],
      datasets: [
        {
          label: '入社数',
          data: [join_2011,join_2012,join_2015,join_2016,join_2018],
          borderColor: "rgba(255,0,0,1)",
          backgroundColor: "rgba(255,0,0,0.3)",
        }
      ],
    },
    options: {
      title: {
        display: true,
        text: '入社数の推移'
      },
      legend: {
        display: false
     },
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 14,
            suggestedMin: 0,
            stepSize: 2,
            callback: function(value, index, values){
              return  value 
            }
          }
        }]
      },
    }
  });



}
});
});
    
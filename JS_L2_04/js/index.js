"use strict";
var state = "on";

var timeLeft;  // 倒數計時剩餘秒數。
var setting;   // TimerEvent設定值。

function toggleLight() {
  var image = document.getElementById('image');
  if ( state == "on" ) {
    state = "off";
    image.src = "img/off.jpg";
  } else {
    state = "on";
    image.src = "img/on.jpg";
  }
}

function TimerEvent() {
  var countdown = document.getElementById("countdown");
  timeLeft = countdown.value;
  
  if(timeLeft == 0){
	document.getElementById("image").src = "img/off.jpg";
	document.getElementById("timer").innerHTML = timeLeft;
	return;
  } else if(timeLeft < 0){
    document.getElementById("timer").innerHTML = "計時器無法低於0";
    return;
  } else if(isNaN(timeLeft)){
	document.getElementById("timer").innerHTML = "輸入資料不為數字";
    return;
  } else {
    document.getElementById("timer").innerHTML = timeLeft;
    setting = setInterval(countDownTimer, 1000);
  }
}

function countDownTimer(){
  timeLeft = timeLeft - 1;
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
	state = !state;
    clearInterval(setting);
  }
  document.getElementById("timer").innerHTML = timeLeft;
}
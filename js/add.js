'use strict';

let audio = document.querySelector('.audio');
audio.src="audio/Sofi_Tukker-Swing.mp3";

let playButton = document.querySelector('.play'); 
let pauseButton = document.querySelector('.pause'); 
let stopButton = document.querySelector('.stop'); 

playButton.addEventListener('click', function() {
  audio.play();
})

pauseButton.addEventListener('click', function() {
  audio.pause();
})

stopButton.addEventListener('click', function() {
  audio.pause(); 
  audio.currentTime = 0;
})
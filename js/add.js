'use strict';

const audioArr = [
  {src: `audio/Sofi_Tukker-Swing.mp3`, artist: `Sofi Tukker`, name: `"Swing"`},
  {src:`audio/Sofi_Tukker-Purple_Hat.mp3`, artist: `Sofi Tukker`, name: `"Purple Hat"`},
  {src: `audio/Audiojack-Introspection.mp3`, artist: `Audiojack`, name: `"Introspection"`},
  {src: `audio/Max_Richter-November.mp3`, artist: `Max Richter`, name: `"November"`},
  {src: `audio/Monoplay-Gotta_Go.mp3`, artist: `Monoplay`, name: `"Gotta Go"`},
  {src: `audio/Tim_Green-Shiratani.mp3`, artist: `Tim Green`, name: `"Shiratani"`},
  {src: `audio/Tvorchi-Bonfire.mp3`, artist: `Tvorchi`, name: `"Bonfire"`},
  {src: `audio/Vertigini-The_Shrimps.mp3`, artist: `Vertigini`, name: `"The Shrimps"`},
  {src: `audio/Mapei-Don't_Wait.mp3`, artist: `Mapei`, name: `"Don't Wait"`} 
];

let audio = document.querySelector(`#audio`);
let button = document.querySelector(`.play-pause`); 
let song =  document.querySelector(`.track-name`); 

let setText = (el, text) => {
  el.innerHTML = text;
};

let songArr = () => {
  let tracklist =  document.querySelector(`.track-list`);
  let fragment = document.createDocumentFragment();

  tracklist.innerHTML = ``;

  for (let i = 0; i < audioArr.length; i ++) {
    let liElement = document.createElement(`li`);
    let spanElement = document.createElement(`span`);
    spanElement.classList.add(`track-name`);
    spanElement.setAttribute(`data-src`, audioArr[i].src);
    spanElement.textContent = audioArr[i].artist + ` ` + audioArr[i].name;
    
    liElement.append(spanElement);

    fragment.append(liElement);
  }

  tracklist.append(fragment);  

  return tracklist;
};

let playSong = () => {
  audio.src = song.dataset.src;
  let addressSong = audio.src;

  return addressSong;
};

playSong(); // с этой функцией косяк

let steateSong = () => {
  if (audio.paused) {
    setText(button, `Play`);
    audio.play();
  } else {
    setText(button, `Pause`);
    audio.pause();
  }
};

song.addEventListener(`click`, playSong); // косяк

button.addEventListener(`click`, steateSong);

/*
let stopButton = document.querySelector(`.stop`);
stopButton.addEventListener(`click`, function() {
  audio.pause(); 
  audio.currentTime = 0;
})
*/
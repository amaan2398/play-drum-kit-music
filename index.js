// Static Data
const AUDIO_PATH = "sounds/";
const char_audio_map = {
    "w":"tom-1.mp3",
    "a":"tom-2.mp3",
    "s":"tom-3.mp3",
    "d":"tom-4.mp3",
    "j":"snare.mp3",
    "k":"crash.mp3",
    "l":"kick-bass.mp3",
};

// Dynamic Logic
function playAudio(char){
    if(char_audio_map[char] !== undefined){
        var drum_audio = new Audio(AUDIO_PATH+char_audio_map[char]);
        drum_audio.play();
    }
}

var drum_button_arr = document.querySelectorAll(".drum");
var drum_count = drum_button_arr.length;
for(var i = 0; i < drum_count; i++){
    drum_button_arr[i].addEventListener("click",function (){
        var char = this.innerHTML;
        playAudio(char)
    });
}

document.addEventListener("keypress", function(event){
    var key_pressed = event.key;
    playAudio(key_pressed);
});

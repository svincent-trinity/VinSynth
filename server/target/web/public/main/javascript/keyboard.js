//javascript file that controls midi manipulation of the VinSynth


//Web audio context
var audioCtx = new (window.AudioContext || window.webkitAudioContext);

//compression to avoid clipping and distortion
var compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-40, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
compressor.connect(audioCtx.destination);

//lowpass filter
var biquadFilter = audioCtx.createBiquadFilter();
biquadFilter.connect(compressor)
biquadFilter.type = "lowpass"
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);


//volume parameter.
var volumec3 = audioCtx.createGain();
volumec3.connect(biquadFilter);



//Create oscillator objects
var c2sine = { playing: false, inMode: "attack", frequency: 65.41, midiNote: 36, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: .005, ADSRDecay: .005, ADSRSustain: 500, ADSRRelease: .005}
var db2sine = { playing: false, inMode: "attack", frequency: 69.30, midiNote: 37, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var d2sine = { playing: false, inMode: "attack", frequency: 73.42, midiNote: 38, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var eb2sine = { playing: false, inMode: "attack", frequency: 77.78, midiNote: 39, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var e2sine = { playing: false, inMode: "attack", frequency: 82.41, midiNote: 40, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var f2sine = { playing: false, inMode: "attack", frequency: 87.31, midiNote: 41, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var gb2sine = { playing: false, inMode: "attack",frequency: 92.50, midiNote: 42, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var g2sine = { playing: false, inMode: "attack", frequency: 98.00, midiNote: 43, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var ab2sine = { playing: false, inMode: "attack", frequency: 103.83, midiNote: 44, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var a2sine = { playing: false, inMode: "attack", frequency: 110.00, midiNote: 45, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var bb2sine = { playing: false, inMode: "attack", frequency: 116.54, midiNote: 46, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var b2sine = { playing: false, inMode: "attack", frequency: 123.47, midiNote: 47, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var c3sine = { playing: false, inMode: "attack", frequency: 130.81, midiNote: 48, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var db3sine = { playing: false, inMode: "attack", frequency: 138.59, midiNote: 49, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var d3sine = { playing: false, inMode: "attack", frequency: 146.83, midiNote: 50, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var eb3sine = { playing: false, inMode: "attack", frequency: 155.56, midiNote: 51, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var e3sine = { playing: false, inMode: "attack", frequency: 164.81, midiNote: 52, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var f3sine = { playing: false, inMode: "attack", frequency: 174.61, midiNote: 53, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var gb3sine = { playing: false, inMode: "attack", frequency: 185.00, midiNote: 54, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var g3sine = { playing: false, inMode: "attack", frequency: 196.00, midiNote: 55, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var ab3sine = { playing: false, inMode: "attack", frequency: 207.65, midiNote: 56, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var a3sine = { playing: false, inMode: "attack", frequency: 220.00, midiNote: 57, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var bb3sine = { playing: false, inMode: "attack", frequency: 233.08, midiNote: 58, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var b3sine = { playing: false, inMode: "attack", frequency: 246.94, midiNote: 59, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var c4sine = { playing: false, inMode: "attack", frequency: 261.63, midiNote: 60, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var db4sine = { playing: false, inMode: "attack", frequency: 277.18, midiNote: 61, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var d4sine = { playing: false, inMode: "attack", frequency: 293.66, midiNote: 62, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var eb4sine = { playing: false, inMode: "attack", frequency: 311.13, midiNote: 63, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var e4sine = { playing: false, inMode: "attack", frequency: 329.63, midiNote: 64, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var f4sine = { playing: false, inMode: "attack", frequency: 349.23, midiNote: 65, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var gb4sine = { playing: false, inMode: "attack", frequency: 369.99, midiNote: 66, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var g4sine = { playing: false, inMode: "attack", frequency: 392.00, midiNote: 67, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var ab4sine = { playing: false, inMode: "attack", frequency: 415.30, midiNote: 68, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var a4sine = { playing: false, inMode: "attack", frequency: 440.00, midiNote: 69, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var bb4sine = { playing: false, inMode: "attack", frequency: 466.16, midiNote: 70, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var b4sine = { playing: false, inMode: "attack", frequency: 493.88, midiNote: 71, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var c5sine = { playing: false, inMode: "attack", frequency: 523.25, midiNote: 72, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var db5sine = { playing: false, inMode: "attack", frequency: 554.37, midiNote: 73, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var d5sine = { playing: false, inMode: "attack", frequency: 587.33, midiNote: 74, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var eb5sine = { playing: false, inMode: "attack", frequency: 622.25, midiNote: 75, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var e5sine = { playing: false, inMode: "attack", frequency: 659.25, midiNote: 76, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var f5sine = { playing: false, inMode: "attack", frequency: 698.46, midiNote: 77, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var gb5sine = { playing: false, inMode: "attack", frequency: 739.99, midiNote: 78, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var g5sine = { playing: false, inMode: "attack", frequency: 783.99, midiNote: 79, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var ab5sine = { playing: false, inMode: "attack", frequency: 830.61, midiNote: 80, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var a5sine = { playing: false, inMode: "attack", frequency: 880.00, midiNote: 81, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var bb5sine = { playing: false, inMode: "attack", frequency: 932.33, midiNote: 82, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var b5sine = { playing: false, inMode: "attack", frequency: 987.77, midiNote: 83, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
var c6sine = { playing: false, inMode: "attack", frequency: 1046.50, midiNote: 84, oscil: audioCtx.createOscillator(), ADSRgain: audioCtx.createGain(), ADSRAttack: 500, ADSRDecay: 500, ADSRSustain: 500, ADSRRelease: 500}
const oscils = [c2sine, db2sine, d2sine, eb2sine, e2sine, f2sine, gb2sine, g2sine, ab2sine, a2sine, bb2sine, b2sine, c3sine, 
                        db3sine, d3sine, eb3sine, e3sine, f3sine, gb3sine, g3sine, ab3sine, a3sine, bb3sine, b3sine, c4sine,
                        db4sine, d4sine, eb4sine, e4sine, f4sine, gb4sine, g4sine, ab4sine, a4sine, bb4sine, b4sine, c5sine,
                        db5sine, d5sine, eb5sine, e5sine, f5sine, gb5sine, g5sine, ab5sine, a5sine, bb5sine, b5sine, c6sine]

//grab the canvas and get context
var c = document.getElementById("kbdcanv");
var ctx = c.getContext("2d");

//write prompts for gain and low pass filter
function filltextoncanv() {
    ctx.font = "15px Arial";
    ctx.fillText("Gain", 120, 390);
    ctx.fillText("Filter", 160, 390);
}

//get mouse location on canvas, apply it to volume knob position
let volumeKnobPosition = 0;
let filterKnobPosition = 0;

function getMousePosition(canvas, event) { 
    let rect = canvas.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    console.log("Coordinate x: " + x,  
                "Coordinate y: " + y); 
    if(x < 151 && x > 130 && y < 485 && y > 400) {
    	moveVolumeKnob(y)
    } else if(x > 159 && x < 172 && y < 273 && y > 260) {
        prefdotloc = [0,0];
        //console.log(prefdotloc)
        //changeoscil('sine')
    } else if(x > 174 && x < 188 && y < 273 && y > 260) {
        prefdotloc = [17,0];
        //console.log(prefdotloc)\
        //changeoscil('square')
    } else if(x > 159 && x < 172 && y < 287 && y > 278) {
        prefdotloc = [0,15];
        //console.log(prefdotloc)
        //changeoscil('triangle')
    } else if(x > 174 && x < 188 && y < 287 && y > 278) {
        prefdotloc = [17,15];
        //console.log(prefdotloc)
        //changeoscil('sawtooth')
    } else if(x <601 && x > 592 && y > 238 && y < 281) {
        attackloc = y - 256 - 12;

    } else if(x <618 && x > 610 && y > 238 && y < 281) {
        decayloc = y - 256 - 12;
    } else if(x <634 && x > 624 && y > 238 && y < 281) {
        sustainloc = y - 256 - 12;
    } else if(x <649 && x > 639 && y > 238 && y < 281) {
        releaseloc = y - 256 - 12;
    } else if (x > 169 && x < 188 && y > 401 && y < 485) {
        moveFilterKnob(y)
    }
    updateADSRValues();
}

function updateADSRValues() {
    for(let i=0; i < oscils.length; i++) {
        oscils[i].ADSRAttack = .0005 * (attackloc+28)
        //console.log(oscils[i].ADSRAttack)
        oscils[i].ADSRDecay = .0005 * (decayloc+28)
        oscils[i].ADSRSustain = 500 - (50*(sustainloc + 12)) + 700
        //console.log(sustainloc)
        //console.log(oscils[i].ADSRSustain)
        oscils[i].ADSRRelease = .0005 * (releaseloc+28)
    }
}

function moveVolumeKnob(yPos) {
	volumeKnobPosition = yPos - 442
	volumec3.gain.value = ((400-yPos + 100) / 100.0) - .18
	//console.log(volumec3.gain.value)
}

function moveFilterKnob(yPos) {
    console.log("filtering")
    filterKnobPosition = yPos - 442
    let freq = Math.pow(-(yPos - 500), 2)
    biquadFilter.frequency.setValueAtTime(freq, audioCtx.currentTime);
    console.log(Math.pow(-(yPos - 500), 2))
    //do filter stuff here
}

let canvasElem = document.querySelector("canvas"); 
  
canvasElem.addEventListener("mousedown", function(e) 
{ 
    getMousePosition(canvasElem, e); 
}); 

//what notes are being played at any given time
var currNotes = [];

//preliminary note input handler, starts with no notes
let noteInput = document.getElementById("notePlayed");
noteInput.value = "";

//figures out if any midi device is connected
navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);


//load the keyboard image
var kbdimg = document.createElement('img');
kbdimg.src = document.getElementById("routeimg").value;
kbdimg.onload = function(){
  ctx.drawImage(kbdimg, 0, 0);

}
//load the waveform preference image
var waveimg = document.createElement('img');
waveimg.src = document.getElementById("waveimg").value;
waveimg.onload = function(){
  ctx.drawImage(waveimg, 0, 0);

}

//load the waveform preference dot image
var prefdotloc = [0,0];
var attackloc = -12;
var decayloc = -12;
var sustainloc = -12;
var releaseloc = -12;
var prefdotimg = document.createElement('img');
prefdotimg.src = document.getElementById("prefdotimg").value;
prefdotimg.onload = function(){
  ctx.drawImage(prefdotimg, 0, 0);

}
//load the dot image
var dotimg = document.createElement('img');
dotimg.src = document.getElementById("dotimg").value;
dotimg.onload = function(){
  console.log("loaded dot");
}

//load the volume image
var volimg = document.createElement('img');
volimg.src = document.getElementById("volimg").value;
volimg.onload = function(){
  ctx.drawImage(volimg, 0, 0);

}

//load the ASDR graphic
var asdrimg = document.createElement('img');
asdrimg.src = document.getElementById("ASDRimg").value;
asdrimg.onload = function(){
  ctx.drawImage(asdrimg, 0, 0);
}

function drawFilterImage() {
    ctx.fillColor = "black"
    ctx.rect(165,399,19,81)
    ctx.fill()
    ctx.drawImage(volimg, 37, filterKnobPosition);

    
}

//every 10 milliseconds, update the image of the keyboard with the notes that are pressed
window.setInterval(reloadKeyboard, 10);
function reloadKeyboard() {
	ctx.clearRect(0, 0, 800, 600);
    ctx.drawImage(kbdimg, 0, 0);
    ctx.drawImage(volimg, 0, volumeKnobPosition);
    ctx.drawImage(waveimg, 0, 0);
    ctx.drawImage(prefdotimg, prefdotloc[0], prefdotloc[1])
    ctx.drawImage(asdrimg, 0, 0);
    ctx.drawImage(prefdotimg, 432, attackloc)
    ctx.drawImage(prefdotimg, 448, decayloc)
    ctx.drawImage(prefdotimg, 463, sustainloc)
    ctx.drawImage(prefdotimg, 479, releaseloc)

    for(let i=0; i < currNotes.length; i++) {
    	if(currNotes[i]%25==0) ctx.drawImage(dotimg, currNotes[i], 0);
        else ctx.drawImage(dotimg, currNotes[i], -40)
    }

    runADSRgains();
    filltextoncanv();
    drawFilterImage();
    //moveFilterKnob(filterKnobPosition)
}

function runADSRgains() {
    for(let i=0; i < oscils.length; i++) {
        if(oscils[i].playing) {
            if(oscils[i].inMode == "attack") {
                //console.log(oscils[i].ADSRAttack)
                oscils[i].ADSRgain.gain.value += oscils[i].ADSRAttack
                //oscils[i].ADSRAttack -= 10
                //console.log("attack")
                if(oscils[i].ADSRgain.gain.value > .4) oscils[i].inMode = "decay"
            }
            if(oscils[i].inMode == "decay") {
                oscils[i].ADSRgain.gain.value -= oscils[i].ADSRDecay
                //console.log("decay")
                if(oscils[i].ADSRgain.gain.value < .2) oscils[i].inMode = "sustain"
            }
            if(oscils[i].inMode == "sustain") {
                //console.log("sustain")
                oscils[i].ADSRSustain -= 5
                if(oscils[i].ADSRSustain < 0) oscils[i].inMode = "release"
            }
            if(oscils[i].inMode == "release") {
                oscils[i].ADSRgain.gain.value -= oscils[i].ADSRRelease
                //console.log("release")
                if(oscils[i].ADSRgain.gain.value <= 0) {
                    oscils[i].oscil.stop()
                    updateADSRValues()
                    oscils[i].playing = false;
                    oscils[i].inMode = "attack"
                }
            }
        }
    }
}

//get midi input
function onMIDISuccess(midiAccess) {
    console.log(midiAccess);
    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}

//if your midi device is too janky
function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//get the midi input as an object
function getMIDIMessage(midiMessage) {
    if(midiMessage.data[0] == 144) {
    	//console.log("note on")
    	noteInput.value = midiMessage.data[1];
    	startNoteGraphic(noteInput.value);
        createOscillation(midiMessage.data[1]);
    } else if(midiMessage.data[0] == 128) {
    	//console.log("note off")
        removeFromCurrNotes(noteInput.value)
        stopOscillation(midiMessage.data[1])
    }
}



function getOscilType() {
    if(prefdotloc[0] == 0 && prefdotloc[1] == 0) {console.log("2sine"); return 'sine'; }
    else if(prefdotloc[0] == 17 && prefdotloc[1] == 0) {console.log("2square");return 'square'; }
    else if(prefdotloc[0] == 0 && prefdotloc[1] == 15) return 'triangle';
    else if(prefdotloc[0] == 17 && prefdotloc[1] == 15) return 'sawtooth';
    else console.log("nothing equals")
}

//start oscillation when midi note is hit
function createOscillation(midiNote) {
    updateADSRValues()
    for(let i = 0; i < oscils.length; i++) {
        if(oscils[i].midiNote == midiNote) {
            if(oscils[i].playing) oscils[i].oscil.stop();
            oscils[i].oscil = audioCtx.createOscillator();
            oscils[i].oscil.frequency.value = oscils[i].frequency;
            oscils[i].oscil.type = getOscilType();
            oscils[i].playing = true;
            oscils[i].inMode = "attack"
            oscils[i].ADSRgain = audioCtx.createGain()
            oscils[i].ADSRgain.gain.value = 0;
            oscils[i].oscil.start();
            oscils[i].oscil.connect(oscils[i].ADSRgain);
            oscils[i].ADSRgain.connect(volumec3);
        }
    }
}



//stop oscillation when midi off event is detected
function stopOscillation(midiNote) {
    for(let i = 0; i < oscils.length; i++) {
        if(oscils[i].midiNote == midiNote) {
            //oscils[i].playing = false;
            oscils[i].inMode = "release";
        }
    }
}


//function that deletes from currNotes when key is lifted up
function removeFromCurrNotes(val) {
    let tmp = [];
    for(let i = 0; i < currNotes.length; i++) {
    	if(!currNotes[i] == val) {
    		tmp.push(currNotes[i])
    	}
    }
    currNotes = tmp
}


//function that does specific graphical event for midi message
function startNoteGraphic(noteIn) {
	//console.log(noteIn)
	if (noteIn == 48) {
		currNotes.push(0)
	}else if (noteIn == 49) {
        currNotes.push(12)
    }else if (noteIn == 50) {
		currNotes.push(25)
	}else if (noteIn == 51) {
        currNotes.push(37)
    }else if (noteIn == 52) {
		currNotes.push(50)
	}else if (noteIn == 53) {
		currNotes.push(75)
	}else if (noteIn == 54) {
        currNotes.push(87)
    }else if (noteIn == 55) {
		currNotes.push(100)
	}else if (noteIn == 56) {
        currNotes.push(112)
    }else if (noteIn == 57) {
		currNotes.push(125)
	} else if (noteIn == 58) {
        currNotes.push(137)
    }else if (noteIn == 59) {
		currNotes.push(150)
	} else if (noteIn == 60) {
		currNotes.push(175)
	}else if (noteIn == 61) {
        currNotes.push(187)
    }else if (noteIn == 62) {
		currNotes.push(200)
	}else if (noteIn == 63) {
        currNotes.push(212)
    }else if (noteIn == 64) {
		currNotes.push(225)
	}else if (noteIn == 65) {
		currNotes.push(250)
	}else if (noteIn == 66) {
        currNotes.push(262)
    }else if (noteIn == 67) {
		currNotes.push(275)
	}else if (noteIn == 68) {
        currNotes.push(287)
    }else if (noteIn == 69) {
		currNotes.push(300)
	}else if (noteIn == 70) {
        currNotes.push(312)
    }else if (noteIn == 71) {
		currNotes.push(325)
	} else if (noteIn == 72) {
		currNotes.push(350)
	} 


}


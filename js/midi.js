var midi, data;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("No MIDI support in your browser.");
}

// midi functions
function onMIDISuccess(midiAccess) {
    midi = midiAccess;

    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = onMIDIMessage;
    }
}

function onMIDIFailure(error) {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
}

function onMIDIMessage(message) {
    data = message.data; // this gives us our [command/channel, note, velocity] data.
    command = data[0];
    note = data[1];
    velocity = data[2];
    drawCircle(note * 3, velocity);

    if(velocity > 0){
        MIDI.noteOn(0, note, velocity)
    } else{
        MIDI.noteOff(0, note)
    }
}

function drawCircle(color, radius){
    if(radius != 0){
        var randomX = Math.floor(Math.random() * ctx.canvas.width);
        var randomY = Math.floor(Math.random() * ctx.canvas.height);

        ctx.beginPath();
        ctx.arc(randomX,randomY,radius,0, 2*Math.PI);
        ctx.strokeStyle = 'hsl(' + color + ',100%,50%)';
        ctx.stroke();
        ctx.closePath();
    }
}

function clearCanvas() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

function init_midi_js(){
    MIDI.loadPlugin({
        instrument: "acoustic_grand_piano"
    });
}

function init_canvas(){
    canvas = $("#canvas").get(0);
    ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth / 2;
    ctx.canvas.height = window.innerHeight / 2;
}


$(document).ready(function() {
    init_midi_js();
    init_canvas()
});

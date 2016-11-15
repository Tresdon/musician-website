/*var midi, data;

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

    if(velocity > 0){
        MIDI.noteOn(0, note, velocity)
    } else{
        MIDI.noteOff(0, note)
    }
}

function init_midi_js(){
    MIDI.loadPlugin({
        instrument: "acoustic_grand_piano",
        onprogress: function (state, progress) {
            console.log(state, progress);
        },
        onsuccess: function () {}
    });
}


$(document).ready(function() {
    init_midi_js();
});
*/
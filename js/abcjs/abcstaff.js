$(document).ready(function () {
    init();
    renderNotation();
    updateNotation();
    renderMidi();
});

function init(){
    abc_editor = new ABCJS.Editor("abc", { paper_id: "staff",
        generate_midi: true,
        midi_id:"abc-midi",
        warnings_id:"warnings" });

    MIDI.loadPlugin({
        instrument: "acoustic_grand_piano"
    });
}

function renderNotation(){
    ABCJS.renderAbc('abc', $("#abc").val());
    renderMidi()
}

function updateNotation(){
    $("#abc").on('input', renderNotation);
}

function renderMidi(){
    var noteEvents = [];
    ["C4", "E4", "G4"].forEach(function(note) {
        Array.prototype.push.apply(noteEvents, MidiEvent.createNote(note));
    });

// Create a track that contains the events to play the notes above
    var track = new MidiTrack({ events: noteEvents });

// Creates an object that contains the final MIDI track in base64 and some
// useful methods.
    var song  = MidiWriter({ tracks: [track] });

// Alert the base64 representation of the MIDI file
    alert(song.b64);

// Play the song
    song.play();
    /*
    window.ABCJS.renderMidi("abc-midi", $("#abc").val(), {}, { generateInline: true }, {});
    midiData = $("#abc-midi a").attr('href').substring(16);
    //var audio = $("#midi-audio");
    //MIDI.Player.loadFile(midiData, MIDI.Player.start, progress, failed);
    console.log(midiData)*/
}

function failed(){
    console.log("FAILED")
}

function progress(){
    console.log("Progress")
}

function onSuccess(){
    MIDI.Player.start();
}
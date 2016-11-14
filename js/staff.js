/*
function init() {

    VF = Vex.Flow;
    window_width = $(window).width();

// Create an SVG renderer and attach it to the DIV element named "boo".
    staff = document.getElementById("staff");
    renderer = new VF.Renderer(staff, VF.Renderer.Backends.SVG);

// Configure the rendering context.
    renderer.resize(window_width, 200);
    context = renderer.getContext();
    context.setFont("Arial", 12, "").setBackgroundFillStyle("#eed");

    trebleClef = new VF.Stave(window_width * .1, 0, window_width - (window_width * .2));
    bassClef = new VF.Stave(window_width * .1, 75, window_width - (window_width * .2));


// Add a clef and time signature.
    trebleClef.addClef("treble").addTimeSignature("4/4");
    bassClef.addClef("bass").addTimeSignature("4/4");


    trebleClef.setContext(context).draw();
    bassClef.setContext(context).draw();

}

$(document).ready(function () {
    init();
    updateNotes();
});


function drawNotes() {
    var notesText = $("#notes-in-staff").val().replace(/ /g, '');

    var noteArray = notesText.split('');
    console.log(noteArray)

    notes = [];
    validNotes = ["a", "b", "c", "d", "e", "f", "g"];

    for (var i = 0; i < noteArray.length ; i++){
        note = noteArray[i]
        console.log(note)
        // We'll just ignore invalid notes
        if(validNotes.indexOf(note) != -1) {
            noteToUse = note + "/4";
            var vfNote = new VF.StaveNote({clef: "treble", keys: [noteToUse], duration: "q"});
            notes.push(vfNote)
        }
    }

    console.log(notes)

    var voice = new VF.Voice({num_beats: notes.length,  beat_value: 4});
    voice.addTickables(notes);

    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], window_width * .7);
    voice.draw(context, stave);
}

function updateNotes(){
    $("#notes-in-staff").on('input', drawNotes);
}
*/
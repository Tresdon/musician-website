$(document).ready(function () {
    init();
    renderNotation();
    updateNotation();
    renderMidi();
});

function init(){
    abc_editor = new ABCJS.Editor("abc", { paper_id: "staff",
        generate_midi: true,
        midi_id:"midi",
        warnings_id:"warnings" });
}

function renderNotation(){
    ABCJS.renderAbc('abc', $("#abc").val());
}

function updateNotation(){
    $("#abc").on('input', renderNotation);
    $("#upper").focus()
    renderMidi();
}

function renderMidi(){
    window.ABCJS.midi.soundfontUrl = "/path/to/soundfonts/";
    window.ABCJS.renderMidi("midi", $("#abc").val(), {}, { generateInline: true }, {});
}
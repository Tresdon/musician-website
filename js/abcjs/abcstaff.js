$(document).ready(function () {
    init();
    renderMidi();
    $("#abc-midi a").html('Download MIDI for "Etude of Platte"')

});

function init(){
    abc_editor = new ABCJS.Editor("abc", {
        paper_id: "staff",
        generate_midi: true,
        midi_id:"abc-midi",
        warnings_id:"warnings",
        width: "100%",
        editable: true
    });
    $("#abc").on('input', renderMidi);

}

function renderMidi(){
    window.ABCJS.renderMidi("abc-midi", $("#abc").val(), {}, {
        generateDownload: true,
        downloadLabel: "Download MIDI: ",
        generateInline: true
    }, {});
}

function etudeOfPlatte(){
    text =
"X:1 \n\
T: Etude of Platte \n\
C: Tresdon Jones \n\
M: 4/4 \n\
abce | abce | bcde | fbcd| bcde | \n\
B3a1 | CD3 | Ba3 | B4| bcde | \n\
a2c2 | a1c3 | bcde | b2cd| bed2 || \n";
    $("#abc").text(text);
    $("#abc").trigger('focus');
}

function whyWontItSnow(){
    text =
"X:1 \n\
T: Why Won't it Snow \n\
C: Tresdon Jones \n\
M: 4/4 \n\
d2a2 | bcd2 | AB3 | fbcd| ABCD | \n\
A4 | a1c3 | b4 | b2cd| bed2 || \n\
W: Why won't it snow it's november. \n\
W: Come on snow, come on please";
    $("#abc").text(text)
    $("#abc").trigger('focus');

}

function appleTree(){
    text =
"X:1 \n\
T: Apple Tree \n\
C: Tresdon Jones \n\
M: 4/4 \n\
d3a1 | B4 | ABCD | b2a2| \n";
    $("#abc").text(text)
    $("#abc").trigger('focus');
}
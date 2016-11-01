VF = Vex.Flow;
window_width = $(window).width();

// Create an SVG renderer and attach it to the DIV element named "boo".
var staff = document.getElementById("staff")
var renderer = new VF.Renderer(staff, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(screen.width, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(50, 0, window_width - 100);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
var colours = ["yeet", "yote", "beet", "bote", "hecc"];
console.log(colours[0]);
console.log(colours[2]);

colours[4] = "ultraviolet";
var fourthcolour = colours[3]
colours.push("yacht");

colours.unshift("bacht");

console.log(colours.length);
colours.pop();
console.log(colours.length);

var ben;
var shapiro = " ";
for (var ben = 0; ben < colours.length; ben++) {
	shapiro += colours[ben] + " ";
}
console.log(shapiro);

var b2e2n2;
var s2h2a2p2i2r2o2 = " ";
for (var b2e2n2 = 0; b2e2n2 < colours.length; b2e2n2++) {
	s2h2a2p2i2r2o2 += b2e2n2 + " " + colours[b2e2n2] + ", ";
}
console.log(s2h2a2p2i2r2o2);

var lastColour = colours[colours.length-1];
console.log(lastColour);
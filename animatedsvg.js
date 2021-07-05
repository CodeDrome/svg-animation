
"use strict"


window.onload = function()
{
    // basicDemo();

	mondrian();
}


function basicDemo()
{
	AnimatedSVGLibrary.line(
        {
            id: "svg",
            pos1: {x: 16, y: 256},
            pos2: {x: 496, y: 256},
            strokeColor: "#000000",
			strokeWidth: 16,
            startAnimationPos: {x: 0, y: 0},
            duration: 2000
        });

    AnimatedSVGLibrary.circle(
        {
            id: "svg",
            circle: {cx: 256, cy: 256, r: 64},
            colors: {stroke: "#000000", fill: "#00C000"},
            startAnimationPos: {x: 0, y: 0},
            duration: 2000
        });

    AnimatedSVGLibrary.ellipse(
        {
            id: "svg",
            ellipse: {cx: 104, cy: 256, rx: 64, ry: 192},
            colors: {stroke: "#000000", fill: "#C00000"},
            startAnimationPos: {x: 0, y: 0},
            duration: 2000
        });

    AnimatedSVGLibrary.rectangle(
        {
            id: "svg",
            rectangle: {x: 344, y: 32, width: 128, height: 448},
            colors: {stroke: "#000000", fill: "#0000C0"},
            startAnimationPos: {x: 0, y: 0},
            duration: 2000
        });
}


function mondrian()
{
	const corners = [0, 512];

	const rectangles =
	[
		{coords: {x: 64, y: 64, width: 256, height: 256}, color: "#FF0000"},
		{coords: {x: 64, y: 320, width: 128, height: 128}, color: "#000000"},
		{coords: {x: 0, y: 384, width: 64, height: 128}, color: "#FFC000"},
		{coords: {x: 320, y: 0, width: 128, height: 192}, color: "#FFC000"},
		{coords: {x: 320, y: 384, width: 128, height: 64}, color: "#0000C0"},
		{coords: {x: 448, y: 384, width: 64, height: 128}, color: "#FF0000"}
	];

	for(const rectangle of rectangles)
	{
    	AnimatedSVGLibrary.rectangle(
        {
            id: "svg",
            rectangle: rectangle.coords,
            colors: {stroke: rectangle.color, fill: rectangle.color},
            startAnimationPos:
			{
				x: corners[Math.round(Math.random())],
				y: corners[Math.round(Math.random())]
			},
            duration: Math.floor(Math.random() * 5000) + 2000
        });
	}

	const lines =
	[
		{pos1: {x: 0, y: 64}, pos2: {x: 448, y: 64}},
		{pos1: {x: 64, y: 64}, pos2: {x: 64, y: 512}},
		{pos1: {x: 0, y: 192}, pos2: {x: 64, y: 192}},
		{pos1: {x: 0, y: 384}, pos2: {x: 512, y: 384}},
		{pos1: {x: 128, y: 0}, pos2: {x: 128, y: 64}},
		{pos1: {x: 320, y: 0}, pos2: {x: 320, y: 448}},
		{pos1: {x: 64, y: 320}, pos2: {x: 448, y: 320}},
		{pos1: {x: 320, y: 192}, pos2: {x: 448, y: 192}},
		{pos1: {x: 64, y: 448}, pos2: {x: 448, y: 448}},
		{pos1: {x: 448, y: 0}, pos2: {x: 448, y: 512}},
		{pos1: {x: 192, y: 320}, pos2: {x: 192, y: 512}},
		{pos1: {x: 384, y: 192}, pos2: {x: 384, y: 320}},
	];

	for(const line of lines)
	{
		AnimatedSVGLibrary.line(
        {
            id: "svg",
            pos1: line.pos1,
            pos2: line.pos2,
            strokeColor: "#000000",
			strokeWidth: 8,
            startAnimationPos:
			{
				x: corners[Math.round(Math.random())],
				y: corners[Math.round(Math.random())]
			},
            duration: Math.floor(Math.random() * 5000) + 2000
        });

	}
}

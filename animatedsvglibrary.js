class AnimatedSVGLibrary
{
	static line(settings)
	{
		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

		line.setAttributeNS(null, "x1", settings.startAnimationPos.x);
		line.setAttributeNS(null, "y1", settings.startAnimationPos.y);
		line.setAttributeNS(null, "x2", settings.startAnimationPos.x);
		line.setAttributeNS(null, "y2", settings.startAnimationPos.y);

	    line.setAttributeNS(null, "stroke", settings.strokeColor);
    	line.setAttributeNS(null, "stroke-width", 0);

	    document.getElementById(settings.id).appendChild(line);

	    anime(
	    {
	        targets: line,
	        x1: settings.pos1.x,
	        y1: settings.pos1.y,
	        x2: settings.pos2.x,
	        y2: settings.pos2.y,
			"stroke-width": settings.strokeWidth,
	        duration: settings.duration,
	        easing: 'easeInOutQuad',
	    });
	}

	static circle(settings)
	{
		const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

		circle.setAttributeNS(null, "cx", settings.startAnimationPos.x);
		circle.setAttributeNS(null, "cy", settings.startAnimationPos.y);
		circle.setAttributeNS(null, "r", 0);

    	circle.setAttributeNS(null, "stroke", settings.colors.stroke);
    	circle.setAttributeNS(null, "fill", settings.colors.fill);

    	document.getElementById(settings.id).appendChild(circle);

    	anime(
    	{
        	targets: circle,
        	cx: settings.circle.cx,
        	cy: settings.circle.cy,
        	r: settings.circle.r,
        	duration: settings.duration,
        	easing: 'easeInOutQuad',
    	});
	}

	static ellipse(settings)
	{
		const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

		ellipse.setAttributeNS(null, "cx", settings.startAnimationPos.x);
		ellipse.setAttributeNS(null, "cy", settings.startAnimationPos.y);
		ellipse.setAttributeNS(null, "rx", 0);
		ellipse.setAttributeNS(null, "ry", 0);

    	ellipse.setAttributeNS(null, "stroke", settings.colors.stroke);
    	ellipse.setAttributeNS(null, "fill", settings.colors.fill);

    	document.getElementById(settings.id).appendChild(ellipse);

    	anime(
    	{
        	targets: ellipse,
        	cx: settings.ellipse.cx,
        	cy: settings.ellipse.cy,
        	rx: settings.ellipse.rx,
        	ry: settings.ellipse.ry,
        	duration: settings.duration,
        	easing: 'easeInOutQuad',
    	});
	}

	static rectangle(settings)
	{
		const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

		rect.setAttributeNS(null, 'x', settings.startAnimationPos.x);
		rect.setAttributeNS(null, 'y', settings.startAnimationPos.y);
		rect.setAttributeNS(null, 'height', 0);
		rect.setAttributeNS(null, 'width', 0);

    	rect.setAttributeNS(null, 'fill', settings.colors.fill);
    	rect.setAttributeNS(null, 'stroke', settings.colors.stroke);

    	document.getElementById(settings.id).appendChild(rect);

    	anime(
    	{
        	targets: rect,
        	x: settings.rectangle.x,
        	y: settings.rectangle.y,
        	height: settings.rectangle.height,
        	width: settings.rectangle.width,
        	duration: settings.duration,
        	easing: 'easeInOutQuad'
    	});
	}
}

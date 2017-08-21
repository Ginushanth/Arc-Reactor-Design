function toRadians(degree)
{
	var converter=Math.PI/180;
	var rad=degree*converter;
	return rad;
}
function onLoadContentButton()
{

	var button=document.getElementById("getContent");
	var windowWidth=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	button.style.top=450+"px";
	if (windowWidth<980)
	{
		button.style.left=740+"px";
	}
	else
	{
		button.style.left=windowWidth*0.75+"px";
	}
	button.style.width="100px";
	setTimeout(function(){
		button.style.opacity="1";
	},2100);
}
function home(){
	
}
function nonAnimatedDrawing()
{
//If you re-size the window there will be no animation, it will all be just drawn
	var windowWidth=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	//Canvas parameters
	var canvasHeight= 900;
	var canvasWidth= windowWidth*0.97;//if 100, there is a scroll bar
	var c=document.getElementById("myCanvasAnimate");
	var ctx=c.getContext("2d");
	var canvasDiv=document.getElementById("canvasWrapper");
	
	$("#myCanvasSkeleton").remove();//Remove the skeleton drawing
	if (canvasWidth<950)
	{
		canvasWidth=950;
	}
	if (canvasHeight<850)
	{
		canvasHeight=850;
	}
	canvasDiv.style.height=canvasHeight+"px";
	c.setAttribute("width",canvasWidth);
	c.setAttribute("height",canvasHeight);
	c.style.display = "block";//Originally set to none so the size can change

	//Photo positioning for circle
	var photo=document.getElementById("photo");
	var photoX=canvasWidth*0.5;
	var photoY=500;
	var photoRadius=100;
	var photoDimension=photoRadius*2-6;
	photo.style.height=photoDimension+"px";
	photo.style.width=photoDimension+ "px";

	if (photoRadius<80)
	{
		photoRadius=80;
		photoDimension=photoRadius*2-6;

	}

	//Outer Circle Drawing Parameters
	var outerCircleRadius=180;
	var outerCircleAngles=[];
	var numberOfAngles=15;
	var counter;
	var outerGapAngle=toRadians(10);
	var outerDrawAngle=toRadians(30);
	var outerBigGapAngle=toRadians(30);
	var angle=toRadians(15);//Current starting point
	outerCircleAngles.push(angle); 
	for (counter=0; counter<numberOfAngles;counter++)
	{

		if (counter==7)
		{
			angle+=outerBigGapAngle;
			outerCircleAngles.push(angle);
		}
		else if (counter%2==0)//Even
		{
			angle+=outerDrawAngle;
			outerCircleAngles.push(angle);
		}
		else if (counter%2==1)//Odd
		{
			angle+=outerGapAngle;
			outerCircleAngles.push(angle);
		}
	}
	var middleCircleRadius=160;

	//Inner Circle Drawing Parameters

	var innerCircleRadius=145;
	var innerCircleAngles=[];
	var numberOfAngles=15;
	var innerGapAngle=toRadians(20);
	var innerDrawAngle=toRadians(20);
	var innerBigGapAngle=toRadians(40);
	angle=toRadians(20);//Current starting point
	innerCircleAngles.push(angle); 
	for (counter=0; counter<numberOfAngles;counter++)
	{

		if (counter==7)
		{
			angle+=innerBigGapAngle;
			innerCircleAngles.push(angle);
		}
		else if (counter%2==0)//Even
		{
			angle+=innerDrawAngle;
			innerCircleAngles.push(angle);
		}
		else if (counter%2==1)//Odd
		{
			angle+=innerGapAngle;
			innerCircleAngles.push(angle);
		}
	}
	//Line to Circle drawings
	//Each path has 2 lines and a circle.
	//Paths
	//x2,y2= start of circle end of line 1 and beginning of line 2
	var coordinates=[];
	var Path1={x1:canvasWidth*0.3,y1:0,x2:canvasWidth*0.3,y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(210)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(210))};
	var Path2={x1:canvasWidth*0.4,y1:0,x2:canvasWidth*0.4, y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(243.75)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(243.75))};
	var Path3={x1:canvasWidth*0.6,y1:0,x2:canvasWidth*0.6,y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(294)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(294))};
	var Path4={x1:canvasWidth*0.7,y1:0,x2:canvasWidth*0.7, y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(327)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(327))};
	var Path5={x1:canvasWidth*0.3,y1:canvasHeight,x2:canvasWidth*0.3,y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(147)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(147))};
	var Path6={x1:canvasWidth*0.4,y1:canvasHeight,x2:canvasWidth*0.4, y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(114)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(114))};
	var Path7={x1:canvasWidth*0.6,y1:canvasHeight,x2:canvasWidth*0.6,y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(63.75)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(63.75))};
	var Path8={x1:canvasWidth*0.7,y1:canvasHeight,x2:canvasWidth*0.7, y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(30)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(30))};

	//Get co-ordinates for drawing the paths
	//coordinates[0] is empty
	counter=1;
	var fieldCounter=1;
	var pathCounter=1;
	for (counter=1; counter<=48;counter++)
	{
		if (counter==7||counter==13||counter==19||counter==25||counter==31||counter==37||counter==43)
		{
			pathCounter++;
			fieldCounter=1;
		}

		if (counter%2==0)
		{
			coordinates[counter]=eval("Path"+pathCounter+".y"+fieldCounter);
			fieldCounter++;
			

		}
		else if (counter%2==1)
		{
			coordinates[counter]=eval("Path"+pathCounter+".x"+fieldCounter);

		}
	}




	//-------------------------Drawings-------------------------//

	//Draw all paths
	counter=1;
	ctx.lineWidth=12;
	var coordinateCounter=1;
	var pathPartCounter=1;
	for (counter=1; counter<=48;counter++)
	{

		ctx.shadowBlur=20;
		ctx.shadowColor="white";
		ctx.strokeStyle="cyan";
		if (pathPartCounter==1)//Line 1
		{
			ctx.beginPath();
			ctx.moveTo(coordinates[coordinateCounter],coordinates[coordinateCounter+1]);
			ctx.lineTo(coordinates[coordinateCounter+2],coordinates[coordinateCounter+3]);
			coordinateCounter+=2;
			ctx.stroke();
			ctx.closePath();
			pathPartCounter++;
		}
		else if(pathPartCounter==2)//Line 2
		{
			ctx.beginPath();
			ctx.moveTo(coordinates[coordinateCounter],coordinates[coordinateCounter+1]);
			ctx.lineTo(coordinates[coordinateCounter+2],coordinates[coordinateCounter+3]);
			ctx.stroke();
			ctx.closePath();
			pathPartCounter++;
		}

		else if (pathPartCounter==3)//Circles
		{
			ctx.beginPath();
			ctx.arc(coordinates[coordinateCounter],coordinates[coordinateCounter+1],20,0,2*Math.PI);
			ctx.shadowBlur=50;
			ctx.shadowColor="white";
			ctx.fillStyle="white";
			ctx.fill();
			ctx.closePath();
			coordinateCounter+=4;
			pathPartCounter=1;
		}
		
		
	}
	//rhombus-like drawings
	
	//Middle Circle Drawing			

	ctx.lineWidth=3;
	ctx.shadowBlur=10;
	ctx.shadowColor="cyan";
	ctx.beginPath();
	ctx.arc(photoX,photoY,middleCircleRadius,0,2*Math.PI);
	ctx.fillStyle="#606060";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	//Photo Drawing
	ctx.lineWidth=5;
	ctx.beginPath();
	ctx.arc(photoX,photoY,photoRadius,0,2*Math.PI);
	ctx.stroke();
	ctx.drawImage(photo,photoX-photoRadius+4,photoY-photoRadius+3, photoDimension,photoDimension);
	ctx.closePath();
	
	//Circle of mini-Circles
	var miniCircleDistance=125;
	ctx.strokeStyle="white";
	ctx.lineWidth=3;
	ctx.fillStyle="white";//#00FFFF
	ctx.shadowBlur=20;
	ctx.shadowColor="white";

	angle=270;
	var xDistance;
	var yDistance;
	for (counter=0; counter<18;counter++)
	{
		ctx.beginPath();
		xDistance=miniCircleDistance*Math.cos(toRadians(angle));
		yDistance=miniCircleDistance*Math.sin(toRadians(angle));
		ctx.arc(photoX+xDistance,photoY+yDistance,5,0,2*Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		angle+=20;

		
	}
	for (counter=0; counter<15;counter++)
	{
		if (counter%2==0)
		{
			ctx.beginPath();
			ctx.strokeStyle="white";
			ctx.shadowBlur=30;
			ctx.shadowColor="cyan";
			ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
			ctx.arc(photoX,photoY,outerCircleRadius,outerCircleAngles[counter+1],outerCircleAngles[counter],true);
			ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
		}
	}
	//$("#myCanvasAnimate").hide();
}
function resize()
{
	nonAnimatedDrawing();
	onLoadContentButton()
	//$("#myCanvasAnimate").fadeIn(200);
}
function grayDrawing()
{
	//If you re-size the window there will be no animation, it will all be just drawn
	var windowWidth=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	//Canvas parameters
	var canvasHeight= 900;
	var canvasWidth= windowWidth*0.97;//if 100, there is a scroll bar
	var c=document.getElementById("myCanvasSkeleton");
	var ctx=c.getContext("2d");
	
	if (canvasWidth<950)
	{
		canvasWidth=950;
	}

	c.setAttribute("width",canvasWidth);
	c.setAttribute("height",canvasHeight);
	c.style.display = "block";//Originally set to none so the size can change


	//Photo positioning for circle
	var photo=document.getElementById("photo");
	var photoX=canvasWidth*0.5;
	var photoY=500;
	var photoRadius=100;
	var photoDimension=photoRadius*2-6;


	photo.style.height=photoDimension+"px";
	photo.style.width=photoDimension+ "px";

	if (photoRadius<80)
	{
		photoRadius=80;
		photoDimension=photoRadius*2-6;

	}

	//Outer Circle Drawing Parameters
	var outerCircleRadius=180;
	var outerCircleAngles=[];
	var numberOfAngles=15;
	var counter;
	var outerGapAngle=toRadians(10);
	var outerDrawAngle=toRadians(30);
	var outerBigGapAngle=toRadians(30);
	var angle=toRadians(15);//Current starting point
	outerCircleAngles.push(angle); 
	for (counter=0; counter<numberOfAngles;counter++)
	{

		if (counter==7)
		{
			angle+=outerBigGapAngle;
			outerCircleAngles.push(angle);
		}
		else if (counter%2==0)//Even
		{
			angle+=outerDrawAngle;
			outerCircleAngles.push(angle);
		}
		else if (counter%2==1)//Odd
		{
			angle+=outerGapAngle;
			outerCircleAngles.push(angle);
		}
	}
	var middleCircleRadius=160;

	//Inner Circle Drawing Parameters

	var innerCircleRadius=145;
	var innerCircleAngles=[];
	var numberOfAngles=15;
	var innerGapAngle=toRadians(20);
	var innerDrawAngle=toRadians(20);
	var innerBigGapAngle=toRadians(40);
	angle=toRadians(20);//Current starting point
	innerCircleAngles.push(angle); 
	for (counter=0; counter<numberOfAngles;counter++)
	{

		if (counter==7)
		{
			angle+=innerBigGapAngle;
			innerCircleAngles.push(angle);
		}
		else if (counter%2==0)//Even
		{
			angle+=innerDrawAngle;
			innerCircleAngles.push(angle);
		}
		else if (counter%2==1)//Odd
		{
			angle+=innerGapAngle;
			innerCircleAngles.push(angle);
		}
	}
	var coordinates=[];
	var Path1={x1:canvasWidth*0.3,y1:0,x2:canvasWidth*0.3,y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(210)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(210))};
	var Path2={x1:canvasWidth*0.4,y1:0,x2:canvasWidth*0.4, y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(243.75)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(243.75))};
	var Path3={x1:canvasWidth*0.6,y1:0,x2:canvasWidth*0.6,y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(294)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(294))};
	var Path4={x1:canvasWidth*0.7,y1:0,x2:canvasWidth*0.7, y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(327)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(327))};
	var Path5={x1:canvasWidth*0.3,y1:canvasHeight,x2:canvasWidth*0.3,y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(147)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(147))};
	var Path6={x1:canvasWidth*0.4,y1:canvasHeight,x2:canvasWidth*0.4, y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(114)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(114))};
	var Path7={x1:canvasWidth*0.6,y1:canvasHeight,x2:canvasWidth*0.6,y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(63.75)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(63.75))};
	var Path8={x1:canvasWidth*0.7,y1:canvasHeight,x2:canvasWidth*0.7, y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(30)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(30))};

	counter=1;
	var fieldCounter=1;
	var pathCounter=1;
	for (counter=1; counter<=48;counter++)
	{
		if (counter==7||counter==13||counter==19||counter==25||counter==31||counter==37||counter==43)
		{
			pathCounter++;
			fieldCounter=1;
		}

		if (counter%2==0)
		{
			coordinates[counter]=eval("Path"+pathCounter+".y"+fieldCounter);
			fieldCounter++;
			

		}
		else if (counter%2==1)
		{
			coordinates[counter]=eval("Path"+pathCounter+".x"+fieldCounter);

		}
	}

	//Drawings
	ctx.lineWidth=3;
	ctx.strokeStyle="gray";//#00FFFF

	

	//Middle Circle Drawing
	ctx.beginPath();
	ctx.arc(photoX,photoY,middleCircleRadius,0,2*Math.PI);
	ctx.fillStyle="#606060";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	//Photo Drawing
	ctx.beginPath();
	ctx.arc(photoX,photoY,photoRadius,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle='black';
	ctx.fill();
	ctx.closePath();
	
	//Circle of mini-Circles
	var miniCircleDistance=125;
	ctx.strokeStyle="gray";
	angle=270;
	var xDistance;
	var yDistance;
	for (counter=0; counter<18;counter++)
	{
		ctx.beginPath();
		ctx.fillStyle="gray";//#00FFFF
		xDistance=miniCircleDistance*Math.cos(toRadians(angle));
		yDistance=miniCircleDistance*Math.sin(toRadians(angle));
		ctx.arc(photoX+xDistance,photoY+yDistance,4,0,2*Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		angle+=20;

		
	}
	//rhombus-like drawings
	ctx.strokeStyle="gray";
	for (counter=0; counter<15;counter++)
	{
		if (counter%2==0)
		{
			ctx.beginPath();
			ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
			ctx.arc(photoX,photoY,outerCircleRadius,outerCircleAngles[counter+1],outerCircleAngles[counter],true);
			ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);

			ctx.fillStyle="gray";
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
		}
	}
	
	
	//Line to Circle drawings
	//Each path has 2 lines and a circle.


	//Path 1
	//x2,y2= start of circle end of line 1 and beginning of line 2
	

	//Get co-ordinates for drawing the paths
	//coordinates[0] is empty

	//Draw all paths
	counter=1;
	ctx.lineWidth=15;
	ctx.strokeStyle="gray";
	ctx.fillStyle="gray";
	var coordinateCounter=1;
	var pathPartCounter=1;
	for (counter=1; counter<=48;counter++)
	{
		if (pathPartCounter==1)
		{
			ctx.beginPath();
			ctx.moveTo(coordinates[coordinateCounter],coordinates[coordinateCounter+1]);
			ctx.lineTo(coordinates[coordinateCounter+2],coordinates[coordinateCounter+3]);
			coordinateCounter+=2;
			ctx.stroke();
			ctx.closePath();
			pathPartCounter++;
		}
		else if (pathPartCounter==2)
		{
			ctx.beginPath();
			ctx.arc(coordinates[coordinateCounter],coordinates[coordinateCounter+1],20,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
			pathPartCounter++;
		}
		else if(pathPartCounter==3)
		{
			ctx.beginPath();
			ctx.moveTo(coordinates[coordinateCounter],coordinates[coordinateCounter+1]);
			ctx.lineTo(coordinates[coordinateCounter+2],coordinates[coordinateCounter+3]);
			coordinateCounter+=4;
			ctx.stroke();
			ctx.closePath();
			pathPartCounter=1;
		}
		
	}
}
//After everything is drawn, show content and slide buttons from the right out
function draw()
{
	var windowWidth=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	//Canvas parameters
	var canvasHeight= 900;
	var canvasWidth= windowWidth*0.97;//if 100, there is a scroll bar
	var c=document.getElementById("myCanvasAnimate");
	var ctx=c.getContext("2d");
	
	if (canvasWidth<950)
	{
		canvasWidth=950;
	}

	c.setAttribute("width",canvasWidth);
	c.setAttribute("height",canvasHeight);
	c.style.display = "block";//Originally set to none so the size can change

	//Photo positioning for circle
	var photo=document.getElementById("photo");
	var photoX=canvasWidth*0.5;
	var photoY=500;
	var photoRadius=100;
	var photoDimension=photoRadius*2-6;


	photo.style.height=photoDimension+"px";
	photo.style.width=photoDimension+ "px";

	if (photoRadius<80)
	{
		photoRadius=80;
		photoDimension=photoRadius*2-6;

	}

	//Outer Circle Drawing Parameters
	var outerCircleRadius=180;
	var outerCircleAngles=[];
	var numberOfAngles=15;
	var counter;
	var outerGapAngle=toRadians(10);
	var outerDrawAngle=toRadians(30);
	var outerBigGapAngle=toRadians(30);
	var angle=toRadians(15);//Current starting point
	outerCircleAngles.push(angle); 
	for (counter=0; counter<numberOfAngles;counter++)
	{

		if (counter==7)
		{
			angle+=outerBigGapAngle;
			outerCircleAngles.push(angle);
		}
		else if (counter%2==0)//Even
		{
			angle+=outerDrawAngle;
			outerCircleAngles.push(angle);
		}
		else if (counter%2==1)//Odd
		{
			angle+=outerGapAngle;
			outerCircleAngles.push(angle);
		}
	}
	var middleCircleRadius=160;

	//Inner Circle Drawing Parameters

	var innerCircleRadius=145;
	var innerCircleAngles=[];
	var numberOfAngles=15;
	var innerGapAngle=toRadians(20);
	var innerDrawAngle=toRadians(20);
	var innerBigGapAngle=toRadians(40);
	angle=toRadians(20);//Current starting point
	innerCircleAngles.push(angle); 
	for (counter=0; counter<numberOfAngles;counter++)
	{

		if (counter==7)
		{
			angle+=innerBigGapAngle;
			innerCircleAngles.push(angle);
		}
		else if (counter%2==0)//Even
		{
			angle+=innerDrawAngle;
			innerCircleAngles.push(angle);
		}
		else if (counter%2==1)//Odd
		{
			angle+=innerGapAngle;
			innerCircleAngles.push(angle);
		}
	}
	var coordinates=[];
	var Path1={x1:canvasWidth*0.3,y1:0,x2:canvasWidth*0.3,y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(210)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(210))};
	var Path2={x1:canvasWidth*0.4,y1:0,x2:canvasWidth*0.4, y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(243.75)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(243.75))};
	var Path3={x1:canvasWidth*0.6,y1:0,x2:canvasWidth*0.6,y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(294)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(294))};
	var Path4={x1:canvasWidth*0.7,y1:0,x2:canvasWidth*0.7, y2:canvasHeight*0.2,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(327)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(327))};
	var Path5={x1:canvasWidth*0.3,y1:canvasHeight,x2:canvasWidth*0.3,y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(147)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(147))};
	var Path6={x1:canvasWidth*0.4,y1:canvasHeight,x2:canvasWidth*0.4, y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(114)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(114))};
	var Path7={x1:canvasWidth*0.6,y1:canvasHeight,x2:canvasWidth*0.6,y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(63.75)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(63.75))};
	var Path8={x1:canvasWidth*0.7,y1:canvasHeight,x2:canvasWidth*0.7, y2:canvasHeight*0.8,x3:photoX+outerCircleRadius*0.95*Math.cos(toRadians(30)),y3:photoY+outerCircleRadius*0.95*Math.sin(toRadians(30))};
	
	counter=1;
	var fieldCounter=1;
	var pathCounter=1;
	for (counter=1; counter<=48;counter++)
	{
		if (counter==7||counter==13||counter==19||counter==25||counter==31||counter==37||counter==43)
		{
			pathCounter++;
			fieldCounter=1;
		}

		if (counter%2==0)
		{
			coordinates[counter]=eval("Path"+pathCounter+".y"+fieldCounter);
			fieldCounter++;
			

		}
		else if (counter%2==1)
		{
			coordinates[counter]=eval("Path"+pathCounter+".x"+fieldCounter);

		}
	}

	var animateCounter=0;
	var timer= setInterval(animate,20);
	var x=0;
	var y=0;
	var phases=1;
	var angle1Incrementor=0;
	var angle2Incrementor=toRadians(10);
	var lineTwoXIncrementor=[];
	var lineTwoYIncrementor=[];
	var miniCircleDistance=125;
	var xDistance;
	var yDistance;
	var resize=false;
	for (counter=1; counter<=8;counter++)
	{
		lineTwoXIncrementor[counter]=(eval("Path"+counter+".x3")-eval("Path"+counter+".x2"))/15;
		lineTwoYIncrementor[counter]=(eval("Path"+counter+".y3")-eval("Path"+counter+".y2"))/15;
		if (counter>=5)
		{
			lineTwoXIncrementor[counter]=Math.abs((eval("Path"+counter+".x3")-eval("Path"+counter+".x2"))/15);
			lineTwoYIncrementor[counter]=Math.abs((eval("Path"+counter+".y3")-eval("Path"+counter+".y2"))/15);
		}
	}
	function animate()
	{
		/*Stop drawing if the window has been resized */
		$(window).resize(function(){
			clearInterval(timer);
			resize=true;
		});

		counter=1;
		ctx.lineWidth=12;
		if (phases==1)
		{
			if (Path1.y1<Path1.y2-20)//The value of y is the same for all paths in this phase
			{
				//10 is the incrementor for the lines
				ctx.strokeStyle="cyan";
				ctx.shadowBlur=20;
				ctx.shadowColor="white";
				//Dynamically chaning the value in the stored arrays instead of using other variables
				ctx.beginPath();
				ctx.moveTo(Path1.x1,Path1.y1);
				ctx.lineTo(Path1.x1,Path1.y1+=10);

				ctx.moveTo(Path2.x1,Path2.y1);
				ctx.lineTo(Path2.x1,Path2.y1+=10);

				ctx.moveTo(Path3.x1,Path3.y1);
				ctx.lineTo(Path3.x1,Path3.y1+=10);

				ctx.moveTo(Path4.x1,Path4.y1);
				ctx.lineTo(Path4.x1,Path4.y1+=10);				
				ctx.stroke();

			}
			else if (Path1.y1>=Path1.y2-20)//Move onto phase 2 and draw the circles, Path1.y2 is the same for all lines.
			{
				ctx.closePath();
				phases++;
				y=0;//reset y

			}
		}
		else if (phases==2)
		{
			ctx.strokeStyle="white";
			ctx.shadowBlur=50;
			ctx.shadowColor="white";
			ctx.fillStyle="white";
			for (counter=1; counter<=4;counter++)
			{
				ctx.beginPath();
				ctx.arc(eval("Path"+counter+".x2"),Path1.y2,15,0, toRadians(360));//Path1.y2= 200 px and is the same for all circles in phase 2
				ctx.fill();
				ctx.closePath();
				ctx.stroke();
			}
			phases++;//Move onto the next phase
		}
		else if (phases==3)
		{
			ctx.globalCompositeOperation='destination-over';
			ctx.strokeStyle="cyan";
			ctx.shadowBlur=20;
			ctx.shadowColor="white";
			ctx.beginPath();
			ctx.moveTo(Path1.x2,Path1.y2);
			ctx.lineTo(Path1.x2+=lineTwoXIncrementor[1],Path1.y2+=lineTwoYIncrementor[1]);//Change value of Path1.x2 to increment everytime, no longer need to contain accurate values 		
			
			ctx.moveTo(Path2.x2,Path2.y2);
			ctx.lineTo(Path2.x2+=lineTwoXIncrementor[2],Path2.y2+=lineTwoYIncrementor[2]);
			
			ctx.moveTo(Path3.x2,Path3.y2);
			ctx.lineTo(Path3.x2+=lineTwoXIncrementor[3],Path3.y2+=lineTwoYIncrementor[3]);
			
			ctx.moveTo(Path4.x2,Path4.y2);
			ctx.lineTo(Path4.x2+=lineTwoXIncrementor[4],Path4.y2+=lineTwoYIncrementor[4]);
			ctx.stroke();

			if (Path1.x2>=Path1.x3)//All 4 paths should reach their end point at the EXACT same time
			{
				ctx.closePath();
				phases++;

			}
			
		}
		else if (phases==4)
		{
			ctx.globalCompositeOperation='source-over';

			for (counter=7; counter<15;counter++)
			{
				if (counter%2==0)
				{
					ctx.beginPath();
					ctx.lineWidth=3;
					ctx.strokeStyle="white";
					ctx.shadowBlur=30;
					ctx.shadowColor="cyan";
					ctx.fillStyle="white";
					ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
					ctx.arc(photoX,photoY,outerCircleRadius,outerCircleAngles[counter+1],outerCircleAngles[counter],true);
					ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
					ctx.fill();
					ctx.stroke();
					ctx.closePath();
				}
			}
			phases++;
		}
		else if (phases==5)
		{
			ctx.globalCompositeOperation='destination-over';
			ctx.lineWidth=3;
			ctx.shadowBlur=10;
			ctx.shadowColor="cyan";
			ctx.beginPath();
			ctx.arc(photoX,photoY,middleCircleRadius,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
			phases++;
		}
		else if (phases==6)
		{
			ctx.globalCompositeOperation='source-over';
			counter=0;
			for (counter=0; counter<7; counter++)
			{
				if (counter%2==0)
				{
					ctx.beginPath();
					ctx.lineWidth=3;
					ctx.strokeStyle="white";
					ctx.shadowBlur=30;
					ctx.shadowColor="cyan";
					ctx.fillStyle="white";
					ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
					ctx.arc(photoX,photoY,outerCircleRadius,outerCircleAngles[counter+1],outerCircleAngles[counter],true);
					ctx.arc(photoX,photoY,innerCircleRadius,innerCircleAngles[counter],innerCircleAngles[counter+1]);
					ctx.fill();
					ctx.stroke();
					ctx.closePath();
				}
			}
			phases++;
		}
		else if (phases==7)
		{

			ctx.globalCompositeOperation='destination-over';
			ctx.strokeStyle="cyan";
			ctx.shadowBlur=20;
			ctx.shadowColor="white";
			ctx.beginPath();
			ctx.moveTo(Path5.x3,Path5.y3);
			ctx.lineTo(Path5.x3-=lineTwoXIncrementor[5],Path5.y3+=lineTwoYIncrementor[5]);//Change value of Path1.x2 to increment everytime, no longer need to contain accurate values 		
			
			ctx.moveTo(Path6.x3,Path6.y3);
			ctx.lineTo(Path6.x3-=lineTwoXIncrementor[6],Path6.y3+=lineTwoYIncrementor[6]);
			
			ctx.moveTo(Path7.x3,Path7.y3);
			ctx.lineTo(Path7.x3+=lineTwoXIncrementor[7],Path7.y3+=lineTwoYIncrementor[7]);
			
			ctx.moveTo(Path8.x3,Path8.y3);
			ctx.lineTo(Path8.x3+=lineTwoXIncrementor[8],Path8.y3+=lineTwoYIncrementor[8]);
			
			ctx.stroke();
			
			if (Path5.y2<=Path5.y3)//All 4 paths should reach their end point at the EXACT same time
			{
				ctx.closePath();
				phases++;

			}
		}
		else if (phases==8)
		{
			ctx.globalCompositeOperation='source-over';
			ctx.strokeStyle="white";
			ctx.shadowBlur=50;
			ctx.shadowColor="white";
			ctx.fillStyle="white";
			for (counter=5; counter<=8;counter++)
			{
				ctx.beginPath();
				ctx.arc(eval("Path"+counter+".x2"),Path5.y2,15,0, toRadians(360));//Path5.y2= 200 px and is the same for all circles in phase 2
				ctx.fill();
				ctx.closePath();
				ctx.stroke();
			}
			phases++;//Move onto the next phase
		}
		else if (phases==9)
		{
			ctx.globalCompositeOperation='destination-over';
			if (Path5.y2<Path5.y1)//The value of y is the same for all paths in this phase
			{
				//10 is the incrementor for the lines
				ctx.strokeStyle="cyan";
				ctx.shadowBlur=20;
				ctx.shadowColor="white";
				//Dynamically chaning the value in the stored arrays instead of using other variables
				ctx.beginPath();
				ctx.moveTo(Path5.x2,Path5.y2);
				ctx.lineTo(Path5.x1,Path5.y2+=10);

				ctx.moveTo(Path6.x2,Path6.y2);
				ctx.lineTo(Path6.x1,Path6.y2+=10);

				ctx.moveTo(Path7.x2,Path7.y2);
				ctx.lineTo(Path7.x1,Path7.y2+=10);

				ctx.moveTo(Path8.x2,Path8.y2);
				ctx.lineTo(Path8.x1,Path8.y2+=10);				
				ctx.stroke();
			}
			else if (Path5.y2>=Path5.y1)//Move onto phase 2 and draw the circles, Path1.y2 is the same for all lines.
			{
				ctx.closePath();
				phases++;
				y=0;//reset y
			}
		}
		else if (phases==10)
		{

			
			angle=270;
			counter=0;

			var timeOut=setTimeout(function()
			{
				var interval=setInterval(function()
				{
					if (resize==true)
					{
						clearTimeout(timeOut);
					}
					ctx.beginPath();	
					ctx.strokeStyle="white";
					ctx.lineWidth=3;
					ctx.fillStyle="white";
					ctx.shadowBlur=20;
					ctx.shadowColor="white";
					xDistance=miniCircleDistance*Math.cos(toRadians(angle));
					yDistance=miniCircleDistance*Math.sin(toRadians(angle));
					ctx.arc(photoX+xDistance,photoY+yDistance,5,0,2*Math.PI);
					ctx.fill();
					ctx.stroke();
					ctx.closePath();
					angle+=20;
					if (angle==630)
					{
						clearInterval(interval);
					}
				},20);				
			},80);
			phases++;
		}
		else if(phases==11)
		{
			ctx.globalCompositeOperation='source-over';
			timeOut=setTimeout(function(){
				
				if (resize==true)
				{
					clearTimeout(timeOut);

				}
				ctx.beginPath();
				ctx.lineWidth=5;
				ctx.shadowBlur=10;
				ctx.shadowColor="cyan";
				ctx.strokeStyle="cyan";
				ctx.arc(photoX,photoY,photoRadius,0,2*Math.PI);
				ctx.stroke();
				ctx.drawImage(photo,photoX-photoRadius+4,photoY-photoRadius+3, photoDimension,photoDimension);
				ctx.closePath();
			},550);
			
			clearInterval(timer);
		}
	}
}

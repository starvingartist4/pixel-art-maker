//HTML Setup
//instantiate principal containers
let body = document.getElementsByTagName('BODY')[0];
let main = document.createElement('MAIN');
let canvasDiv = document.createElement('DIV');
let paletteDiv = document.createElement('DIV');
canvasDiv.id = 'canvas';
paletteDiv.id = 'palette';
paletteDiv.classList.add('container');
canvasDiv.classList.add('container');

//canvasDiv
  //pixel instantiation
for (var i=0; i<2601; i++) {
  let pixel = document.createElement('DIV');
  pixel.style.backgroundColor = 'white';
  pixel.style.width = '10px';
  pixel.style.height = '10px';
  pixel.style.float = 'left';
  pixel.style.border = '1px solid black';
  canvasDiv.appendChild(pixel);
}
  //pixel interactivity
let mouseDown = false;
let pixels = canvasDiv.children;
for (var k=0; k<pixels.length; k++) {
  pixels[k].addEventListener('mousedown', function() {
    mouseDown = true;
    this.style.backgroundColor = brushColor;
  });
  pixels[k].addEventListener('mouseenter', function() {
    if (mouseDown) {
      this.style.backgroundColor = brushColor;
    }
  });
  pixels[k].addEventListener('mouseup', function() {
    mouseDown = false;
    this.style.backgroundColor = event.target.backgroundColor;
  });
  pixels[k].addEventListener('dblclick', function() {
    mouseDown = true;
  });
}

//paletteDiv
  //currentColorDiv
let currentColorDiv = document.createElement('DIV');
let brushColor = 'white';
let currentColorText = `Your current brush color is ${brushColor}`;
currentColorDiv.innerText = currentColorText;
currentColorDiv.style.color = brushColor;
paletteDiv.appendChild(currentColorDiv);
  //color selection 'palette'
let availableColors = document.createElement('DIV');
availableColors.style.margin = '40px';
let css_color_names = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
for (var j=0; j<css_color_names.length; j++) {
  let box = document.createElement('DIV');
  let color = css_color_names[j];
  box.style.backgroundColor = 'white';
  box.style.width = '150px';
  box.style.height = '30px';
  box.style.float = 'left';
  box.innerText = color;
  box.style.color = color;
  box.addEventListener('click', function() {
    brushColor = color;
    currentColorText = `Your current brush color is ${brushColor}`;
    currentColorDiv.innerText = currentColorText;
  });
  availableColors.appendChild(box);
}
paletteDiv.appendChild(availableColors);


//append principal containers
main.appendChild(canvasDiv);
main.appendChild(paletteDiv);
body.appendChild(main);

//CSS Setup
  //body
body.style.backgroundColor = '#eeeeee';
  //canvasDiv
canvasDiv.style.backgroundColor = '#999999';
canvasDiv.style.width = '612px';
canvasDiv.style.height = '612px';
canvasDiv.style.display = 'block';
canvasDiv.style.border = '5px dashed grey';
canvasDiv.style.margin = '40px 40px 0px 30px';
  //paletteDiv
paletteDiv.style.backgroundColor = '#bbbbbb';

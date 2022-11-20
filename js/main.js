var getCircle = () => {
  circle = document.createElement("canvas");
  max = 150;
  min = 50;
  radius = Math.random() * (max - min + 1) + min;

  circle.classList += "circle";
  color = getColor();
  circle.setAttribute("style", `--r:${radius}px;--color: ${color}`);
  return circle;
};

var getSquare = () => {
  square = document.createElement("canvas");
  max = 150;
  min = 50;
  radius = Math.random() * (max - min + 1) + min;

  square.classList += "square";
  color = getColor();
  square.setAttribute("style", `--r:${radius}px;--color: ${color}`);
  return square;
};
var getTriangle = () => {
  circle = document.createElement("canvas");
  max = 150;
  min = 50;
  radius = Math.random() * (max - min + 1) + min;

  circle.classList += "triangle";
  color = getColor();
  circle.setAttribute("style", `--r:${radius}px;--color: ${color};`);
  return circle;
};
var getOval = () => {
  circle = document.createElement("canvas");
  max = 150;
  min = 50;
  radius = Math.random() * (max - min + 1) + min;

  circle.classList += "circle";
  color = getColor();
  circle.setAttribute("style", `--r:${radius}px;--color: ${color}`);
  return circle;
};

function getColor() {
  var shapeColors = [
    "#278BF5",
    "#7CABC6",
    "#EE528C",
    "#C1ABE3",
    "#3ACD7D",
    "#6B2FCC",
  ];
  color = Math.floor(Math.random() * shapeColors.length);
  color = `${shapeColors[color]}`;
  return color;
}

var functions = [getCircle, getOval, getSquare, getTriangle];

window.onload = () => {
  var shapeholder = document.querySelector("#shapeHolder");
  var shapes = populateAllShapes(5);

  shapes.forEach((shape) => {
    s = shape.shape;
    x = shape.x;
    y = shape.y;
    s.style.top = y;
    s.style.left = x;
    s.style.transform = `translate(-${x},-${y})`;
    shapeholder.appendChild(s);
  });
};

function populateAllShapes(num) {
  // shape = {
  //     "posx": ...,
  //     "posy":...,
  //     "shape": ...
  // }

  let shapes = [];
  for (i = 0; i < num; i++) {
    r = Math.floor(Math.random() * functions.length);
    x = Math.floor(Math.random() * (window.innerWidth - 200));
    y = Math.floor(Math.random() * (window.innerHeight - 200));
    s = functions[r]();

    shape = {
      x: x,
      y: y,
      shape: s,
    };

    shapes.push(shape);
  }

  return shapes;
}

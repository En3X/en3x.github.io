let directions = ['+','-']
let speed = 1

let allshapes = document.querySelector('#shapeHolder').children;
function getDirection() {
    xdir = directions[Math.floor(Math.random()*directions.length)]
    ydir = directions[Math.floor(Math.random()*directions.length)]
    if (xdir === '' && ydir === '') {
        getDirection()
    }
    return {'xdir':xdir,'ydir':ydir}
}


function width(){
    return document.body.clientWidth;
 }
 
 function height(){
    return document.body.clientHeight ;
 }


function getAllShapes() {
    let shapesToWorkOn = []
    for (index = 0; index < allshapes.length; index++) {
        let s = document.querySelectorAll('canvas')[index];
        shapeWdir = {
            "shape": s,
            "dir": getDirection()
        }
        shapesToWorkOn.push(shapeWdir)
    }
    return shapesToWorkOn
}
var shapesToWorkOn;
setTimeout(()=>{
     shapesToWorkOn = getAllShapes()
},1000)
console.log(shapesToWorkOn);

setInterval(() => {
    for (let i = 0; i < shapesToWorkOn.length; i++) {
        let s = shapesToWorkOn[i];
        s = move(s)
    }
}, 5);


function move(setting) {
    let currentTop = setting.shape.getBoundingClientRect().top
    let currentLeft = setting.shape.getBoundingClientRect().left
    let currentBottom = setting.shape.getBoundingClientRect().bottom
    let currentRight = setting.shape.getBoundingClientRect().right
    // console.log(currentBottom,height());


    if (currentTop <= 0 || currentBottom >= height()) {
        setting.dir.ydir = setting.dir.ydir == "-" ? "+" : "-"
    }
    if (currentLeft <= 0 || currentRight >= width()) {
        setting.dir.xdir = setting.dir.xdir == "-" ? "+" : "-"
    }


    let newX,newY;

    if (setting.dir.xdir == '+') {
        newX = currentLeft + 0.1+"px";
    }

    if (setting.dir.xdir == '-') {
        newX = currentLeft - 0.1+"px";
    }
    if (setting.dir.ydir == '+') {
        newY = currentTop + 0.1+"px";
    }
    if (setting.dir.ydir == '-') {
        newY = currentTop - 0.1 +"px";
    }
    setting.shape.style.top = newY;
    setting.shape.style.left = newX;

    return setting
}

function getRandomArbitrary(min, max){
  return Math.random() * (max - min) + min;
}

var r1, r2, r3, g1, g2, g3, b1, b2, b3 ;
r1 = getRandomArbitrary(0, 255).toFixed(0);
r2 = getRandomArbitrary(0, 255).toFixed(0);
r3 = getRandomArbitrary(0, 255).toFixed(0);
g1 = getRandomArbitrary(0, 255).toFixed(0);
g2 = getRandomArbitrary(0, 255).toFixed(0);
g3 = getRandomArbitrary(0, 255).toFixed(0);
b1 = getRandomArbitrary(0, 255).toFixed(0);
b2 = getRandomArbitrary(0, 255).toFixed(0);
b3 = getRandomArbitrary(0, 255).toFixed(0);

var rgb1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
var rgb2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
var rgb3 = 'rgb(' + r3 + ',' + g3 + ',' + b3 + ')';

var h1 = document.querySelector('h1');
h1.textContent = 'RGB(' + r1 + ',' + g1 + ',' + b1 + ')';

var num = getRandomArbitrary(3, 1).toFixed(0);
var img = 'img' + num;
var img1 = document.getElementById(img);
img1.style.backgroundColor = rgb1;

switch (6-num) {
  case 3:
    var img2 = document.getElementById('img1');
    img2.style.backgroundColor = rgb2;
    var img3 = document.getElementById('img2');
    img3.style.backgroundColor = rgb3;
    break;
  case 4:
    var img2 = document.getElementById('img1');
    img2.style.backgroundColor = rgb2;
    var img3 = document.getElementById('img3');
    img3.style.backgroundColor = rgb3;
    break;
  case 5:
    var img2 = document.getElementById('img2');
    img2.style.backgroundColor = rgb2;
    var img3 = document.getElementById('img3');
    img3.style.backgroundColor = rgb3;
    break;
}

var refresh = document.querySelector('button');
fresh.onclick = function(){

}

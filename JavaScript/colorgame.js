window.onload = function(){
  initColor();

}
var rgb1,rgb2,rgb3;
var refresh = document.querySelector('button');
var subTitle = document.querySelector('h2');
var content = document.querySelector('body');
var footer = document.querySelector('span');
 

function getRandomArbitrary(min, max){
  return Math.floor(Math.random() * ( max - min ) + min); //interger number between 0~255
}

function randomColor(){
  var r = getRandomArbitrary(0, 255); //set red color
  var g = getRandomArbitrary(0, 255); //set green color
  var b = getRandomArbitrary(0, 255); //set blue color
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function initColor(){
  rgb1 = randomColor();
  rgb2 = randomColor();
  rgb3 = randomColor();
  var title = document.querySelector('h1');
  title.textContent = rgb1.toUpperCase();
  checkStatus();
}

function checkStatus (){
  var numberOfImage = getRandomArbitrary(3, 1);
  var img = 'img' + numberOfImage;
  var img1 = document.getElementById(img);
  img1.style.backgroundColor = rgb1;

  //based on first img position to deside other two.
  switch (6-numberOfImage) {
    case 3:
      var img2 = document.getElementById('img1');
      img2.style.backgroundColor = rgb2;
      var img3 = document.getElementById('img2');
      img3.style.backgroundColor = rgb3;
      displayChange();
      break;
    case 4:
      var img2 = document.getElementById('img1');
      img2.style.backgroundColor = rgb2;
      var img3 = document.getElementById('img3');
      img3.style.backgroundColor = rgb3;
      displayChange();
      break;
    case 5:
      var img2 = document.getElementById('img2');
      img2.style.backgroundColor = rgb2;
      var img3 = document.getElementById('img3');
      img3.style.backgroundColor = rgb3;
      displayChange();
      break;
  }

  // change the display after click
  function displayChange(){
    img1.onclick = function(){
      subTitle.textContent = 'CORRECT!';
      content.style.backgroundColor = rgb1;
      img1.style.backgroundColor = 'white';
      img3.style.backgroundColor = 'white';
      img2.style.backgroundColor = 'white';
      footer.textContent = 'Play Again';
      img2.style.pointerEvents = 'none';
      img3.style.pointerEvents = 'none';
    }
    img2.onclick = function(){
      subTitle.textContent = 'TRY AGAIN!';
      img2.style.backgroundColor = '#212121';
    }
    img3.onclick = function(){
      subTitle.textContent = 'TRY AGAIN!';
      img3.style.backgroundColor = '#212121';
    }
  }
}

//refresh the page;
refresh.onclick = function(){
  window.location.reload(true);
}

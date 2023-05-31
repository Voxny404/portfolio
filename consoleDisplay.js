
let loadingbar = 0;
let errorDisplay = false;
let binaryString = '';

// create 010101 display
for (var i = 0; i < 100; i++) {
    binaryString += Math.floor(Math.random()*2).toString()
}

const updateCanvas = () => {
    let canvas = document.getElementById('topCanvas');
    let ctx = canvas.getContext('2d');
    let randomizer = Math.floor(Math.random() * 4);
  
    canvas.width = window.innerWidth;
    canvas.height = (window.innerHeight / 3) + 10;
  
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.9;
  
    if (loadingbar >= window.innerWidth) {
      errorDisplay = true;
      ctx.font = '70px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'red';
      ctx.fillText('SUCCESS', (canvas.width / 2) - 6, (canvas.height / 2) - 2);
      ctx.fillStyle = 'cyan';
      ctx.fillText('SUCCESS', (canvas.width / 2) + 2, (canvas.height / 2) + 2);
      ctx.fillStyle = 'white';
      ctx.fillText('SUCCESS', canvas.width / 2, canvas.height / 2);
      ctx.font = Math.floor(Math.random()*70)+'px Arial';
      ctx.fillText('▀',(Math.floor(Math.random()*canvas.width)), (Math.floor(Math.random()*canvas.height)));
      setTimeout(() => {
        loadingbar = 0;
        errorDisplay = false;
      }, 2000);
    }
  
    if (randomizer == 0 && !errorDisplay) {
      ctx.font = '70px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'purple';
      ctx.fillText('Voxny404   ', (canvas.width / 2) - 3, (canvas.height / 2) - 3);
      ctx.fillStyle = 'white';
      ctx.fillText('Voxny404   ', (canvas.width / 2) + 3, (canvas.height / 2) + 3);
      ctx.font = '25px Arial';
      ctx.fillStyle = 'gray';
      ctx.globalAlpha = 0.5;
      ctx.fillText(binaryString, (Math.floor(Math.random()*canvas.width)), (Math.floor(Math.random()*canvas.height)));
    }

    if (randomizer == 1 && !errorDisplay) {
      ctx.font = '70px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'cyan';
      ctx.fillText('Voxny404   ', (canvas.width / 2) + 2, (canvas.height / 2) + 2);
      ctx.fillStyle = 'white';
      ctx.fillText('Voxny4θ4   ',(canvas.width / 2) - 2, (canvas.height / 2) - 2);
      ctx.font = '30px Arial';
    }

    if (randomizer == 2 && !errorDisplay) {
      ctx.fillStyle = 'white';
      ctx.font = '70px Arial';
      ctx.textAlign = 'center';
  
      ctx.fillStyle = 'green';
      ctx.fillText('Voxny404  |', (canvas.width / 2) + 6, (canvas.height / 2) - 2);
      ctx.fillStyle = 'white';
      ctx.fillText('Voxƞy404  |', (canvas.width / 2) + 2, (canvas.height / 2) - 2);
      ctx.font = '25px Arial';
      ctx.fillStyle = 'gray';
      ctx.globalAlpha = 0.2;
      ctx.fillText(binaryString, (Math.floor(Math.random()*canvas.width)), (Math.floor(Math.random()*canvas.height)));
    }

    if (randomizer == 3 && !errorDisplay) {
      ctx.fillStyle = 'white';
      ctx.font = '70px Arial';
      ctx.textAlign = 'center';
  
      ctx.fillStyle = 'red';
      ctx.fillText('Voxny404   ', (canvas.width / 2) - 6, (canvas.height / 2) - 2);
      ctx.fillStyle = 'white';
      ctx.fillText('Voxny404   ', (canvas.width / 2) - 2, (canvas.height / 2) + 2);
      ctx.moveTo(loadingbar,  canvas.height-10);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 15;
      ctx.lineTo(0, canvas.height-10);
      ctx.stroke();
  
      loadingbar = loadingbar + 10;
    }
  
};

const animation = () => {
    requestAnimationFrame(animation);
    updateCanvas()
}

animation()
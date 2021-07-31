let app = document.getElementById('app');
const aboutMeText = "About me My name is Jessica Nicole Pötzl. I'm a person who seeks a challenge. Computers have always fascinated me. In my spare time I like to work with unity and create my own games. My very first computer that I owned, I built at the age of 14. In 2019 I rediscovered unity and created my very first game. Another interesting hobby of mine is creating music with the guitar and piano. I've been playing the guitar since 2008 and started playing the piano in 2020. My native language is German, or as I like to call it Bayrisch.";
const languageText = 'Javascript, Jscript, C#, HTML, CSS, German, English.';
const frameworksText = 'Node, Electron, React, AWS, Cordova.';
const otherText = 'Github, JWT, Socket.IO, MongoDb.';
const projectText = '<a href="https://voxny404.github.io/GameStuff/">Games<a><br>'+
                    '<a href="https://apitink.herokuapp.com/home">Tinker<a><br>';
let loadingbar = 0;
let errorDisplay = false;
let binaryString = '';
for (var i = 0; i < 100; i++) {
  binaryString = binaryString + Math.floor(Math.random()*2).toString()
}

const createDocument = () => {
  createCanvas();
  createMainContent();
};

window.onresize = () => {
  location.reload();
};

const createCanvas = () => {
  let div = document.createElement('div');
  div.style.height = (window.innerHeight / 3) + 'px';
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = (window.innerHeight / 3) + 10;
  canvas.setAttribute('id', 'topCanvas');
  canvas.setAttribute('style', 'z-index:-1');
  canvas.style.position = 'fixed';
  canvas.style.top = '0px';
  canvas.style.left = '0px';

  // ctx.fillStyle = "blue";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  div.appendChild(canvas);
  app.appendChild(div);
};

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
    ctx.fillText('ERROR', (canvas.width / 2) - 6, (canvas.height / 2) - 2);
    ctx.fillStyle = 'cyan';
    ctx.fillText('ERROR', (canvas.width / 2) + 2, (canvas.height / 2) + 2);
    ctx.fillStyle = 'white';
    ctx.fillText('ERROR', canvas.width / 2, canvas.height / 2);
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
    ctx.globalAlpha = 0.2;
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
    //ctx.fillText('▀',(Math.floor(Math.random()*canvas.width)), (Math.floor(Math.random()*canvas.height)));
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

const createMainContent = () => {
  let mainContentDiv = document.createElement('div');
  let imageDiv = document.createElement('div');
  let button = document.createElement('button');
  let footer = document.createElement('footer');
  let profilePicture = new Image(250, 250);

  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.setAttribute('id', 'mainContent');
  mainContentDiv.setAttribute('style', 'z-index:1');
  mainContentDiv.style.background = '#ffffff';
  mainContentDiv.style.width = '100%';
  mainContentDiv.style.left = '0px';

  mainContentDiv.appendChild(imageDiv);
  imageDiv.appendChild(profilePicture);
  app.appendChild(mainContentDiv);

  imageDiv.style.textAlign = 'center';
  profilePicture.src = './res/profil.png';

  let aboutme =  document.createElement('h2');
  let aboutmeP =  document.createElement('p');
  let languages =  document.createElement('h3');
  let languagesP =  document.createElement('button');
  let frameworks =  document.createElement('h3');
  let frameworksP =  document.createElement('button');
  let other =  document.createElement('h3');
  let otherP =  document.createElement('button');
  let projects = document.createElement('h2');
  let projectsP = document.createElement('p');
  let footerP = document.createElement('p');
  let footerA = document.createElement('p');

  mainContentDiv.appendChild(aboutme);
  mainContentDiv.appendChild(aboutmeP);
  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.appendChild(languages);
  mainContentDiv.appendChild(languagesP);
  mainContentDiv.appendChild(frameworks);
  mainContentDiv.appendChild(frameworksP);
  mainContentDiv.appendChild(other);
  mainContentDiv.appendChild(otherP);
  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.appendChild(projects);
  mainContentDiv.appendChild(projectsP);
  imageDiv.appendChild(button);

  aboutme.innerText = 'About me';
  aboutmeP.innerText =  aboutMeText;
  languages.innerText = 'Languages';
  languagesP.innerText = languageText;
  frameworks.innerText = 'Frameworks';
  frameworksP.innerText = frameworksText;
  other.innerText = 'Other';
  otherP.innerText = otherText;
  projects.innerText = 'Projects';
  projectsP.innerHTML = projectText;
  footerA.innerHTML = 'Made by Voxny404@gmail.com';
  footerP.innerHTML = 'powered by Github';

  aboutme.style.marginLeft = '5%';
  aboutmeP.style.marginLeft = '5%';
  languages.style.marginLeft = '5%';
  languagesP.style.marginLeft = '8%';
  frameworks.style.marginLeft = '5%';
  frameworksP.style.marginLeft = '8%';
  other.style.marginLeft = '5%';
  otherP.style.marginLeft = '8%';
  aboutme.style.marginRight = '5%';
  aboutmeP.style.marginRight = '8%';
  languages.style.marginRight = '5%';
  languagesP.style.marginRight = '8%';
  frameworks.style.marginRight = '5%';
  frameworksP.style.marginRight = '8%';
  other.style.marginRight = '5%';
  otherP.style.marginRight = '5%';

  languagesP.style.height = '45px';
  frameworksP.style.height = '45px';
  otherP.style.height = '45px';
  languagesP.style.paddingLeft = '15px';
  frameworksP.style.paddingLeft = '15px';
  otherP.style.paddingLeft = '15px';
  languagesP.style.paddingRight = '15px';
  frameworksP.style.paddingRight = '15px';
  otherP.style.paddingRight = '15px';

  button.innerHTML = '<a href="mailto:Voxny404@gmail.com">CONTACT ME<a>';
  button.style.display = 'block';
  button.style.width = '250px';
  button.style.height = '50px';
  button.style.margin = 'auto';
  button.style.marginTop = '10%';

  if (window.innerWidth >= 540) {
    imageDiv.style.marginRight = '5%';
    imageDiv.style.float = 'right';
    aboutmeP.style.maxWidth = (window.innerWidth / 2) + 'px';
  }

  projects.style.textAlign = 'center';
  projectsP.style.textAlign = 'center';

  mainContentDiv.appendChild(document.createElement('br'));

  footerA.style.color = '#A799B5';
  footerA.style.fontSize = '15px';
  footerP.style.color = 'gray';
  footerP.style.fontSize = '10px';
  footer.appendChild(footerA);
  footer.appendChild(footerP);

  document.body.appendChild(footer);

};

createDocument();
const animation = () => {
    requestAnimationFrame(animation);
    updateCanvas()
}
animation()

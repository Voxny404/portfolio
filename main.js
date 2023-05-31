let app = document.getElementById('app');
const aboutMeText = "Hello, I'm Jessica Nicole P. , and I thrive on challenges. The world of computers has always captivated me, and I find joy in exploring its endless possibilities. In my spare time, I immerse myself in the world of game development, working with Unity to bring my imaginative ideas to life. Building my first computer at the tender age of 14 ignited my passion for technology, and ever since, I've been driven to push the boundaries of what is possible. In 2019, I reconnected with my love for game development and created my very first game using Unity. This experience solidified my dedication to honing my skills in this dynamic field. As a developer, I constantly seek to learn and improve, eager to take on new projects and embrace the evolving landscape of the gaming industry. Beyond my technological pursuits, I find solace and inspiration in creating music. Since 2008, I have been strumming the strings of the guitar, allowing my emotions to flow through every chord. More recently, in 2020, I embarked on a new journey by learning to play the piano, expanding my musical repertoire and challenging myself to master new melodies. As a multilingual individual, I proudly consider German, my native language. This linguistic background has nurtured my appreciation for cultural diversity and communication, enabling me to connect with people from various walks of life. In my portfolio, you'll find a collection of my game development projects, showcasing my skills, creativity, and dedication. I'm eager to collaborate, grow, and contribute to the ever-evolving world of technology and entertainment. Let's embark on an exciting journey together, where innovation knows no bounds.";
const languageText = 'Javascript, Golang, C#, CSS, German, English.';
const frameworksText = 'ElectronJS, ReactJS, AWS, DynamoDB.';
const otherText = '<a style="color:black" href="https://github.com/Voxny404">github.com/Voxny404<a>';
const projectText = '<a style="color:black" href="https://voxny404.github.io/GameStuff/">Games<a><br>';

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
 //location.reload();
  let aboutMe = document.getElementById('aboutMeText')
  let imageDiv = document.getElementById('imageDiv')
  
  if (aboutMe && imageDiv && window.innerWidth >= 700) {
   
    imageDiv.style.marginRight = '5%';
    imageDiv.style.paddingTop = '4em'
    imageDiv.style.float = 'right';
    aboutMe.style.width = (window.innerWidth / 2) + 'px';
  } else {
    imageDiv.style.marginRight = '5%';
    imageDiv.style.paddingTop = '4em'
    imageDiv.style.float = 'none';
  }
};

const createCanvas = () => {
  let div = document.createElement('div');
  div.style.height = (window.innerHeight / 3) + 'px';
  let canvas = document.createElement('canvas');

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
  let languagesP =  document.createElement('p');
  let frameworks =  document.createElement('h3');
  let frameworksP =  document.createElement('p');
  let other =  document.createElement('h3');
  let otherP =  document.createElement('button');
  let otherP2 =  document.createElement('button');
  let footerP = document.createElement('p');
  let footerA = document.createElement('p');

  imageDiv.setAttribute('id','imageDiv')
  aboutmeP.setAttribute('id', 'aboutMeText')
  mainContentDiv.appendChild(aboutme);
  mainContentDiv.appendChild(aboutmeP);
  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.appendChild(languages);
  mainContentDiv.appendChild(languagesP);
  mainContentDiv.appendChild(frameworks);
  mainContentDiv.appendChild(frameworksP);
  mainContentDiv.appendChild(other);
  mainContentDiv.appendChild(otherP);
  mainContentDiv.appendChild(otherP2);
  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.appendChild(document.createElement('br'));

  imageDiv.appendChild(button);

  aboutme.innerText = 'About me';
  aboutmeP.innerText =  aboutMeText;
  languages.innerText = 'Languages';
  languagesP.innerText = languageText;
  frameworks.innerText = 'Frameworks';
  frameworksP.innerText = frameworksText;
  other.innerText = 'Other';
  otherP.innerHTML = otherText;
  otherP2.innerHTML = projectText;
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
  otherP.style.marginRight = '2%';
  languagesP.style.height = '45px';
  frameworksP.style.height = '45px';
  otherP.style.height = '45px';
  otherP2.style.height = '45px';
  languagesP.style.paddingLeft = '15px';
  frameworksP.style.paddingLeft = '15px';
  otherP.style.paddingLeft = '15px';
  otherP2.style.paddingLeft = '15px';
  languagesP.style.paddingRight = '15px';
  frameworksP.style.paddingRight = '15px';
  otherP.style.paddingRight = '15px';
  otherP2.style.paddingRight = '15px';

  button.innerHTML = '<a style="color:black" href="mailto:Voxny404@gmail.com">CONTACT ME<a>';
  button.style.display = 'block';
  button.style.width = '250px';
  button.style.height = '50px';
  button.style.margin = 'auto';
  button.style.marginTop = '10%';

  button.setAttribute('id','buttonWhite')
  otherP.setAttribute('id','buttonWhite')
  otherP2.setAttribute('id','buttonWhite')

  aboutmeP.style.maxWidth = '800px'
  if (window.innerWidth >= 540) {
    imageDiv.style.marginRight = '5%';
    imageDiv.style.paddingTop = '4em'
    imageDiv.style.float = 'right';
    aboutmeP.style.width = (window.innerWidth / 2) + 'px';
    //aboutmeP.style.maxWidth = '800px'
  }
  
  imageDiv.style.paddingBottom = '2em'
  footerA.style.color = '#A799B5';
  footerA.style.fontSize = '15px';
  footerP.style.color = 'gray';
  footerP.style.fontSize = '10px';
  footer.appendChild(footerA);
  footer.appendChild(footerP);

  mainContentDiv.appendChild(document.createElement('br'));
  mainContentDiv.appendChild(document.createElement('br'));
  document.body.appendChild(footer);

};

createDocument();
const animation = () => {
    requestAnimationFrame(animation);
    updateCanvas()
}
animation()

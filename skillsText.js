let skillsText = document.getElementById('skillsText');
let skillPointer = 0
let skillToDisplay = ''
let skillMap = [
    'Javascript',
    'Golang', 
    'Python',
    'C#',
    'CSS',
    'DynamoDB',
    'ElectronJS',
    'ReactJS',
    'Lambda',
    'API Gateway',
    'S3',
    'Cloud formation',
    'Git',
    'GitHub',
    'Jest',
    'Unity',
    'GoDot',
    'WebSockets',
    'OpenAI'
]

skillToDisplay = skillMap[0]
skillsText.innerText =`[ ${skillToDisplay} ]`
skillsText.style.textAlign = 'center'

setInterval(()=> {
    skillToDisplay = skillMap[skillPointer]
    skillsText.innerText =`[ ${skillToDisplay} ]`
    skillPointer += 1
    if (skillPointer >= skillMap.length) skillPointer = 0
}, 2000)
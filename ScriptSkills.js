function showskills(){

	/*//BodyText_____________________________________________________________________________________________________________*/
	let html ='HTML| pug | CSS | ajax'
	let unity ='Python3 | C# | Unity'
	let language = 'German | English'
	let node = 'Node | express'
	let Enc = 'Encryption at rest'
	let soc = 'websockets | socket.io'
	let git = 'GitHub | Git'
	let Mon = 'MongoDb | Auth'
	let heroku = 'Heroku | OOP'
	/*headline  */
	const text1 = document.getElementById("Home1").innerHTML = 'Skills';	

	/*text */
	const text2 = document.getElementById("Home2").innerHTML = html +'<br>'+unity+'<br>'+ language +' <br>'
	+' Javascript <br> '+ git +' <br>'+ node +'<br>'+Enc+'<br>'+soc+'<br>'+Mon+'<br>'+ heroku+ '<br>';
	

	/*//Logo */
	const text3 = document.getElementById("Logo1").innerHTML = '<img src="Logo1.png" height="420" width="420">';
	document.getElementsByClassName("Logo")[0].style.right = "30%";		/* logoLocading*/

	/*//navibarSelection_____________________________________________________________________________________________________*/ 

	document.getElementsByClassName("navi")[0].style.color="#A191D6";	/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#A191D6";	/* about	 */
	document.getElementsByClassName("navi3")[0].style.color="#7700FF";	/* Skills	 */
	document.getElementsByClassName("navi4")[0].style.color="#A191D6";	/* Contact	 */
}
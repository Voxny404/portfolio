function showcontact(){

	/*//BodyText_____________________________________________________________________________________________________________*/

	/*//headline  */
	var text = document.getElementById("Home1").innerHTML = 'Contact';

	/*//text */
	var text = document.getElementById("Home2").innerHTML = 'Atomchen92@gmail.com <br> <br> <a href="https://github.com/Voxny404" target="_blank">'
	+'<img alt="Qries" src="https://github.com/fluidicon.png"width=30" height="30">'
	+'<a href="https://www.youtube.com/user/TheAtomchen" target="_blank">'
	+'<img alt="Qries" src="https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"width=30" height="30">';
	
	
	/*//Logo */
	var text = document.getElementById("Logo1").innerHTML = '<img src="Logo1.png" height="420" width="420">';
	document.getElementsByClassName("Logo")[0].style.right = "50%";			/* logoLocading*/

	/*//navibarSelection_____________________________________________________________________________________________________*/ 
	document.getElementsByClassName("navi")[0].style.color="#A191D6";		/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#A191D6";		/* about	 */
	document.getElementsByClassName("navi3")[0].style.color="#A191D6";		/* skills	 */
	document.getElementsByClassName("navi4")[0].style.color="#7700FF";		/* Contact	 */
}
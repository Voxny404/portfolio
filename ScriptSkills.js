function showskills(){

	/*//BodyText_____________________________________________________________________________________________________________*/

	/*headline  */
	var text = document.getElementById("Home1").innerHTML = 'Skills';	

	/*text */
	var text = document.getElementById("Home2").innerHTML = 'HTML | CSS <br> Python3 <br> C# | Unity <br> German | English <br>'
	+' Javascript <br> GitHub | Git <br> ';
	

	/*//Logo */
	var text = document.getElementById("Logo1").innerHTML = '<img src="Logo1.png" height="420" width="420">';
	document.getElementsByClassName("Logo")[0].style.right = "30%";		/* logoLocading*/

	/*//navibarSelection_____________________________________________________________________________________________________*/ 

	document.getElementsByClassName("navi")[0].style.color="#A191D6";	/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#A191D6";	/* about	 */
	document.getElementsByClassName("navi3")[0].style.color="#7700FF";	/* Skills	 */
	document.getElementsByClassName("navi4")[0].style.color="#A191D6";	/* Contact	 */
}
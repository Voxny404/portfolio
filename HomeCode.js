function showTest(){
	/*//BodyText_____________________________________________________________________________________________________________*/

	/*//headline  */
	var text = document.getElementById("Home1").innerHTML = 'Jessica Nicole P&ouml;tzl';

	/*//text */
	var text = document.getElementById("Home2").innerHTML = 'Welcome to my website';
	
	/*//Logo */
	var text = document.getElementById("Logo1").innerHTML = '';
	document.getElementsByClassName("Logo")[0].style.right = "30%";			/* logoLocading*/

	/*//navibarSelection_____________________________________________________________________________________________________*/ 
	document.getElementsByClassName("navi")[0].style.color="#7700FF";		/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#A191D6";		/* About	 */
	document.getElementsByClassName("navi3")[0].style.color="#A191D6";		/* Skill	 */
	document.getElementsByClassName("navi4")[0].style.color="#A191D6";		/* contact	 */
}
		

function showabout(){
	
	/*//BodyText_____________________________________________________________________________________________________________*/
	
	/*//headline  */
	var text = document.getElementById("Home1").innerHTML = 'About';

	/*//text */
	var text = document.getElementById("Home2").innerHTML = "I'm a person who seeks a challenge. Computers have always fascinated me." 
	+" In my spare time I like to work with unity and create my own games. "
	+"My very first computer that I owned, I built at the age of 14. In 2019 I rediscovered unity and created my very first game. "
	+"<br><br> "
	
	+"Another interesting hobby of mine is creating music with the guitar and piano. I've been playing the guitar since 2008 and "
	+"started playing the piano in 2020. <br><br>"
	+"My native language is German, or as I like to call it: Bayrisch.";
	
	/*//Logo */
	var text = document.getElementById("Logo1").innerHTML = '';
	document.getElementsByClassName("Logo")[0].style.right = "50%";			/* logoLocading*/
	

	/*//navibarSelection______________________________________________________________________________________________________*/ 
	document.getElementsByClassName("navi")[0].style.color="#A191D6";		/* Homepage	 */
	document.getElementsByClassName("navi2")[0].style.color="#7700FF";		/* About	 */
	document.getElementsByClassName("navi3")[0].style.color="#A191D6";		/* skill	 */
	document.getElementsByClassName("navi4")[0].style.color="#A191D6";		/* contact	 */
}

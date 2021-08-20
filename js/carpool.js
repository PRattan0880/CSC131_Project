/**
 * http://usejsdoc.org/
 */
function setUpCarpool(){
	geoCode("&mode=driving");
	data();
	

	var travelOption=[];
	travelOption[0]=new singleCar(parseFloat(sessionStorage.getItem('rate')),
		parseFloat($("#appPayment").val()),parseFloat(sessionStorage.getItem('repair')),
		parseFloat(sessionStorage.getItem('mpg')),parseFloat($("#daysVisit").val()),sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"));
		//travelOption[0].setDist(localStorage.getItem("distCalc"));
	
	
	
	//SECOND COMMUTE OPTION
	travelOption[1]=new carpool(parseFloat(sessionStorage.getItem('rate')),
		parseFloat($("#appPayment").val()),sessionStorage.getItem('repair'),	parseFloat(sessionStorage.getItem('mpg')),$("#daysVisit").val(),sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"),parseFloat($("#numPeople").val()));
	
	
	//THIRD COMMUTE OPTION
	geoCode("&mode=bicycling");
	travelOption[2]=new bike(350,100,parseFloat(sessionStorage.getItem('bicycleDist')));	
	
	
	//FOURTH COMMUTE OPTION
	travelOption[3]=new motorcycle(132.0,
		parseFloat($("#appPayment").val()),1000.0,
		70.0,parseFloat($("#daysVisit").val()),sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"));
	
	//location.href="Compare.html";
	
	
	//Transit geocode
	geoCode("&mode=transit");
	travelOption[4]=new bus(parseFloat($("#daysVisit").val()),sessionStorage.getItem("transitDist"),sessionStorage.getItem("transitDuration"));
	
	//SIXTH COMMUTE OPTION
	travelOption[5]=new transit(parseFloat($("#daysVisit").val()),sessionStorage.getItem("transitDist"),sessionStorage.getItem("transitDuration"));
	
	//Walking Geocode
	geoCode("&mode=walking");
	
	//SEVENTH COMMUTE OPTION
	travelOption[6]=new walk(sessionStorage.getItem("walkDist"),sessionStorage.getItem("walkDuration"));
	
	
	
	//Add values to the localStorage
	sessionStorage.setItem("Options",JSON.stringify(travelOption));
	
	sessionStorage.setItem("initial","CARPOOL");
	//Sets a timeout for 5 seconds to load all info into local storage
	setTimeout(function(){
		dataBase();
		window.location.href="Compare.html";
		
	},5000);
	
}

/** 
	Redirect the webpage to Compare webpage
*/
function showResults(){
	window.location.href=("Compare.html");

}

/**
	Send user data to php to insert into sql database
 */
function dataBase(){
	var fn=sessionStorage.getItem("fname");
	var ln=sessionStorage.getItem("lname");
	var em=sessionStorage.getItem("email");
	var check=sessionStorage.getItem("checked");
	var initial=sessionStorage.getItem("initial");
	var func='add';
	
	console.log(fn);
	
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
      }
    };

	var formData=new FormData();
	formData.append("first",fn);
	formData.append("last",ln);
	formData.append("email",em)
	formData.append("checked",check);
	formData.append("init",initial);
	formData.append("func",func);
	
	xmlhttp.open("POST","http://localhost/project/Test.php",true);
	xmlhttp.send(formData);

}


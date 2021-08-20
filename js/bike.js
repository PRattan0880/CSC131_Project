
function setUpBike(){
	geoCode("&mode=driving");
	motoData();
	

	var travelOption=[];
	travelOption[0]=new singleCar(175,parseFloat($("#appPayment").val()),441,39,parseFloat($("#daysVisit").val()),sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"));
		//travelOption[0].setDist(localStorage.getItem("distCalc"));
	
	
	
	//SECOND COMMUTE OPTION
	travelOption[1]=new carpool(175,parseFloat($("#appPayment").val()),441,39,parseFloat($("#daysVisit").val())
	,sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"),2);
	
	
	//THIRD COMMUTE OPTION
	geoCode("&mode=bicycling");
	travelOption[2]=new bike(350,100,parseFloat(sessionStorage.getItem('bicycleDist')),parseFloat(sessionStorage.getItem('bicycleDuration')));	
	
	//FOURTH COMMUTE OPTION
	travelOption[3]=new motorcycle(parseFloat(sessionStorage.getItem('rate')),
		parseFloat($("#appPayment").val()),parseFloat(sessionStorage.getItem('repair')),
		parseFloat(sessionStorage.getItem('mpg')),parseFloat($("#daysVisit").val()),sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"));
	
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
	
	sessionStorage.setItem("initial","BIKE");
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
	var initial=sessionStorage.getItem('initial');
	var func='add';
	
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


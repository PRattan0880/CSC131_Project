
function setUpTransit(){
	geoCode("&mode=driving");

	var travelOption=[];
	sessionStorage.setItem("repair",441);
	sessionStorage.setItem("rate",350);
	sessionStorage.setItem("mpg",39);
	
	travelOption[0]=new singleCar(350,1000,441,39,parseFloat($("#daysVisit").val())
	,sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"));
		//travelOption[0].setDist(localStorage.getItem("distCalc"));
	
	
	
	//SECOND COMMUTE OPTION
	travelOption[1]=new carpool(350,1000,441,39,$("#daysVisit").val(),sessionStorage.getItem("distCalc"),
	sessionStorage.getItem("commuteDuration"),2);
	
	
	//THIRD COMMUTE OPTION
	geoCode("&mode=bicycling");
	travelOption[2]=new bike(350,100,parseFloat(sessionStorage.getItem('bicycleDist')),parseFloat(sessionStorage.getItem('bicycleDuration')));	
	
	
	//FOURTH COMMUTE OPTION
	travelOption[3]=new motorcycle(132.0,
		1000.0,1000.0,
		70.0,parseFloat($("#daysVisit").val()),sessionStorage.getItem("distCalc"),sessionStorage.getItem("commuteDuration"));
	
	//Transit geocode
	geoCode("&mode=transit");
	travelOption[4]=new bus(parseFloat($("#daysVisit").val()),sessionStorage.getItem("transitDist"),sessionStorage.getItem("transitDuration"));
	
	//SIXTH COMMUTE OPTION
	travelOption[5]=new transit(parseFloat($("#daysVisit").val()),sessionStorage.getItem("transitDist"),sessionStorage.getItem("transitDuration"));
	
	//Walking Geocode
	geoCode("&mode=walking");
	
	//SEVENTH COMMUTE OPTION
	travelOption[6]=new walk(sessionStorage.getItem("walkDist"),sessionStorage.getItem("walkDuration"));
	
	sessionStorage.setItem("Options",JSON.stringify(travelOption));
	
	sessionStorage.setItem("initial","TRANSIT");
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

function dataBase(){
	var fn=sessionStorage.getItem("fname");
	var ln=sessionStorage.getItem("lname");
	var em=sessionStorage.getItem("email");
	var check=sessionStorage.getItem("checked");
	var initial=sessionStorage.getItem('initial');
	var func="add";
	
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


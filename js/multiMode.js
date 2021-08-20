
function setUpMultiMode(){
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
	
	//Get coordinates for both addresses
	multiCode($("#location-input").val(),1);
	multiCode($("#location-input2").val(),2);
	
	//Check which mode user choose
	var mode1,mode2;
	
	if($("#mode1").val()=="BICYCLE"){
		mode1="&mode=bicycling";
	}else if($("#mode1").val()=="BIKE" || $("#mode1").val()=="CAR" || $("#mode1").val()=="CARPOOL"){
		mode1="&mode=driving";
	}else if($("#mode1").val()=="TRANSIT" || $("#mode1").val()=="LIGHT RAIL"){
		mode1="&mode=transit";
	}else{
		mode1="&mode=walking";
	}
	
	//Check second mode option
	if($("#mode2").val()=="BICYCLE"){
		mode2="&mode=bicycling";
	}else if($("#mode2").val()=="BIKE" || $("#mode2").val()=="CAR" || $("#mode2").val()=="CARPOOL"){
		mode2="&mode=driving";
	}else if($("#mode2").val()=="TRANSIT" || $("#mode2").val()=="LIGHT RAIL"){
		mode2="&mode=transit";
	}else{
		mode2="&mode=walking";
	}
	
	getMultiDistance(sessionStorage.getItem("Lattitude"),sessionStorage.getItem("Longtitude"),sessionStorage.getItem("Lattitude2"),sessionStorage.getItem("Longtitude2"),mode1,1);
	
	//Second location distance
	getMultiDistance(sessionStorage.getItem("Lattitude2"),sessionStorage.getItem("Longtitude2"),38.5613,-121.4241, mode2,2);
	
	
	travelOption[7]=new multiMode($("#mode1").val(),$("#mode2").val(),$("#daysVisit").val(),sessionStorage.getItem("multiDist"),sessionStorage.getItem("multiDist2"),sessionStorage.getItem("multiDurationValue"),sessionStorage.getItem("multiDurationValue2"));
	//Add values to the localStorage
	
	sessionStorage.setItem("Options",JSON.stringify(travelOption));
	
	sessionStorage.setItem("initial","MULTIMODE");
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


$(document).ready(function () {
  $("#mode1").change(function () {
     switch($(this).val()) {
        case 'BICYCLE':
            $("#mode2").html("<option value='CAR'>CAR</option>"
							+ "<option value='CARPOOL'>CARPOOL</option>"
							+ "<option value='LIGHT RAIL'>LIGHT RAIL</option>"
							+ "<option value='TRANSIT'>TRANSIT</option>"
							+ "<option value='WALK'>WALK</option>");
            break;
	case 'BIKE':
			$("#mode2").html("<option value='CARPOOL'>CARPOOL</option>"
							+ "<option value='LIGHT RAIL'>LIGHT RAIL</option>"
							+ "<option value='TRANSIT'>TRANSIT</option>"
							+ "<option value='WALK'>WALK</option>");
            break;
	case 'CAR':
			$("#mode2").html("<option value='LIGHT RAIL'>LIGHT RAIL</option>"
							+ "<option value='TRANSIT'>TRANSIT</option>"
							+ "<option value='WALK'>WALK</option>");
            break;
	case 'CARPOOL':
			$("#mode2").html("<option value='LIGHT RAIL'>LIGHT RAIL</option>"
							+ "<option value='TRANSIT'>TRANSIT</option>"
							+ "<option value='WALK'>WALK</option>");
            break;
	case 'LIGHT RAIL':
			$("#mode2").html("<option value='BICYCLE'>BICYCLE</option>"
							+ "<option value='WALK'>WALK</option>"
							+ "<option value='TRANSIT'>TRANSIT</option>");
            break;
	case 'TRANSIT':
			$("#mode2").html("<option value='BICYCLE'>BICYCLE</option>"
							+ "<option value='WALK'>WALK</option>"
							+ "<option value='LIGHT RAIL'>LIGHT RAIL</option>");
            break;
	case 'WALK':
			$("#mode2").html("<option value='CARPOOL'>CARPOOL</option>"
							+ "<option value='LIGHT RAIL'>LIGHT RAIL</option>"
							+ "<option value='TRANSIT'>TRANSIT</option>");
            break;
	
        default:
            $("#MODEL").html("<option value=''>SELECT MODE 2</option>");
     	}
	});	
});
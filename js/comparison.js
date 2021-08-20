function showResult(){
	var travel=JSON.parse(sessionStorage.getItem("Options"));
	var option=[];
	console.log(travel);
	
	//CONSTRUCT ALL COMMUTE OBJECTS FROM USER DATA
	option[0]=new singleCar(parseFloat(sessionStorage.getItem('rate')),travel[0].payment,parseFloat(sessionStorage.getItem('repair')),parseFloat(sessionStorage.getItem('mpg')),travel[0].days,parseFloat(sessionStorage.getItem('carDist')),sessionStorage.getItem('carDuration'));
	option[1]=new carpool(parseFloat(sessionStorage.getItem('rate')),travel[1].payment,parseFloat(sessionStorage.getItem('repair')),parseFloat(sessionStorage.getItem('mpg')),travel[1].days,parseFloat(sessionStorage.getItem('carDist')),sessionStorage.getItem('carDuration'),travel[1].people);
	option[2]=new bike(parseFloat(travel[2].cost),parseFloat(travel[2].maintenance),parseFloat(sessionStorage.getItem("bicycleDist")),sessionStorage.getItem("bicycleDuration"));
	option[3]=new motorcycle(travel[3].insurance,travel[3].payment,travel[3].maintenance,travel[3].mileage,travel[3].days,parseFloat(sessionStorage.getItem('carDist')),sessionStorage.getItem('carDuration'));
	option[4]=new bus(travel[4].days,parseFloat(sessionStorage.getItem('transitDist')),sessionStorage.getItem('transitDuration'));
	option[5]=new transit(travel[4].days,parseFloat(sessionStorage.getItem('transitDist')),sessionStorage.getItem('transitDuration'));
	option[6]=new walk(parseFloat(sessionStorage.getItem('walkDist')),sessionStorage.getItem("walkDuration"));
	
	if(travel.length==8){
		option[7]=new multiMode(travel[7].mode1,travel[7].mode2,travel[7].days,parseFloat(sessionStorage.getItem("multiDist")),parseFloat(sessionStorage.getItem("multiDist2")),parseFloat(sessionStorage.getItem("multiDurationValue")),parseFloat(sessionStorage.getItem("multiDurationValue2")));
	}
	
	console.log(option[7]);
	//RESULTS FOR ALL COMMUTE OPTIONS
	for(var i=0;i<travel.length;i++){
		option[i].getResult();
	}

	if(travel.length==8){
		option[7].getResult();
	}
	
	displayGraphs(option);
	displayModale();
}

/** 
	Display graphs of commute options to comparison page
*/
function displayGraphs(option){
		
	//Google graphs to display data as charts
	google.charts.load('current', {packages: ['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
		//DATA FOR TOTAL COST OF EACH COMMUTE OPTION
      var data = google.visualization.arrayToDataTable([
        ['Commute Type', 'COST $', { role: 'style' } ],
        ['Bicycle', option[2].getTotalCost(), 'color:#c6401d'],
        ['Bike', option[3].getTotalCost(), 'color: #00573d'],
        ['Car', option[0].getTotalCost(), 'color:#c6401d'],
        ['Carpool', option[1].getTotalCost(), 'color: #00573d'],
		['Rail',option[5].getTotalCost(),'color:#c6401d'],
        ['Transit',option[4].getTotalCost(),'color: #00573d'],
		['Walk',option[6].getTotalCost(),'color:#c6401d']
      ]); 
      
 	 var NumberFormat = new google.visualization.NumberFormat(
   	//You can explore various type of patterns in Documentation
   	{pattern:'##.##'}
   	);
	
	
   NumberFormat.format(data, 1); // Apply formatter to second column

     var barchart = new google.visualization.ColumnChart(document.getElementById('barchart_div'));
	 var barchart_options = {title:'COST OF COMMUTE OPTIONS (ANNUALLY)',
        height: '100%',
    	width: '100%',

         legend: {position: 'none'},
		 hAxis: {textStyle:{fontSize:10,bold:true}},
	     backgroundColor: {fill:"none"},
		
	};
	
	//DATA FOR ECO IMPACT OF EACH COMMUTE OPTION
	 var data2 = google.visualization.arrayToDataTable([
        ['Commute Type', 'CO2(ton)', { role: 'style' } ],
        ['Bicycle', option[2].calcCO2(), 'color: #c6401d'],
        ['Bike', option[3].calcCO2(), 'color: #00573d'],
        ['Car', option[0].calcCO2(), 'color:#c6401d'],
        ['Carpool', option[1].calcCO2(), 'color: #00573d'],
		['Rail',option[5].calcCO2(),'color:#c6401d'],
        ['Transit',option[4].calcCO2(),'color: #00573d'],
		['Walk',option[6].calcCO2(),'color:#c6401d']
      ]); 
      
 	 var NumberFormat = new google.visualization.NumberFormat(
   	//You can explore various type of patterns in Documentation
   	{pattern:'##.##'}
   	);
	
	
   NumberFormat.format(data2, 1); // Apply formatter to second column

     var barchart2 = new google.visualization.ColumnChart(document.getElementById('ecochart'));
	 var barchart_options2 = {title:'CO2 EMISSION OF COMMUTE OPTIONS (ANNUALLY)',
         height: '100%',
         width: '100%',
         legend: {position: 'none'},
		 hAxis: {textStyle:{fontSize:10,bold:true}},
		backgroundColor: {fill:"none"},
	};
	
	
	//DATA FOR DURATION OF EACH COMMUTE OPTION
	var data3 = google.visualization.arrayToDataTable([
        ['Commute Type', 'Duration(s)', { role: 'style' }, {role: 'annotation'}],
        ['Bicycle', parseFloat(sessionStorage.getItem('bicycleValue')), 'color:#c6401d',option[2].getDurationValue(parseFloat(sessionStorage.getItem('bicycleValue')))],
        ['Bike',parseFloat(sessionStorage.getItem('driveValue')), 'color: #00573d',option[3].getDurationValue(parseFloat(sessionStorage.getItem('driveValue')))],
        ['Car',parseFloat(sessionStorage.getItem('driveValue')),'color:#c6401d',option[0].getDurationValue(parseFloat(sessionStorage.getItem('driveValue')))],
        ['Carpool',parseFloat(sessionStorage.getItem('driveValue')),'color: #00573d',option[1].getDurationValue(parseFloat(sessionStorage.getItem('driveValue')))],
		['Rail',parseFloat(sessionStorage.getItem('transitValue')),'color:#c6401d',option[5].getDurationValue(parseFloat(sessionStorage.getItem('transitValue')))],
        ['Transit',parseFloat(sessionStorage.getItem('transitValue')),'color: #00573d',option[4].getDurationValue(parseFloat(sessionStorage.getItem('transitValue')))],
		['Walk',parseFloat(sessionStorage.getItem('walkValue')),'color:#c6401d',option[6].getDurationValue(parseFloat(sessionStorage.getItem('walkValue')))]
      ]); 
      
	//Create graph for Commute Duration
     var barchart3 = new google.visualization.ColumnChart(document.getElementById('durationchart'));
	 var barchart_options3= {title:'DURATION OF COMMUTE OPTIONS (Sec.)',
         height: '100%',
         width: '100%',
         legend: {position: 'none'},
		 hAxis: {textStyle:{fontSize:10,bold:true}},
		backgroundColor: {fill:"none"},
	};
	
      barchart.draw(data, barchart_options);
	  barchart2.draw(data2,barchart_options2);
	  barchart3.draw(data3,barchart_options3);
	}
}

/**
	Sends data to php file to update the sql databse containing
	user data 
 */
function databaseUpdate(final){
	var fn=sessionStorage.getItem("fname");
	var ln=sessionStorage.getItem("lname");
	var em=sessionStorage.getItem("email");
	var check=sessionStorage.getItem("checked");
	var func="update";
	var final=final;
	
	console.log(final);
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
	formData.append("func",func);
	formData.append('final',final);
	
	
	xmlhttp.open("POST","http://localhost/project/Test.php",true);
	xmlhttp.send(formData);
}

/**
	Toggle off the modal
 */
function no(){
	document.getElementById("modal1").style.display="none";
	document.getElementById("myModal").style.display="none";
	databaseUpdate(sessionStorage.getItem("initial"));
}

/** 
	Toggle the commute types modal for user to chose
*/
function yes(){
	document.getElementById("modal1").style.display="none";
	document.getElementById("modal2").style.display="block";
}

/** 
	Sends the user final option to php file to update sql
	database
*/
function finalCommute(){
	var final= document.getElementById("Commute").value;
	console.log(final);
	document.getElementById("myModal").style.display="none";
	console.log(final);
	databaseUpdate(final);
}

/** 
	Display the modale after certain seconds
*/

function displayModale(){
	setTimeout(function(){
		$('.modal-content').css('display','block');
		$('.modal').css("display",'block');
	},30000);
}

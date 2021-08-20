/**
 * http://usejsdoc.org/
 */

	/**Use google GEOCODE API to convert addresses to appropriate
lattitude and longtitude points to be used to calculate 
distance
 */
//var geoDistance=0;
const key="&key=AIzaSyD58s56PZkhKMG5-4re5d29_E31O2G3z54";
 function geoCode(mode){
	//Prevent Actual submit
//	e.preventDefault();
	var location=document.getElementById("location-input").value;
	//var key="&key=AIzaSyD58s56PZkhKMG5-4re5d29_E31O2G3z54";
	var url="https://maps.googleapis.com/maps/api/geocode/json?address="+location+key;
	var latt,long;
	$.getJSON(url,function(data){
			var result=data;
		latt=data.results[0].geometry.location.lat;
		long=data.results[0].geometry.location.lng;
		getDistance(latt,long,mode);
	});
}

/*Use google DISTANCE MATRIX API to calculate the distance
between two lattitide and longtitude points the map
 */
function getDistance(latt,long,mode){
	var destLat=38.5613;
	var destLng=-121.4241;
	var proxy="https://cors-anywhere.herokuapp.com/";
	//var dist;
	//var result;
	var url="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+latt+","+long + "&destinations="+destLat+ ","+destLng+mode+key;
	//-------Test------------------------------------------
	var x=new XMLHttpRequest();
	x.open('GET',proxy+url);
	x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	//--------------------------------------------------------
	
	$.getJSON(proxy+url,function(data){
		
		var result=data;
		var dist=parseFloat(data.rows[0].elements[0].distance.text);
		var duration=data.rows[0].elements[0].duration.value;
	
		var dur=data.rows[0].elements[0].duration.text;
		if(mode=="&mode=bicycling"){
			sessionStorage.setItem("bicycleDuration",dur);
			sessionStorage.setItem("bicycleDist",dist);
			sessionStorage.setItem('bicycleValue',duration);
		}else if(mode=="&mode=driving"){
			sessionStorage.setItem("carDuration",dur);
			sessionStorage.setItem("carDist",dist)
			sessionStorage.setItem('driveValue',duration);
		}else if(mode=="&mode=transit"){
			sessionStorage.setItem("transitDuration",dur);
			sessionStorage.setItem("transitDist",dist);
			sessionStorage.setItem('transitValue',duration);
		}else if(mode=="&mode=walking"){
			sessionStorage.setItem("walkDuration",dur);
			sessionStorage.setItem("walkDist",dist);
			sessionStorage.setItem('walkValue',duration);
		}
	});
	}




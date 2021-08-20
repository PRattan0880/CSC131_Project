/**Use google GEOCODE API to convert addresses to appropriate
lattitude and longtitude points to be used to calculate 
distance
 */


 function multiCode(location,n){
	//Prevent Actual submit
//	e.preventDefault();
    var key="&key=AIzaSyD58s56PZkhKMG5-4re5d29_E31O2G3z54";
	//var location=document.getElementById("location-input").value;
	//var key="&key=AIzaSyD58s56PZkhKMG5-4re5d29_E31O2G3z54";
	var url="https://maps.googleapis.com/maps/api/geocode/json?address="+location+key;
	var latt,long;
	$.getJSON(url,function(data){
		//geometry locationt tag
		//var add=data.results[0].formatted_address;
		
		
		//if(data.status=="OK"){
			var result=data;
			
		latt=data.results[0].geometry.location.lat;
		long=data.results[0].geometry.location.lng;
		//TESTING----------
		if(n==1){
			sessionStorage.setItem("Lattitude",latt);
			sessionStorage.setItem("Longtitude",long);
		}else{
			sessionStorage.setItem("Lattitude2",latt);
			sessionStorage.setItem("Longtitude2",long);
		}
	});
}

/*Use google DISTANCE MATRIX API to calculate the distance
between two lattitide and longtitude points the map
 */
function getMultiDistance(latt,long,latt2,long2, mode,n){
	//var destLat=38.5613;
	//var destLng=-121.4241;
	var key="&key=AIzaSyD58s56PZkhKMG5-4re5d29_E31O2G3z54";
	var proxy="https://cors-anywhere.herokuapp.com/";
	//var dist;
	//var result;
	var url="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+latt+","+long + "&destinations="+latt2+ ","+long2+mode+key;
	//-------Test------------------------------------------
	var x=new XMLHttpRequest();
	x.open('GET',proxy+url);
	x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	//--------------------------------------------------------
	
	$.getJSON(proxy+url,function(data){
		
		var result=data;
		var dist=parseFloat(data.rows[0].elements[0].distance.text);
		//document.getElementById("distance").innerHTML=dist;
		//Test
		var dur=data.rows[0].elements[0].duration.text;
		var duration=data.rows[0].elements[0].duration.value;
		
		if(n==1){
			sessionStorage.setItem("mutliDuration",dur);
			sessionStorage.setItem("multiDist",dist);
			sessionStorage.setItem("multiDurationValue",duration);
		}else if(n==2){
			sessionStorage.setItem("multiDur2",dur);
			sessionStorage.setItem("multiDist2",dist);
			sessionStorage.setItem("multiDurationValue2",duration);
		}
	});
}




function testMulti(){
	multiCode("&mode=driving","7104 Lyndale circle",1);
	
	var latt=localStorage.getItem("Lattitude");
	var long=localStorage.getItem("Longtitude");
	
	multiCode("&mode=driving","8447 Chattan Way",2);
	var latt2=localStorage.getItem("Lattitude");
	var long2=localStorage.getItem("Longtitude");
	console.log(latt);
	console.log(long);
	console.log(latt2);
	console.log(long2);
	
	
	getMultiDistance(localStorage.getItem("Lattitude"),localStorage.getItem("Longtitude"),localStorage.getItem("Lattitude2"),localStorage.getItem("Longtitude2"),"&mode=driving",1);
	
	//Second location distance
	getMultiDistance(localStorage.getItem("Lattitude2"),localStorage.getItem("Longtitude2"),38.5613,-121.4241,"&mode=bicycling",2);
	
	
	getDuration();
	
}

function getDuration(){
		var sec=parseFloat(localStorage.getItem("multiDurationValue"))+parseFloat(localStorage.getItem("multiDurationValue2"));
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*360);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = Math.floor(sec/60);
        sec%=60;
        var seconds=sec;
        
        var results=hour + "H:" + minutes +"M:"+seconds;
		console.log(results); 	
}
	



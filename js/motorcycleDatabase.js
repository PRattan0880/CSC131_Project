/**
 * http://usejsdoc.org/
 */

//DECLARE THE INDEXDDB

//var request,db,tx,store,index;
function motoData(){
var request,db,tx,store,index;
var DBDeleteRequest = window.indexedDB.deleteDatabase("MotorDatabase");
//window.indexed=window.indexedDB;
request=window.indexedDB.open("MotorDatabase",1),db,tx,store,index;

request.onupgradeneeded=function(e){
	var  db=request.result,
	store=db.createObjectStore("MotorInsuranceStore",{autoIncrement:true}),
	index=store.createIndex("model", "model",{unique:true});
};


request.onerr=function(e){
	console.log("ERROR: "+e.target.errorCode);
};

//ADD MOTORCYCLE TO INDEXEDDB DATABASE
request.onsuccess=function(e){
	db=request.result;
	tx=db.transaction("MotorInsuranceStore","readwrite");
	store=tx.objectStore("MotorInsuranceStore");
	index=store.index("model");
	
	
	//ADD BMW
	store.put({make: "BMW", model: "SPORT", rate: 221.0, mileage: 70.0, repair: 1858.98});
	store.put({make: "BMW", model: "TOUR", rate: 127.0, mileage: 70.0, repair: 1858.98});
	store.put({make: "BMW", model: "ROADSTER", rate: 221.0, mileage: 79.0, repair: 1858.98});
	store.put({make: "BMW", model: "HERITAGE", rate: 151.0, mileage: 73.0, repair: 1858.98});
	store.put({make: "BMW", model: "ADVENTURE", rate: 612.0, mileage: 72.0, repair: 1858.98});
	store.put({make: "BMW", model: "URBAN MOVILITY", rate: 99.0, mileage: 72.0, repair: 1858.98});
	
	

	//ADD DUCATI
	store.put({make: "DUCATI", model: "DIAVEL", rate: 221.0, mileage: 23.52, repair: 1500.00});
	store.put({make: "DUCATI", model: "HYPERMOTORAD", rate: 217.0, mileage: 47.04, repair: 1500.00});
	store.put({make: "DUCATI", model: "MONSTER", rate: 151.0, mileage: 44.45, repair: 1500.00});
	store.put({make: "DUCATI", model: "MULTISTRADA", rate: 151.0, mileage: 37.63, repair: 1500.00});
	store.put({make: "DUCATI", model: "PANIGALE", rate: 504.0, mileage: 33.0, repair: 1500.00});
	store.put({make: "DUCATI", model: "SCRAMBLER", rate: 77.0, mileage: 43, repair: 1500.00});
	
	
	//ADD HONDA
	store.put({make: "HONDA", model: "TOURING", rate: 165.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "CRUISER", rate: 78.0, mileage: 60.0, repair: 1250.00});
	store.put({make: "HONDA", model: "STANDARD", rate: 132.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "SUPERSPORT", rate: 502.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "NEO-SPORT CAFE", rate: 229.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "MINIMOTO", rate: 76.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "DUAL SPORT", rate: 99.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "SCOOTER", rate: 71.0, mileage: 70.0, repair: 1250.00});
	store.put({make: "HONDA", model: "TRAIL", rate: 88.0, mileage: 70.1, repair: 1250.00});
	store.put({make: "HONDA", model: "COMPETITION", rate: 88.0, mileage: 70.1, repair: 1250.00});
	store.put({make: "HONDA", model: "OFF-ROAD ADVENTURE", rate: 70.0, mileage: 26, repair: 1250.00});
	
	//ADD KAWASAKI
	store.put({make: "KAWASAKI", model: "NINJA", rate: 99.0, mileage: 54.1, repair: 600.00});
	store.put({make: "KAWASAKI", model: "VERSYS", rate: 108.0, mileage: 52.0, repair: 600.00});
	store.put({make: "KAWASAKI", model: "VULCAN", rate: 63.0, mileage: 50.0, repair: 600.00});
	store.put({make: "KAWASAKI", model: "KRL/KLX", rate: 83.0, mileage: 50.0, repair: 600.00});
	store.put({make: "KAWASAKI", model: "KX", rate: 83.0, mileage: 50.0, repair: 600.00});
	
	//ADD HARLEY DIVSION
	store.put({make: "HARLEY DAVIDSON", model: "HARLEY-DAVIDSON STREET", rate:258.0, mileage: 39.98, repair: 550.00});
	store.put({make: "HARLEY DAVIDSON", model: "SPORTSTER", rate: 254.0, mileage: 41.7, repair: 550.00});
	store.put({make: "HARLEY DAVIDSON", model: "SOFTAIL", rate: 258.0, mileage: 40.4, repair: 550.00});
	store.put({make: "HARLEY DAVIDSON", model: "TRIKE", rate: 302.0, mileage: 42.0, repair: 550.00});
	store.put({make: "HARLEY DAVIDSON", model: "CVO", rate: 302.0, mileage: 18.81, repair: 550.00});
	
	//ADD SUZUKI
	store.put({make: "SUZUKI", model: "SPORTBIKE", rate:260.0, mileage: 28, repair: 850.00});
	store.put({make: "SUZUKI", model: "DUALSPORT", rate: 55.0, mileage: 41, repair: 850.00});
	store.put({make: "SUZUKI", model: "SUPERMOTO", rate: 55.0, mileage: 25, repair: 850.00});
	store.put({make: "SUZUKI", model: "MOTOCROSS", rate: 45.0, mileage: 37, repair: 850.00});
	store.put({make: "SUZUKI", model: "OFF ROAD", rate: 45.0, mileage: 41, repair: 850.00});
	
	//ADD YAMAHA
	store.put({make: "YAMAHA", model: "CROSS COUNTRY", rate: 83.0, mileage: 41, repair: 750.00});
	store.put({make: "YAMAHA", model: "SPORT HERITAGE", rate: 75.0, mileage: 41, repair: 750.00});
	store.put({make: "YAMAHA", model: "ADVENTURE TOURING", rate: 127.0, mileage: 41, repair: 750.00});
	//ADD INDIAN
	store.put({make: "INDIAN", model: "CHIEF", rate: 100.0 , mileage: 41, repair: 500.00});
	store.put({make: "INDIAN", model: "CHIEFTAIN", rate: 99.0 , mileage: 41, repair: 500.00});
	store.put({make: "INDIAN", model: "ROADMASTER", rate: 98.0 , mileage: 41, repair: 500.00});
	store.put({make: "INDIAN", model: "SCOUT", rate: 76.0 , mileage: 41, repair: 500.00});
	store.put({make: "INDIAN", model: "SPRINGFIELD", rate: 97.0 , mileage: 41, repair: 500.00});
	store.put({make: "INDIAN", model: "CHALLENGER", rate: 80.0 , mileage: 41, repair: 500.00});
	store.put({make: "INDIAN", model: "FTR", rate: 85.0 , mileage: 41, repair: 500.00});
	
	//RETRIEVE DATA
	
	let q1=store.get(1);
	
	let moto=index.get(document.getElementById("model").value);
	
	q1.onsuccess=function(){
		console.log(q1.result);
		console.log(q1.result.model);
	}
	moto.onsuccess=function(){
		sessionStorage.setItem("rate",moto.result.rate);
		sessionStorage.setItem("mpg",moto.result.mileage);
		sessionStorage.setItem("repair",moto.result.repair);
	};
}
}

$(document).ready(function () {
  $("#make").change(function () {
     switch($(this).val()) {
        case 'BMW':
            $("#model").html("<option value='ADVENTURE'>ADVENTURE</option>"
							+ "<option value='HERITAGE'>HERITAGE</option>"
							+ "<option value='ROADSTER'>ROADSTER</option>"
							+ "<option value='SPORT'>SPORT</option>"
							+ "<option value='TOUR'>TOUR</option>"
							+ "<option value='URBAN MOVILITY'>URBAN MOVILITY</option>");
            break;
	case 'DUCATI':
			$("#model").html("<option value='DIAVEL'>DIAVEL</option>"
							+ "<option value='HYPERMOTORAD'>HYPERMOTORAD</option>"
							+ "<option value='MONSTER'>MONSTER</option>"
							+ "<option value='MULTISTRADA'>MULTISTRADA</option>"
							+ "<option value='PANIGALE'>PANIGALE</option>"
							+ "<option value='SCRAMBLER'>SCRAMBLER</option>");
            break;
	case 'HARLEY DAVIDSON':
			$("#model").html("<option value='CVO'>CVO</option>"
							+ "<option value='HARLEY-DAVIDSON STREET'>HARLEY-DAVIDSON STREET</option>"
							+ "<option value='SOFTAIL'>SOFTAIL</option>"
							+ "<option value='SPORTSTER'>SPORTSTER</option>"
							+ "<option value='TRIKE'>TRIKE</option>");
            break;
	case 'HONDA':
			$("#model").html("<option value='COMPETITION'>COMPETITION</option>"
							+ "<option value='CRUISER'>CRUISER</option>"
							+ "<option value='DUAL SPORT'>DUAL SPORT</option>"
							+ "<option value='MINIMOTO'>MINIMOTO</option>"
							+ "<option value='NEO-SPORT CAFE'>NEO-SPORT CAFE</option>"
							+ "<option value='OFF-ROAD ADVENTURE'>OFF-ROAD ADVENTURE</option>"
							+ "<option value='SCOOTER'>SCOOTER</option>"
							+ "<option value='STANDARD'>STANDARD</option>"
							+ "<option value='SUPERSPORT'>SUPERSPORT</option>"
							+ "<option value='TOURING'>TOURING</option>"
							+ "<option value='TRAIL'>TRAIL</option>");
            break;
	case 'KAWASAKI':
			$("#model").html("<option value='KRL/KLX'>KRL/KLX</option>"
							+ "<option value='KX'>KX</option>"
							+ "<option value='NINJA'>NINJA</option>"
							+ "<option value='VERSYS'>VERSYS</option>"
							+ "<option value='VULCAN'>VULCAN</option>");
            break;
	case 'SUZUKI':
			$("#model").html("<option value='DUALSPORT'>DUALSPORT</option>"
							+ "<option value='OFF ROAD'>OFF ROAD</option>"
							+ "<option value='MOTOCROSS'>MOTOCROSS</option>"
							+ "<option value='SPORTBIKE'>SPORTBIKE</option>"
							+ "<option value='SUPERMOTO'>SUPERMOTO</option>");
            break;
	case 'INDIAN':
			$("#model").html("<option value='CHALLENGER'>CHALLENGER</option>"
							+ "<option value='CHIEF'>CHIEF</option>"
							+ "<option value='CHIEFTAIN'>CHIEFTAIN</option>"
							+ "<option value='FTR'>FTR</option>"
							+ "<option value='ROADMASTER'>ROADMASTER</option>"
							+ "<option value='SCOUT'>SCOUT</option>"
							+ "<option value='SPRINGFIELD'>SPRINGFIELD</option>");
            break;
	case 'YAMAHA':
			$("#model").html("<option value='ADVENTURE TOURING'>ADVENTURE TOURING</option>"
							+ "<option value='CROSS COUNTRY'>CROSS COUNTRY</option>"
							+ "<option value='SPORT HERITAGE'>SPORT HERITAGE</option>");
            break;
	
        default:
            $("#MODEL").html("<option value=''>SELECT MODEL</option>");
     }
  });
});








/**
 * http://usejsdoc.org/
 */

//DECLARE THE INDEXDDB

//var request,db,tx,store,index;
function data(){
var request,db,tx,store,index;
var DBDeleteRequest = window.indexedDB.deleteDatabase("InsuranceDatabase");
//window.indexed=window.indexedDB;
request=window.indexedDB.open("InsuranceDatabase",1),db,tx,store,index;

request.onupgradeneeded=function(e){
	var  db=request.result,
	store=db.createObjectStore("InsuranceStore",{autoIncrement:true}),
	index=store.createIndex("model", "model",{unique:true});
};


request.onerr=function(e){
	console.log("ERROR: "+e.target.errorCode);
};

//ADD CARS TO INDEXEDDB DATABASE
request.onsuccess=function(e){
	db=request.result;
	tx=db.transaction("InsuranceStore","readwrite");
	store=tx.objectStore("InsuranceStore");
	index=store.index("model");
	
	
	//ADD ACURA
	store.put({make: "ACURA", model: "ILX", rate: 160, mileage: 34, repair:501});
	store.put({make:"ACURA",model:"MDX",rate:191.0, mileage: 27, repair:501});
	store.put({make:"ACURA",model:"NSX", rate: 191.0, mileage: 22, repair:501});
	store.put({make:"ACURA",model:"RDX",rate:153.0, mileage: 28, repair:501});
	store.put({make: "ACURA", model: "RLX", rate: 152.0, mileage: 29, repair:501});
	store.put({make:"ACURA",model:"TLX",rate:152.0, mileage: 31, repair:501});
	
	//ADD AUDI CARS
	store.put({make: "AUDI", model: "A3", rate: 191.0, mileage: 36, repair: 1011});
	store.put({make: "AUDI", model: "A4", rate: 191.0, mileage: 31,repair: 1011});
	store.put({make: "AUDI", model: "A5", rate: 127.0, mileage: 34, repair: 1011});
	store.put({make: "AUDI", model: "A6", rate: 136.0, mileage: 31, repair: 1011});
	store.put({make: "AUDI", model: "A7", rate: 124.0, mileage: 29, repair: 1011});
	store.put({make: "AUDI", model: "A8", rate: 191.0, mileage: 26, repair: 1011});
	store.put({make: "AUDI", model: "Q3", rate: 191.0, mileage: 28, repair: 1011});
	store.put({make: "AUDI", model: "Q5", rate: 138.0, mileage: 28, repair: 1011});
	store.put({make: "AUDI", model: "Q7", rate: 197.0, mileage: 23, repair: 1011});
	store.put({make: "AUDI", model: "R8", rate: 197.0, mileage: 20, repair: 1011});
	store.put({make: "AUDI", model: "RS7", rate: 191.0, mileage: 22, repair: 1011});
	store.put({make: "AUDI", model: "S3", rate: 132.0, mileage: 29, repair: 1011});
	store.put({make: "AUDI", model: "S5", rate: 98.0, mileage: 28, repair: 1011});
	store.put({make: "AUDI", model: "S6", rate: 132.0, mileage: 28, repair: 1011});
	store.put({make: "AUDI", model: "S7", rate: 191.0, mileage: 28, repair: 1011});
	store.put({make: "AUDI", model: "S8", rate: 191.0, mileage: 22, repair: 1011});
	store.put({make: "AUDI", model: "SQ5", rate: 132.0, mileage: 24, repair: 1011});
	store.put({make: "AUDI", model: "TT", rate: 128.0, mileage: 31, repair: 1011});
	store.put({make: "AUDI", model: "TTS", rate: 125.0, mileage: 31, repair: 1011});
	
	//ADD BMW
	store.put({make: "BMW", model: "2 SERIES", rate: 238.0, mileage: 32, repair: 1300});
	store.put({make: "BMW", model: "3 SERIES", rate: 178.0, mileage: 36, repair: 1300});
	store.put({make: "BMW", model: "4 SERIES", rate: 238.0, mileage: 34, repair: 1300});
	store.put({make: "BMW", model: "5 SERIES", rate: 169.0, mileage: 33, repair: 1300});
	store.put({make: "BMW", model: "6 SERIES", rate: 160.0, mileage: 29, repair: 1300});
	store.put({make: "BMW", model: "7 SERIES", rate: 167.0, mileage: 29, repair: 1300});
	store.put({make: "BMW", model: "I3", rate: 181.0, mileage: 102, repair: 1300});
	store.put({make: "BMW", model: "I8", rate: 161.0, mileage: 27, repair: 1300});
	store.put({make: "BMW", model: "M2", rate: 238.0, mileage: 25, repair: 1300});
	store.put({make: "BMW", model: "M3", rate: 167.0, mileage: 25, repair: 1300});
	store.put({make: "BMW", model: "M4", rate: 159.0, mileage: 25, repair: 1300});
	store.put({make: "BMW", model: "M6", rate: 161.0, mileage: 22, repair: 1300});
	store.put({make: "BMW", model: "X1", rate: 179.0, mileage: 31, repair: 1300});
	store.put({make: "BMW", model: "X3", rate: 180.0, mileage: 29, repair: 1300});
	store.put({make: "BMW", model: "X4", rate: 238.0, mileage: 27, repair: 1300});
	store.put({make: "BMW", model: "X5", rate: 178.0, mileage: 25, repair: 1300});
	store.put({make: "BMW", model: "X6", rate: 173.0, mileage: 24, repair: 1300});
	
	//ADD BUICK
	store.put({make: "BUICK", model: "CASCADA", rate: 238.0, mileage: 29, repair: 652});
	store.put({make: "BUICK", model: "ENCLAVE", rate: 161.0, mileage: 26, repair: 652});
	store.put({make: "BUICK", model: "ENCORE", rate: 238.0, mileage: 30, repair: 652});
	store.put({make: "BUICK", model: "ENVISION", rate: 238.0, mileage: 31, repair: 652});
	store.put({make: "BUICK", model: "LACROSSE", rate: 238.0, mileage: 35, repair: 652});
	store.put({make: "BUICK", model: "REGAL", rate: 168.0, mileage: 29, repair: 652});
	store.put({make: "BUICK", model: "VERANO", rate: 238.0, mileage: 31, repair: 652});
	
	//ADD CADILLAC
	store.put({make: "CADILLAC", model: "ATS", rate: 173.0, mileage: 30, repair: 652});
	store.put({make: "CADILLAC", model: "ATS-V", rate: 169.0, mileage: 33, repair: 652});
	store.put({make: "CADILLAC", model: "CT6", rate: 238.0, mileage: 27, repair: 652});
	store.put({make: "CADILLAC", model: "CTS", rate: 173.0, mileage: 30, repair: 652});
	store.put({make: "CADILLAC", model: "CTS-V", rate: 170.0, mileage: 21, repair: 652});
	store.put({make: "CADILLAC", model: "ESCALADE", rate: 179.0, mileage: 20, repair: 652});
	store.put({make: "CADILLAC", model: "XT5", rate: 238.0, mileage: 29, repair: 652});
	store.put({make: "CADILLAC", model: "XTS", rate: 167.0, mileage: 28, repair: 652});
	
	//ADD CHEVROLET	
	store.put({make: "CHEVROLET", model: "BOLT EV", rate: 238.0, mileage: 108, repair: 652});
	store.put({make: "CHEVROLET", model: "CAMARO", rate: 154.0, mileage: 30, repair: 652});
	store.put({make: "CHEVROLET", model: "CITY EXPRESS", rate: 171.0, mileage: 26, repair: 652});
	store.put({make: "CHEVROLET", model: "COLORADO", rate: 161.0, mileage: 31, repair: 652});
	store.put({make: "CHEVROLET", model: "CORVETTE", rate: 238.0, mileage: 30, repair: 652});
	store.put({make: "CHEVROLET", model: "CRUZE", rate: 238.0, mileage: 48, repair: 652});
	store.put({make: "CHEVROLET", model: "EQUINOX", rate: 177.0, mileage: 31, repair: 652});
	store.put({make: "CHEVROLET", model: "EXPRESS", rate: 171.0, mileage: 16, repair: 652});
	store.put({make: "CHEVROLET", model: "IMPALA", rate: 175.0, mileage: 28, repair: 652});
	store.put({make: "CHEVROLET", model: "MALIBU", rate: 238.0, mileage: 36, repair: 652});
	store.put({make: "CHEVROLET", model: "SILVERADO", rate: 160.0, mileage: 33, repair: 652});
	store.put({make: "CHEVROLET", model: "SONIC", rate: 174.0, mileage: 34, repair: 652});
	store.put({make: "CHEVROLET", model: "SPARK", rate: 181.0, mileage: 38, repair: 652});
	store.put({make: "CHEVROLET", model: "SS", rate: 164.0, mileage: 22, repair: 652});
	store.put({make: "CHEVROLET", model: "SUBURBAN", rate: 172.0, mileage: 20, repair: 652});
	store.put({make: "CHEVROLET", model: "TAHOE", rate: 169.0, mileage: 20, repair: 652});
	store.put({make: "CHEVROLET", model: "TRAILBLAZER", rate: 171.0, mileage: 33, repair: 652});
	store.put({make: "CHEVROLET", model: "TRAVERSE", rate: 171.0, mileage: 27, repair: 652});
	store.put({make: "CHEVROLET", model: "TRAX", rate: 180.0, mileage: 31, repair: 652});
	store.put({make: "CHEVROLET", model: "VOLT", rate: 177.0, mileage: 106, repair: 652});
	
	//ADD CHRYSLER
	store.put({make: "CHRYSLER", model: "200", rate: 164.0, mileage: 36, repair: 652});
	store.put({make: "CHRYSLER", model: "300", rate: 160.0, mileage: 30, repair: 652});
	store.put({make: "CHRYSLER", model: "PACIFICA", rate: 132.0, mileage: 28, repair: 652});
	
	//ADD DODGE
	store.put({make: "DODGE", model: "CHALLENGER", rate: 245.0, mileage: 30, repair: 652});
	store.put({make: "DODGE", model: "CHARGER", rate: 173.0, mileage: 30, repair: 652});
	store.put({make: "DODGE", model: "DURANGO", rate: 186.0, mileage: 26, repair: 652});
	store.put({make: "DODGE", model: "GRAND CARAVAN", rate: 238.0, mileage: 26, repair: 652});
	store.put({make: "DODGE", model: "JOURNEY", rate: 189.0, mileage: 25, repair: 652});
	
	//ADD FIAT
	store.put({make: "FIAT", model: "124 SPIDER", rate: 238.0, mileage: 35, repair: 522});
	store.put({make: "FIAT", model: "500", rate: 180.0, mileage: 33, repair: 522});
	store.put({make: "FIAT", model: "500L", rate: 166.0, mileage: 30, repair: 522});
	store.put({make: "FIAT", model: "500X", rate: 245.0, mileage: 30, repair: 522});
	
	//ADD FORD
	store.put({make: "FORD", model: "C-MAX", rate: 238.0, mileage: 38, repair: 775});
	store.put({make: "FORD", model: "EDGE", rate: 173.0, mileage: 29, repair: 775});
	store.put({make: "FORD", model: "ESCAPE", rate: 178.0, mileage: 37, repair: 775});
	store.put({make: "FORD", model: "EXPEDITION", rate: 172.0, mileage: 23, repair: 775});
	store.put({make: "FORD", model: "EXPLORER", rate: 171.0, mileage: 29, repair: 775});
	store.put({make: "FORD", model: "F-150", rate: 157.0, mileage: 22, repair: 775});
	store.put({make: "FORD", model: "F-250", rate: 167.0, mileage: 15.5, repair: 775});
	store.put({make: "FORD", model: "F-350", rate: 245.0, mileage: 16.5, repair: 775});
	store.put({make: "FORD", model: "F-450", rate: 166.0, mileage: 19, repair: 775});
	store.put({make: "FORD", model: "FIESTA", rate: 180.0, mileage: 37, repair: 775});
	store.put({make: "FORD", model: "FLEX", rate: 171.0, mileage: 23, repair: 775});
	store.put({make: "FORD", model: "FOCUS", rate: 238.0, mileage: 40, repair: 775});
	store.put({make: "FORD", model: "FUSION", rate: 178.0, mileage: 34, repair: 775});
	store.put({make: "FORD", model: "GT", rate: 245.0, mileage: 21, repair: 775});
	store.put({make: "FORD", model: "MUSTANG", rate: 166.0, mileage: 32, repair: 775});
	store.put({make: "FORD", model: "TAURUS", rate: 173.0, mileage: 26, repair: 775});
	store.put({make: "FORD", model: "TRANSIT CONNECT", rate: 172.0, mileage: 29, repair: 775});
	store.put({make: "FORD", model: "ECOSPORT", rate: 130.0, mileage: 29, repair: 775});
	
	//ADD GENESIS
	store.put({make: "GENESIS", model: "GENESIS G80", rate: 175.0, mileage: 32, repair: 460});
	store.put({make: "GENESIS", model: "GENESIS G90", rate: 175.0, mileage: 24, repair: 460});
	
	//ADD GMC
	store.put({make: "GMC", model: "ACADIA", rate: 136.0, mileage: 29, repair: 747});
	store.put({make: "GMC", model: "ACADIA LIMITED", rate: 133.0, mileage: 22, repair: 747});
	store.put({make: "GMC", model: "CANYON", rate: 128.0, mileage: 30, repair: 747});
	store.put({make: "GMC", model: "SAVANA", rate: 124.0, mileage: 16, repair: 747});
	store.put({make: "GMC", model: "TERRAIN", rate: 123.0, mileage: 30, repair: 747});
	store.put({make: "GMC", model: "YUKON", rate: 190.0, mileage: 20, repair: 747});
	
	//ADD HONDA
	store.put({make: "HONDA", model: "ACCORD", rate: 151.0, mileage: 38, repair: 368});
	store.put({make: "HONDA", model: "CIVIC", rate: 153.0, mileage: 42, repair: 368});
	store.put({make: "HONDA", model: "CLARITY", rate: 197.0, mileage: 103, repair: 368});
	store.put({make: "HONDA", model: "CR-V", rate: 197.0, mileage: 34, repair: 368});
	store.put({make: "HONDA", model: "FIT", rate: 145.0, mileage: 40, repair: 368});
	store.put({make: "HONDA", model: "HR-V", rate: 147.0, mileage: 34, repair: 368});
	store.put({make: "HONDA", model: "ODYSSEY", rate: 132.0, mileage: 28, repair: 368});
	store.put({make: "HONDA", model: "PILOT", rate: 137.0, mileage: 27, repair: 368});
	store.put({make: "HONDA", model: "RIDGELINE", rate: 191.0, mileage: 26, repair: 368});
	
	//ADD HYUNDAI
	store.put({make: "HYUNDAI", model: "ACCENT", rate: 177.0, mileage: 41, repair: 468});
	store.put({make: "HYUNDAI", model: "AZERA", rate: 165.0, mileage: 28, repair: 468});
	store.put({make: "HYUNDAI", model: "ELANTRA", rate: 220.0, mileage: 43, repair: 468});
	store.put({make: "HYUNDAI", model: "ELANTRA GT", rate: 177.0, mileage: 32, repair: 468});
	store.put({make: "HYUNDAI", model: "IONIQ", rate: 227.0, mileage: 59, repair: 468});
	store.put({make: "HYUNDAI", model: "SANTA FE", rate: 158.0, mileage: 29, repair: 468});
	store.put({make: "HYUNDAI", model: "SANTA FE SPORT", rate: 165.0, mileage: 27, repair: 468});
	store.put({make: "HYUNDAI", model: "SONATA", rate: 176.0, mileage: 38, repair: 468});
	store.put({make: "HYUNDAI", model: "TUCSON", rate: 169.0, mileage: 28, repair: 468});
	store.put({make: "HYUNDAI", model: "VELOSTER", rate: 220.0, mileage: 34, repair: 468});
	
	//ADD INFINITI
	store.put({make: "INFINITI", model: "Q50", rate: 220.0, mileage: 29, repair: 639});
	store.put({make: "INFINITI", model: "Q60", rate: 220.0, mileage: 27, repair: 639});
	store.put({make: "INFINITI", model: "Q70", rate: 160.0, mileage: 25, repair: 639});
	store.put({make: "INFINITI", model: "Q70L", rate: 160.0, mileage: 25, repair: 639});
	store.put({make: "INFINITI", model: "QX30", rate: 220.0, mileage: 33, repair: 639});
	store.put({make: "INFINITI", model: "QX50", rate: 167.0, mileage: 29, repair: 639});
	store.put({make: "INFINITI", model: "QX60", rate: 220.0, mileage: 27, repair: 639});
	store.put({make: "INFINITI", model: "QX70", rate: 166.0, mileage: 24, repair: 639});
	store.put({make: "INFINITI", model: "QX80", rate: 166.0, mileage: 20, repair: 639});
	
	//ADD JAGUAR
	store.put({make: "JAGUAR", model: "F-PACE", rate: 201.0, mileage: 27, repair: 1066});
	store.put({make: "JAGUAR", model: "F-TYPE", rate: 148.0, mileage: 30, repair: 1066});
	store.put({make: "JAGUAR", model: "XE", rate: 163.0, mileage: 34, repair: 1066});
	store.put({make: "JAGUAR", model: "XF", rate: 184.0, mileage: 34, repair: 1066});
	store.put({make: "JAGUAR", model: "XJ", rate: 158.0, mileage: 27, repair: 1066});
	store.put({make: "JAGUAR", model: "XJL", rate: 110.0, mileage: 22, repair: 1066});
	store.put({make: "JAGUAR", model: "XJR", rate: 110.0, mileage: 27, repair: 1066});
	
	//ADD JEEP
	store.put({make: "JEEP", model: "CHEROKEE", rate: 220.0, mileage: 31, repair: 694});
	store.put({make: "JEEP", model: "COMPASS", rate: 164.0, mileage: 31, repair: 694});
	store.put({make: "JEEP", model: "GRAND CHEROKEE", rate: 220.0, mileage: 36, repair: 694});
	store.put({make: "JEEP", model: "PATRIOT", rate: 164.0, mileage: 30, repair: 694});
	store.put({make: "JEEP", model: "RENEGADE", rate: 220.0, mileage: 32, repair: 694});
	store.put({make: "JEEP", model: "WRANGLER", rate: 154.0, mileage: 29, repair: 694});
	
	//ADD KIA
	store.put({make: "KIA", model: "CADENZA", rate: 220.0, mileage: 28, repair: 437});
	store.put({make: "KIA", model: "FORTE", rate: 180.0, mileage: 41, repair: 437});
	store.put({make: "KIA", model: "K900", rate: 220.0, mileage: 25, repair: 437});
	store.put({make: "KIA", model: "OPTIMA", rate: 181.0, mileage: 37, repair: 437});
	store.put({make: "KIA", model: "RIO", rate: 187.0, mileage: 41, repair: 437});
	store.put({make: "KIA", model: "SEDONA", rate: 190.0, mileage: 24, repair: 437});
	store.put({make: "KIA", model: "SORENTO", rate: 165.0, mileage: 29, repair: 437});
	store.put({make: "KIA", model: "SOUL", rate: 176.0, mileage: 35, repair: 437});
	store.put({make: "KIA", model: "SOUL EV", rate: 174.0, mileage: 93, repair: 437});
	store.put({make: "KIA", model: "SPORTAGE", rate: 174.0, mileage: 30, repair: 437});
	
	
	//ADD LANDROVER
	store.put({make: "LANDROVER", model: "DISCOVERY", rate: 227.0, mileage: 26, repair: 1258});
	store.put({make: "LANDROVER", model: "DISCOVERY SPORT", rate: 161.0, mileage: 24, repair: 1258});
	store.put({make: "LANDROVER", model: "RANGE ROVER", rate: 156.0, mileage: 28, repair: 1258});
	store.put({make: "LANDROVER", model: "RANGE ROVER EVOQUE", rate: 220.0, mileage: 27, repair: 1258});
	store.put({make: "LANDROVER", model: "RANGE ROVER SPORT", rate: 227.0, mileage: 28, repair: 1258});
	store.put({make: "LANDROVER", model: "RANGE ROVER VELAR", rate: 185.0, mileage: 27, repair: 1258});
	
	//ADD LEXUS
	store.put({make: "LEXUS", model: "CT", rate: 171.0, mileage: 40, repair: 551});
	store.put({make: "LEXUS", model: "ES", rate: 167.0, mileage: 44, repair: 551});
	store.put({make: "LEXUS", model: "GS", rate: 220.0, mileage: 28, repair: 551});
	store.put({make: "LEXUS", model: "GS F", rate: 220.0, mileage: 24, repair: 551});
	store.put({make: "LEXUS", model: "GX", rate: 161.0, mileage: 19, repair: 551});
	store.put({make: "LEXUS", model: "IS", rate: 162.0, mileage: 31, repair: 551});
	store.put({make: "LEXUS", model: "LS", rate: 155.0, mileage: 33, repair: 551});
	store.put({make: "LEXUS", model: "LX", rate: 161.0, mileage: 16, repair: 551});
	store.put({make: "LEXUS", model: "NX", rate: 167.0, mileage: 30, repair: 551});
	store.put({make: "LEXUS", model: "RC", rate: 220.0, mileage: 31, repair: 551});
	store.put({make: "LEXUS", model: "RC F", rate: 156.0, mileage: 31, repair: 551});
	store.put({make: "LEXUS", model: "RX", rate: 154.0, mileage: 28, repair: 551});
	
	//ADD LINCOLN
	store.put({make: "LINCOLN", model: "CONTINENTAL", rate: 220.0, mileage: 27, repair: 635});
	store.put({make: "LINCOLN", model: "MKC", rate: 159.0, mileage: 27, repair: 635});
	store.put({make: "LINCOLN", model: "MKT", rate: 157.0, mileage: 21, repair: 635});
	store.put({make: "LINCOLN", model: "MKX", rate: 157.0, mileage: 25, repair: 635});
	store.put({make: "LINCOLN", model: "MKZ", rate: 220.0, mileage: 31, repair: 635});
	store.put({make: "LINCOLN", model: "NAVIGATOR", rate: 159.0, mileage: 21, repair: 635});
	
	//ADD MASERATI
	store.put({make: "MASERATI", model: "GHIBLI", rate: 385.0, mileage: 24, repair: 380});
	store.put({make: "MASERATI", model: "GRANTURISMO", rate: 535.0, mileage: 20, repair: 380});
	store.put({make: "MASERATI", model: "LEVANTE", rate: 291.0, mileage: 22, repair: 380});
	store.put({make: "MASERATI", model: "QUATTROPORTE", rate: 433.0, mileage: 24, repair: 380});
	
	//ADD MAZDA
	store.put({make: "MAZDA", model: "3", rate: 165.0, mileage: 36, repair: 462});
	store.put({make: "MAZDA", model: "5", rate: 220.0, mileage: 28, repair: 462});
	store.put({make: "MAZDA", model: "CX-3", rate: 165.0, mileage: 34, repair: 462});
	store.put({make: "MAZDA", model: "CX-5", rate: 227.0, mileage: 31, repair: 462});
	store.put({make: "MAZDA", model: "MX-5 MIATA", rate: 152.0, mileage: 35, repair: 462});
	
	//ADD MERCEDEZ-BENZ
	store.put({make: "MERCEDES-BENZ", model: "AMG GT", rate: 220.0, mileage: 25, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "B250E", rate: 220.0, mileage: 82, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "C-CLASS", rate: 220.0, mileage: 35, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "CLA-CLASS", rate: 152.0, mileage: 35, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "CLS-CLASS", rate: 152.0, mileage: 31, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "E-CLASS", rate: 220.0, mileage: 31, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "G-CLASS", rate: 220.0, mileage: 17, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "GLA-CLASS", rate: 227.0, mileage: 34, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "GLC-CLASS", rate: 220.0, mileage: 29, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "GLE-CLASS", rate: 227.0, mileage: 23, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "GLS-CLASS", rate: 227.0, mileage: 24, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "METRIS", rate: 220.0, mileage: 24, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "S-CLASS", rate: 229.0, mileage: 27, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "SL-CLASS", rate: 140.0, mileage: 28, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "SLC-CLASS", rate: 220.0, mileage: 32, repair: 908});
	store.put({make: "MERCEDES-BENZ", model: "SPRINTER", rate: 227.0, mileage: 14.5, repair: 908});
	
	//ADD MINI
	store.put({make: "MINI", model: "MINI COOPER", rate: 227.0, mileage: 31, repair: 846});
	store.put({make: "MINI", model: "MINI COOPER 4-DOOR", rate: 140.0, repair: 846});
	store.put({make: "MINI", model: "MINI CLUBMAN", rate: 130.0, repair: 846});
	store.put({make: "MINI", model: "MINI CONVERTIBLE", rate: 108.0, repair: 846});
	store.put({make: "MINI", model: "MINI COUNTRYMAN", rate: 140.0, repair: 846});
	store.put({make: "MINI", model: "MINI COUNTRYMAN SE", rate: 130.0, repair: 846});
	
	//ADD MITSUBISHI
	store.put({make: "MITSUBISHI", model: "I-MIEV", rate: 197.0, mileage: 102, repair: 646});
	store.put({make: "MITSUBISHI", model: "LANCER", rate: 213.0, mileage: 30, repair: 646});
	store.put({make: "MITSUBISHI", model: "MIRAGE", rate: 205.0, mileage: 41, repair: 646});
	store.put({make: "MITSUBISHI", model: "OUTLANDER", rate: 213.0, mileage: 29, repair: 646});
	store.put({make: "MITSUBISHI", model: "OUTLANDER SPORT", rate: 185.0, mileage: 29, repair: 646});
	
	//ADD NISSAN
	store.put({make: "NISSAN", model: "370Z", rate: 162.0, mileage: 26, repair: 500});
	store.put({make: "NISSAN", model: "ALTIMA", rate: 183.0, mileage: 39, repair: 500});
	store.put({make: "NISSAN", model: "ARMADA", rate: 220.0, mileage: 19, repair: 500});
	store.put({make: "NISSAN", model: "FRONTIER", rate: 147.0, mileage: 24, repair: 500});
	store.put({make: "NISSAN", model: "GT-R", rate: 158.0, mileage: 22, repair: 500});
	store.put({make: "NISSAN", model: "JUKE", rate: 182.0, mileage: 32, repair: 500});
	store.put({make: "NISSAN", model: "LEAF", rate: 185.0, mileage: 99, repair: 500});
	store.put({make: "NISSAN", model: "MAXIMA", rate: 173.0, mileage: 30, repair: 500});
	store.put({make: "NISSAN", model: "MURANO", rate: 169.0, mileage: 28, repair: 500});
	store.put({make: "NISSAN", model: "NV200", rate: 172.0, mileage: 26, repair: 500});
	store.put({make: "NISSAN", model: "PATHFINDER", rate: 220.0, mileage: 27, repair: 500});
	store.put({make: "NISSAN", model: "ROGUE", rate: 176.0, mileage: 33, repair: 500});
	store.put({make: "NISSAN", model: "SENTRA", rate: 220.0, mileage: 39, repair: 500});
	store.put({make: "NISSAN", model: "TITAN", rate: 220.0, mileage: 21, repair: 500});
	store.put({make: "NISSAN", model: "TITAN XD", rate: 227.0, mileage: 18, repair: 500});
	store.put({make: "NISSAN", model: "VERSA", rate: 191.0, mileage: 40, repair: 500});
	store.put({make: "NISSAN", model: "VERSA NOTE", rate: 180.0, mileage: 39, repair: 500});
	
	//ADD RAM
	store.put({make: "RAM", model: "1500", rate: 148.0, mileage: 25, repair: 1072});
	store.put({make: "RAM", model: "2500", rate: 151.0, mileage: 14, repair: 1072});
	store.put({make: "RAM", model: "3500", rate: 151.0, mileage: 15.1, repair: 1072});
	store.put({make: "RAM", model: "PROMASTER 1500", rate: 156.0, mileage: 14, repair: 1072});
	store.put({make: "RAM", model: "PROMASTER 2500", rate: 156.0, mileage: 14, repair: 1072});
	store.put({make: "RAM", model: "PROMASTER 3500", rate: 227.0, mileage: 14, repair: 1072});
	store.put({make: "RAM", model: "PROMASTER CITY", rate: 220.0, mileage: 28, repair: 1072});
	
	//ADD SUBARU
	store.put({make: "SUBARU", model: "BRZ", rate: 154.0, mileage: 33, repair: 617});
	store.put({make: "SUBARU", model: "CROSSTREK", rate: 220.0, mileage: 33, repair: 617});
	store.put({make: "SUBARU", model: "FORESTER", rate: 141.0, mileage: 33, repair: 617});
	store.put({make: "SUBARU", model: "IMPREZA", rate: 227.0, mileage: 31, repair: 617});
	store.put({make: "SUBARU", model: "LEGACY", rate: 150.0, mileage: 35, repair: 617});
	store.put({make: "SUBARU", model: "OUTBACK", rate: 139.0, mileage: 33, repair: 617});
	store.put({make: "SUBARU", model: "WRX", rate: 144.0, mileage: 27, repair: 617});
	
	//ADD TESLA
	store.put({make: "TESLA", model: "MODEL S", rate: 227.0, mileage: 112, repair: 600});
	store.put({make: "TESLA", model: "MODEL X", rate: 227.0, mileage: 93, repair: 600});
	store.put({make: "TESLA", model: "MODEL 3", rate: 227.0, mileage: 132, repair: 600});
	
	//ADD TOYOTA
	store.put({make: "TOYOTA", model: "4RUNNER", rate: 227.0, mileage: 22, repair: 441});
	store.put({make: "TOYOTA", model: "AVALON", rate: 170.0, mileage: 34, repair: 441});
	store.put({make: "TOYOTA", model: "CAMRY", rate: 175.0, mileage: 39, repair: 441});
	store.put({make: "TOYOTA", model: "COROLLA", rate: 179.0, mileage: 40, repair: 441});
	store.put({make: "TOYOTA", model: "HIGHLANDER", rate: 227.0, mileage: 29, repair: 441});
	store.put({make: "TOYOTA", model: "LAND CRUISER", rate: 162.0, mileage: 17, repair: 441});
	store.put({make: "TOYOTA", model: "MIRAI", rate: 220.0, mileage: 66, repair: 441});
	store.put({make: "TOYOTA", model: "PRIUS", rate: 177.0, mileage: 53, repair: 441});
	store.put({make: "TOYOTA", model: "PRIUS C", rate: 220.0, mileage: 31, repair: 441});
	store.put({make: "TOYOTA", model: "PRIUS PRIME", rate: 220.0, mileage: 133, repair: 441});
	store.put({make: "TOYOTA", model: "PRIUS V", rate: 167.0, mileage: 39, repair: 441});
	store.put({make: "TOYOTA", model: "RAV4", rate: 167.0, mileage: 35, repair: 441});
	store.put({make: "TOYOTA", model: "RAV4 HYBRID", rate: 167.0, mileage: 38, repair: 441});
	store.put({make: "TOYOTA", model: "SEQUOIA", rate: 157.0, mileage: 17, repair: 441});
	store.put({make: "TOYOTA", model: "SIENNA", rate: 149.0, mileage: 24, repair: 441});
	store.put({make: "TOYOTA", model: "TACOMA", rate: 142.0, mileage: 23, repair: 441});
	store.put({make: "TOYOTA", model: "TUNDRA", rate: 135.0, mileage: 17, repair: 441});
	store.put({make: "TOYOTA", model: "YARIS", rate: 181.0, mileage: 37, repair: 441});
	store.put({make: "TOYOTA", model: "YARIS IA", rate: 220.0, mileage: 40, repair: 441});
	
	//ADD VOLKSVAGON
	store.put({make: "VOLKSVAGON", model: "BEETLE", rate: 220.0, mileage: 30, repair: 676});
	store.put({make: "VOLKSVAGON", model: "CC", rate: 220.0, mileage: 31, repair: 676});
	store.put({make: "VOLKSVAGON", model: "GOLF", rate: 158.0, mileage: 39, repair: 676});
	store.put({make: "VOLKSVAGON", model: "GOLF ALLTRACK", rate: 220.0, mileage: 30, repair: 676});
	store.put({make: "VOLKSVAGON", model: "GOLF R", rate: 145.0, mileage: 30, repair: 676});
	store.put({make: "VOLKSVAGON", model: "GOLF SPORTWAGEN", rate: 227.0, mileage: 37, repair: 676});
	store.put({make: "VOLKSVAGON", model: "GTI", rate: 156.0, mileage: 32, repair: 676});
	store.put({make: "VOLKSVAGON", model: "JETTA", rate: 159.0, mileage: 41, repair: 676});
	store.put({make: "VOLKSVAGON", model: "PASSAT", rate: 220.0, mileage: 36, repair: 676});
	store.put({make: "VOLKSVAGON", model: "TIGUAN", rate: 152.0, mileage: 29, repair: 676});
	store.put({make: "VOLKSVAGON", model: "TOUAREG", rate: 220.0, mileage: 23, repair: 676});
	
	//ADD VOLVO
	store.put({make: "VOLVO", model: "S60", rate: 227.0, mileage: 34, repair: 818});
	store.put({make: "VOLVO", model: "S60 CROSS COUNTRY", rate: 227.0, mileage: 30, repair: 818});
	store.put({make: "VOLVO", model: "S90", rate: 220.0, mileage: 32, repair: 818});
	store.put({make: "VOLVO", model: "V60", rate: 227.0, mileage: 34, repair: 818});
	store.put({make: "VOLVO", model: "V60 CROSS COUNTRY", rate: 227.0, mileage: 31, repair: 818});
	store.put({make: "VOLVO", model: "V90 CROSS COUNTRY", rate: 220.0, mileage: 30, repair: 818});
	store.put({make: "VOLVO", model: "XC60", rate: 220.0, mileage: 29, repair: 818});
	store.put({make: "VOLVO", model: "XC90", rate: 220.0, mileage: 30, repair: 818});
	
	
	//RETRIEVE DATA
	
	let q1=store.get(1);
	
	let car=index.get(document.getElementById("model").value);
	
	q1.onsuccess=function(){
		console.log(q1.result);
		console.log(q1.result.model);
	}
	car.onsuccess=function(){
		sessionStorage.setItem("rate",car.result.rate);
		sessionStorage.setItem("mpg",car.result.mileage);
		sessionStorage.setItem("repair",car.result.repair);
	};
	
	db.close();
}
}
$(document).ready(function () {
  $("#make").change(function () {
     switch($(this).val()) {
        case 'ACURA':
            $("#model").html("<option value='ILX'>ILX</option>"
							+ "<option value='MDX'>MDX</option>"
							+ "<option value='NSX'>NSX</option>"
							+ "<option value='RDX'>RDX</option>"
							+ "<option value='RLX'>RLX</option>"
							+ "<option value='TLX'>TLX</option>");
            break;
        case 'AUDI':
            $("#model").html("<option value='A3'>A3</option>"
							+ "<option value='A4'>A4</option>"
							+ "<option value='A5'>A5</option>"
							+ "<option value='A6'>A6</option>"
							+ "<option value='A7'>A7</option>"
							+ "<option value='A8'>A8</option>"
							+ "<option value='Q3'>Q5</option>"
							+ "<option value='Q5'>Q5</option>"
							+ "<option value='Q7'>Q7</option>"
							+ "<option value='R8'>R8</option>"
							+ "<option value='RS7'>RS7</option>"
							+ "<option value='S3'>S3</option>"
							+ "<option value='S5'>S5</option>"
							+ "<option value='S6'>S6</option>"
							+ "<option value='S7'>S7</option>"
							+ "<option value='S8'>S8</option>"
							+ "<option value='SQ5'>SQ5</option>");
            break;
        case 'BMW':
            $("#model").html("<option value='3 SERIES'>3 SERIES</option>"
							+ "<option value='4 SERIES'>4 SERIES</option>"
							+ "<option value='5 SERIES'>5 SERIES</option>"
							+ "<option value='6 SERIES'>6 SERIES</option>"
							+ "<option value='7 SERIES'>7 SERIES</option>"
							+ "<option value='I3'>I3</option>"
							+ "<option value='I8'>I8</option>"
							+ "<option value='M2'>M2</option>"
							+ "<option value='M3'>M3</option>"
							+ "<option value='M4'>M4</option>"
							+ "<option value='M6'>M6</option>"
							+ "<option value='X1'>X1</option>"
							+ "<option value='X3'>X3</option>"
							+ "<option value='X4'>X4</option>"
							+ "<option value='X5'>X5</option>"
							+ "<option value='X6'>X6</option>");
            break;
		case 'BUICK':
			$("#model").html("<option value='CASCADA'>CASCADA</option>"
							+ "<option value='ENCLAVE'>ENCLAVE</option>"
							+ "<option value='ENCORE'>ENCORE</option>"
							+ "<option value='ENVISION'>ENVISION</option>"
							+ "<option value='LACROSSE'>LACROSSE</option>"
							+ "<option value='REGAL'>REGAL</option>"
							+ "<option value='VERANO'>VERANO</option>");
            break;
		case 'CADILLAC':
			$("#model").html("<option value='ATS'>ATS</option>"
							+ "<option value='ATS-V'>ATS-V</option>"
							+ "<option value='CT6'>CT6</option>"
							+ "<option value='CTS'>CTS</option>"
							+ "<option value='CTS-V'>CTS-V</option>"
							+ "<option value='ESCALADE'>ESCALADE</option>"
							+ "<option value='XT5'>XT5</option>"
							+ "<option value='XTS'>XTS</option>");
            break;
		case 'CHEVROLET':
			$("#model").html("<option value='BOLT EV'>BOLT EV</option>"
							+ "<option value='CAMARO'>CAMARO</option>"
							+ "<option value='CITY EXPRESS'>CITY EXPRESS</option>"
							+ "<option value='COLORADO'>COLORADO</option>"
							+ "<option value='CORVETTE'>CORVETTE</option>"
							+ "<option value='CRUZE'>CRUZE</option>"
							+ "<option value='EQUINOX'>EQUINOX</option>"
							+ "<option value='EXPRESS'>EXPRESS</option>"
							+ "<option value='IMPALA'>IMPALA</option>"
							+ "<option value='MALIBU'>MALIBU</option>"
							+ "<option value='SILVERADO'>SILVERADO</option>"
							+ "<option value='SONIC'>SONIC</option>"
							+ "<option value='SPARK'>SPARK</option>"
							+ "<option value='SS'>SS</option>"
							+ "<option value='SUBURBAN'>SUBURBAN</option>"
							+ "<option value='TAHOE'>TAHOE</option>"
							+ "<option value='TRAILBLAZER'>TRAILBLAZER</option>"
							+ "<option value='TRAVERSE'>TRAVERSE</option>"
							+ "<option value='TRAX'>TRAX</option>"
							+ "<option value='VOLT'>VOLT</option>");
            break;
	case 'CHRYSLER':
			$("#model").html("<option value='200'>200</option>"
							+ "<option value='300'>300</option>"
							+ "<option value='PACIFICA'>PACIFICA</option>");
            break;
	case 'DODGE':
			$("#model").html("<option value='CHALLENGER'>CHALLENGER</option>"
							+ "<option value='CHARGER'>CHARGER</option>"
							+ "<option value='DURANGO'>DURANGO</option>"
							+ "<option value='GRAND CARAVAN'>GRAND CARAVAN</option>"
							+ "<option value='JOURNEY'>JOURNEY</option>");
            break;
	case 'FIAT':
			$("#model").html("<option value='124 SPIDER'>124 SPIDER</option>"
							+ "<option value='500'>500</option>"
							+ "<option value='500L'>500L</option>"
							+ "<option value='500X'>500X</option>");
            break;
	case 'FORD':
			$("#model").html("<option value='C-MAX'>C-MAX</option>"
							+ "<option value='EDGE'>EDGE</option>"
							+ "<option value='ESCAPE'>ESCAPE</option>"
							+ "<option value='EXPEDITION'>EXPEDITION</option>"
							+ "<option value='EXPLORER'>EXPLORER</option>"
							+ "<option value='F-150'>F-150</option>"
							+ "<option value='F-250'>F-250</option>"
							+ "<option value='F-350'>F-350</option>"
							+ "<option value='F-450'>F-450</option>"
							+ "<option value='FIESTA'>FIESTA</option>"
							+ "<option value='FLEX'>FLEX</option>"
							+ "<option value='FOCUS'>FOCUS</option>"
							+ "<option value='FUSION'>FUSION</option>"
							+ "<option value='GT'>GT</option>"
							+ "<option value='MUSTANG'>MUSTANG</option>"
							+ "<option value='TAURUS'>TAURUS</option>"
							+ "<option value='TRANSIT CONNECT'>TRANSIT CONNECT</option>"
							+ "<option value='ECOSPORT'>ECOSPORT</option>");
            break;
	case 'GENESIS':
			$("#model").html("<option value='GENESIS G80'>GENESIS G80</option>"
							+ "<option value='GENESIS G90'>GENESIS G90</option>");
            break;
	case 'GMC':
			$("#model").html("<option value='ACADIA'>ACADIA</option>"
							+ "<option value='ACADIA LIMITED'>ACADIA LIMITED</option>"
							+ "<option value='CANYON'>CANYON</option>"
							+ "<option value='SAVANA'>SAVANA</option>"
							+ "<option value='TERRAIN'>TERRAIN</option>"
							+ "<option value='YUKON'>YUKON</option>");
            break;
	case 'HONDA':
			$("#model").html("<option value='ACCORD'>ACCORD</option>"
							+ "<option value='CIVIC'>CIVIC</option>"
							+ "<option value='CLARITY'>CLARITY</option>"
							+ "<option value='CR-V'>CR-V</option>"
							+ "<option value='FIT'>FIT</option>"
							+ "<option value='HR-V'>HR-V</option>"
							+ "<option value='ODYSSEY'>ODYSSEY</option>"
							+ "<option value='PILOT'>PILOT</option>"
							+ "<option value='RIDGELINE'>RIDGELINE</option>");
            break;
	case 'HYUNDAI':
			$("#model").html("<option value='ACCENT'>ACCENT</option>"
							+ "<option value='AZERA'>AZERA</option>"
							+ "<option value='ELANTRA'>ELANTRA</option>"
							+ "<option value='ELANTRA GT'>ELANTRA GT</option>"
							+ "<option value='IONIQ'>IONIQ</option>"
							+ "<option value='SANTA FE'>SANTA FE</option>"
							+ "<option value='SANTA FE SPORT'>SANTA FE SPORT</option>"
							+ "<option value='SONATA'>SONATA</option>"
							+ "<option value='TUCSON'>TUCSON</option>"
							+ "<option value='VELOSTER'>VELOSTER</option>");
            break;
	case 'INFINITI':
			$("#model").html("<option value='Q50'>Q50</option>"
							+ "<option value='Q60'>Q60</option>"
							+ "<option value='Q70'>Q70</option>"
							+ "<option value='Q70L'>Q70L</option>"
							+ "<option value='QX30'>QX30</option>"
							+ "<option value='QX50'>QX50</option>"
							+ "<option value='QX60'>QX60</option>"
							+ "<option value='QX70'>QX70</option>"
							+ "<option value='QX80'>QX80</option>");
            break;
	case 'JAGUAR':
			$("#model").html("<option value='F-PACE'>F-PACE</option>"
							+ "<option value='F-TYPE'>F-TYPE</option>"
							+ "<option value='XE'>XE</option>"
							+ "<option value='XF'>XF</option>"
							+ "<option value='XJ'>XJ</option>"
							+ "<option value='XJL'>QX50</option>"
							+ "<option value='XJR'>QX60</option>");
            break;
	case 'JEEP':
			$("#model").html("<option value='CHEROKEE'>CHEROKEE</option>"
							+ "<option value='COMPASS'>COMPASS</option>"
							+ "<option value='GRAND CHEROKEE'>GRAND CHEROKEE</option>"
							+ "<option value='PATRIOT'>PATRIOT</option>"
							+ "<option value='RENEGADE'>RENEGADE</option>"
							+ "<option value='WRANGLER'>WRANGLER</option>");
            break;
	case 'KIA':
			$("#model").html("<option value='CADENZA'>CADENZA</option>"
							+ "<option value='FORTE'>FORTE</option>"
							+ "<option value='K900'>K900</option>"
							+ "<option value='OPTIMA'>OPTIMA</option>"
							+ "<option value='RIO'>RIO</option>"
							+ "<option value='SEDONA'>SEDONA</option>"
							+ "<option value='SORENTO'>SORENTO</option>"
							+ "<option value='SOUL'>SOUL</option>"
							+ "<option value='SOUL EV'>SOUL EV</option>"
							+ "<option value='SPORTAGE'>SPORTAGE</option>");
            break;
	case 'LANDROVER':
			$("#model").html("<option value='DISCOVERY'>DISCOVERY</option>"
							+ "<option value='DISCOVERY SPORT'>DISCOVERY SPOR</option>"
							+ "<option value='RANGE ROVER'>RANGE ROVER</option>"
							+ "<option value='RANGE ROVER EVOQUE'>RANGE ROVER EVOQUE</option>"
							+ "<option value='RANGE ROVER SPORT'>RANGE ROVER SPORT</option>"
							+ "<option value='RANGE ROVER VELAR'>RANGE ROVER VELAR</option>");
            break;
	case 'LEXUS':
			$("#model").html("<option value='CT'>CT</option>"
							+ "<option value='ES'>ES</option>"
							+ "<option value='GS'>GS</option>"
							+ "<option value='GS F'>GS F</option>"
							+ "<option value='GX'>GX</option>"
							+ "<option value='IS'>IS</option>"
							+ "<option value='LS'>LS</option>"
							+ "<option value='LX'>LX</option>"
							+ "<option value='NX'>NX</option>"
							+ "<option value='RC'>RC</option>"
							+ "<option value='RC F'>RC F</option>"
							+ "<option value='RX'>RX</option>");
            break;
	case 'LINCOLN':
			$("#model").html("<option value='CONTINENTAL'>CONTINENTAL</option>"
							+ "<option value='MKC'>MKC</option>"
							+ "<option value='MKT'>MKT</option>"
							+ "<option value='MKX'>MKX</option>"
							+ "<option value='MKZ'>MKZ</option>"
							+ "<option value='NAVIGATOR'>NAVIGATOR</option>");
            break;

	case 'MASERATI':
			$("#model").html("<option value='GHIBLI'>GHIBLI</option>"
							+ "<option value='GRANTURISMO'>GRANTURISMO</option>"
							+ "<option value='LEVANTE'>LEVANTE</option>"
							+ "<option value='QUATTROPORTE'>QUATTROPORTE</option>");
            break;
	case 'MAZDA':
			$("#model").html("<option value='3'>3</option>"
							+ "<option value='5'>5</option>"
							+ "<option value='CX-3'>CX-3</option>"
							+ "<option value='CX-5'>CX-5</option>"
							+ "<option value='MX-5 MIATA'>MX-5 MIATA</option>");
            break;
	case 'MERCEDES-BENZ':
			$("#model").html("<option value='AMG GT'>AMG GT</option>"
							+ "<option value='B25OE'>B250E</option>"
							+ "<option value='C-CLASS'>C-CLASS</option>"
							+ "<option value='CLA-CLASS'>CLA-CLASS</option>"
							+ "<option value='CLS-CLASS'>CLS-CLASS</option>"
							+ "<option value='E-CLASS'>E-CLASS</option>"
							+ "<option value='G-CLASS'>G-CLASS</option>"
							+ "<option value='GLA-CLASS'>GLA-CLASS</option>"
							+ "<option value='GLC-CLASS'>GLC-CLASS</option>"
							+ "<option value='GLE-CLASS'>GLE-CLASS</option>"
							+ "<option value='GLS-CLASS'>GLS-CLASS</option>"
							+ "<option value='METRIS'>METRIS</option>"
							+ "<option value='S-CLASS'>S-CLASS</option>"
							+ "<option value='SL-CLASS'>SL-CLASS</option>"
							+ "<option value='SLC-CLASS'>SLC-CLASS</option>"
							+ "<option value='SPRINTER'>SPRINTER</option>");
            break;
	case 'MINI':
			$("#model").html("<option value='MINI COOPER'>MINI COOPER</option>"
							+ "<option value='MINI COOPER 4-DOOR'>MINI COOPER 4-DOOR</option>"
							+ "<option value='MINI CLUBMAN'>MINI CLUBMAN</option>"
							+ "<option value='MINI CONVERTIBLE'>MINI CONVERTIBLE</option>"
							+ "<option value='MINI COUNTRYMAN'>MINI COUNTRYMAN</option>"
							+ "<option value='MINI COUNTRYMAN SE'>MINI COUNTRYMAN SE</option>");
            break;
	case 'MITSUBISHI':
			$("#model").html("<option value='I-MIEV'>I-MIEV</option>"
							+ "<option value='LANCER'>LANCER</option>"
							+ "<option value='MIRAGE'>MIRAGE</option>"
							+ "<option value='OUTLANDER'>OUTLANDER</option>"
							+ "<option value='OUTLANDER SPORT'>OUTLANDER SPORT</option>");
            break;
	case 'NISSAN':
			$("#model").html("<option value='370Z'>370Z</option>"
							+ "<option value='ALTIMA'>ALTIMA</option>"
							+ "<option value='ARMADA'>ARMADA</option>"
							+ "<option value='FRONTIER'>FRONTIER</option>"
							+ "<option value='GT-R'>GT-R</option>"
							+ "<option value='JUKE'>JUKE</option>"
							+ "<option value='LEAF'>LEAF</option>"
							+ "<option value='MAXIMA'>MAXIMA</option>"
							+ "<option value='MURANO'>MURANO</option>"
							+ "<option value='NV200'>NV200</option>"
							+ "<option value='PATHFINDER'>PATHFINDER</option>"
							+ "<option value='ROGUE'>ROGUE</option>"
							+ "<option value='SENTRA'>SENTRA</option>"
							+ "<option value='TITAN'>TITAN</option>"
							+ "<option value='TITAN XD'>TITAN XD</option>"
							+ "<option value='VERSA'>VERSA</option>"
							+ "<option value='VERSA NOTE'>VERSA NOTE</option>");
            break;
	case 'RAM':
			$("#model").html("<option value='1500'>1500</option>"
							+ "<option value='2500'>2500</option>"
							+ "<option value='3500'>3500</option>"
							+ "<option value='PROMASTER 1500'>PROMASTER 1500</option>"
							+ "<option value='PROMASTER 2500'>PROMASTER 2500</option>"
							+ "<option value='PROMASTER 3500'>PROMASTER 3500</option>"
							+ "<option value='PROMASTER CITY'>PROMASTER CITY</option>");
            break;
	case 'SUBARU':
			$("#model").html("<option value='BRZ'>BRZ</option>"
							+ "<option value='CROSSTREK'>CROSSTREK</option>"
							+ "<option value='FORESTER'>FORESTER</option>"
							+ "<option value='IMPREZA'>IMPREZA</option>"
							+ "<option value='LEGACY'>LEGACY</option>"
							+ "<option value='OUTBACK'>OUTBACK</option>"
							+ "<option value='WRX'>WRX</option>");
            break;
	case 'TESLA':
			$("#model").html("<option value='MODEL S'>MODEL S</option>"
							+ "<option value='MODEL X'>MODEL X</option>"
							+ "<option value='MODEL 3'>MODEL 3</option>");
            break;
	case 'TOYOTA':
			$("#model").html("<option value='4RUNNER'>4RUNNER</option>"
							+ "<option value='AVALON'>AVALON</option>"
							+ "<option value='CAMRY'>CAMRY</option>"
							+ "<option value='COROLLA'>COROLLA</option>"
							+ "<option value='HIGHLANDER'>HIGHLANDER</option>"
							+ "<option value='LAND CRUISER'>LAND CRUISER</option>"
							+ "<option value='MIRAI'>MIRAI</option>"
							+ "<option value='PRIUS'>PRIUS</option>"
							+ "<option value='PRIUS C'>PRIUS C</option>"
							+ "<option value='PRIUS PRIME'>PRIUS PRIME</option>"
							+ "<option value='PRIUS V'>PRIUS V</option>"
							+ "<option value='RAV4'>RAV4</option>"
							+ "<option value='RAV4 HYBRID'>RAV4 HYBRID</option>"
							+ "<option value='SEQUOIA'>SEQUOIA</option>"
							+ "<option value='SIENNA'>SIENNA</option>"
							+ "<option value='TACOMA'>TACOMA</option>"
							+ "<option value='TUNDRA'>TUNDRA</option>"
							+ "<option value='YARIS'>YARIS</option>"
							+ "<option value='YARIS IA'>YARIS IA</option>");
            break;
	case 'VOLKSVAGON':
			$("#model").html("<option value='BEETLE'>BEETLE</option>"
							+ "<option value='CC'>CC</option>"
							+ "<option value='GOLF'>GOLF</option>"
							+ "<option value='GOLF ALL TRACK'>GOLF ALL TRACK</option>"
							+ "<option value='GOLF R'>GOLF R</option>"
							+ "<option value='GOLF SPORTWAGEN'>GOLF SPORTWAGEN</option>"
							+ "<option value='GTI'>GTI</option>"
							+ "<option value='JETTA'>JETTA</option>"
							+ "<option value='PASSAT'>PASSAT</option>"
							+ "<option value='TIGUAN'>TIGUAN</option>"
							+ "<option value='TOUAREG'>TOUAREG</option>");
            break;
	case 'VOLVO':
			$("#model").html("<option value='S60'>S60</option>"
							+ "<option value='S60 CROSS COUNTRY'>S60 CROSS COUNTRY</option>"
							+ "<option value='S90'>S90</option>"
							+ "<option value='V60'>V60</option>"
							+ "<option value='V60 CROSS COUNTRY'>V60 CROSS COUNTRY</option>"
							+ "<option value='V90 CROSS COUNTRY'>V90 CROSS COUNTRY</option>"
							+ "<option value='XC60'>XC60</option>"
							+ "<option value='XC90'>XC90</option>");

            break;
	
        default:
            $("#MODEL").html("<option value=''>SELECT MODEL</option>");
     }
  });
});




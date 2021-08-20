
class singleCar{

	/** 
		Constructor that takes parameters and construct objects with
		these fields
	*/
	constructor(insurance,payment,maintenance, mileage,days,distance,duration){
		this.PERMIT=178.00;
		this.PRICE_PER_GALLON=2.79;
		this.insurance=insurance;
		this.payment=payment;
		this.maintenance=maintenance;
		this.mileage=mileage;
		this.distance=distance;
		this.days=days;
		this.duration=duration;
	}
	
	/**
		returns the Permit price
	 */
	getPermit(){
		return this.PERMIT;
	}
	
	/**
		Return the insurance price
	 */
	getInsurance(){
		return this.insurance;
	}
	
	/**
		Return the payment amount
	 */
	getPayment(){
		return this.payment;
	}
	
	/**
		Return maintenance cost
	 */
	getMaintenance(){
		return this.maintenance;
	}

	/**
		Return Gas Price
	 */
	getGasPrice(){
		return this.PRICE_PER_GALLON;
	}
	
	/**
		Return the distance in miles
	 */
	
	getDist(){
		return this.distance;
	}
	
	/**
		Return gas cost with number of days and mileage
	 */
	getGasCost(){
		return (15*this.days*this.distance)*this.PRICE_PER_GALLON/this.mileage;
	}
	
	/**
		Return the duration time
	 */
	getDuration(){
		return this.duration;
	}
	
	/**
		Return the total cost
	 */
	
	getTotalCost(){
		return (2*this.PERMIT)+(12*this.insurance)+(12*this.payment)+(this.maintenance)+(this.getGasCost());
	}
	
	/**
		Return the Carbon Emission
	 */
	calcCO2(){
		const CO2_PER_GALLON=8887;
		return ((CO2_PER_GALLON)/this.mileage)*(this.distance*12*this.days)/(1000000);
	}
	
	/** 
		Converts seconds into days, hours, minutes
	*/
	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	
	/** 
		Display all results to HTML
	*/
	getResult(){
		//GET PERMIT INFO
		document.getElementById("car-permit").innerHTML="$" + (2*this.getPermit()).toFixed(2);
	
	    //GET PAYMENT INFO
		document.getElementById("car-payment").innerHTML="$"+(12*this.getPayment()).toFixed(2);
		
		//GET INSURANCE INFO
		document.getElementById("car-insurance").innerHTML= "$"+ (12*this.getInsurance()).toFixed(2);
		
		//GET GAS INFO
		document.getElementById("car-gas").innerHTML= "$"+ this.getGasCost().toFixed(2);
		
		//GET MAINTENANCE INFO
		document.getElementById("car-repair").innerHTML= "$"+ this.getMaintenance().toFixed(2);
		
		//GET TOTAL INFO
		document.getElementById("car-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("car-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("car-duration").innerHTML= this.getDuration();
	
	}	
}

class carpool extends singleCar{

	/**
		Constructor for the carpool object
	 */
	constructor(insurance,payment,maintenance, mileage,days,distance,duration,people){
		super(insurance,payment,maintenance, mileage,days,distance,duration);
		this.PERMIT=178.00;
		const PRICE_PER_GALLON=2.79;
		this.people=people;
		//this.distance=distance;
		//this.duration=duration;
		
	}
	
	/** 
		Return the duration time
	*/	
	getDuration(){
		return this.duration;
	}
	
	/** 
		Return the Permit Price
	*/	
	getPermit(){
		return this.PERMIT;
	}
	
	/** 
		Return the insurance cost
	*/	
	getInsurance(){
		return this.insurance;
	}
	
	/** 
		Return the payment cost
	*/	
	getPayment(){
		return this.payment;
	}
	
	/** 
		Return the maintenance cost
	*/	
	getMaintenance(){
		return this.maintenance/this.people;
	}
	
	/** 
		Return the gasprice 
	*/	
	getGasPrice(){
		return PRICE_PER_GALLON;
	}
	
	/** 
		Return the distance distance
	*/	
	getDist(){
		return this.distance;
	}
	
	/** 
		Return the gas cost
	*/	
	getGasCost(){
		return ((15*this.days*this.distance)*this.PRICE_PER_GALLON)/this.people/this.mileage;
	}
	
	/** 
		Return the carbon emission
	*/
	calcCO2(){
		const CO2_PER_GALLON=8887;
		return ((CO2_PER_GALLON)/this.mileage)*(this.distance*12*this.days)/(1000000);
	}
	
	/** 
		Return the total Cost
	*/	
	getTotalCost(){
		return (2*this.PERMIT)+(12*this.insurance)+(12*this.payment)+(this.maintenance/this.people)+(this.getGasCost());
	}
	
	/** 
		Converts seconds to days, hours & minutes
	*/	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	/** 
		Display all caluclation to HTML
	*/
	getResult(){
		//GET PERMIT INFO
		document.getElementById("carpool-permit").innerHTML="$" + ((2*this.getPermit())/this.people).toFixed(2);
	
	    //GET PAYMENT INFO
		document.getElementById("carpool-payment").innerHTML="$"+(12*this.getPayment()).toFixed(2);
		
		//GET INSURANCE INFO
		document.getElementById("carpool-insurance").innerHTML= "$"+ (12*this.getInsurance()).toFixed(2);
		
		//GET GAS INFO
		document.getElementById("carpool-gas").innerHTML= "$"+ this.getGasCost().toFixed(2);
		
		//GET MAINTENANCE INFO
		document.getElementById("carpool-repair").innerHTML= "$"+ this.getMaintenance().toFixed(2);
		
		//GET TOTAL INFO
		document.getElementById("carpool-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("carpool-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("carpool-duration").innerHTML= this.getDuration();
	}
	
}

class walk{
	
	/**
		Constructor for Walk object
	 */
	constructor(distance,duration){
		this.distance=distance;
		this.duration=duration;
	}
	
	/** 
		Return the duration time
	*/	
	getDuration(){
		return this.duration;
	}
	
	/** 
		Return the distance
	*/	
	getDistance(){
		return this.distance;
	}
	
	/** 
		Return the carbon emission
	*/	
	calcCO2(){
		return 0;
	}
	
	/** 
		Return the total Cost
	*/	
	getTotalCost(){
		return 0;
	}
	
	/** 
		Converts seconds to hours, mintues and seconds
	*/
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	/** 
		Display all calculations to HTML
	*/
	getResult(){
		//GET TOTAL INFO
		document.getElementById("walk-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("walk-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("walk-duration").innerHTML= this.getDuration();
	}
	
	
}

class bike{
	
	/**
		Constructor for bike object
	 */
	constructor(cost,maintenance,distance,duration){
		this.cost=cost;
		this.maintenance=maintenance;
		this.distance=distance;
		this.duration=duration;
	}
	
	/** 
		Return the cost of bike
	*/	
	getCost(){
		return this.cost;
	}
	
	/** 
		Return the duration time
	*/	
	getDuration(){
		return this.duration;
	}
	
	/** 
		Return the maintenance cost
	*/	
	getMaintenance(){
		return this.maintenance;
	}
	
	/** 
		Return the total cost
	*/	
	getTotalCost(){
		return this.cost + this.maintenance;
	}
	
	/** 
		Return the carbon emission
	*/	
	calcCO2(){
		const CO2_PER_GALLON=8887;
		return 0;
	}
	
	/** 
		Converts seconds to hours, mintues and seconds
	*/	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	
	getResult(){
		//GET PERMIT INFO
		document.getElementById("bike-permit").innerHTML="$" + this.getCost().toFixed(2);
		
		//GET MAINTENANCE INFO
		document.getElementById("bike-repair").innerHTML= "$"+ this.getMaintenance().toFixed(2);
		
		//GET TOTAL INFO
		document.getElementById("bike-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("bike-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("bike-duration").innerHTML= this.getDuration();
	}
	
	
	
}

class bus{
	/**
		Constructor for bus object
	 */
	constructor(days,distance,duration){
		this.PERMIT=40.00;
		this.mileage=7.2;
		this.distance=distance;
		this.duration=duration;
		this.days=days;
	}

	/** 
		Return the permit cost
	*/	
	getPermit(){
		return this.PERMIT;
	}
	
	/** 
		Return the total cost
	*/	
	getTotalCost(){
		return (2*this.PERMIT);
	}
	
	/** 
		Return the duration time
	*/	
	getDuration(){
		return this.duration;
	}
	
	/** 
		Return the carbon emission
	*/	
	calcCO2(){
		const CO2_PER_GALLON=8887;
		return ((CO2_PER_GALLON)/this.mileage)*(this.distance*12*this.days)/(1000000);
	}
	
	/** 
		Convert seconds to hours, minutes & seconds
	*/	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	/** 
		Display all calculations to HTML
	*/	
	getResult(){
		//GET PERMIT INFO
		document.getElementById("bus-permit").innerHTML="$" + (2*this.getPermit()).toFixed(2);

		//GET TOTAL INFO
		document.getElementById("bus-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("bus-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("bus-duration").innerHTML= this.getDuration();
	}
}

class transit{
	/** 
		Constructor for transit object
	*/	
	constructor(days,distance,duration){
		this.PERMIT=40.00;
		this.distance=distance;
		this.duration=duration;
		this.days=days;
	}
	
	/** 
		Return the permit cost
	*/	
	getPermit(){
		return this.PERMIT;
	}
	
	/** 
		Return the total cost
	*/	
	getTotalCost(){
		return (2*this.PERMIT);
	}
	
	/** 
		Return the duration time
	*/	
	getDuration(){
		return this.duration;
	}
	
	/** 
		Return the carbon emission
	*/	
	calcCO2(){
		const CO2_PER_GALLON=8887;
		return 0;
	}
	
	/** 
		Convert seconds to days, hours, minutes & seconds
	*/	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	/**
		Display all calculations to HTML
	 */
	getResult(){
		//GET PERMIT INFO
		document.getElementById("rail-permit").innerHTML="$" + (2*this.getPermit()).toFixed(2);

		//GET TOTAL INFO
		document.getElementById("rail-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("rail-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("rail-duration").innerHTML= this.getDuration();
	}
}

class motorcycle{
	/** 
		Constructor for motorcycle object
	*/
	constructor(insurance,payment,maintenance, mileage,days,distance,duration){
		this.PERMIT=44.00;
		this.PRICE_PER_GALLON=2.79;
		this.insurance=insurance;
		this.payment=payment;
		this.maintenance=maintenance;
		this.mileage=mileage;
		this.days=days;
		this.distance=distance;
		this.duration=duration;
	}
	
	/** 
		Return the permit cost
	*/	
	getPermit(){
		return this.PERMIT;
	}
	
	/** 
		Return the insurance Cost
	*/	
	getInsurance(){
		return this.insurance;
	}
	
	/** 
		Return the payment cost
	*/	
	getPayment(){
		return this.payment;
	}
	
	/** 
		Return the maintenance cost
	*/	
	getMaintenance(){
		return this.maintenance;
	}
	
	/** 
		Return the gas price
	*/	
	getGasPrice(){
		return this.PRICE_PER_GALLON;
	}
	
	/** 
		Return the distance
	*/	
	getDist(){
		return this.distance;
	}
	
	/** 
		Return the gas cost
	*/	
	getGasCost(){
		return (15*this.days*this.distance)*this.PRICE_PER_GALLON/this.mileage;
	}
	
	/** 
		Return the duration time
	*/	
	getDuration(){
		return this.duration;
	}
	
	/** 
		Convert seconds to days, hours, minutes & seconds
	*/	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	/** 
		Return the total cost
	*/	
	getTotalCost(){
		return (2*this.PERMIT)+(12*this.insurance)+(12*this.payment)+(this.maintenance)+(this.getGasCost());
	}
	
	/** 
		Return the carbon emission
	*/	
	calcCO2(){
		const CO2_PER_GALLON=8887;
		return ((CO2_PER_GALLON)/this.mileage)*(this.distance*12*this.days)/(1000000);
	}
	
	/** 
		Display all calculations to HTML
	*/	
	getResult(){
		//GET PERMIT INFO
		document.getElementById("moto-permit").innerHTML="$" + (2*this.getPermit()).toFixed(2);
	
	    //GET PAYMENT INFO
		document.getElementById("moto-payment").innerHTML="$"+(12*this.getPayment()).toFixed(2);
		
		//GET INSURANCE INFO
		document.getElementById("moto-insurance").innerHTML= "$"+ (12*this.getInsurance()).toFixed(2);
		
		//GET GAS INFO
		document.getElementById("moto-gas").innerHTML= "$"+ this.getGasCost().toFixed(2);
		
		//GET MAINTENANCE INFO
		document.getElementById("moto-repair").innerHTML= "$"+ this.getMaintenance().toFixed(2);
		
		//GET TOTAL INFO
		document.getElementById("moto-total").innerHTML= "$"+ this.getTotalCost().toFixed(2);
		
		//GET CO2 EMISSION INFO
		document.getElementById("moto-CO2").innerHTML= this.calcCO2().toFixed(2) + " metric ton";
		
		//GET DURATION INFO
		document.getElementById("moto-duration").innerHTML= this.getDuration();
	}
}

class multiMode{
	/** 
		Constructor for multiMode object
	*/
	constructor(mode1,mode2,days,distance,distance2,duration,duration2){
		this.mode1=mode1;
		this.mode2=mode2;
		this.days=days;
		this.multi=[];
		this.result;
		if(mode1=="BICYCLE" && mode2=="CARPOOL"){
			this.multi[0]=new bike(350,100,distance,duration);
			this.multi[1]=new carpool(175,1000,441,39,days,distance2,duration2,2);
		}else if(mode1=="BICYCLE" && mode2=="CAR"){
			this.multi[0]=new bike(350,100,distance,duration);
			this.multi[1]=new singleCar(175,1000,441,39,days,distance2,duration2);
		}else if(mode1=="BICYCLE" && mode2=="LIGHT RAIL"){
			this.multi[0]=new bike(350,100,distance,duration);
			this.multi[1]=new transit(days,distance2,duration2);
		}else if(mode1=="BICYCLE" && mode2=="TRANSIT"){
			this.multi[0]=new bike(350,100,distance,duration);
			this.multi[1]=new bus(days,distance2,duration2);
		}else if(mode1=="BICYCLE" && mode2=="WALK"){
			this.multi[0]=new bike(350,100,distance,duration);
			this.multi[1]=new walk(distance2,duration2);
		}else if(mode1=="BIKE" && mode2=="CARPOOL"){
			this.multi[0]=new motorcycle(132.0,1000.0,1000.0, 70.0,days,distance,duration);
			this.multi[1]=new carpool(175,1000,441,39,days,distance2,duration2,2);
		}else if(mode1=="BIKE" && mode2=="LIGHT RAIL"){
			this.multi[0]=new motorcycle(132.0,1000.0,1000.0, 70.0,days,distance,duration);
			this.multi[1]=new transit(days,distance2,duration2);
		}else if(mode1=="BIKE" && mode2=="TRANSIT"){
			this.multi[0]=new motorcycle(132.0,1000.0,1000.0, 70.0,days,distance,duration);
			this.multi[1]=new bus(days,distance2,duration2);
		}else if(mode1=="BIKE" && mode2=="WALK"){
			this.multi[0]=new motorcycle(132.0,1000.0,1000.0, 70.0,days,distance,duration);
			this.multi[1]=new walk(distance2,duration2);
		}else if(mode1=="CAR" && mode2=="CARPOOL"){
			this.multi[0]=new singleCar(175,1000,441,39,days,distance,duration);
			this.multi[1]=new carpool(175,1000,441,39,days,distance2,duration2,2);
		}else if(mode1=="CAR" && mode2=="LIGHT RAIL"){
			this.multi[0]=new singleCar(175,1000,441,39,days,distance,duration);
			this.multi[1]=new transit(days,distance2,duration2);
		}else if(mode1=="CAR" && mode2=="TRANSIT"){
			this.multi[0]=new singleCar(175,1000,441,39,days,distance,duration);
			this.multi[1]=new bus(days,distance2,duration2);
		}else if(mode1=="CAR" && mode2=="WALK"){
			this.multi[0]=new singleCar(175,1000,441,39,days,distance,duration);
			this.multi[1]=new walk(distance2,duration2);
		}else if(mode1=="CARPOOL" && mode2=="LIGHT RAIL"){
			this.multi[0]=new carpool(175,1000,441,39,days,distance,duration,2);
			this.multi[1]=new transit(days,distance2,duration2);
		}else if(mode1=="CARPOOL" && mode2=="TRANSIT"){
			this.multi[0]=new carpool(175,1000,441,39,days,distance,duration,2);
			this.multi[1]=new bus(days,distance2,duration2);
		}else if(mode1=="CARPOOL" && mode2=="WALK"){
			this.multi[0]=new carpool(175,1000,441,39,days,distance,duration,2);
			this.multi[1]=new walk(distance2,duration2);
		}else if(mode1=="LIGHT RAIL" && mode2=="BICYCLE"){
			this.multi[0]=new transit(days,distance,duration);
			this.multi[1]=new bike(350,100,distance2,duration2);
		}else if(mode1=="LIGHT RAIL" && mode2=="WALK"){
			this.multi[0]=new transit(days,distance,duration);
			this.multi[1]=new walk(distance2,duration2);
		}else if(mode1=="LIGHT RAIL" && mode2=="TRANSIT"){
			this.multi[0]=new transit(days,distance,duration);
			this.multi[1]=new bus(days,distance,duration);
		}else if(mode1=="TRANSIT" && mode2=="BICYCLE"){
			this.multi[0]=new bus(days,distance,duration);
			this.multi[1]=new bike(350,100,distance2,duration2);
		}else if(mode1=="TRANSIT" && mode2=="WALK"){
			this.multi[0]=new bus(days,distance,duration);
			this.multi[1]=new walk(distance2,duration2);
		}else if(mode1=="TRANSIT" && mode2=="LIGHT RAIL"){
			this.multi[0]=new bus(days,distance,duration);
			this.multi[1]=new transit(days,distance2,duration2);
		}else if(mode1=="WALK" && mode2=="CARPOOL"){
			this.multi[0]=new walk(distance,duration);
			this.multi[1]=new carpool(175,1000,441,39,days,distance2,duration2,2);
		}else if(mode1=="WALK" && mode2=="LIGHT RAIL"){
			this.multi[0]=new walk(distance,duration);
			this.multi[1]=new transit(days,distance2,duration2);
		}else if(mode1=="WALK" && mode2=="TRANSIT"){
			this.multi[0]=new walk(distance,duration);
			this.multi[1]=new bus(days,distance2,duration2);
		}
	}
	
	/**
		Convert seconds to days, hours, minute & seconds
	 */
	getDuration(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" mins";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hours "+ Math.floor(minutes) + " mins";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " days " + Math.floor(hour)+" hours " + Math.floor(minutes) +" mins";
		}
	}
	
	getDurationValue(sec){
		var day=Math.floor(sec/(24*3600));
		sec=sec%(24*3600);
	    var hour=Math.floor(sec/3600);
        sec%=3600;
        var minutes = sec/60;
        sec%=60;
        var seconds=sec;
 		if(day==0 && hour==0){
			return Math.floor(minutes) +" m";
		}else if(day==0 && hour>0){
        	return Math.floor(hour) + " hr "+ Math.floor(minutes) + " m";
		}else if(day>0 && hour>0){
			return Math.floor(day) + " d" + Math.floor(hour)+" hr " + Math.floor(minutes) +" m";
		}
	}
	
	/**
		Display all calculations to HTML
	 */
	getResult(){
		document.getElementById("multiMode").style.visibility = "visible";
		document.getElementById("mode_cost").innerHTML="COST OF " + this.mode1;
		document.getElementById("mode1cost").innerHTML=": $"+this.multi[0].getTotalCost().toFixed(2);
		document.getElementById("mode_cost2").innerHTML="COST OF "+ this.mode2;
		document.getElementById("mode2cost").innerHTML=": $"+this.multi[1].getTotalCost().toFixed(2);
		document.getElementById("multi-total").innerHTML=" $" + (this.multi[0].getTotalCost()+this.multi[1].getTotalCost()).toFixed(2);
		document.getElementById("mode1cost").innerHTML=": $"+this.multi[0].getTotalCost().toFixed(2);
		document.getElementById("multi-CO2").innerHTML=(this.multi[0].calcCO2()).toFixed(2) + " metric ton";
		document.getElementById("multi2-CO2").innerHTML=(this.multi[1].calcCO2()).toFixed(2) + " metric ton";
		document.getElementById("Dur1").innerHTML=this.mode1;
		document.getElementById("multi-duration").innerHTML=": " + this.getDuration(this.multi[0].getDuration());
		document.getElementById("Dur2").innerHTML=this.mode2;
		document.getElementById("multi2-duration").innerHTML=": " + this.getDuration(this.multi[1].getDuration());
		document.getElementById("total-duration").innerHTML=this.getDuration(this.multi[0].getDuration()+this.multi[1].getDuration());
	}
}

function bookingDetail(){
	/*alert("welcome to booking page");
	alert(sessionStorage.getItem("busName")+" "+sessionStorage.getItem("boardingPoint")+" "+sessionStorage.getItem("droppingPoint")+" "+sessionStorage.getItem("time")+" "+sessionStorage.getItem("fare"));
	*/
	var row1=document.getElementById("rowB1");
	var col1=row1.getElementsByTagName("td");
	col1[0].innerHTML=sessionStorage.getItem("busName");
	
	var row2=document.getElementById("rowB2");
	var col2=row2.getElementsByTagName("td");
	col2[0].innerHTML=sessionStorage.getItem("boardingPoint");
	
	var row3=document.getElementById("rowB3");
	var col3=row3.getElementsByTagName("td");
	col3[0].innerHTML=sessionStorage.getItem("droppingPoint");
	
	var row4=document.getElementById("rowB4");
	var col4=row4.getElementsByTagName("td");
	col4[0].innerHTML=sessionStorage.getItem("time");

	var row5=document.getElementById("rowB5");
	var col5=row5.getElementsByTagName("td");
	col5[0].innerHTML=sessionStorage.getItem("fare");
	
}

function calculateFare(){
	var limit = document.getElementById("counter").value;
	if(limit>5 || limit <1){
		alert("Number of passenger should be in between 1 & 5 ");
	}else {
	document.getElementById("tFare").innerHTML=sessionStorage.getItem("fare")*document.getElementById("counter").value;
	var tF=document.getElementById("tFare").innerHTML;
	sessionStorage.setItem("totalFare",tF);
	
	document.getElementById("confirmBooking").disabled=false;
	
	}
}

function sumUp(){
	alert("Congrats !! You booking is confirmed. Now you will be moved to your dashboard.");
	sessionStorage.setItem("flag","1");
	//alert(sessionStorage.getItem("flag"));
	window.open("dashboard.html","_self");
	//alert(document.getElementById("bookingHistoryTable").rows.length);
	//alert("wow");
}
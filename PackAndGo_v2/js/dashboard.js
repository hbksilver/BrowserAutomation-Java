$(document).ready(function(){
	$("#toDD").click(function(){
		$("#searchBus").removeAttr("disabled");
	});
	
	$("#fromDD").click(function(){
		$("#searchBus").removeAttr("disabled");
	});
	
	$('#clearAccount').click(function() {
		$('#list > img').remove();
	});
	
	//for account picture
	/*$("#list> span >  button").click(function(){
		alert("wow");
					//$("output#list  span ").remove();
		});*/
});

//storing click
		sessionStorage.setItem("clickB","2");
		sessionStorage.setItem("accPic","2");

		
function allnumeric()  
   {  
   
   inputtxt= document.getElementById("contactNum");
   
      var numbers = /^[0-9]+$/;  
	 var inputlen= inputtxt.value.length;
	// alert("method called" + inputlen);
      if(inputtxt.value.match(numbers) && inputlen==10)  
      {  
     // alert('Your Registration number has accepted....');  
      //document.form1.text1.focus();  
	  document.getElementById("editAccount").innerHTML="Enable Editing";
		document.getElementById("files").disabled=true;
		document.getElementById("genderM").disabled=true;
		document.getElementById("genderF").disabled=true;
		document.getElementById("sel1").disabled=true;
		document.getElementById("contactNum").disabled=true;
		
		document.getElementById("clearAccount").disabled=true;
      return false;  
      }else if(inputtxt.value!="" ){
					  if(!inputtxt.value.match(numbers)){
							  alert("Only numeric value allowed");
							  inputtxt.disabled=false;
							  inputtxt.focus();
							  document.getElementById("editAccount").innerHTML="Freeze Data";
								document.getElementById("files").disabled=false;
								document.getElementById("genderM").disabled=false;
								document.getElementById("genderF").disabled=false;
								document.getElementById("sel1").disabled=false;
								//document.getElementById("contactNum").disabled=false;
								
								document.getElementById("clearAccount").disabled=false;
								 return false; 
					  }else if(inputlen>=1  && inputlen<=9 ){
						  alert("Invalid mobile number length");
						  inputtxt.disabled=false;
						  inputtxt.focus();
						  document.getElementById("editAccount").innerHTML="Freeze Data";
						document.getElementById("files").disabled=false;
						document.getElementById("genderM").disabled=false;
						document.getElementById("genderF").disabled=false;
						document.getElementById("sel1").disabled=false;
						//document.getElementById("contactNum").disabled=false;
						
						document.getElementById("clearAccount").disabled=false;
						   return false; 
	  }
	
		return false;
	  }
   }   
		
//reset Edit profile
function resetAcc()	{
	document.getElementById("accForm").reset();
}
		
//upload image code
if (window.FileReader) {
      function handleFileSelect(evt) {
        var files = evt.target.files;
        var f = files[0];
        var reader = new FileReader();
		
          reader.onload = (function(theFile) {
            return function(e) {
              document.getElementById('list').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" width="100"/>'].join('');
            };
          })(f);
    
          reader.readAsDataURL(f);
      }
	 } else {
	  alert('This browser does not support FileReader');
	}
    
      document.getElementById('files').addEventListener('change', handleFileSelect, false);
		
		
//method to enable fields present in profile
function enableAccount(){
	var check=document.getElementById("editAccount").innerHTML;
	
	if(check=="Enable Editing"){
		document.getElementById("editAccount").innerHTML="Freeze Data";
		document.getElementById("files").disabled=false;
		document.getElementById("genderM").disabled=false;
		document.getElementById("genderF").disabled=false;
		document.getElementById("sel1").disabled=false;
		document.getElementById("contactNum").disabled=false;
		
		document.getElementById("clearAccount").disabled=false;
	}else{
		document.getElementById("editAccount").innerHTML="Enable Editing";
		document.getElementById("files").disabled=true;
		document.getElementById("genderM").disabled=true;
		document.getElementById("genderF").disabled=true;
		document.getElementById("sel1").disabled=true;
		document.getElementById("contactNum").disabled=true;
		
		document.getElementById("clearAccount").disabled=true;
		allnumeric();
		
	}
	
					
}		


		
function historyUpdate(){
	var table=document.getElementById("bookingHistoryTable");
	var tableLength=table.rows.length;
	//alert(tableLength);
	
	if(sessionStorage.getItem("flag")=="1"&&sessionStorage.getItem("source")!=null && sessionStorage.getItem("destination")!=null && sessionStorage.getItem("busName")!=null && sessionStorage.getItem("totalFare")!=null){
		
		/*var row= table.insertRow(tableLength);
		
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		
		cell1.innerHTML=sessionStorage.getItem("source");
		cell2.innerHTML=sessionStorage.getItem("destination");
		cell3.innerHTML=sessionStorage.getItem("busName");
		cell4.innerHTML=sessionStorage.getItem("totalFare");
		*/
		var historyTableR1= document.createElement("tr");
		table.appendChild(historyTableR1);
		
		var td21 = document.createElement("td");
		historyTableR1.appendChild(td21);
		var cell21 = document.createTextNode(sessionStorage.getItem("source"));
		cell21.id="sourceCell";
		td21.appendChild(cell21);
		
		var td22 = document.createElement("td");
		historyTableR1.appendChild(td22);
		var cell22 = document.createTextNode(sessionStorage.getItem("destination"));
		cell22.id="destinationCell";
		td22.appendChild(cell22);
		
		var td23 = document.createElement("td");
		historyTableR1.appendChild(td23);
		var cell23 = document.createTextNode(sessionStorage.getItem("busName"));
		cell23.id="busNameCell";
		td23.appendChild(cell23);
		
		var td24 = document.createElement("td");
		historyTableR1.appendChild(td24);
		var cell24 = document.createTextNode(sessionStorage.getItem("totalFare"));
		cell24.id="totalFareCell";
		td24.appendChild(cell24);
		
		sessionStorage.setItem("flag","2");
		
		
			
		
	}
	else{
		//alert("all is not well");
	}
}

function search(){
//alert("clicked");



//storing from and to in a variable
var fDD = document.getElementById("fromDD").value;
var tDD = document.getElementById("toDD").value;


//alert(fDD+" "+tDD);

//checking for empty value

if(fDD=="--Select--"){
	document.getElementById("error").innerHTML="Select 'Source'";
	document.getElementById("fromDD").focus();
		document.getElementById("myTable").innerHTML="";
			document.getElementById("proceed").innerHTML="";
}
else if(tDD=="--Select--"){
	document.getElementById("error").innerHTML="Select 'Destination'";
	document.getElementById("toDD").focus();
		document.getElementById("myTable").innerHTML="";
		document.getElementById("proceed").innerHTML="";
}

//storing source and destination in session storage
sessionStorage.setItem("source",fDD);
sessionStorage.setItem("destination",tDD);

//storing flag
sessionStorage.setItem("flag","2");




//creating Table element
	var t1 = document.createElement("table");
	t1.className="table table-hover";
	t1.id="travelTable";

//creating rows
	var tr1 = document.createElement("tr");
	tr1.id="firstRow";
	var tr2 = document.createElement("tr");
	tr2.id="secondRow";
	var tr3 = document.createElement("tr");
	tr3.id="thirdRow";
	var tr4 = document.createElement("tr");
	tr4.id="fourthRow";
	var tr5 = document.createElement("tr");
	tr5.id="fifthRow";
	var tr6 = document.createElement("tr");
	tr6.id="sixthRow";
	
//appending rows to table 
	t1.appendChild(tr1);
	t1.appendChild(tr2);
	t1.appendChild(tr3);
	t1.appendChild(tr4);
	t1.appendChild(tr5);
	t1.appendChild(tr6);
	
//checking for valid from and to

if(fDD=="Bengaluru" && tDD=="Hyderabad"){
	
	//sessionStorage.setItem("clickB","1");
	//alert("sbc to hyd");
	document.getElementById("error").innerHTML="";
	document.getElementById("proceed").innerHTML="";

	if(sessionStorage.getItem("clickB")=="2"){
			sbcToHyd();
	}else if(sessionStorage.getItem("clickB")=="1"){
			document.getElementById("myTable").innerHTML="";
			document.getElementById("proceed").innerHTML="";
			sbcToHyd();
	}
	
	
	//var rowCount=document.getElementById("travelTable").rows.length;
	//alert(rowCount);


}else if(fDD=="Mysuru" && tDD=="Hyderabad"){
	
	//alert("mys to hyd");
	 
	document.getElementById("error").innerHTML="Sorry, no services are available for this route !!";
	document.getElementById("myTable").innerHTML="";
	document.getElementById("proceed").innerHTML="";
	//mysToHyd();
	
}else if(( fDD=="Mysuru" || fDD=="Bengaluru" )&& tDD=="Chennai" ){
	 
	document.getElementById("error").innerHTML="Sorry, no services are available for this route !!";
	document.getElementById("myTable").innerHTML="";
	document.getElementById("proceed").innerHTML="";
	
}


//method for bengaluru to hyderabad

function sbcToHyd(){
	sessionStorage.setItem("clickB","1");
//alert("sessionStorage changed");	
	//disabling search button to prevent further click
document.getElementById("searchBus").disabled= true;	
//alert("after true");
		
		
//row1
		
//creating cell and appending it to row1

	var td11= document.createElement("th");
	tr1.appendChild(td11);
	var node = document.createTextNode("Bus Name");
	td11.appendChild(node);

	//creating cell and appending it to row1	
	var td12=document.createElement("th");
	tr1.appendChild(td12);
	var cell12 = document.createTextNode("Boarding Point");
	td12.appendChild(cell12);

	//creating cell and appending it to row1	
	var td13 = document.createElement("th");
	tr1.appendChild(td13);
	var cell13 = document.createTextNode("Dropping Point");
	td13.appendChild(cell13);
	
	//creating cell and appending it to row1
	var td14= document.createElement("th");
	tr1.appendChild(td14);
	var cell14= document.createTextNode("Time");
	td14.appendChild(cell14);
	
	//creating cell and appending it to row1
	var td15 = document.createElement("th");
	tr1.appendChild(td15);
	var cell15 = document.createTextNode("Fare (in INR)");
	td15.appendChild(cell15);
	
	//creating cell and appending it to row1
	var td16=document.createElement("th");
	tr1.appendChild(td16);
	var node = document.createTextNode("Choose Bus");
	td16.appendChild(node);
	//alert("row1 created");
	
//row2

//creating cell and appending it to row2	
	var td21 = document.createElement("td");
	tr2.appendChild(td21);
	var cell21 = document.createTextNode("BNGHYD2100");
	td21.appendChild(cell21);
	
	//creating dropdown for Boarding Point and appending it to row2
	var td22 = document.createElement("td");
	tr2.appendChild(td22);
	var cell22 = document.createElement("select");
	cell22.id="fromDD1";
	var opBoarding1 = new Option();
	opBoarding1.value="Jaya Nagar";
	opBoarding1.text="Jaya Nagar";
	cell22.options.add(opBoarding1);
	td22.appendChild(cell22);
	
	var opBoarding2 = new Option();
	opBoarding2.value="BTM Layout";
	opBoarding2.text="BTM Layout";
	cell22.options.add(opBoarding2);
	td22.appendChild(cell22);
	
	var opBoarding3 = new Option();
	opBoarding3.value="Koramangala Water Tank";
	opBoarding3.text="Koramangala Water Tank";
	cell22.options.add(opBoarding3);
	td22.appendChild(cell22);
	
	var opBoarding4 = new Option();
	opBoarding4.value="Kempegowda Bus Stand(Majestic)";
	opBoarding4.text="Kempegowda Bus Stand(Majestic)";
	cell22.options.add(opBoarding4);
	td22.appendChild(cell22);
	
	
	//creating dropdown for Dropping Point and appending it to row2
	var td23 = document.createElement("td");
	tr2.appendChild(td23);
	var cell23 = document.createElement("select");
	cell23.id="toDD1"
	var opDropping1 = new Option();
	opDropping1.value="Lakdi ka pul (wooden bridge)";
	opDropping1.text="Lakdi ka pul (wooden bridge)";
	cell23.options.add(opDropping1);
	td23.appendChild(cell23);
	
	var opDropping2 = new Option();
	opDropping2.value="Ameerpet";
	opDropping2.text="Ameerpet";
	cell23.options.add(opDropping2);
	td23.appendChild(cell23);
	
	var opDropping3 = new Option();
	opDropping3.value="Kukatpally";
	opDropping3.text="Kukatpally";
	cell23.options.add(opDropping3);
	td23.appendChild(cell23);
	
	var opDropping4 = new Option();
	opDropping4.value="ESI Hospital";
	opDropping4.text="ESI Hospital";
	cell23.options.add(opDropping4);
	td23.appendChild(cell23);
	
	//creating cell and appending it to row2
	var td24 = document.createElement("td");
	tr2.appendChild(td24);
	cell24= document.createTextNode("21:00");
	td24.appendChild(cell24);
	
	//creating cell and appending it to row2
	var td25 = document.createElement("td");
	tr2.appendChild(td25);
	cell25 = document.createTextNode("1200");
	td25.appendChild(cell25);
	
	//my version of creating radio button
	//this doesn't work in IE
	
	
	//var td26 = document.createElement('<input type="radio" name="chooseMe" />');
	var td26=document.createElement("INPUT");
	td26.type="radio";
	td26.name="chooseMe";
	td26.id="radio2";
	td26.onclick=function(){
	
	
//alert("radio clicked");


		var row=document.getElementById("secondRow");
		var col=row.getElementsByTagName("td");
		
		//saving values of cell in variables
		var bn1=col[0].innerHTML;
		var bp1=document.getElementById("fromDD1").value;
		var dp1=document.getElementById("toDD1").value;
		var time1=col[3].innerHTML;
		var fare1=col[4].innerHTML;
		
		
		//storing values in sessionStorage
		sessionStorage.setItem("busName",bn1);
		var bp1=document.getElementById("fromDD1").value;
		var dp1=document.getElementById("toDD1").value;
		sessionStorage.setItem("boardingPoint",bp1);
		sessionStorage.setItem("droppingPoint",dp1);
		sessionStorage.setItem("time",time1);
		sessionStorage.setItem("fare",fare1);
		
	//alert(sessionStorage.getItem("busName")+" "+sessionStorage.getItem("boardingPoint")+" "+sessionStorage.getItem("droppingPoint")+" "+sessionStorage.getItem("time")+" "+sessionStorage.getItem("fare"));
		
	//	alert("Choose Boarding and Dropping Point");
		document.getElementById("book").disabled=false;
		document.getElementById("fromDD1").disabled=false;
		document.getElementById("toDD1").disabled=false;
		document.getElementById("fromDD2").disabled = true;
		document.getElementById("toDD2").disabled = true;
		document.getElementById("fromDD4").disabled=true;
		document.getElementById("toDD4").disabled=true;
		document.getElementById("fromDD3").disabled=true;
		document.getElementById("toDD3").disabled=true;
	};
	tr2.appendChild(td26);
	
//row3
	var td31 = document.createElement("td");
	tr3.appendChild(td31);
	var cell31 = document.createTextNode("BNGHYD2200");
	td31.appendChild(cell31);
	
	//creating dropdown for Boarding Point and appending it to row3
	var td32 = document.createElement("td");
	tr3.appendChild(td32);
	var cell32 = document.createElement("select");
	cell32.id="fromDD2";
	var opBoarding1 = new Option();
	opBoarding1.value="Koramangala Water Tank";
	opBoarding1.text="Koramangala Water Tank";
	cell32.options.add(opBoarding1);
	td32.appendChild(cell32);
	var opBoarding2 = new Option();
	opBoarding2.value="BTM Layout";
	opBoarding2.text="BTM Layout";
	cell32.options.add(opBoarding2);
	td32.appendChild(cell32);
	var opBoarding3 = new Option();
	opBoarding3.value="Jaya Nagar";
	opBoarding3.text="Jaya Nagar";
	cell32.options.add(opBoarding3);
	td32.appendChild(cell32);
	var opBoarding4 = new Option();
	opBoarding4.value="Kempegowda Bus Stand(Majestic)";
	opBoarding4.text="Kempegowda Bus Stand(Majestic)";
	cell32.options.add(opBoarding4);
	td32.appendChild(cell32);
	
	//creating dropdown for Dropping Point and appending it to row3
	var td33 = document.createElement("td");
	tr3.appendChild(td33);
	var cell33 = document.createElement("select");
	cell33.id="toDD2";
	var opDropping1 = new Option();
	opDropping1.value="ESI Hospital";
	opDropping1.text="ESI Hospital";
	cell33.options.add(opDropping1);
	td33.appendChild(cell33);
	var opDropping2 = new Option();
	opDropping2.value="Lakdi ka pul (wooden bridge)";
	opDropping2.text="Lakdi ka pul (wooden bridge)";
	cell33.options.add(opDropping2);
	td33.appendChild(cell33);
	var opDropping3 = new Option();
	opDropping3.value="Ameerpet";
	opDropping3.text="Ameerpet";
	cell33.options.add(opDropping3);
	td33.appendChild(cell33);
	var opDropping4 = new Option();
	opDropping4.value="Kukatpally";
	opDropping4.text="Kukatpally";
	cell33.options.add(opDropping4);
	td33.appendChild(cell33);
	
	
	//creating cell and appending it to row3
	var td34 = document.createElement("td");
	tr3.appendChild(td34);
	cell34= document.createTextNode("22:00");
	td34.appendChild(cell34);
	
	//creating cell and appending it to row3
	var td35 = document.createElement("td");
	tr3.appendChild(td35);
	cell35 = document.createTextNode("1100");
	td35.appendChild(cell35);
	
	var td36=document.createElement("INPUT");
	td36.type="radio";
	td36.name="chooseMe";
	td36.id="radio3";
	td36.onclick=function(){
		
		var row=document.getElementById("thirdRow");
		var col=row.getElementsByTagName("td");
		
		//saving values of cell in variables
		var bn2=col[0].innerHTML;
		var bp2=document.getElementById("fromDD2").value;
		var dp2=document.getElementById("toDD2").value;
		var time2=col[3].innerHTML;
		var fare2=col[4].innerHTML;
		
		
		//storing values in sessionStorage
		sessionStorage.setItem("busName",bn2);
		var bp2=document.getElementById("fromDD2").value;
		var dp2=document.getElementById("toDD2").value;
		sessionStorage.setItem("boardingPoint",bp2);
		sessionStorage.setItem("droppingPoint",dp2);
		sessionStorage.setItem("time",time2);
		sessionStorage.setItem("fare",fare2);
		
		//alert(sessionStorage.getItem("busName")+" "+sessionStorage.getItem("boardingPoint")+" "+sessionStorage.getItem("droppingPoint")+" "+sessionStorage.getItem("time")+" "+sessionStorage.getItem("fare"));
		
		
		//alert("Choose Boarding and Dropping Point");
		document.getElementById("book").disabled=false;
		document.getElementById("fromDD2").disabled=false;
		document.getElementById("toDD2").disabled=false;
		document.getElementById("fromDD1").disabled = true;
		document.getElementById("toDD1").disabled = true;
		document.getElementById("fromDD3").disabled=true;
		document.getElementById("toDD3").disabled=true;
		document.getElementById("fromDD4").disabled=true;
		document.getElementById("toDD4").disabled=true;
	};
	tr3.appendChild(td36);
	
	//row4
	
	var td41 = document.createElement("td");
	tr4.appendChild(td41);
	var cell41 = document.createTextNode("BNGHYD2300");
	td41.appendChild(cell41);
	
	//creating dropdown for Boarding Point and appending it to row4
	var td42 = document.createElement("td");
	tr4.appendChild(td42);
	var cell42 = document.createElement("select");
	cell42.id="fromDD3";
	var opBoarding1 = new Option();
	opBoarding1.value="Kempegowda Bus Stand(Majestic)";
	opBoarding1.text="Kempegowda Bus Stand(Majestic)";
	cell42.options.add(opBoarding1);
	td42.appendChild(cell42);
	var opBoarding2 = new Option();
	opBoarding2.value="BTM Layout";
	opBoarding2.text="BTM Layout";
	cell42.options.add(opBoarding2);
	td42.appendChild(cell42);
	var opBoarding3 = new Option();
	opBoarding3.value="Jaya Nagar";
	opBoarding3.text="Jaya Nagar";
	cell42.options.add(opBoarding3);
	td42.appendChild(cell42);
	var opBoarding4 = new Option();
	opBoarding4.value="Koramangala Water Tank";
	opBoarding4.text="Koramangala Water Tank";
	cell42.options.add(opBoarding4);
	td42.appendChild(cell42);
	
	//creating dropdown for Dropping Point and appending it to row4
	var td43 = document.createElement("td");
	tr4.appendChild(td43);
	var cell43 = document.createElement("select");
	cell43.id="toDD3";
	var opDropping1 = new Option();
	opDropping1.value="Ameerpet";
	opDropping1.text="Ameerpet";
	cell43.options.add(opDropping1);
	td43.appendChild(cell43);
	var opDropping2 = new Option();
	opDropping2.value="Lakdi ka pul (wooden bridge)";
	opDropping2.text="Lakdi ka pul (wooden bridge)";
	cell43.options.add(opDropping2);
	td43.appendChild(cell43);
	var opDropping3 = new Option();
	opDropping3.value="ESI Hospital";
	opDropping3.text="ESI Hospital";
	cell43.options.add(opDropping3);
	td43.appendChild(cell43);
	var opDropping4 = new Option();
	opDropping4.value="Kukatpally";
	opDropping4.text="Kukatpally";
	cell43.options.add(opDropping4);
	td43.appendChild(cell43);
	
	
	//creating cell and appending it to row4
	var td44 = document.createElement("td");
	tr4.appendChild(td44);
	cell44= document.createTextNode("23:00");
	td44.appendChild(cell44);
	
	//creating cell and appending it to row4
	var td45 = document.createElement("td");
	tr4.appendChild(td45);
	cell45 = document.createTextNode("1000");
	td45.appendChild(cell45);

	
//var td46 = document.createElement('<input type="radio" name="chooseMe" />');

	
	var td46=document.createElement("INPUT");
	td46.type="radio";
	td46.name="chooseMe";
	td46.id="radio4";
	td46.onclick=function(){
		
		
		var row=document.getElementById("fourthRow");
		var col=row.getElementsByTagName("td");
		
		//saving values of cell in variables
		var bn3=col[0].innerHTML;
		var bp3=document.getElementById("fromDD3").value;
		var dp3=document.getElementById("toDD3").value;
		var time3=col[3].innerHTML;
		var fare3=col[4].innerHTML;
		
		
		//storing values in sessionStorage
		sessionStorage.setItem("busName",bn3);
		var bp3=document.getElementById("fromDD3").value;
		var dp3=document.getElementById("toDD3").value;
		sessionStorage.setItem("boardingPoint",bp3);
		sessionStorage.setItem("droppingPoint",dp3);
		sessionStorage.setItem("time",time3);
		sessionStorage.setItem("fare",fare3);
		
		//alert(sessionStorage.getItem("busName")+" "+sessionStorage.getItem("boardingPoint")+" "+sessionStorage.getItem("droppingPoint")+" "+sessionStorage.getItem("time")+" "+sessionStorage.getItem("fare"));
		
		
		
		//alert("Choose Boarding and Dropping Point ");
		document.getElementById("book").disabled=false;
		document.getElementById("fromDD3").disabled=false;
		document.getElementById("toDD3").disabled=false;
		document.getElementById("fromDD1").disabled = true;
		document.getElementById("toDD1").disabled = true;
		document.getElementById("fromDD2").disabled=true;
		document.getElementById("toDD2").disabled=true;
		document.getElementById("fromDD4").disabled=true;
		document.getElementById("toDD4").disabled=true;
		
		
	};
	tr4.appendChild(td46);
	
	//row 5
	
	
	var td51 = document.createElement("td");
	tr5.appendChild(td51);
	var cell51 = document.createTextNode("BNGHYD2330");
	td51.appendChild(cell51);
	
	//creating dropdown for Boarding Point and appending it to row5
	var td52 = document.createElement("td");
	tr5.appendChild(td52);
	var cell52 = document.createElement("select");
	cell52.id="fromDD4";
	var opBoarding1 = new Option();
	opBoarding1.value="Koramangala Water Tank";
	opBoarding1.text="Koramangala Water Tank";
	cell52.options.add(opBoarding1);
	td52.appendChild(cell52);
	var opBoarding2 = new Option();
	opBoarding2.value="Jaya Nagar";
	opBoarding2.text="Jaya Nagar";
	cell52.options.add(opBoarding2);
	td52.appendChild(cell52);
	var opBoarding3 = new Option();
	opBoarding3.value="Kempegowda Bus Stand(Majestic)";
	opBoarding3.text="Kempegowda Bus Stand(Majestic)";
	cell52.options.add(opBoarding3);
	td52.appendChild(cell52);
	var opBoarding4 = new Option();
	opBoarding4.value="BTM Layout";
	opBoarding4.text="BTM Layout";
	cell52.options.add(opBoarding4);
	td52.appendChild(cell52);
	
	//creating dropdown for Dropping Point and appending it to row5
	var td53 = document.createElement("td");
	tr5.appendChild(td53);
	var cell53 = document.createElement("select");
	cell53.id="toDD4";
	var opDropping1 = new Option();
	opDropping1.value="Kukatpally";
	opDropping1.text="Kukatpally";
	cell53.options.add(opDropping1);
	td53.appendChild(cell53);
	var opDropping2 = new Option();
	opDropping2.value="Lakdi ka pul (wooden bridge)";
	opDropping2.text="Lakdi ka pul (wooden bridge)";
	cell53.options.add(opDropping2);
	td53.appendChild(cell53);
	var opDropping3 = new Option();
	opDropping3.value="Ameerpet";
	opDropping3.text="Ameerpet";
	cell53.options.add(opDropping3);
	td53.appendChild(cell53);
	var opDropping4 = new Option();
	opDropping4.value="ESI Hospital";
	opDropping4.text="ESI Hospital";
	cell53.options.add(opDropping4);
	td53.appendChild(cell53);
	
	
	//creating cell and appending it to row5
	var td54 = document.createElement("td");
	tr5.appendChild(td54);
	cell54= document.createTextNode("23:30");
	td54.appendChild(cell54);
	
	//creating cell and appending it to row5
	var td55 = document.createElement("td");
	tr5.appendChild(td55);
	cell55 = document.createTextNode("1150");
	td55.appendChild(cell55);
	
	var td56=document.createElement("INPUT");
	td56.type="radio";
	td56.name="chooseMe";
	td56.id="radio5";
	td56.onclick=function(){
		
		var row=document.getElementById("fifthRow");
		var col=row.getElementsByTagName("td");
		
		//saving values of cell in variables
		var bn4=col[0].innerHTML;
		var bp4=document.getElementById("fromDD4").value;
		var dp4=document.getElementById("toDD4").value;
		var time4=col[3].innerHTML;
		var fare4=col[4].innerHTML;
		
		
		//storing values in sessionStorage
		sessionStorage.setItem("busName",bn4);
		var bp4=document.getElementById("fromDD4").value;
		var dp4=document.getElementById("toDD4").value;
		sessionStorage.setItem("boardingPoint",bp4);
		sessionStorage.setItem("droppingPoint",dp4);
		sessionStorage.setItem("time",time4);
		sessionStorage.setItem("fare",fare4);
		
		//alert(sessionStorage.getItem("busName")+" "+sessionStorage.getItem("boardingPoint")+" "+sessionStorage.getItem("droppingPoint")+" "+sessionStorage.getItem("time")+" "+sessionStorage.getItem("fare"));
		
		
		//alert("Choose Boarding Point and Dropping Point");
		document.getElementById("book").disabled=false;
		document.getElementById("fromDD4").disabled=false;
		document.getElementById("toDD4").disabled=false;
		document.getElementById("fromDD1").disabled = true;
		document.getElementById("toDD1").disabled = true;
		document.getElementById("fromDD2").disabled=true;
		document.getElementById("toDD2").disabled=true;
		document.getElementById("fromDD3").disabled=true;
		document.getElementById("toDD3").disabled=true;
		
		
	};
	tr5.appendChild(td56);
	
	//calling for function to deal on click event
	
	
	
	//appending table to the div
	var element = document.getElementById("myTable");
	element.appendChild(t1);
	
	//appending button to proceed
	var proceed=document.createElement("INPUT");
		proceed.setAttribute("type","button");
		proceed.setAttribute("value","Proceed To Booking");
		proceed.setAttribute("class","btn btn-primary");
		proceed.setAttribute("disabled",true);
		proceed.id="book";
		
		var ele = document.getElementById("proceed");
		ele.appendChild(proceed);
		
		proceed.onclick= function(){
		var bp1=document.getElementById("fromDD1").value;
		var dp1=document.getElementById("toDD1").value;
		
		var bp2=document.getElementById("fromDD2").value;
		var dp2=document.getElementById("toDD2").value;
		
		var bp3=document.getElementById("fromDD3").value;
		var dp3=document.getElementById("toDD3").value;
		
		var bp4=document.getElementById("fromDD4").value;
		var dp4=document.getElementById("toDD4").value;
		
		
		
		if(document.getElementById("fromDD1").disabled ==false){
			sessionStorage.setItem("boardingPoint",bp1);
			sessionStorage.setItem("droppingPoint",dp1);
		} else if(document.getElementById("fromDD2").disabled==false){
			sessionStorage.setItem("boardingPoint",bp2);
			sessionStorage.setItem("droppingPoint",dp2);
		} else if(document.getElementById("fromDD3").disabled==false){
			sessionStorage.setItem("boardingPoint",bp3);
			sessionStorage.setItem("droppingPoint",dp3);
		} else if(document.getElementById("fromDD4").disabled==false){
			sessionStorage.setItem("boardingPoint",bp4);
			sessionStorage.setItem("droppingPoint",dp4);
		}
		
		
			//alert("You will be moved to booking page");
			window.open("booking.html","_self");
		}
	
	//for disabling first from and to DD
	document.getElementById("fromDD1").disabled = true;
	document.getElementById("toDD1").disabled = true;
	document.getElementById("fromDD2").disabled=true;
	document.getElementById("toDD2").disabled=true;
	document.getElementById("fromDD3").disabled=true;
	document.getElementById("toDD3").disabled=true;
	document.getElementById("fromDD4").disabled=true;
	document.getElementById("toDD4").disabled=true;
}
}
function resetForm(){
	
	document.getElementById("signUpForm").reset();
	document.getElementById("loginForm").reset();
	
	document.getElementById("unS").innerHTML="";
		document.getElementById("emS").innerHTML="";
			document.getElementById("successS").innerHTML="";
				document.getElementById("pwdS").innerHTML="";
					document.getElementById("unL").innerHTML="";
						document.getElementById("pwdL").innerHTML="";
							document.getElementById("successL").innerHTML="";
							 document.getElementById("pwdS").innerHTML = "";
	 
}

function validateLogin(){
	//alert("in login");
	var emailRegex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var alphabetsRegex = /^[a-zA-Z ]*$/;
	
	var userName = document.forms[1].usernameL.value,
	pass=document.forms[1].passwordL.value;
	
	//alert(userName+" "+pass);
		if( userName == "" )
   {
     document.getElementById("successL").innerHTML="";
	 document.getElementById("pwdL").innerHTML="";
     document.forms[1].usernameL.focus() ;
	 document.getElementById("unL").innerHTML = "Username is missing";
     return false;
   }else if(!alphabetsRegex.test(userName)){
		 document.getElementById("successL").innerHTML="";
		 document.getElementById("pwdL").innerHTML="";
		document.forms[1].usernameL.focus();
		document.getElementById("unL").innerHTML = "Name can have alphabets only !!";
		return false;
	 }
	 
	 if( pass == "" )
   {
     document.getElementById("successL").innerHTML="";
	 document.getElementById("unL").innerHTML="";
     document.forms[1].passwordL.focus() ;
	 document.getElementById("pwdL").innerHTML = "Password is missing";
     return false;
   }
	
	if(userName=="pgGru" || userName=="pgAlmacho" || userName=="pgScarlet"){
			if(pass=="freezeray"){
				window.open("dashboard.html","_self");
			}else{
				document.getElementById("successL").innerHTML="";
			document.getElementById("unL").innerHTML="";
			document.forms[1].passwordL.focus() ;
				document.getElementById("pwdL").innerHTML="Invalid Password";
			}
		}else if(!(userName=="" || userName==null|| pass=="" ||pass==null )){
			document.getElementById("successL").innerHTML="";
			document.getElementById("unL").innerHTML="";
			document.getElementById("pwdL").innerHTML="Invalid Login";
		}
}


function validateSignUp(){
	//alert("in signup");
	var emailRegex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var alphabetsRegex = /^[a-zA-Z ]*$/;
	
	var userName = document.forms[0].username.value,
	emailId= document.forms[0].email.value,
	pass=document.forms[0].password.value;
	
	//alert(userName+" "+emailId+" "+pass);	

		if( userName == "" )
   {
	   document.getElementById("pwdS").innerHTML = "";
	  document.getElementById("emS").innerHTML = "";
     document.getElementById("successS").innerHTML="";
	 document.getElementById("pwdL").innerHTML="";
     document.forms[0].username.focus() ;
	 document.getElementById("unS").innerHTML = "Username is missing";
     return false;
   }else if(!alphabetsRegex.test(userName)){
	   document.getElementById("pwdS").innerHTML = "";
		document.getElementById("emS").innerHTML = "";
		 document.getElementById("successS").innerHTML="";
		 document.getElementById("pwdL").innerHTML="";
		document.forms[0].username.focus();
		document.getElementById("unS").innerHTML = "Name can have alphabets only !!";
		return false;
	 }
	 
		if (emailId == "" )
	{
		document.getElementById("pwdS").innerHTML = "";
		document.getElementById("unS").innerHTML = "";
		 document.getElementById("successS").innerHTML="";
		document.forms[0].email.focus();
		document.getElementById("emS").innerHTML = "Email is missing";
		return false;
	 }else if(!emailRegex.test(emailId)){
		 //alert("in valid email check");
		 	document.getElementById("unS").innerHTML = "";
		 document.getElementById("pwdS").innerHTML = "";
	      document.getElementById("successS").innerHTML="";
		document.forms[0].email.focus();
		document.getElementById("emS").innerHTML = "Enter a valid email";
		return false;
	 }
	 
	 if( pass == "" )
   {
	document.getElementById("emS").innerHTML = "";
     document.getElementById("successS").innerHTML="";
	 document.getElementById("unS").innerHTML="";
     document.forms[0].password.focus() ;
	 document.getElementById("pwdS").innerHTML = "Password is missing";
     return false;
   }
   
   if(userName!='' && emailId!=''&& pass!=''){
	   document.getElementById("pwdS").innerHTML = "";
		document.getElementById("emS").innerHTML = "";
		document.getElementById("unS").innerHTML="";
			      document.getElementById("successS").innerHTML="Congratulations ! You have been registered successfully.";
				  document.getElementById("signUpForm").reset();
   }

	
	
	
}
   
    
function validateFormOnSubmit() {
var reason = "";

  reason += validateFirstname(); 
  reason += validateLastname();
  reason += validateSt_Address();
  reason += validateCity();
  reason += validateZipcode();
  reason += validateBirthdate();
  reason += validateGender();
  reason += validateGrade();
  reason += validateMail();
  reason += validatePhone();
  reason += validateParent();
  reason += validateFirst_closest_school();
  reason += validateSecond_closest_school();
  reason += validatePosition_normal();
  reason += validatePosition_wanted();
  reason += validateJersey_size();
  reason += validateShorts_size();
  reason += validateFormEndParent();
  reason += validateFormEndDate();
    
    
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }

  return true;
}



function validateFirstname(){
  
    var mensaje = "";
    
    if (document.my_form.firstname.value.length == 0) {
        
        mensaje="Fill the first name\n";
        document.my_form.firstname.style.background="yellow";
        
    }
    
    return mensaje;
}

 


function validateLastname(){
  
    var mensaje = "";
    
    if (document.my_form.lastname.value.length == 0) {
        
        mensaje="Fill the lastname\n";
        lastname.style.background="yellow";
        
    }
    
    return mensaje;
}



function validateSt_Address(){
  
    var mensaje = "";
    
    if (document.my_form.st_address.value.length == 0) {
        
        mensaje="Fill the street address\n";
        st_address.style.background="yellow";
        
    }
    
    return mensaje;
}





function validateCity(){
  
    var mensaje = "";
    
    if (document.my_form.city.value.length == 0) {
        
        mensaje="Fill the city\n";
        city.style.background="yellow";
        
    }
    
    return mensaje;
}






function validateZipcode(){
  
    var mensaje = "";
    
    if (document.my_form.zipcode.value.length == 0) {
        
        mensaje="Fill the zipcode\n";
        zipcode.style.background="yellow";
        
    }
    
    return mensaje;
}








function validateBirthdate(){
  
    var mensaje = "";
    
    if (document.my_form.birthdate.value.length == 0) {
        
        mensaje="Fill the birthdate\n";
        birthdate.style.background="yellow";
        
    }
    
    return mensaje;
}






function validateGender(){
  
    var mensaje = "";
    
    if (document.my_form.gender.value.length == 0) {
        
        mensaje="Fill the gender\n";
        
        
    }
    
    return mensaje;
}







function validateGrade(){
  
    var mensaje = "";
    
    if (document.my_form.grade.value.length == 0) {
        
        mensaje="Fill the grade\n";
       
        
    }
    
    return mensaje;
}










function validateMail(){
  
    var mensaje = "";
    
    if (document.my_form.mail.value.length == 0) {
        
        mensaje="Fill the mail\n";
        mail.style.background="yellow";
        
    }
    
    return mensaje;
}







function validatePhone(){
  
    var mensaje = "";
    
    if (document.my_form.phone.value.length == 0) {
        
        mensaje="Fill the name\n";
        phone.style.background="yellow";
        
    }
    
    return mensaje;
}






function validateParent(){
  
    var mensaje = "";
    
    if (document.my_form.parent.value.length == 0) {
        
        mensaje="Fill the parent\n";
       document.my_form.parent.style.background="yellow";
        
    }
    
    return mensaje;
}





function validateFirst_closest_school(){
  
    var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.first_closest_school;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the first_closest_school\n";
    }
    
    
    return mensaje;


}



    
   


function validateSecond_closest_school(){
  
   var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.second_closest_school;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the second_closest_school\n";
    }
    
    
    return mensaje;


}







function validatePosition_normal(){
  
  var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.position_normal;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the position_normal\n";
    }
    
    
    return mensaje;


}




function validatePosition_wanted(){
  
   var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.position_wanted;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the position_wanted\n";
    }
    
    
    return mensaje;


}



function validateJersey_size(){
  
   var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.jersey_size;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the jersey_size\n";
    }
    
    
    return mensaje;


}






function validateShorts_size(){
  
   var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.shorts_size;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the shorts_size\n";
    }
    
    
    return mensaje;


}






function validateFormEndParent(){
  
   var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.form_end_parent;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the form_end_parent\n";
        form_end_parent.style.background="yellow";
       
    }
    
    
    return mensaje;


}






function validateFormEndDate(){
  
   var mensaje = "";
    var somevalue = false;
    var radios= document.my_form.form_end_date;
    
    for(var i = 0; i<radios.length; i++){
       
        if(radios[i].checked){
            
            somevalue = true;
        }
    }
    
    
    if(!somevalue) {
        
        mensaje = "Fill the form_end_date\n";
        form_end_date.style.background="yellow";
        
    }
    
    
    return mensaje;


}



function ShowHideDiv() {
    
    var div_size = document.getElementById("uniform2");
    
    
    
    if (my_form.uniform.checked == true){
    
        div_size.style.display = "none";
        
    } else {
        
        div_size.style.display = "flex";
    }
    
};

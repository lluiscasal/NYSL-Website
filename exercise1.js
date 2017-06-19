
function printNums(num) {
    
    var i;
    
    for (i = 1; i <= num; i++) {
        
        console.log (i);
        
    }
};



function printEvensOneLine(num) {
    
    var i;
    var result;
    var total;

    
    for (i = 1; i <= num; i++) {
        
        if(i%2==0) {
        
            result+=i+";";
            
        }

    }
    
   result=result.substring(0,result.length-1);
   console.log (result);  
    
};





function printProducts(num, mult) {
  
var i;
var num;
    
for(i=1; i<=num; i++) {
    
    console.log("The product of " + i + " and " + mult + " is " +(i*mult));
       
}   
    
};








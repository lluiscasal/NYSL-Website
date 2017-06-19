function addMultTable(rows, cols) {


var i;
var j;
var tr;
var td;
var table = document.getElementById("empty_table"); 

    table.style.border = "1px solid red";
    
    for (i=0;i<rows;i++) {
        tr = table.insertRow(i);
        for (j=0;j<cols;j++) 
            tr.insertCell(j).innerHTML = (i + 1) * (j + 1);
                            
       } 
    
   }; 



 

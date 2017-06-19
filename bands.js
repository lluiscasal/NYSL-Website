

    function addbands (myBandList) { 
        var i;
        var ul = document.getElementById("band-list");
        var li;
        
       
        
        for (i=0; i < myBandList.length; i++) {  
            
            li = document.createElement("li");
            
            li.append(myBandList[i]);

            ul.append(li);
            
        }

    };



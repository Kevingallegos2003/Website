//test script is in working order

function test(){
    console.log("hello world!");
}

//initialize jquery ui widgets

$( function() {
    const mainDiv = document.getElementById("mainbox");
    $( "#accordion" ).accordion({
        collapsible: true, 
        active:false,
        activate: function(event,ui){
            
            if (ui.newHeader.length > 0){mainDiv.style.minHeight="1400px";}
            else{mainDiv.style.minHeight = "800px";}
        }
    });
    $(".info").tabs();
} );
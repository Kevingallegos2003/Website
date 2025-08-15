//test script is in working order

function test(){
    console.log("hello world!");
}

//initialize jquery ui widgets

$( function() {
    const mainDiv = document.getElementById("main-box");
    //const resumeActive = $("#accordion").accordion("option", "active");
    $( "#accordion" ).accordion({collapsible: true, active:false});
    
    //if(resumeActive){mainDiv.style.minHeight="1000px";}
    $(".info").tabs();
} );
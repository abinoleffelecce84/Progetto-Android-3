$(document).ready(function(){
    
    $("#adds").hide(); 
    $("#btn-create").click(function(){
        $("#adds").toggle("high"); 
        if($("#change").is(":visible"))
        {
            $("#change").hide();
        }
    });
});
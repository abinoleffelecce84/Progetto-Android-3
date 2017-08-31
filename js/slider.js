function autoRefresh_div()
{
	window.location.reload();
}

$(document).ready(function()
            {
                $("#message").hide();
                $("#btn-send").click(function()
                {
                    $("#message").slideToggle();
                    setInterval(function()
                    {
                        if($("#message").is(":visible"))
                        {
                            $("#message").slideToggle();
							
                        } else { setInterval(autoRefresh_div()); }
				
                    },2000);
					
                });
            });
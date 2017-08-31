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
                        } else {}
                    },2000);
                });
            });
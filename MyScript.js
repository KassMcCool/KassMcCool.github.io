<script>
function change()
{
    var elem = document.getElementById("button1");
    if (elem.value=="Please take a moment to click this button") elem.value = "The giant button has been clicked!";
    else elem.value = "Please take a moment to click this button";
}

   $('.btn-click').click(function() 
   {
    $("body").css("background","#AFD629");
}

$('.btn-toggle').click(function() 
{
    $("body").toggleClass("second-color");
})
</script>
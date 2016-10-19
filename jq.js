$(document).ready(function(){
$('#quarterly').click(function(){
$('#monthly').css('background','#fff').css('color','#F5AA23');
$('#quarterly').css('background','#F5AA23').css('color','#fff');
$('#plan1').hide();
$('#plan2').hide();
$('#plan3').hide();
$('#time').hide();
$('#task').hide();
$('#task2').hide();
$('#task3').hide();
$('#plan1a').show();
$('#plan1a').show();
$('#plan2b').show();
$('#plan3c').show();
$('#timea').show();
$('#taska').show();
$('#taskb').show();
$('#taskc').show();
});
$('#monthly').click(function(){
$('#plan1').hide();
$('#plan1a').show();
$('#monthly').css('background','#F5AA23').css('color','#fff');
$('#quarterly').css('background','#fff').css('color','#F5AA23');
$('#plan1a').hide();
$('#plan1a').hide();
$('#plan2b').hide();
$('#plan3c').hide();
$('#timea').hide();
$('#taska').hide();
$('#taskb').hide();
$('#taskc').hide();
$('#plan1').show();
$('#plan2').show();
$('#plan3').show();
$('#time').show();
$('#task').show();
$('#task2').show();
$('#task3').show();

});



});
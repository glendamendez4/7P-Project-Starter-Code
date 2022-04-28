$("button").click(function(){
   let variable1=$(".l").val(); 
    let variable2=$(".k").val();
    let variable3=$(".j").val();
    
    let variable4=variable3 * 4015;
    $(".fortune-display").append(variable1+ " will sleep "+variable4+" hours by 2033.");
    
    console.log(variable1,variable2,variable3);
    
    $("fortune-display").text (variable1,variable2,variable3);    
    
});
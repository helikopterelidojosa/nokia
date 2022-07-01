function ST(){
    var d= new Date();
    var h=d.getHours();//0-23
    var m=d.getMinutes();//0-59
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    var t=h+":"+m;
    document.getElementById("MC").innerText=t;
    document.getElementById("MC").textContent=t;
    setTimeout(ST,1000);};ST();
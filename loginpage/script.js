let thisYear =document.querySelector("#year");
let thisMonth =document.querySelector("#month");
let thisDay = document.querySelector("#date");
let month=["January","February","March","April","May","June","July","August" ,"September","October","November","December"];
(function popularMonth(){
    month.forEach(function(elem){
        let option=document.createElement("option");
        option.textContent=elem;
        thisMonth.append(option);
    })
    thisMonth.value="January"
})();


function monthDate(month){
    let date;
if(month =="January" ||month =="March" ||month =="May" ||month =="July" ||month =="August" || month =="October"||month =="December"){
    date=31;
} 
else if(month =="April" ||month =="June" ||month =="September"|| month =="November"){
    date=30;
}else{

}
console.log(month);
for (let i=1;i<=date;i++){
    let option =document.createElement("option");
    option.textContent=i;
    thisDay.append(option);
}

}

function Year(){

    let year=new Date().getFullYear();

    for(let i=0;i<101;i++){
        let option=document.createElement("option");
        option.textContent=year-i;
        thisYear.append(option);
    }
}
monthDate(thisMonth.value);
Year();

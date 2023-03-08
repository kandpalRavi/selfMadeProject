let yearSelect = document.querySelector("#year");
let monthSelect = document.querySelector("#month");
let dateSelect = document.querySelector("#date");

const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

(function populateMonths(){
    months.forEach(function(elem){
        let opt = document.createElement("option");
        opt.textContent=elem;
        monthSelect.append(opt);
    })
    monthSelect.value="January";
})();


let previousDay;

function populateDays(month){
    while(dateSelect.firstChild){
        dateSelect.removeChild(dateSelect.firstChild);
    }
    let dayNum;

    let year = yearSelect.value;

    if(month === 'January' || month === 'March' || 
    month === 'May' || month === 'July' || month === 'August' 
    || month === 'October' || month === 'December') {
        dayNum = 31;
    } else if(month === 'April' || month === 'June' 
    || month === 'September' || month === 'November') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }

    for(let i=1;i<=dayNum;i++){
        let option = document.createElement("option");
        option.textContent=i;
        dateSelect.appendChild(option);
    }

    if(previousDay){
        dateSelect.value = previousDay;
        if(dateSelect.value === ""){
            dateSelect.value = previousDay - 1;
        }
        if(dateSelect.value === ""){
            dateSelect.value = previousDay - 2;
        }
        if(dateSelect.value === ""){
            dateSelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    let year = new Date().getFullYear();
    for (let i=0;i<=101;i++){
        let option=document.createElement("option");
        option.textContent=year-i;
        yearSelect.append(option);

    }
}
populateDays(monthSelect.value);
populateYears();

yearSelect.onchange=function(){
    // monthSelect.value;
    populateDays(monthSelect.value);

}

monthSelect.onchange=function(){
    // monthSelect.value;
    populateDays(monthSelect.value);
    
}
dateSelect.onchange=function(){
    previousDay =dateSelect.value;
}

document.querySelector("form").addEventListener("submit",thisData);
let dataArr =[];
function thisData(elem){
    elem.preventDefault();
    let dataObj = {
        firstName: document.querySelector("#first_name").value,
        lastName: document.querySelector("#sir_name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        date:document.querySelector("#date").value,
        month:document.querySelector("#month").value,
        year:document.querySelector("#year").value
    };
    // console.log(dataObj.date); 
    // console.log(dataObj.month);
    if(dataObj.firstName!=""&&dataObj.lastName!=""&&dataObj.email!=""&&dataObj.password!=""){
        dataArr.push(dataObj);
        console.log(dataArr);
        document.location.href="loginpage.html";
        localStorage.setItem("signUpData",JSON.stringify(dataArr));
    }else{
        if(dataObj.firstName==""&&dataObj.lastName==""&&dataObj.email==""&&dataObj.password==""){
            document.querySelector("#first_name").style.border="1px solid red";
            document.querySelector("#sir_name").style.border="1px solid red";
            document.querySelector("#email").style.border="1px solid red";
            document.querySelector("#password").style.border="1px solid red";
            document.querySelector("#date").style.border="1px solid red";
            document.querySelector("#month").style.border="1px solid red";
            document.querySelector("#year").style.border="1px solid red";
        }
        if(dataObj.firstName==""){
            document.querySelector("#first_name").style.border="1px solid red";
        }
        if (dataObj.lastName==""){
            document.querySelector("#sir_name").style.border="1px solid red";
        }
        if(dataObj.email==""){
            document.querySelector("#email").style.border="1px solid red";
        }
        if(dataObj.password==""){
            document.querySelector("#password").style.border="1px solid red";
        }
    }


    
    // console.log(dataArr);

}
document.querySelector("#first_name").onchange=function(){
    document.querySelector("#first_name").style.border="1px solid #e1e3e6";
}
document.querySelector("#sir_name").onchange=function(){
    document.querySelector("#sir_name").style.border="1px solid #e1e3e6";
}
document.querySelector("#email").onchange=function(){
    document.querySelector("#email").style.border="1px solid #e1e3e6";
}

document.querySelector("#password").onchange=function(){
    document.querySelector("#password").style.border="1px solid #e1e3e6";
}

document.querySelector("#date").onchange=function(){
    document.querySelector("#date").style.border="1px solid #e1e3e6";
}
document.querySelector("#month").onchange=function(){
    document.querySelector("#month").style.border="1px solid #e1e3e6";

}

document.querySelector("#year").onchange=function(){
    document.querySelector("#year").style.border="1px solid #e1e3e6";

}
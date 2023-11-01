document.querySelector("form").addEventListener("submit",thisData);

function thisData(elem){
        elem.preventDefault();
    let dataObj ={
        userName:document.querySelector("#name").value,
        userPassword:document.querySelector("#password").value
    };

    if(dataObj.userName=="Gokul"&&dataObj.userPassword=="Kandpal"){
        let popup= document.querySelector(".popup");
        document.querySelector("#h2").innerText="Thank You!";
        document.querySelector(".str").innerText="You have succefully loged in";
        popup.classList.add("open-popup");
        document.querySelector(".btn").addEventListener("click",closePopup); 
        
    }
    else{
         
         if(dataObj.userName!="Gokul"&&dataObj.userPassword!="Kandpal"){
            if( dataObj.userName==""&&dataObj.userPassword==""){
                let popup= document.querySelector(".popup");
                document.querySelector("#h2").innerText="Error!";
                document.querySelector(".str").innerText="Plese enter user name and password";
                popup.classList.add("open-popup");
                document.querySelector(".btn").addEventListener("click",closePopup);  
                document.querySelector("#password").style.border="1px solid red";
                document.querySelector("#name").style.border="1px solid red";

            }
            else if(dataObj.userName==""&&dataObj.userPassword!=""){
                document.querySelector("#name").style.border="1px solid red";
            } 
            else  if(dataObj.userPassword==""&& dataObj.userName!=""){
                document.querySelector("#password").style.border="1px solid red";
            }
            else{


                let popup= document.querySelector(".popup");
                document.querySelector("#h2").innerText="Error!";
                document.querySelector(".str").innerText="User name and password does not match";
                popup.classList.add("open-popup");
                document.querySelector(".btn").addEventListener("click",closePopup); 
               
            }
        }  
    }
}
function closePopup(){
    let popup= document.querySelector(".popup");
    popup.classList.remove("open-popup");
    document.querySelector("#name").value="";
    document.querySelector("#password").value="";
    
}


document.querySelector("#name").onchange=function(){
    document.querySelector("#name").style.border="1px solid #e1e3e6";
    document.querySelector("#name").style.backgroundColor="1px solid #ffffff";
}
document.querySelector("#password").onchange=function(){
    document.querySelector("#password").style.border="1px solid #e1e3e6";
    document.querySelector("#password").style.backgroundColor="1px solid #ffffff";
}
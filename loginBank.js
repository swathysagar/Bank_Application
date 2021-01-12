class Bank{
static getAccountDetails=()=>{
let accountdetails={
    userone:{acno:1000,balance:1000,username:"userone",password:"testuser1"},
    usertwo:{acno:1001,balance:12000,username:"usertwo",password:"testuser2"},
    userthree:{acno:1002,balance:13000,username:"userthree",password:"testuser3"}
}
return accountdetails;
}
static authenticateUser=(uname,pwd)=>{
    let datset=Bank.getAccountDetails();  
    if(uname in datset){
        if(datset[uname].password===pwd){
            return 1
        }
        else{
           return 0
           // 0 for invalid password
        }
    }
    else{
        return -1
        //-1 for invalid user name
    }
}
static login=()=>{
    console.log("inside login")
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let user=Bank.authenticateUser(uname,pwd)
    if(user==1){
        alert("successful login")
        window.location.href="userhome.html"

    }
    else if(user==0){
        alert("invalid password")
    }
    else if(user==-1){
        let ulab=document.querySelector("#ulabel")
       ulab.textContent="Invalid username"
       ulab.style.color="red"
       alert("no user name exist")
    }
    //let datset=Bank.getAccountDetails();
    //if(uname in datset){
        //if(datset[uname].password===pwd){
           // alert("successful login")
           // window.location.href="userhome.html"
       // }
       // else{
           // alert("invalid password")
        //}
    //}
   // else{
        //let ulab=document.querySelector("#ulabel")
       // ulab.textContent="Invalid username"
       // ulab.style.color="red"
       // alert("no user name exist")
  //  }
}
static deposit=()=>{
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let amount=Number(document.querySelector("#amt").value)
    let datset=Bank.getAccountDetails()
    if(uname in datset){
        if(datset[uname].password===pwd){
            datset[uname].balance+=amount
            alert("your account has been credited with amount"+amount+"avaliable balance"+datset[uname].balance)
        }
        else{
            alert("invalid password")
        }
    }
else{
    alert("no user exist with this username")
}
}
static withdraw=()=>{
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let amount=Number(document.querySelector("#amt").value)
    let datset=Bank.getAccountDetails()
    if(uname in datset){
        
        if(datset[uname].password===pwd){
            if(datset[uname].balance>=amount){
            datset[uname].balance-=amount
            alert("your account has been debited with amount"+amount+"avaliable balance"+datset[uname].balance)
            }
            else{
                alert("insufficient balance")
            }
        }
        else{
            alert("invalid password")
        }
    }
else{
    alert("no user exist with this username")
}
}
}

const userData = []

let nameInput = document.getElementById("input-name");
let professionInput = document.getElementById("input-profession");
let ageInput = document.getElementById("input-age");

let add = document.getElementById("addbtn");
let list = document.getElementById("list-main");
let error = document.getElementById("errormsg");
let error1 = document.getElementById("errormsg1");
let count = document.getElementById("countmsg");

function adduser() {
    name1 = nameInput.value;
    profession = professionInput.value;
    age = ageInput.value;
    

    if ( name1 != "" && profession != "" && age != "" ) {
        let newObj = {
            name1,
            profession,
            age
        }
        userData.push(newObj);
        list.innerHTML = "";
        userData.forEach((item) => {
            error1.innerText = ""; 
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Name: ${item.name1} &nbsp; Age: ${item.age} &nbsp; Profession: ${item.profession}`;
            list.append(newDiv);
            error1.append("Success: Employee Added!")
            return true;
        })
        
    }
    else {
        count.innerText = "";
        error.innerText = "";
        error.append("Error: Please make sure all the fields are filled before adding in an employee!");
        count.append("You have 0 employes");
    
    }
    // if (adduser.value == true){
    //     alert("Success: Employee Added!");
    // }

}

add.addEventListener("click", adduser);


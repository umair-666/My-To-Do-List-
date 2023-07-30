const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddTask(){
    if(inputBox.value=== ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li"); //html element ban rha hai yaha
        li.innerHTML=inputBox.value; //input field me jo daal rhe ho vo li me aa jaega
        listContainer.appendChild(li); //li display hoga list-container me
        let span = document.createElement("span")
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveMyData(); //calling saveMyData() func to save the updated data
}

//now to add JS for "checking" task and delete task when "x" button is clicked

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){                                      //   `tagName` is a property of an HTML element that returns the tag name of the element in uppercase. For example, if the element is an `LI`, `tagName` will be `'LI'`. It is case-sensitive, so it is essential to use uppercase when comparing it.
        e.target.classList.toggle("checked");
        saveMyData(); //calling saveMyData() func to save the updated data after checking a task item
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveMyData(); //calling saveMyData() func to save the updated data after deletion of a task item
     }
    }, false);
  

    //below functions implements "local storage"- meaning data wont be lost when browser is refreshed or closed

    function saveMyData(){
        localStorage.setItem("data", listContainer.innerHTML);  //data ke naam se sab task save ho rha hai
    }

    //below function displays data when browser is opened again

    function showMyTask(){
        listContainer.innerHTML = localStorage.getItem("data");

    }
    showMyTask();
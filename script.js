//bittons
var addItems = document.querySelector(".addbtn");
// get taskbox & input task value
var taskInput = document.querySelector("input");
var taskcontainer = document.querySelector(".add-items")
var inputcontainer = document.querySelector(".input-box");


// After click to add button
addItems.addEventListener("click", () => {
  if (taskInput.value == "") {
    alert("Enter tasks plz");
  }
  else {
    taskcontainer.innerHTML += `
           <div class="task-box">
           <p class="task-input">${taskInput.value}</p>
           <button class="deletebtn">Del</button>
           <button class="editbtn">Edit</button>
           </div>`;

    taskInput.value = "";

    // delete the pervious task
    var dels = document.querySelectorAll(".add-items .deletebtn");
    dels.forEach(del => {
      del.addEventListener("click", () => {
        del.parentNode.remove();
      });
    });

    // after work done
    var taskDones = document.querySelectorAll(".add-items .task-input");
    taskDones.forEach(taskDone => {
      taskDone.addEventListener("click", () => {
        taskDone.classList.toggle("done");
      });
    });

    //Edit the task 
    var taskEdits = document.querySelectorAll(".add-items .editbtn");
    taskEdits.forEach(taskEdit => {
      taskEdit.addEventListener("click", (e) => {

         let button = e.target;
         let taskBox = button.parentNode;
         let pera =taskBox.firstElementChild;

         if (button.innerHTML === "Edit") {

          let creatInput = document.createElement("input");
          creatInput.setAttribute("type", "text");
          creatInput.value = pera.innerHTML;
          taskBox.insertBefore(creatInput, pera);
          taskBox.removeChild(pera)
          button.innerHTML = "Save";
      }

      //save the edit ...
      else if (button.innerHTML === "Save") {

          let input = taskBox.firstElementChild;

          let creatPera = document.createElement("p");
          creatPera.className = "task-input";
          creatPera.innerHTML = input.value;
          taskBox.insertBefore(creatPera, input);
          taskBox.removeChild(input)
          button.innerHTML = "Edit";
      }
      //---------- edit Event end here --------//
  });
  //------------- edit ForEach end -----------//
  });
  // ---------- Else statement end -----------//
  }
  //----- addBtn Listner end here ----//
});



// delete the given tasks
var dels = document.querySelectorAll(".add-items .deletebtn");
dels.forEach(del => {
  del.addEventListener("click", () => {
    del.parentNode.remove();
  });
});


// given work done
var taskDones = document.querySelectorAll(".add-items .task-pera");
taskDones.forEach(taskDone => {
  taskDone.addEventListener("click", () => {
    taskDone.classList.toggle("done");
  });
});

//given task edit 
var taskEdits = document.querySelectorAll(".add-items .editbtn");
taskEdits.forEach(taskEdit => {
  taskEdit.addEventListener("click", (e) => {

     let button = e.target;
     let taskBox = button.parentNode;
     let pera =taskBox.firstElementChild;

     if (button.innerHTML === "Edit") {

      let creatInput = document.createElement("input");
      creatInput.setAttribute("type", "text");
      creatInput.value = pera.innerHTML;
      taskBox.insertBefore(creatInput, pera);
      taskBox.removeChild(pera)
      button.innerHTML = "Save";
  }

  //save the edit ...
  else if (button.innerHTML === "Save") {

      let input = taskBox.firstElementChild;

      let creatPera = document.createElement("p");
      creatPera.className = "task-input";
      creatPera.innerHTML = input.value;
      taskBox.insertBefore(creatPera, input);
      taskBox.removeChild(input)
      button.innerHTML = "Edit";
  }
});
});
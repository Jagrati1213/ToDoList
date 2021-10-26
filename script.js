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
           <button class="deletebtn"><i class="fas fa-trash-alt"></i></button>
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
    var taskDones = document.querySelectorAll(".add-items .task-box");
    taskDones.forEach(taskDone => {
      taskDone.addEventListener("click", () => {
        taskDone.classList.toggle("done");
      });
    });

  }

});

// delete the given tasks
var dels = document.querySelectorAll(".add-items .deletebtn");
dels.forEach(del => {
  del.addEventListener("click", () => {
    del.parentNode.remove();
  });
});
// given work done
var taskDones = document.querySelectorAll(".add-items .task-box");
taskDones.forEach(taskDone => {
  taskDone.addEventListener("click", () => {
    taskDone.classList.toggle("done");
  });
});
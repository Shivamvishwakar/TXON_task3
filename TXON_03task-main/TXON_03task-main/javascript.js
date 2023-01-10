var createlist = document.querySelector("#list");
 var addbtn = document.querySelector("#btn");
 var tasklist = document.querySelector("#tasklist");


  


document.querySelector('#btn').onclick = function(){
  
  
    if(document.querySelector('#list').value.length == 0){
        alert("Please Enter a Task")
    }
  
    else{
        document.querySelector('#tasklist').innerHTML += `
        <div class="task">
        <span id="taskname"><i class="ri-arrow-down-s-line" id="point"></i>${document.querySelector("#list").value} </span>
         <div class="icon">
          <i class="ri-delete-bin-5-fill"></i>
         </div>
          </div>
        `;
  
        var current_tasks = document.querySelectorAll(".icon");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
  
  
  
  
      
        
    }
  }
  
  
  document.querySelector("#btn").addEventListener("click", function(){
    document.querySelector("#list").value = " ";
  })
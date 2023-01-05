const todolist = {
    id:"",
    content:""
}

let input = document.getElementById("input");
let tasklist = document.getElementById("tasks");
let id = 1;
function addtask() {
    todolist.id = id;
    todolist.content = input.value;
    localStorage.setItem(todolist.id, todolist.content)

    let task = document.createElement("div");
    task.classList.add("single-task");
    task.value = localStorage.getItem(id);
    task.setAttribute("id",id);
    tasklist.appendChild(task);

    let text_output = document.createElement("input");
    text_output.type = "text";
    text_output.value = localStorage.getItem(id);
    text_output.setAttribute("readonly", "readonly")
    text_output.classList.add("output-text");
    task.appendChild(text_output);

    let edit_output = document.createElement("input");
    edit_output.type = "submit";
    edit_output.value = "Edit";
    edit_output.classList.add("output-edit");
    edit_output.setAttribute("id",id);
    task.appendChild(edit_output);

    let done_output = document.createElement("input");
    done_output.type = "submit";
    done_output.value = "Done";
    done_output.classList.add("output-done");
    done_output.setAttribute("id",id);
    task.appendChild(done_output);

    let delete_output = document.createElement("div")
    let icon = document.createElement("i");
    icon.innerHTML = '<i class="uil uil-trash-alt"></i>';
    delete_output.appendChild(icon);
    delete_output.classList.add("output-delete");
    delete_output.setAttribute("id",id);
    task.appendChild(delete_output);
    
    input.value = "";

    edit_output.addEventListener("click", (event)=>{
            if (edit_output.value == "Edit") {
                edit_output.value = "Save";
                text_output.removeAttribute('readonly');
            } else {
                text_output.setAttribute("readonly", "readonly");
                console.log(event.srcElement.id);
                localStorage.setItem(event.srcElement.id,text_output.value);
                edit_output.value = "Edit";
            }
        }
    )
    done_output.addEventListener("click", (event)=>{
        if (done_output.value == "Done") {
            task.style = "background-color: #44464c;"
            edit_output.style.color = "white";
            delete_output.style.color = "white";
            done_output.style.color = "white";
            done_output.value = "Uncheck"
            edit_output.addEventListener("click", ()=>{
                text_output.setAttribute("readonly", "readonly")
                edit_output.value = "Edit"
            })
        } else {
            task.style = "background-color: #2f3033;"
            edit_output.style.color = "violet";
            delete_output.style.color = "rgb(245, 142, 142)";
            done_output.style.color = "rgb(31, 145, 116)";
            done_output.value = "Done"
            edit_output.addEventListener("click", ()=>{
                text_output.removeAttribute("readonly")
                edit_output.value = "Save";
            })
        }
    })
    delete_output.addEventListener("click", (event)=>{
        id-=1;
        localStorage.removeItem(event.srcElement.id);
        tasklist.removeChild(task);
    })
    id+=1;
}
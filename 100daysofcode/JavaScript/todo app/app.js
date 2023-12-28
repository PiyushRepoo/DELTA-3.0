let todo = [];

let req = prompt("Enter your request: ");

while(true){
    if(req == "list"){
        console.log("----------------------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------------------");
        req = prompt("Enter your request: ");
    }
    else if(req == "add"){
        let task = prompt("Enter your task you want to add: ");
        todo.unshift(task);
        console.log("task added");
        req = prompt("Enter your request: ");
    }
    else if(req == "remove"){
        let del = parseInt(prompt("Enter the index of todo you want to remove: "));
        todo.splice(del,1);
        console.log("task removed");
        req = prompt("Enter your request: ");
    }
    else if(req == "quit"){
        console.log("Quitting app.");
        break;
    }else{
        console.log("Wrong request.");
        break;
    }
}
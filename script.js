


const consoleText = document.getElementById('consoleText');
const consoleInput = document.getElementById('consoleInput');



function console(text, color='none'){
    if(color == 'none'){
        consoleText.innerHTML += ''+text+'<br>';
       
    }
    else if (color == 'red'){
        consoleText.innerHTML += text+'<br><br>';
        
    }
    
}

const obj = {};


function ClickOk (){
    
    if(consoleInput.value == 'help'){
        listCommand();
    }
    else if(consoleInput.value == 'clear'){
        clear();
    }
    else if(consoleInput.value == 'listTask'){
        listTask();
    }
    else if(consoleInput.value.indexOf('creatTask') != -1){
        let i = consoleInput.value.split(':');
        let task = i[1];
        let value = i[2];
        creatTask(task, value);
        console('Creat task: Task='+task+',Value='+value);
    }
    else{
        console('Error: command "'+consoleInput.value+'" no exists', 'red');
    }
    consoleInput.value = '';
}

const Command = {
    '1': 'help',
    '2': 'clear',
    '3': 'creatTask: task:value',
    '4': 'listTask',
    
};

function listCommand(){
    console('>listTask')
    for(let i in Command){
        console(i+': '+Command[i]);
    }
   
}


function clear(){
    
    consoleText.innerHTML = '';
    
}



function listTask(){
    let i = 1;
    for(let task in objListTask){
        
        console('-'+i+')'+task+': '+objListTask[task]);
        i++;
    }
}


const objListTask = {};

function creatTask(task, value){
    objListTask[task] = value;
}


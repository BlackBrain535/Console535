

let checkBot = false;

/*
Отдел: Получение обьектов 
Отдел: Функции
*/

//Отдел: Получение обьектов
const consoleText = document.getElementById('consoleText');
const consoleInput = document.getElementById('consoleInput');
//Отдел: Функции
function showText(name='',colorName='white',text,colorText='white',colorBackground='rgba(0,0,0,0)'){
    consoleText.innerHTML += `<div style=\'color:${colorText}; background:${colorBackground};\'><span style='color:${colorName}'>${name}:</span> ${text}</div>`
}


function checkClickOk (){
    if(consoleInput.value.indexOf('/') == 0){
        
        
        

        if(consoleInput.value == '/BotFalse'){
            showText('You','green',consoleInput.value,'white');
            showText('Console', 'yellow', 'Bot:False', 'white');
            checkBot = false;
        }

        else if(consoleInput.value == '/BotTrue'){
            showText('You','green',consoleInput.value,'white');
            showText('Console', 'yellow', 'Bot:True', 'white');
            checkBot = true;
        }



        else if(consoleInput.value == '/help'){
            doListCommand();
        }
        else if(consoleInput.value == '/clear'){
            doCleare();
        }
        else if(consoleInput.value == '/listTask'){
            doListTask();
        }
        else if(consoleInput.value.indexOf('/createTask') == 0){
            let i = consoleInput.value.split(':');
            let task = i[1];
            
            createTask(task);
            showText('You','green',consoleInput.value,'white');
            showText('Console', 'yellow', `create task: ${task}`, 'white');
        }
        else{
            showText('Console','red','Error command "'+consoleInput.value+'" no exists', 'white');
        }
    }
    
    else{
        showText('You','green',consoleInput.value,'white');
        if(checkBot){
            
            listAnswer = [
                [
                    'Привет!',
                    'Хай',
                    'Хеллоу!',
                    'Здравствуй!',
                    'Здравствуйте!',
                    'Приветствую!',
                    'Рад видеть вас!',
                    'Приветули!',
                    'Приветики!',
                    'Привет, Бро!',
                    'Вот это люди!',
                    'Здравствуйте! Царь!',
                    'Даров!',
                    'Дратути!',
                    'Салам!',
                    'Кукусики!',
                    'Ку!',
                    'Хаю Хай!',
                ]
                
                
            ];

 
            text = consoleInput.value;
            const listHello = [
                'прив',
                'хай',
                'здрав',
                'ку',
                'салам',
                
                
            ];
            
            text = text.toLocaleLowerCase();
            for (let elem of listHello){
                
                let i = Math.floor(Math.random()*listAnswer[0].length);
    
                if(text.indexOf(elem) >= 0){
                    showText('Bot', 'blue', listAnswer[0][i], 'white');
                }
            }




            
            


         
        }
    }   
    consoleInput.value = '';
};


const ListCommand = [
    '/help',
    '/clear',
    '/createTask:task',
    '/listTask',
    '/BotTrue',
    '/BotFalse',
];
function doListCommand(){
    showText('You', 'green', consoleInput.value, 'white');
    for(let i = 0; i<ListCommand.length; i++){   
        showText(1+i,'yellow',ListCommand[i], 'white');
    }  
};
function doCleare(){
    consoleText.innerHTML = '';
};

const ListTask = [];
function createTask(task){
    ListTask.push(task);
    
}
function doListTask(){
    showText('You', 'green', consoleInput.value, 'white');
    for(let i = 0; i<ListTask.length; i++){   
        showText(1+i,'yellow',ListTask[i], 'white');
        alert('asd');
    }  
};



function getConsoleVersion(){
    return "0.1";
}


//Отдел Cобытиями
document.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        checkClickOk();
        console.log('Отдел: События (true)');
    }
    
});
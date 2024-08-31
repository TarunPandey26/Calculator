let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

//getting the string 
let string = "";

let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        //targeting the AC button who has clear the screen in one tap
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // Targeting the del button which work are backspace
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0 , string.length-1);
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})
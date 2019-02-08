const display = document.querySelector('.calculator input[name=display]');

document.querySelectorAll('.digits button, .operation button') 
document.querySelectorAll('.digits, .operation')
 .forEach( btn => btn.addEventListener('click', digitOperPressed) );
 
function digitOperPressed(e) {
    display.value += e.target.innerText;
}

document.querySelector('.result')
    .addEventListener('click', function(){
        display.value = eval(display.value);       
    })
    
    
document.querySelector('.clear')
    .addEventListener('click', function(){
        display.value='';
    })
  

    
    

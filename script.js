let display = document.querySelector('.display');
let btns = document.querySelectorAll('.buttons input');
let exp;

btns.forEach(element => {
    element.addEventListener('click', () => {
       if(element.value === 'AC'){
          display.value = ''
       } 
       else if (element.value == 'del'){
          display.value = display.value.slice(0 , -1)
       }
       else if(element.value == '='){
          if(display.value.includes('÷')){
               exp = display.value.replace(/÷/g, '/')
          }
          else if(display.value.includes('×')){
               exp = display.value.replace(/×/g, '*')
          }
          else{
               exp = display.value
          }
          (display.value.length === 0)? display.value = '' :
          display.value = eval(exp);
       }

       else{
          display.value += element.value;
       }

    });
});
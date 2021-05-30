let screen = document.getElementById('output');
buttons = document.querySelectorAll('button');
let screenValue ='';
for(item of buttons)
{
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;

if(buttonText=='x')
{
    buttonText = '*';
    screenValue +=buttonText;
    screen.value = screenValue;
}
else if(buttonText=='AC')
{
screen.value='';
screenValue='';

}

else if(buttonText=='=')
{
    screen.value = eval(screenValue);
    screenValue = screen.value
}
else if(buttonText == 'C')
{
    str = screenValue;
    str = str.toString();
    var a = str.slice(0 , -1);
    screenValue = a;
    screen.value = a;
}
else if(buttonText =='sin')
{
    screen.value = Math.sin(screenValue);
    screenValue = screenValue;
}
else if(buttonText =='cos')
{
    screen.value = Math.cos(screenValue);
    screenValue = screen.value;
}
else if(buttonText =='tan')
{
    screen.value = Math.tan(screenValue);
    screenValue = screen.value;
}
else if(buttonText =='sqr')
{
    screen.value = screenValue * screenValue;
    screenValue = screen.value;
}
else
{
    screenValue += buttonText;
    screen.value = screenValue;
}
    })
}
var menu = document.getElementById(menubar);
menu.addEventListener('click' , (t)=>
{
    alert('This feature will be avalible soon Thanks for Using');
})

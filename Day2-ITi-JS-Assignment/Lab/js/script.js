
var advices = ["advice 1","advice 2","advice 3","advice 4","advice 5","advice 6","advice 7","advice 8","advice 9","advice 10"],
    today = new Date(),
    date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    colors = { "r": "red", "b": "blue", "g": "green" };

// Q1 Answer:

function Q1()
{
    document.getElementById('Answer_1').innerHTML = advices[Math.floor(Math.random() * advices.length)];
}

// Q2 Answer:
function Q2()
{    
    document.getElementById('Answer_2').innerHTML = today + "<br>" + date +" "+ time ;
}
// Q3 Answer:
function Q3_catch()
{
    try {
       alertaa("Welcome guest!");
    }
    catch(err) {
       document.getElementById("Answer_3").innerHTML = err.message + "<br>";   
    }
}
function Q3_onerror()
{
    document.getElementById("myButtun").onerror = document.getElementById("Answer_3").innerHTML = "Not found Attribute (backgroundColor)";
}

// Q4 Answer:
function Q4()
{
    var color_selected = prompt('Choose color from (r, b, g): '); 
    document.getElementById('Answer_4').innerHTML = ("Current Date: ".bold() + today).toString().fontcolor(colors[color_selected]); 
}


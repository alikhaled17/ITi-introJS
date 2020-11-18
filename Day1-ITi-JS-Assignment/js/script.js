
alert("Welcome to my site :)")
// Q1 Answer
function Q1()
{
    "use strict";
    var user = prompt("Please enter your name: ");
    if (user != null) {
        document.getElementById("answer_1").innerHTML = "Welcome " + user + "<hr>" ;
    }
}

// Q2 Answer
function calc1(num1, num2)
{
    "use strict";
    var result; 
    return result= (num1+num2);
}
function Q2()
{
    "use strict";
    var num1 = parseInt(prompt("insert num1: "));
    var num2 = parseInt(prompt("insert num2: "));

    document.getElementById("answer_2").innerHTML = "result : " + calc1(num1, num2) + "<hr>" ;
}

// Q3 Answer
function calc2(exp)
{
    "use strict";
    var result = eval(exp); 
    return result;
}
function Q3()
{
    "use strict";
    var exp = prompt("insert your exp: ");
    document.getElementById("answer_3").innerHTML = "You entered:( "+ exp + " ), and the result is: "  + calc2(exp) + "<hr>" ;
}


// Q4 Answer
function Q4()
{
    "use strict";
    var d = new Date();
    var name = prompt("what's your name: ");
    var birth_year = parseInt(prompt("insert your birth year: "));
    
    while (isNaN(birth_year) || birth_year > 2010)
    {
        birth_year = parseInt(prompt("Please insert a correct birth year: "));
    }
    document.getElementById("answer_4").innerHTML = 
    "<b>Name :</b> " + (name) + "<br>" +
    "<b>Birth Year :</b> " + (birth_year) + "<br>" +
    "<b>Age :</b> " + (d.getFullYear() - birth_year) + "<hr>" ;
}

// start Bonus Assignment
// Q5 Answer
function Q5()
{
    "use strict";
    var i ;
    for (i = 1; i <= 6; i++)
    {
        var value = document.getElementById("answer_5").innerHTML;
        document.getElementById("answer_5").innerHTML =   value + "<h"+i+">" +"welcome to my page" +"</h"+i+">" ;
    }    
}

// Q6 Answer
function Q6()
{
    "use strict";
    var d = new Date();
    var name = prompt("what's your name: ");
    var birth_year = parseInt(prompt("insert your birth year: "));
    
    while (isNaN(birth_year) || birth_year > 2010)
    {
        birth_year = parseInt(prompt("Please insert a correct birth year: "));
    }

    
    document.getElementById("answer_6").innerHTML = 
    "<br><table><tr><th>Name </th><td>"+ (name) +"</td></tr><tr>"+
    "<th>Birth Year </th><td>"+ (birth_year) + "</td></tr><tr>" +
    "<th>Age</th><td>" + (d.getFullYear() - birth_year) + "</td></tr></table>";

}
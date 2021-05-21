var colors = { "r": "red", "b": "blue", "g": "green" },
    today = new Date();

function Q1_Bonus() {
    var output = document.getElementById("Answer_1"),
        color_select = prompt('Choose color from (r, b, g): ');
    try {
        if(!(color_select in colors)) throw "Not found color that you entered";
        output.innerHTML = ("Current Date: ".bold() + today).toString().fontcolor(colors[color_select]);
    }
    catch(err) {
        output.innerHTML =  err;
    }
}

// Q2 Answer
function Q2_Bonus() {
    document.getElementById("b").onerror = er();
    var output = document.getElementById("Answer_2"),
        color_select = prompt('Choose color from (r, b, g):');
    output.innerHTML = ("Current Date: ".bold() + today).toStrinbg().fontcolor(colors[color_select]);
}
function er()
{
    document.getElementById("Answer_2").innerHTML = "Not found color that you entered";
}

// Q3 Answer
function cleanList(arr)
{
    var ls = [];
    for (i = 0; i < arr.length; i++)
    {
        if((isNaN(arr[i])) == false)
        {
            ls.push(arr[i]);
        }
    }
    return ls;
}

function Q3_Bonus(){
    var element,
        list = [],
        sorted_list = [],
        size = prompt("enter size: ");
    
    for(i = 0; i < size; i++)
    {
        element = prompt("enter elemnts ");
        list.push(parseInt(element));
    } 
    var oldList = list.toString();
    for (j = 0; j < size; j++)
    {
        sorted_list.push(Math.max(...list));
        delete list[list.indexOf(Math.max(...list))];
        list = cleanList(list);   
    }
    document.getElementById("Answer_3").innerHTML = "youe enterd ( "+ oldList +" ), <br> after sorted: ( " + sorted_list + " )";
}

// Q4 Answer
var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
function Q4_Bonus() {
    var user_date = prompt("writ date like (DD – MM – YYYY) : "), 
        x,
        msg = document.getElementById("Answer_4");
    
    if (user_date.length != 10)
    {
        msg.innerHTML = "Date Not like Example";
    } else {
        var day = parseInt(user_date.substring(0, 2)),
            month = parseInt(user_date.substring(3, 5)),
            year = parseInt(user_date.substring(6, 10)),
            sum_trues = !(isNaN(year)) + !(isNaN(month)) + !(isNaN(day));

        if(user_date.substring(2,3) == "-" && user_date.substring(5,6) == "-" && sum_trues == 3)
        {

            if(year <= 2020)
            {
                if (month < 12 )
                {
                    x = month - 1;
                    if(day <= monthLength[x])
                    {
                        var correct_date = new Date(user_date);
                        msg.innerHTML = correct_date;

                    }else
                    {
                        msg.innerHTML = "this day in this month is Not happen !, try again.";
                    }
                } else {
                    msg.innerHTML = "Month is wrong !, try again.";
                }
            } else {
                msg.innerHTML = "year is wrong !, try again.";
            }
        } else {
            msg.innerHTML = "Date is Not valid, try again.";
        }
    }
}
// Q1
function Q1(event) {
    var x = event.key;
    document.getElementById("Answer_1").innerHTML = x;
    event.stopPropagation(); // Q1_Bonus
}

// Q2
function clock()
{
  var t=new Date();
  document.getElementById("txtboxid").value=t.toLocaleTimeString(); 
}
var i=setInterval("clock()",1000);
function Q2(event) {
    if(event.key == 'S' || event.key == 's')
    {

        clearInterval(i);

    }
}
document.onkeydown = Q2;

// Q3_Q4
function link_go() {
    var x = window.open("./helpers/advertise.html",'_blank', 'width=200,height=200');
}
function Q3_Q4() {setTimeout("link_go()",3000)}


// Q2_Bonus
function Q2_Bonus() {
    // var chrom = window.navigator.appVersion
    // chrom = x.split("/")[1].split(")")[1]
    var h = window.innerHeight,
        w = window.innerWidth,
        BN = window.navigator.appName;
    alert( 
    "page height: " + h +
    ",  page width: " + w +
    ",  browser name: " + BN );
}

// Q4_Bonus
var i;
window.onscroll = (e) => {
    i = window.pageYOffset / (window.outerHeight / 100) * 2;
    document.getElementById("floatTxt").style.top = i + "px";
}


// Q5_Bonus
function mous(event)
{
    if (event.button == 2) {event.preventDefault();}
}
function spaceKey(event)
{
    if (event.keyCode == 32){event.preventDefault();}
}

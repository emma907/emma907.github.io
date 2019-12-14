


grandtotal = 0

var total1 = 0
var total2 = 0
var total3 = 0

//subtotal 1
var obj1 = document.getElementById("quant1");

obj1.addEventListener("change", subtotal1);


function subtotal1() {

    var price1 = document.getElementById("price1").value;


    var qt1 = parseFloat(obj1.value);


    total1 = qt1 * parseFloat(price1);

    document.getElementById("subtotal1").value = total1;
    console.log("total is " + total1)

    grandtotal = total1 + total2 + total3;
    console.log('grand total is' + grandtotal)

    document.getElementById("grandtotal").value = grandtotal;

}

//subtotal 2

var obj2 = document.getElementById("quant2");

obj2.addEventListener("change", subtotal2);


function subtotal2() {

    var price2 = document.getElementById("price2").value;


    var qt2 = parseFloat(obj2.value);


    total2 = qt2 * parseFloat(price2);

    document.getElementById("subtotal2").value = total2;
    console.log("total is " + total2)

    grandtotal = total1 + total2 + total3;
    console.log('grand total is' + grandtotal)

    document.getElementById("grandtotal").value = grandtotal;

}

//subtotal 3

var obj3 = document.getElementById("quant3");

obj3.addEventListener("change", subtotal3);


function subtotal3() {

    var price3 = document.getElementById("price3").value;


    var qt3 = parseFloat(obj3.value);


    total3 = qt3 * parseFloat(price3);

    document.getElementById("subtotal3").value = total3;
    console.log("total is " + total3)

    grandtotal = total1 + total2 + total3;
    console.log('grand total is' + grandtotal)

    document.getElementById("grandtotal").value = grandtotal;

}

//Shipping



document.getElementById('shippingmethod').addEventListener('change', shippingcost);

function shippingcost() {


    if (document.getElementById('shippingmethod').value == 'standard') {
        grandtotal = total1 + total2 + total3 + 4.00;
    } else if (document.getElementById('shippingmethod').value == 'oneDay') {
        grandtotal = total1 + total2 + total3 + 8.00;
    } else if (document.getElementById('shippingmethod').value == 'pickup') {
        grandtotal = total1 + total2 + total3 + 0;
    }

    document.getElementById("grandtotal").value = grandtotal;

}





//VALIDATION ----------------------------------------------------



function receipt() {


    var selection = document.querySelectorAll('.validate');


    var len = selection.length;



    //check gender
    var theURL = "https://api.genderize.io?name=" + selection[4].value.toLowerCase();


    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    var string_text = httpGet(theURL)
    console.log("THE GENDER IS " + string_text)

    var parsed_str = JSON.parse(string_text)
    console.log("name:" + parsed_str.name)



    //check email if college
    if ((selection[5].value).includes(".edu")) {
        var emailtype = "college"

        console.log("IT'S A COLLEGE EMAIL!")

    }

    var text = "";
    for (var i = 0; i < len; i++) {

        console.log('name1: ' + selection[i].name)
        console.log('value2: ' + selection[i].value)

        if ((selection[i].value == "") || (selection[i].value == null)) {


            alert("Make sure to input " + selection[i].name);
            selection[i].focus();
            console.log(selection[i]);
            selection[i].select();

            selection[i].style.backgroundColor = "#EFBDC0";
            return;
        } else if ((i == 10) && (selection[i].value.length != 5)) {

            alert("Make sure to input 5 digits for " + selection[i].name);
            console.log('digit: ' + selection[i].name)
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";
            return;
        } else if ((i == 5) && (selection[i].value.indexOf("@") == -1)) {

            alert("Your email should inlcude an @ " + selection[i].name);
            console.log("email" + selection[i]);
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";


            return;
        } else if ((i == 5) && (selection[i].value.indexOf(".") == -1)) {

            alert("Your email should inlcude an . " + selection[i].name);
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";
            return;
        }


        /*
        else if ((i == 14) && (selection[i].value.length != 16)) {
        	alert("Make sure to input 16 digits for " + selection[i].name);
        	selection[i].focus();
        	selection[i].select();
        	selection[i].style.backgroundColor="#EFBDC0";

        }


        else if (i == 14) {
        	text += selection[i].name;
        	text += " : ";
        	var credit_display= selection[i].value; 
        	var hidden_credit = credit_display%10000; 
        	text += 'xxxxxxxxxxxx'; 
        	text+= hidden_credit; 
        	text += '<p>'; 
        }

        */
        else if ((i == 15) && (selection[i].value.length != 3)) {
            alert("Make sure to input 3 digits for " + selection[i].name);
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";

        } else if (i > 10 && i < 14) {
            if (selection[i].checked) {
                text += selection[i].name;
                text += " : ";
                text += selection[i].value;

                text += "<p>";
            }
        } else {

            text += selection[i].name;
            text += " : ";
            text += selection[i].value;

            text += "<p>";
        }

        
    }

    document.getElementById("output").innerHTML = text;
    console.log(text);

}



document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault();
    //receipt();
});

document.forms[0].addEventListener("submit", receipt);

$(document).ready(function(){
$("#submit").click(function() {


			  $('.container').hide();

			  

			  console.log("This is working!!!!!!!!")


			});
});

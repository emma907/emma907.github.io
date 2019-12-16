
//get location
var x = document.getElementById("demo");
var latlon = 0; 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    window.lat = position.coords.latitude
    window.long = position.coords.longitude
	window.latlon = position.coords.latitude + "," + position.coords.longitude;
	console.log("LATLON", latlon)
  //var img_url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBT3lgZAKpCeJF9UcUJf-XfTGwDhLJBJpI";

  /*document.getElementById("demo").innerHTML = "<img src='"+img_url+"'>";
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;*/
}
/*
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
*/
///


//set up totals

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


    console.log("the email is " + selection[6].value)

    var emailtype = false; 
    //check email if college
    if ((selection[6].value).includes(".edu")) {
        var emailtype = true; 

        console.log("IT'S A COLLEGE EMAIL!")

    }

    var gmail = false; 
    //check if email is google account
    if ((selection[6].value).includes("gmail.com")) {
        var gmail = true; 

        console.log("IT'S A COLLEGE EMAIL!")

    }

    
    //check birthday
    var bday = false
    console.log("birthday " + selection[12].value)
    if ((selection[12].value !== "") && (selection[12].value !== null)) {
        bday = true; 
        console.log("birthday IS" + selection[12].value)
    }
    
    var text = "";
    for (var i = 0; i < len; i++) {

        console.log('name1: ' + selection[i].name)
        console.log('value2: ' + selection[i].value)

        if (i !== 12){
            if ((selection[i].value == "") || (selection[i].value == null)) {


            alert("Make sure to input " + selection[i].name);
            selection[i].focus();
            console.log(selection[i]);
            selection[i].select();

            selection[i].style.backgroundColor = "#EFBDC0";
            return;
        } else if ((i == 11) && (selection[i].value.length != 5)) {

            alert("Make sure to input 5 digits for " + selection[i].name);
            console.log('digit: ' + selection[i].name)
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";
            return;
        } else if ((i == 6) && (selection[i].value.indexOf("@") == -1)) {

            alert("Your email should inlcude an @ " + selection[i].name);
            console.log("email" + selection[i]);
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";


            return;
        } else if ((i == 6) && (selection[i].value.indexOf(".") == -1)) {

            alert("Your email should inlcude an . " + selection[i].name);
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";
            return;
        }


        
        else if ((i == 16) && (selection[i].value.length != 3)) {
            alert("Make sure to input 3 digits for " + selection[i].name);
            selection[i].focus();
            selection[i].select();
            selection[i].style.backgroundColor = "#EFBDC0";

        } else if (i > 11 && i < 15) {
            if (selection[i].checked) {
                text += selection[i].name;
                text += " : ";
                text += selection[i].value;

                text += "<p>";
            }
        } else {
        	/*
            text += i + " " + selection[i].name;
            text += " : ";
            text += selection[i].value;

            text += "<p>";
            */
        }
    }

        
    }
    //-----HIDE FORM-----
    document.getElementById("container").style.display = "none"; 
    document.getElementById("footer").style.display = "none";
    document.getElementById("optclick").style.display ="block"


    //UPDATE CONTENTS
    //document.getElementById("body").style.backgroundColor = "red"
    document.getElementById("title").innerHTML= "CAPTURE"

    text = "<p id = 'typing'> Hello " + selection[4].value + ", thank you for spending $" + grandtotal + " at The Store."
    text += " Here is some of the information you gave us: <br> <ul><li>There is a " + parsed_str.probability*100 + "% \
    chance that you are " + parsed_str.gender + " based on your first name.</li><br>" 

    if (emailtype) {
    	text += "<li>Based on your '.edu' email address, you are affiliated with a college or university.</li><br>"
    }

    if (gmail) {
        text += "<li>Based on your '@gmail.com' email address, you have a Google account that can give us more data on your likes, \
        interests and online behavior.</li><br>"
    }

    text += "<li>Your purchases indicate that you are interested in PRIVACY, PRIVACY ACTIVISM, \
    RACIAL INEQUALITY LITERATURE, ACADEMIA, and SURVEILLANCE.</li><br>"

    if (latlon != 0){
    text += "<li>The location you allowed us to access tells us that when you ordered the books, you were located at " + latlon+".</li>"; 
        }

    text+= "<br><li>According to your shipping information, you have a strong connection to " + selection[10].value +".</li>"
    
    if (bday){
        text+="<br><li>You entered your birthday and zipcode, and we inferred your gender based on your\
        name. We can easily use these three pieces of information to identify you in public databases and learn more information.</li>"
    }
    //if the user is the professor ----------------------------
    if ((selection[4].value.toLowerCase()  == "maryam" || selection[4].value.toLowerCase() == "monalisa") && selection[5].value.toLowerCase() == "gharavi") {
        text += "</ul><br><br>Since " + selection[4].value + ' '+selection[5].value + " is a user on which we have rich information\
        we also know:<br>"
        text+="<ul><li>You are a professor at New York University - we will continue to advertise privacy\
        textbooks to you.</li><br>"
        text+="<li>You have a Ph.D. in Comparative Literature and Film & Visual Studies from Harvard University and \
        an M.F.A. in Film/Video at Milton Avery Graduate School of the Arts at Bard College - we will advertise \
        FILM and LITERATURE books to you.</li><br>"
        text+="<li>You are an artist in residence at Recess Art in New York – we will advertise ART, ART OPENINGS\
        and ART LITERATURE to you.</li><br>"
        text+="<li>You published <i>BIO</i> in 2018 – we will advertise both our BOOKS and BOOK PUBLISHING SERVICES\
        to you</li>"
    }

    if ((selection[4].value.toLowerCase()  == "emma") && (selection[5].value.toLowerCase() == "patton")) {
        text += "</ul><br><br>Since " + selection[4].value + ' '+selection[5].value + " is a user on which we have rich information\
        we also know:<br>"
        text+="<ul><li>You are a student at New York University.</li><br>"
        text+="<li>You are majoring in sociology - we will continue to advertise textbooks to you.</li><br>"
        text+="<li>You travel between Saint Louis and New York City - we will advertise our stores in both locations.</li><br>"
        text+="<li>You frequently buy ebooks - we will advertise more DIGITAL MEDIA to you.</li><br>"

    }

    //----------------------------
  

    text += "</ul><br><br><strong>WE APPRECIATE THE DATA.</strong><p>"

    var done = false; 
    //function to make it look like typing and avoid tags
    function printSentence(id, sentence, speed) {
      var index = 0,
          timer = setInterval(function() {

        var char= sentence.charAt(index);
        if(char === '<') index= sentence.indexOf('>',index);
        document.getElementById(id).innerHTML= sentence.substr(0,index);
        if(++index === sentence.length){
          clearInterval(timer);
        }
      }, speed);
       
        
    } //printSentence
    printSentence("output", text, 50)
   

    //document.getElementById("optout").innerHtml = "<button id = 'optclick'>OPT OUT</button>"

    //document.getElementById("output").innerHTML = text;
    console.log(text);

}

function movealong(){
    document.getElementById('bigreveal').style.display = "none"; 
    document.getElementById('body').style.backgroundColor = "black"; 
    document.getElementById('move').innerHTML = "MOVE ALONG, THERE'S NOTHING TO SEE HERE."; 
    setTimeout(restore1, 3000); 
    //go back

}

function restore1() {
    document.getElementById('bigreveal').style.display = 'block'; 
    document.getElementById('move').style.display = 'none'; 
    document.getElementById("container").style.display = "inline-block"; 
    document.getElementById("footer").style.display = "block";
    document.getElementById("output").style.display = "none";  
    document.getElementById("body").style.backgroundColor = "white"
    document.getElementById("optclick").style.display = "none"; 


    

}

document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault();
    //receipt();
});

document.forms[0].addEventListener("submit", receipt);


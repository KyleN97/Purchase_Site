//Pricing function
function Pricing(a) {
    //1 is passed in to indicate the game is ...
    if (a === 1) {
        sessionStorage.setItem("Name", "Tom Clancy's The Division - $");//Set the sessionstorage name to ...
        sessionStorage.setItem("Price", "69.95");//set the sessionsstorage price to..
        window.location.href = 'Purchase.html';//Open purchase html doc
    }
    //2 is passed in to indicate the game is ...
    else if (a === 2) {
        sessionStorage.setItem("Name", "Dark Souls 3 - $");//Set the sessionstorage name to ...
        sessionStorage.setItem("Price", "89.95");//set the sessionsstorage price to..
        window.location.href = 'Purchase.html';//Open purchase html doc
    }
    //3 is passed in to indicate the game is ...
    else if (a === 3) {
        sessionStorage.setItem("Name", "Overwatch - $");//Set the sessionstorage name to ...
        sessionStorage.setItem("Price", "59.95");//set the sessionsstorage price to..
        window.location.href = 'Purchase.html';//Open purchase html doc
    }
}
function Submit() {
    var firstname = document.getElementById("firstname").value;//first name = firstname textboxes value
    var lastname = document.getElementById("lastname").value;//last name = lastname textboxes value
    var Address = document.getElementById("Address").value;//Address = Address textboxes value
    var CitySuburb = document.getElementById("City/Suburb").value;//CitySuburb = CitySuburb textboxes value
    var state = document.getElementById("state").value;//state = state dropdown value
    var PostCode = document.getElementById("PostCode").value;//PostCode = PostCode textboxes value
    var CCNum = document.getElementById("CC#").value;//CCNum = CCNum numberboxes value
    var CCExpiryYear = document.getElementById("CCExpiryYear").value;//CCExpiry = CCExpiry numberboxes value
    var CCExpiryMonth = document.getElementById("CCExpiryMonth").value;
    alert("Thankyou " + firstname + " " + lastname + "\n" + "Details from purchase \n" + "First Name: " + firstname + "\nLast Name: "
        + lastname + "\nAddress: " + Address + "\nCity/Suburb: " + CitySuburb + "\nState: " + state + "\nPostCode: " + PostCode + "\nCredit Card Num: " +
        CCNum + "\nCredit Card Security Num: " + "\nCredit Card Expiry Date: " + CCExpiryYear + " " + CCExpiryMonth);//Pop up an alert posting a confirmation
}
function ValidateSubmit(){
    var datacorrect = true; //used to see if all data has been filled out   
    var fname = document.forms["PurchaseForm"]["firstname"].value;
    var lname = document.forms["PurchaseForm"]["lastname"].value;
    var addressval = document.forms["PurchaseForm"]["Address"].value;
    var citysuburbval = document.forms["PurchaseForm"]["City/Suburb"].value;
    var stateval = document.forms["PurchaseForm"]["state"].value;
    var postcodeval = document.forms["PurchaseForm"]["PostCode"].value;
    var ccnumval = document.forms["PurchaseForm"]["CC#"].value;
    var ccexpiryyearval = document.forms["PurchaseForm"]["CCExpiryYear"].value;
    var ccexpirymonthval = document.forms["PurchaseForm"]["CCExpiryMonth"].value;
    //All these above vars will hold the data that is in each vars textbox/numbox etc.
    if (fname == null || fname == ""||lname == null || lname == ""||addressval == null || addressval == ""||citysuburbval == null || citysuburbval == ""||
    stateval == null || stateval == ""||postcodeval == null || postcodeval == ""|| ccnumval == null || ccnumval == ""||ccexpiryyearval == null || ccexpiryyearval == ""||
    ccexpirymonthval == null || ccexpirymonthval == "") {//This statement checks wether each var has data inside of it
        alert("Please fill out all data");//if any element does not have data in it you will be prompted
        datacorrect =  false;//datacorrect set to false so the submit form does not pop up
    }
    if(datacorrect == true){//if all data is there    
        Submit();//submit the page
    }
    
}
function Price() {//Used to print our the Name of the game and the price
    document.getElementById("Price").innerHTML = sessionStorage.getItem("Name") + sessionStorage.getItem("Price");

}
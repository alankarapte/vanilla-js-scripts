//pure JS/vanilla JS AJAX call demonstration

//GET call
let getData = function () {

    console.log("button clicked");

    //initialize XMLHttpRequest Object
    const XHR = new XMLHttpRequest();

    //Initializes a request
    XHR.open("GET", "jsondata.txt", true);

    //(option) can show loader animation/msg etc.
    XHR.onprogress = function () {
        console.log("please wait, request is in process!!!");
    }

    /*What to do when response is ready(I demonstrate few ways)
        1. by onload property - prefer way
        2. by onreadystatechange - deprecated way
    */

    XHR.onload = function () {
        if (XHR.status === 200) {
            console.log(JSON.parse(XHR.responseText));
        } else {
            console.log("some error is occurs!!! status: " + XHR.status);
        }
    }
    /*
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status === 200) {
            console.log(JSON.parse(XHR.responseText));
        } else {
            console.log("some error is occurs!!! status: " + XHR.status);
        }
    }
    */    

    //Send request to server
    XHR.send();
}

let bttn = document.querySelector("#bttn4");
bttn.addEventListener("click", getData);


//POST call
let postData = function () {

    console.log("button clicked");

    //initialize XMLHttpRequest Object
    const XHR = new XMLHttpRequest();

    //Initializes a request
    XHR.open("POST", "POST SUPPORTED URL HERE", true);

    //setting http request header for content-type (prefer in POST calls)
    XHR.setRequestHeader("Content-type", "application/json");

    //(option) can show loader animation/msg etc.
    XHR.onprogress = function () {
        console.log("please wait, request is in process!!!");
    }

    /*What to do when response is ready(I demonstrate few ways)
        1. by onload property - prefer way
        2. by onreadystatechange - deprecated way
    */

    XHR.onload = function () {
        if (XHR.status === 200) {
            console.log(JSON.parse(XHR.responseText));
        } else {
            console.log("some error is occurs!!! status: " + XHR.status);
        }
    }
    /*
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status === 200) {
            console.log(JSON.parse(XHR.responseText));
        } else {
            console.log("some error is occurs!!! status: " + XHR.status);
        }
    }
    */

    //our post data
    let person1 = {
        name: "sangram",
        age: 40,
        degree: "Engineering"
    }


    //Send request to server
    XHR.send(JSON.stringify(person1));
}

let bttn = document.querySelector("#bttn5");
bttn.addEventListener("click", postData);


console.log("End of Script");

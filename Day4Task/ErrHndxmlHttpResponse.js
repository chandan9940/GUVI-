var request = new XMLHttpRequest;
var url = "https://dog.ceo/api/breeds/list/all";
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true)
request.send();

request.onerror = function () {
    console.log("Error Occured");
}

request.onload = function () {
    // Begin accessing JSON data here
    if (this.response)
     {  //checking for response
        var data = JSON.parse(this.response)
        console.log(data);
    }
}
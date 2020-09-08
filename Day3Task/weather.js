
var request = new XMLHttpRequest;
var url2 ="https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=39aa121931d3ecb0f2b8d7af21a5f50d";
request.open('GET',url2,true);
request.setRequestHeader("X-API-Key","39aa121931d3ecb0f2b8d7af21a5f50d");
request.send();
request.onload = function(){

    var arr = JSON.parse( this.response);
    for(var i in arr)
    {
      console.log(arr[i])
    }
}



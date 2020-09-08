var request = new XMLHttpRequest;

var url2 ="https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
request.open('GET',url2,true);
request.send();
request.onload = function(){

    var arr = JSON.parse(this.response);
    //console.log(arr);
    for(var i in arr)
    {
        console.log(arr[i]);
    }

}
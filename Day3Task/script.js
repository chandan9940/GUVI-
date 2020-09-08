var request = new XMLHttpRequest;
var url = "https://restcountries.eu/rest/v2/all";
var url1="https://dog.ceo/api/breeds/list/all";
var url2 ="https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
request.open('GET',url1,true);
request.send();
request.onload = function(){

    var arr = this.response;
    console.log(arr);

}
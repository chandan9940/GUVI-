var request = new XMLHttpRequest;
var url = "https://restcountries.eu/rest/v2/all";
var url1="https://dog.ceo/api/breeds/list/all";
var url2 ="https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
request.open('GET',url,true);
request.send();
request.onload = function(){

   var arr = JSON.parse(this.response);
   //var arr = this.response;
    
    // Get The COuntries in ASIA 
    
    var ans  =  arr.filter((item)=> item.region=="Asia");
    console.log(ans);
  
  //Get The Countries with population less than 2 lacks 
  
  var ans1 = arr.filter((item)=>item.population < 200000)
  console.log(ans1);
 
 //Bumpup the current population  of all the counteirs by 1L - Map 
 
  var ans2  = arr.map((item) => item.population + 100000 )
  console.log(ans2)
  
 //convert all the names in capitals - map
 
 var ans3  = arr.map((item)=>item.name.toUpperCase());
 console.log(ans3);
 
 //print following details  name , capital , flag  - foreach,filter
 
 var ans4 =  arr.forEach((item) => {

     console.log(item.name);
     console.log(item.region);
     console.log(item.flag);
 });
 
 //Print the total population of the countries  - reduce
 
 var ans5 = arr.reduce((a,item) => item.population + a,0)
 console.log(ans5);
 
//Print the total population of the countries in ASIA  - reduce
var ans6  =  arr.filter((item)=> item.region=="Asia");
var ans7 = ans6.reduce((a,item) => item.population + a,0)
console.log(ans7);
}
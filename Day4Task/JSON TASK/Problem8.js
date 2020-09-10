/*
Parsing JSON objects and Compare:
I have a mock data of security Questions and Answers. 
You function should take the object and a pair of strings and should return 
if the quest is present and if its valid answer

 //Test case1:
   var ques = "What was your first pet's name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true
   //Test case2:
   var ques = "What was your first pet's name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase

*/
var securityQuestions = [
    {
    question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,question,answer) {
   
    // your code here
    var a =  JSON.stringify(question);
    var b = JSON.stringify(answer);

    for(i in securityQuestions)
    {
       var o;
       var c =  JSON.stringify(securityQuestions[i].question);
       var d =  JSON.stringify(securityQuestions[i].expectedAnswer);
        if(a==c && b==d)
        {
           o =1; 
           return true;
        }
    }
   if(o!=1)
   {
       return false;
   }

   }
   
   var ques = "What was your first pet's name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true

   var ques = "What was your first pet's name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase
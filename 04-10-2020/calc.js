


document.getElementById("c").addEventListener("click", function () {
    document.getElementById("calciInput").value = "";
});

function k(val)
{document.getElementById("calciInput").value += val  };




document.getElementById("one").addEventListener("click", function() {
   k(1);
  });

  document.getElementById("two").addEventListener("click", function() {
    k(2);
  });

  document.getElementById("three").addEventListener("click", function() {
    k(3);
  });

  document.getElementById("four").addEventListener("click", function() {
    k(4);
  });

  document.getElementById("five").addEventListener("click", function() {
    k(5);
  });

  document.getElementById("six").addEventListener("click", function() {
    k(6);
  });

  document.getElementById("seven").addEventListener("click", function() {
    k(7);
  });

  document.getElementById("eight").addEventListener("click", function() {
    k(8);
  });

  document.getElementById("nine").addEventListener("click", function() {
    k(9);
  });

  document.getElementById("zero").addEventListener("click", function() {
    k(0);
  });

  document.getElementById("dot").addEventListener("click", function() {
    k(".");
  });

  document.getElementById("plus").addEventListener("click", function() {
    k("+");
  });

  document.getElementById("div").addEventListener("click", function() {
    k("/");
  });

  document.getElementById("minus").addEventListener("click", function() {
    k("-");
  });

  document.getElementById("mul").addEventListener("click", function() {
    k("*");
  });

  document.getElementById("eql").addEventListener("click", function() {
    var inp =document.getElementById("calciInput").value;
    document.getElementById("calciInput").value = eval(inp);
  });
  var input = document.getElementById("calciInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 13) {

    event.preventDefault();
    var inp =document.getElementById("calciInput").value;
    document.getElementById("calciInput").value = eval(inp);
  }
});
//script to restrict alphabets
function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 42 && x <= 57) && (x!=44))
    return true;
    else
    return false;
}
document.getElementById("calciInput").onkeypress = function() {return restrictAlphabets(event)};





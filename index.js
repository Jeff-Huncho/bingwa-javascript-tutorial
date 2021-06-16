
/** 		var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
		document.write("<b>Using for loops </b><br />");
		for (i=0;i<students.length;i++)
		{
		document.write(students[i] + "<br />");
		}


Document.write ("<b>using do...while loops</b></br>")
    do{
	document.write(i+"<br />")
	    i=i+2;
      }while (i<20)

var age = prompt("Please enter your age");
	if(age>=18)
		document.write("You are an adult <br />");
		if(age<18)
		document.write("You are NOT an adult <br />");

var hours = new DAte() .getHours()
    if (hours<12) {
		document.write("Good Morning!!! <br/>");
	} else 
	    document.write("Good afternoon!!! <br />") 
		
	var one = prompt ("ENter the first number");
    var two = prompt ("Enter the second number");
	 one = parseInt (one);
	 two = parseInt (two);
	 if (one==two)
	 document.write (one + "is equal to" + two + ".")
	  else if (one<two) 
	  document.write (one + "is less than" + two + ".")
		else 
		document.write (one +"is greater than" + two + ".") 
	 */

	/** 	function myFunction()
		{
			document.write("This is a simple function.<br />");
		}
		  myFunction();*/

		  var count = 0;
		function countVowels(name)
		{
			for (var i=0;i<name.length;i++)
			{
              if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
              count = count + 1;
			}
		document.write("Hello " + name + "!!! Your name has " + count + " vowels.");
		}
   	 	var myName = prompt("Please enter your name");
    	countVowels(myName);
	</script>
	
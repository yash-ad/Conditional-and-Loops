/*Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.*/

let day = "Saturday";

switch ( day )
{

case "Monday" :
    console.log("Lets start the week");
    break;

case "Tuesday" :
    console.log("Jai Hanuman");
    break;

case "Wednesday" :
    console.log("Jai Ganesh");  
    break;

case  "Thursday" :
    console.log("Jai Gurudev");
    break;
    
case "Friday"  :
    console.log("Govinda govinda");
    break;
    
case "Saturday" :
    console.log("Shri shaneshwar"); 
    break;
    
    default :
    console.log("Praise the lord");


}



let studentGrades = "A";

switch (studentGrades)
{
case "A" :
    console.log("Keep it up");
    break;

case "A+" :
    console.log("Good");
    break;
    
case "B" :
    console.log("Better");
    break;

case "C" : case "D" :
    console.log("Need Improvement");
    break;

    default:console.log("Invalid-Grades");
      
}

/*
    p = principle
    m = monthly contribution
    t = time (in years) to calculate for
    r = interest rate
    n = compound frequency
*/
function calculate(p, m, t, r, n)   {
    var currentPrinciple = p;
    var anArray = [];
   
    if(n === 12)  {
        function monthlyCompounding()   {

            for(let i = 0; i <= t * 12; i++) {
                if(i === 0 )    {anArray.push(currentPrinciple)}
                else{
                currentPrinciple = (currentPrinciple*1 + m*1) + ((currentPrinciple * r)/12);
                anArray.push(currentPrinciple.toFixed(2));}

            }
            return anArray;
        }
        
        function getYears() {
            let thisArray = monthlyCompounding();
            let thatArray = [];
            for(let i = 0; i<thisArray.length; i++) {
                if(i % 12 === 0)    {
                    thatArray.push(thisArray[i]);     
                }
                else continue;
            }
            return thatArray;
        }
    }
        
 
   
    else if(n ===4) {
        function quarterlyCompounding() {
            for(let i = 0; i<=t*12; i++) {
                if(i === 0) {anArray.push(currentPrinciple)}
                else if(i % 3 === 0)    {
                    currentPrinciple = (currentPrinciple*1 + m*3) + ((currentPrinciple * r)/4);
                    anArray.push(currentPrinciple.toFixed(2));
                }
                else continue
            }
            return anArray;
        }

        function getYears() {
            let thisArray = quarterlyCompounding();
            let thatArray = [];
            for(let i = 0; i<thisArray.length; i++) {
                if(i%4 === 0)   {
                    thatArray.push(thisArray[i]);
                }
                else continue;
            }
            return thatArray;
        }
    }   

    

    
    else if(n===2)    {
        function semiAnnualCompounding()    {
            for(let k = 0; k<=t*12; k++)    {
                if(k === 0) {anArray.push(currentPrinciple)}
                else if(k%6===0)    {
                    currentPrinciple = (currentPrinciple*1 + m*6) + ((currentPrinciple * r)/2);
                    anArray.push(currentPrinciple.toFixed(2));
                }
                else continue;
            }
            return anArray;
        }

        function getYears() {
            let thisArray = semiAnnualCompounding();
            let thatArray = [];
            for(let i = 0; i<thisArray.length; i++) {
                if(i%2 === 0)   {
                    thatArray.push(thisArray[i]);
                }
                else continue;
            }
            return thatArray;
        }
    }

    
    else if(n === 1)  {
        function annualCompounding()    {
            for(let k = 0; k<=t*12; k++)    {
                if(k === 0) {anArray.push(currentPrinciple)}
                else if(k%12===0)    {
                    currentPrinciple = (currentPrinciple*1 + m*12) + (currentPrinciple * r);
                    anArray.push(currentPrinciple.toFixed(2));
                }
                else continue;
            }
            return anArray;
        }

        function getYears() {
            return annualCompounding();
        }
    }
    

    // Runs through array from monthlyCompounding function and returns every 12th
    // result to display annual results later

    
    // Returns the last value in the array which is the future value of the investments
    function getFutureValue()  {
        let thisArray = getYears();
        return thisArray[thisArray.length - 1];
    }


   
    // Populates an empty div called answer_display with the answer
    document.getElementById('answer_display').innerHTML = 
    "<h2>" + 'The Results Are In' + '</h2><br /> ' +
    "<span>" + 'In ' + t + ' years, you will have $' + getFutureValue();  

}
   


function get_values()    {
    // DOM cache when user clicks calculate. grabs all user inputs and puts them
    // into usable variables. 
    var initialDeposit = document.getElementById("initial_investment").value;
    var monthlyContribution = document.getElementById("contributions").value;
    var timeToGrow = document.getElementById("time").value;
    var interest = document.getElementById("interest").value;
    var frequency = document.getElementById("frequency").value; 

    // if/else loop to change the user's input from compound frequency into a usable int
    // probably a better way of doing this.... it works for now, will improve later.
    if(frequency === 'Annually')    {
        frequency = 1;
    }
    else if(frequency === 'Semi-Annually')    {
        frequency = 2;
    }

    else if(frequency === 'Quarterly')    {
        frequency = 4;
    }

    else if(frequency === 'Monthly')  {
        frequency = 12;
    }

    else if(frequency === 'Weekly')   {
        frequency = 52;
    }

    else frequency = 365;

    /* Deleting this change to monthlyContribution temporarily to see if that solves my problem
    monthlyContribution *= 12; */

    // Need to divide user provided interest by 100 to get APR.

    interest = interest/100;
 
    calculate(initialDeposit, monthlyContribution, timeToGrow, interest, frequency);
}

// Clears the form and depopulates the answer div
let clear_values = clear_values => {
    document.getElementById('initial_investment').value = '';
    document.getElementById('contributions').value = '';
    document.getElementById('time').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('frequency').value = 'Annually';
    document.getElementById('answer_display').innerHTML = '';
};


// onclick event to run get_values() function when input_button is clicked
document.getElementById("input_button").onclick = function () {get_values()};
document.getElementById("reset_button").onclick = function () {clear_values()};


// I am putting the DOM cache into a function so that values aren't grabbed until user 
// clicks on CALCULATE

//compound interest with regular contributions formula;
// a = p(1 + (r/n)) ** nt + (PMT(1 + (r/n)) ** nt - 1) / (r/n)
// p = principle investment, n = number of time interest compounds annually, 
// r = interest rate, t = time in years investment will be active
// PMT = regular monthly contributions.

function calculate(p, m, t, r, n)   {
   
    // Working formula for simple interest including principle and compounding. No contributions yet. 
    let noContribute = p * Math.pow(1 + r/n, n * t);
   
    
   
    // Populates an empty div called answer_display with the answer
    document.getElementById('answer_display').innerHTML = 
    "<h2>" + 'The Results Are In' + '</h2><br /> ' +
    "<span>" + 'In ' + t + ' years, you will have $' + noContribute.toFixed(2);  
    

    //let compoundedValue = p * ( 1 + r / n ) ** n * t + (m * (1 + (r / n ) ** n * t - 1)) / (r / n);
    //console.log(compoundedValue);
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

// Need to create a formula to take values from get_values() and calculate the compound interest
// compound interest formula is A = P(1 + (r/n) ** nt)
// where A = final amount
// where P = principle investment
// where R = rate of return 
// where N = number of times interest applied
// where T = number of years 

// This formula does NOT include contributions. Need to think of algorythem to solve this....
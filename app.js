// I am putting the DOM cache into a function so that values aren't grabbed until user 
// clicks on CALCULATE

//compound interest with regular contributions formula;
// a = p(1 + (r/n)) ** nt + (PMT(1 + (r/n)) ** nt - 1) / (r/n)
// p = principle investment, n = number of time interest compounds annually, 
// r = interest rate, t = time in years investment will be active
// PMT = regular monthly contributions.

function calculate(p, m, t, r, n)   {
    // working formula for simple compound interest with no contributions, compounded annually
    // output is incorrect if compound frequency is changed. 
 
    let testValue = p * Math.pow(1 + r/n, n * t);
    console.log(testValue.toFixed(2));

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
    monthlyContribution *= 12;

    // Need to divide user provided interest by 100 to get APR.

    interest = interest/100;
 
    calculate(initialDeposit, monthlyContribution, timeToGrow, interest, frequency);
}

let clear_values = clear_values => {
    document.getElementById('initial_investment').value = '';
    document.getElementById('contributions').value = '';
    document.getElementById('time').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('frequency').value = 'Annually';
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
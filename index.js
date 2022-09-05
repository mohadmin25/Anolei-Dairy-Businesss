const shadeA=510;
const shadeB=308;
const shadeC=486;
const shadeD=572;

let total= shadeA + shadeB + shadeC + shadeD;

function totalProduction(){
  let output = `Your production in Shed A is ${shadeA} litres per day.
  Your production in Shed B is ${shadeB} litres per day.
  Your production in Shed C is ${shadeC}litres per day.
  Your production in Shed D is ${shadeD} litres per day.
  The total production is ${total} litres per day.`;
 const testVar = document.getElementById('totalOutput').innerText = output;
  console.log(testVar);
}

totalProduction();

let annualDays = 365;

let annualPrice = 365 * 45;

function incomeOverTime(selling_price, time){
  let weekly = selling_price * time * total;
  let annual = annualPrice * total;
  let weeklyYealy= `Your weekly income will be ${weekly}.
  Your yearly income will be ${annual}.`;
  const testVar = document.getElementById('weekanual').innerText = weeklyYealy;
  console.log(testVar);
}
incomeOverTime(45, 7);


let monthlyInfo = {
  january: 31,
  february: 29,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november:30,
  december: 31,
};
let dailyIncome = 45 * total;

let monthly = [monthlyInfo.january*dailyIncome, monthlyInfo.february*dailyIncome, monthlyInfo.march*dailyIncome, monthlyInfo.april*dailyIncome, monthlyInfo.may*dailyIncome, monthlyInfo.june*dailyIncome, monthlyInfo.july*dailyIncome, monthlyInfo.august*dailyIncome, monthlyInfo.september*dailyIncome, monthlyInfo.october*dailyIncome, monthlyInfo.november*dailyIncome, monthlyInfo.december*dailyIncome];
function monthlyIncome(){

let leapIncome =`Your income for January is ${monthly[0]}
Your Income for February is ${monthly[1]}
Your income for March is ${monthly[2]}
Your income for April is ${monthly[3]}
Your income for May is ${monthly[4]}
your income for June is ${monthly[5]}
Your income for July is ${monthly[6]}
Your income for August is ${monthly[7]}
Your income for September is ${monthly[8]}
Your income for October is ${monthly[9]}
Your income for November is ${monthly[10]}
Your income for December is ${monthly[11]}`;
const testVar = document.getElementById('leapyear').innerText = leapIncome;
console.log(testVar);
}
monthlyIncome();

function userPrompt(rate){
rate = prompt('Enter your rate(Ksh.)');

let monthlyCustRate = [monthlyInfo.january*rate*total, monthlyInfo.february*rate*total, monthlyInfo.march*rate*total, monthlyInfo.april*rate*total, monthlyInfo.may*rate*total, monthlyInfo.june*rate*total, monthlyInfo.july*rate*total, monthlyInfo.august*rate*total, monthlyInfo.september*rate*total, monthlyInfo.october*rate*total, monthlyInfo.november*rate*total, monthlyInfo.december*rate*total];

if(rate != typeof(string) && rate != null){

 let userInput = `Your income for January is ${monthlyCustRate[0]}
Your Income for February is ${monthlyCustRate[1]}
Your income for March is ${monthlyCustRate[2]}
Your income for April is ${monthlyCustRate[3]}
Your income for May is ${monthlyCustRate[4]}
your income for June is ${monthlyCustRate[5]}
Your income for July is ${monthlyCustRate[6]}
Your income for August is ${monthlyCustRate[7]}
Your income for September is ${monthlyCustRate[8]}
Your income for October is ${monthlyCustRate[9]}
Your income for November is ${monthlyCustRate[10]}
Your income for December is ${monthlyCustRate[11]}`;
const amountEntered = document.getElementById('enter').innerText = `You have entered ksh. ${rate}`;
const testVar = document.getElementById('customerInput').innerText = userInput ;
console.log(testVar);
}
}


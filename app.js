//    get total budget avaliable
let avaliableBudget = document.getElementById("avaliablebudget");
    function budget() {
        let salary = parseInt(document.getElementById("wages").value);
        let passiveIncome = parseInt(document.getElementById("passiveincome").value);
        avaliableBudget.innerHTML = salary + passiveIncome;
        // console.log(salary);
        // console.log(passiveIncome);
        // console.log(avaliableBudget);
    }

    // get home expenses
    let home = [];
    function homeexp() {
                let rent = parseInt(document.getElementById("rent").value);
                let electricity = parseInt(document.getElementById("electricity").value);
                let gas = parseInt(document.getElementById("gas").value);
                let water = parseInt(document.getElementById("water").value);
                let phone = parseInt(document.getElementById("phone").value);
                let cable = parseInt(document.getElementById("cable").value);
                let internet = parseInt(document.getElementById("internet").value);
                let maintenance = parseInt(document.getElementById("maintenance").value);    
                home.push(rent, electricity, gas, water, phone, cable, internet, maintenance);
                let homeExpenses = home.reduce((total, expense) => total + expense, 0);
                let totalHomeExpenses = document.getElementById("totalhomeexp");
                totalHomeExpenses .innerHTML = homeExpenses;
                        // console.log(rent);
                        // console.log(electricity);
                        // console.log(gas);
                        // console.log(water);
                        // console.log(phone);
                        // console.log(cable);
                        // console.log(internet);
                        // console.log(maintenance);    
                        // console.log(home);
                        // console.log(homeExpenses);
                        // console.log(totalHomeExpenses );            
                    }                                 
    
    
    // Set Health Expenses
    let health = [];
        function healthexp() {
            let doctor = parseInt(document.getElementById("doctor").value);
            let medicine = parseInt(document.getElementById("medicine").value);
            health.push(doctor, medicine);
            let totalExpenses = health.reduce((total, expense) => total + expense, 0);
            let totalHealthExpenses = document.getElementById("totalhealthexp");
            totalHealthExpenses.innerHTML = totalExpenses;            
            }
           
   // Set Transpotation Expenses
   let transpot = [];
   function transexp() {
           let repair = parseInt(document.getElementById("repairs").value);
           let fuel = parseInt(document.getElementById("fuel").value);
           let fare = parseInt(document.getElementById("fare").value);
           transpot.push(repair, fuel, fare);
           let totalTransExpenses = transpot.reduce((total, expense) => total + expense, 0);
           let totalTransportationExpenses = document.getElementById("totaltransexpenses");
           totalTransportationExpenses.innerHTML = totalTransExpenses;
        //    console.log(repair);
        //    console.log(fuel);
        //    console.log(fare);
        //    console.log(transpot);
        //    console.log(totalTransExpenses);
        //    console.log(totalTransportationExpenses);            
           }

// set Daily Living Expenses   
    let dailyliving = [];
           function dailyexp() {
                   let groceries = parseInt(document.getElementById("groceries").value);
                   let education = parseInt(document.getElementById("education").value);
                   let dinningout = parseInt(document.getElementById("dinningout").value);
                   let salon = parseInt(document.getElementById("salon").value);
                   dailyliving.push(groceries, education, dinningout, salon);
                   let totalDailyExpenses = dailyliving.reduce((total, expense) => total + expense, 0);
                   let totalDailyLivingExpenses = document.getElementById("totaldailylivingexpenses");
                   totalDailyLivingExpenses.innerHTML = totalDailyExpenses;
                //    console.log(groceries);
                //    console.log(education);
                //    console.log(dinningout);
                //    console.log(salon);
                //    console.log(dailyliving);
                //    console.log(totalDailyExpenses);
                //    console.log(totalDailyLivingExpenses);            
                   }           

//  set Charity / Donation Expenses   
    let charity = [];
        function charityexp() {
                    let gifts = parseInt(document.getElementById("gifts").value);
                    let donation = parseInt(document.getElementById("donation").value);
                    charity.push(gifts, donation );
                    let charityExpenses = charity.reduce((total, expense) => total + expense, 0);
                    let totalCharityExpenses = document.getElementById("totalcharityexpenses");
                    totalCharityExpenses.innerHTML = charityExpenses;
                    //    console.log(gifts);
                    //    console.log(donation );
                    //    console.log(charity);
                    //    console.log(charityExpenses);
                    //    console.log(totalDailyLivingExpenses);            
                      }           
               
//  set Subscription Expenses   
    let subscription = [];
        function subexp() {
            let newspaper = parseInt(document.getElementById("newspaper").value);
            let magazines = parseInt(document.getElementById("magazines").value);
            subscription.push(newspaper, magazines );
            let subscriptionExpenses = subscription.reduce((total, expense) => total + expense, 0);
            let totalSubscriptionExpenses = document.getElementById("totalsubscriptionexpenses");
            totalSubscriptionExpenses.innerHTML = subscriptionExpenses;
            //    console.log(newspaper);
            //    console.log(magazines );
            //    console.log(subscription);
            //    console.log(subscriptionExpenses);
            //    console.log(totalSubscriptionExpenses);
        } 

// set Miscellaneous Expenses 
    let misc = [];
        function miscexp() {
                    let bankfee = parseInt(document.getElementById("bankfee").value);
                    let creditcard = parseInt(document.getElementById("creditcard").value);
                    let sports = parseInt(document.getElementById("sports").value);
                    let toys = parseInt(document.getElementById("toys").value);
                    let travel = parseInt(document.getElementById("travel").value);
                    misc.push(bankfee, creditcard, sports, toys, travel);
                    let miscExpenses = misc.reduce((total, expense) => total + expense, 0);
                    let totalMiscellaneousExpenses = document.getElementById("totalmiscellaneousexpenses");
                    totalMiscellaneousExpenses.innerHTML = miscExpenses;
                            // console.log(bankfee);
                            // console.log(creditcard);
                            // console.log(sports);
                            // console.log(toys);
                            // console.log(travel);
                            // console.log(misc);
                            // console.log(miscExpenses);
                            // console.log(totalMiscellaneousExpenses);            
                        }                                 

// set Total Monthly Expenses
let totalMonthlyExpenses = document.getElementById("te");
function tmeexp() {
    let homeExpenses = home.reduce((total, expense) => total + expense, 0);
    let totalExpenses = health.reduce((total, expense) => total + expense, 0);
    let totalTransExpenses = transpot.reduce((total, expense) => total + expense, 0);
    let totalDailyExpenses = dailyliving.reduce((total, expense) => total + expense, 0);
    let charityExpenses = charity.reduce((total, expense) => total + expense, 0);
    let subscriptionExpenses = subscription.reduce((total, expense) => total + expense, 0);
    let miscExpenses = misc.reduce((total, expense) => total + expense, 0);
    totalMonthlyExpenses.innerHTML =  homeExpenses + totalExpenses + totalTransExpenses + totalDailyExpenses + charityExpenses + subscriptionExpenses + miscExpenses; 
        //  console.log(totalMonthlyExpenses);
             }   

//   set Monthly Saving
function saving() {
    let salary = parseInt(document.getElementById("wages").value);
    let passiveIncome = parseInt(document.getElementById("passiveincome").value);
    let totalBudget = document.getElementById("totalbudget");
    totalBudget.innerHTML = salary + passiveIncome;

    let homeExpenses = home.reduce((total, expense) => total + expense, 0);
    let totalExpenses = health.reduce((total, expense) => total + expense, 0);
    let totalTransExpenses = transpot.reduce((total, expense) => total + expense, 0);
    let totalDailyExpenses = dailyliving.reduce((total, expense) => total + expense, 0);
    let charityExpenses = charity.reduce((total, expense) => total + expense, 0);
    let subscriptionExpenses = subscription.reduce((total, expense) => total + expense, 0);
    let miscExpenses = misc.reduce((total, expense) => total + expense, 0);
    let totalExpenditures = document.getElementById("totalexpenditure");
    totalExpenditures.innerHTML =  homeExpenses + totalExpenses + totalTransExpenses + totalDailyExpenses + charityExpenses + subscriptionExpenses + miscExpenses;
    
    let totalSaving = document.getElementById("totalsavings");
    totalSaving.innerHTML = parseInt(totalBudget.innerHTML) - parseInt(totalExpenditures.innerHTML);
     }
  
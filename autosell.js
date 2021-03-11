function autosell(product, money) {

    var menu = {
       "lime tea"     : 10000,
       "kumquat tea"  : 10000,
       "peach tea"    : 15000,
       "litchi tea"   : 15000,
       "milk tea"     : 20000,
       "strongbow"    : 30000
    };
    
       var charge = money - menu[product]; //Count charge
    
       //Check money and show the result
        if (charge < 0) {
          return "Chua du tien ban ey"; // Not enough money
        } else if (charge == 0) {
          return "Please take your " + product // Enough money
        } else {
            // Money more than the price
          return "Please take your " + product + " and your charge " + charge ;
        }
    
    }
        
    var product ="lime tea"; //Select product
    var money = 20000; // Pay money
    
    
    console.log(autosell(product, money))
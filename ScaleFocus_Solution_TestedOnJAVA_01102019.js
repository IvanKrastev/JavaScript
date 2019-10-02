var input = [{"date" : "Mo", "temp" : -10},
            {"date" : "Tu", "temp" : 7},
            {"date" : "We", "temp" : 5},
            {"date" : "Th", "temp" : 3},
            {"date" : "Fr", "temp" : -1},
            {"date" : "Sa", "temp" : -9},
            {"date" : "Su", "temp" : -4}];

    var counterPositive = -1;
    var deltaPositive = Number.MAX_SAFE_INTEGER;
    var counterNegative = -1;
    var deltaNegative = Number.MAX_SAFE_INTEGER;
    var output;

    for (var i = 0; i < input.length; i++) {
        if (parseInt(input[i].temp) != 0) {
            if (Math.abs(input[i].temp) < Math.abs(deltaPositive)) {
                if (input[i].temp > 0) {
                    deltaPositive = input[i].temp;
                    counterPositive = i;
                }
            }
        }
    }
      for (var i = 0; i < input.length; i++){
        if (parseInt(input[i].temp) != 0){
          if (Math.abs(input[i].temp) < Math.abs(deltaNegative)){
            if (input[i].temp < 0){
              deltaNegative = input[i].temp;
              counterNegative = i;
            }
          }
        }
      }
    if ((counterPositive >= 0) || (counterNegative >= 0)){
      if (Math.abs(deltaPositive) <= Math.abs(deltaNegative)){
         output = input[counterPositive].date;
          return output;
      }else if(Math.abs(deltaPositive) > Math.abs(deltaNegative)){
        output = input[counterNegative].date;
        return output;
      }
    }


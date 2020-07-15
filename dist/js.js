//gets the current selection from the menu and grabs the data from the json file to display the data exmaple.
function selectFunction(){
	let tv = document.getElementById("select").selectedIndex;
    
  obj = JSON.parse(text);

  document.getElementById("name").innerHTML = obj.market[tv].name;
  document.getElementById("price-format").innerHTML = obj.market[tv].priceFormat;
  document.getElementById("contract-size").innerHTML = obj.market[tv].contractSize;
  document.getElementById("min-tick").innerHTML = obj.market[tv].minTick;
  document.getElementById("tick-value").innerHTML = obj.market[tv].tickValue;
  document.getElementById("point-value").innerHTML = obj.market[tv].pointValue;
  document.getElementById("delivery-months").innerHTML = obj.market[tv].deliveryMonths;
}

//gets the user input values and calaculates the results. 

function addNumbers(){

  let tv = document.getElementById("select").selectedIndex; 
  //create this variable to use in the if statement to figure out if it is supposed to be a bearish or bullish calc
  let bullishBearish = document.getElementById("bullish-bearish").selectedIndex;

  obj = JSON.parse(text);

  let entry = parseInt(document.getElementById("entryPrice").value);
  let exit = parseInt(document.getElementById("exitPrice").value);
  let contracts = parseInt(document.getElementById("numContracts").value);
  let mintick = document.getElementById("min-tick").innerHTML = obj.market[tv].minTick;
  let tickvalue = document.getElementById("tick-value").innerHTML = obj. market[tv].tickValue;
  
  if (bullishBearish == 0){
    //bullish = if selectedIndex = 0 (i.e the default 'bullish in select menu) do this
    let exitEntry = exit - entry;

    document.getElementById("ticks").innerHTML = (exitEntry) / mintick * contracts;
    document.getElementById("points").innerHTML = (exitEntry) * contracts;
    document.getElementById("usd").innerHTML = '$' + (exitEntry) / mintick * contracts * tickvalue;
  }else{
    //bearish = if selectedIndex = 1
    let exitEntry = entry - exit;

    document.getElementById("ticks").innerHTML = (exitEntry) / mintick * contracts;
    document.getElementById("points").innerHTML = (exitEntry) * contracts;
    document.getElementById("usd").innerHTML = '$' + (exitEntry) / mintick * contracts * tickvalue;
  }    
}

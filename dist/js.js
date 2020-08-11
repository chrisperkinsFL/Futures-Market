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
  let tickvalue = document.getElementById("tick-value").innerHTML = obj.market[tv].tickValue;
  
  if (bullishBearish == 0){
    //bullish = if selectedIndex = 0 (i.e the default 'bullish in select menu) do this
    let exitEntry = exit - entry;

    //created these const to format the number output with commas for bullish
    const formatter = new Intl.NumberFormat('en');
    const usdBullish = (exitEntry) / mintick * contracts * tickvalue;
    const pointsBullish = exitEntry * contracts;
    const ticksBullish = (exitEntry) / mintick * contracts;

    document.getElementById("ticks").innerHTML = formatter.format(ticksBullish);
    document.getElementById("points").innerHTML = formatter.format(pointsBullish);
    document.getElementById("usd").innerHTML = '$' + formatter.format(usdBullish);
  }else{
    //bearish = if selectedIndex = 1
    let exitEntry = entry - exit;
    
    //created these const to format the number output with commas for bearish
    const formatter = new Intl.NumberFormat('en');
    const usdBearish = (exitEntry) / mintick * contracts * tickvalue;
    const pointsBearish = exitEntry * contracts;
    const ticksBearish = (exitEntry) / mintick * contracts;

    document.getElementById("ticks").innerHTML = formatter.format(ticksBearish);
    document.getElementById("points").innerHTML = formatter.format(pointsBearish);
    document.getElementById("usd").innerHTML = '$' + formatter.format(usdBearish);
  }    
}

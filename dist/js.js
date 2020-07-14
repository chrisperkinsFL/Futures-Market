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
    
  obj = JSON.parse(text);

  let entry = parseInt(document.getElementById("entryPrice").value);
  let exit = parseInt(document.getElementById("exitPrice").value);
  let contracts = parseInt(document.getElementById("numContracts").value);
  let mintick = document.getElementById("min-tick").innerHTML = obj.market[tv].minTick;
  let tickvalue = document.getElementById("tick-value").innerHTML = obj. market[tv].tickValue;

  document.getElementById("ticks").innerHTML = (exit - entry) / mintick * contracts;
  document.getElementById("points").innerHTML = (exit - entry) * contracts;
  document.getElementById("usd").innerHTML = '$' + (exit - entry) / mintick * contracts * tickvalue;
}

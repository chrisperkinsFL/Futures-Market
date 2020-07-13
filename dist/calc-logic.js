function addNumbers(){
  let entry = parseInt(document.getElementById("entryPrice").value);
  let exit = parseInt(document.getElementById("exitPrice").value);
  let contracts = parseInt(document.getElementById("numContracts").value);
  let mintick = parseFloat(document.getElementById("select").value);
  let tickvalue = parseFloat(document.getElementById("tickV").innerText);

  document.getElementById("ticks").innerHTML = (exit - entry) / mintick * contracts;
  document.getElementById("points").innerHTML = (exit - entry) * contracts;
  document.getElementById("usd").innerHTML = '$' + (exit - entry) / mintick * contracts * tickvalue;
}


function minTick(){
  var mt = document.getElementById("select").value;
  document.getElementById("minT").innerHTML = mt;
}

//assigning the tick values, I'd rather do this with names than indexs.
function tickValue(){
 var tv = document.getElementById("select").selectedIndex;
   if(tv === 1 || 2 || 4){
    document.getElementById("tickV").innerHTML = 0.50;
   }
   if(tv === 3){
    document.getElementById("tickV").innerHTML = 1.25;
   }
   if(tv === 5){
    document.getElementById("tickV").innerHTML = 12.50;
   }
   if(tv === 6){
    document.getElementById("tickV").innerHTML = 5;
   }
   if(tv === 7){
    document.getElementById("tickV").innerHTML = 5;
   }
   if(tv === 8){
    document.getElementById("tickV").innerHTML = 5;
   }
   if(tv === 9){
    document.getElementById("tickV").innerHTML = 5;
   }
   if(tv === 10){
    document.getElementById("tickV").innerHTML = .10;
   }
   if(tv === 11){
    document.getElementById("tickV").innerHTML = 25;
   }
}

function selectFunction(){
  minTick();
  tickValue();
}


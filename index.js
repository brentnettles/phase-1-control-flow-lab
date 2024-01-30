function scuberGreetingForFeet(distance) {
  if (distance <= 199){
    return "This one is on me!";
  }
  else if (distance >= 400 && distance <= 2000){
  return "That will be twenty bucks.";
  }
  else if (distance >= 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  if (distance >= 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(location){
  /*if (location = "NYC"){
  return "Ok, sounds good."
  }
  else if (location = "Pittsburg") {
    return "No go."
  }
  if ()*/
return location == "NYC" ? "Ok, sounds good." : "No go."
}

/*const switchOnCharmTip = "generous"
switch (tip) {
  case "generous":
    console.log ("Thank you so much.")
  break
  case 
}*/

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

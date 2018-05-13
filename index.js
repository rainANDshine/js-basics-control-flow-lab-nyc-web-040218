// Write your code in this file!
function scuberGreetingForFeet(ride) {
  let charge;
  if (ride <== 400) {
    charge = 'This one is on me!';
  } else if (ride > 2500) {
      charge = 'No can do.';
  } else if (ride > 2000) {
      charge = 'I will gladly take your thirty bucks.';
  }
  return charge;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
function scuberGreetingForFeet(ride) {
  let charge;
  if (ride <= 400) {
    charge = 'This one is on me!';
  } else if (ride > 2500) {
      charge = 'No can do.';
  } else if (ride > 2000) {
      charge = 'I will gladly take your thirty bucks.';
  }
  return charge;
}


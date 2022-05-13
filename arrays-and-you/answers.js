exports.arrayMultiplier = (array) => {  
  return array.map(num => num * array.length);
}

exports.wordToCodes = (word) => {
  return word.split('').map(letter => letter.charCodeAt(0));
}

exports.playerCounter = (players, letter) => {
  const playerCount = players.filter(player => player.points > 100 || player.isTagged).length;
  const regex = new RegExp(letter, 'gi');
  let letterCount = 0;
  players.forEach(player => {
    letterCount += (player.nickname.match(regex) || []).length;
  });
  return { playerCount, letterCount };
}

exports.invoiceGenerator = (length) => {
  const types = [ "Sales", "Consolidated ", "Timesheet", "Credit ", "Mixed" ]; // Example
  const invoices = [];
  for (let i = 1; i <= length; i++) {
    invoices.push({
      id: i,
      type: types[(i-1) % types.length]
    });
  }
  return invoices;
}

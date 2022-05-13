const { loop } = require('../../helpers/index');
const { playerCounter: answer} = require('../answers');
const { playerCounter: task } = require('../task');

test('Player counter', () => {  
  const players = [];
  const playerCount = Math.floor(Math.random() * 20  + 10);
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

  loop(playerCount, () => {
    players.push({
      nickname: (Math.random() + 1).toString(36).substring(2),
      points: Math.floor(Math.random() * 200),
      isTagged: Math.random() < 0.5,
    });
  });

  expect(task(players, randomCharacter)).toStrictEqual(answer(players, randomCharacter));
});
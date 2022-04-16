// npm test -- conditions/conditions.test.js

/**
 * Input comes. We need to check:
 * Is this a number or string?
 * If it is string, count the number of spaces, upper letters and lower letters.
 * If it is number, discover is it a integer or float, is it even or not.
 * If the number came as string check meta as number
 * If the input is of any other type then return the meta as null
 */

// returnable data for number
const num = {
  isNumber: true, // true/false
  isString: true, // true/false; *can be true for number if raw input was string and has a number only!!! Example: "42" <= is a number and string, "65abc" <= is a string, not a number!
  meta: {
    isInteger: true, // true/false - false mean is a float
    isEven: true, // true/false
  }
}

// returnable data for string
const str = {
  isNumber: false,
  isString: true,
  meta: {
    spaceCount: 5,
    upperCount: 2,
    lowerCount: 10,
  }
}

// returnable data for other types
const other = {
  isNumber: false,
  isString: false,
  meta: null,
}

exports.inputInfo = (input) => {
  let data = {};
  return data;
}

/**
 * Information about the player's shot comes in, you need to calculate how many points he earned and whether he was suspicious.
 * If shot missed return points 0!!! 
 * Add 1 point per hit
 * Add 3 points for killing
 * If a player hits the head, add 5 points to him
 * If the shot was fired through a wall add 5 points
 * If it was an elite opponent multiply all points by 1.2
 * If the shot was made from a pistol and a distance of more than 100 meters, multiply the points by 1.3
 * If the shot was fired from a sniper rifle and the distance is less than 10 meters and the reaction speed is less than 1 second, multiply by 2
 * if the shot was fired from a sniper rifle and a headshot, add 3 points
 * points must be an integer and round up when returned!
 * If the player's score was greater than or equal to 20, then flag the player as suspect
 */

const shotDataExample = {
  isHit: true, // true / false
  meters: 100, // number / null -  null if isHit is false
  wasKilled: true, // true / false
  isHeadShot: true, // true / false
  isThroughWall: true, // true / false
  isOpponentElite: true, // true / false
  reactionSpeed: 1.2, // number / null - null if isHit is false
}

const playerExample = {
  username: "SaintMiner",
  isSuspected: false,
  level: 1,
}

exports.shotDataProcessor = (shotData, player) => {
  points = 0;

  return {points, player};
}
const { inputInfo, shotDataProcessor } = require("./task.js");

test("Input info test", () => {
  testInputInfo();
});

test("Shot data processor test", () => {
  testShotDataProcessor();
});

function testShotDataProcessor() {
  const player = {
    username: "SaintMiner",
    isSuspected: false,
    level: 1,
  };

  expect(shotDataProcessor({
    isHit: false,
    meters: null,
    wasKilled: false,
    isHeadShot: false,
    isThroughWall: false,
    isOpponentElite: false,
    reactionSpeed: null,
    weapon: "pistol",
  }, player)).toStrictEqual({ 
    points: 0,
    player
  });

  expect(shotDataProcessor({
    isHit: true,
    meters: 10.2,
    wasKilled: true,
    isHeadShot: false,
    isThroughWall: false,
    isOpponentElite: true,
    reactionSpeed: 0.8,
    weapon: "pistol",
  }, player)).toStrictEqual({ 
    points: 5,
    player
  });

  expect(shotDataProcessor({
    isHit: true,
    meters: 7,
    wasKilled: false,
    isHeadShot: true,
    isThroughWall: true,
    isOpponentElite: false,
    reactionSpeed: 0.3,
    weapon: "shotgun",
  }, player)).toStrictEqual({ 
    points: 11,
    player
  });

  expect(shotDataProcessor({
    isHit: true,
    meters: 55,
    wasKilled: true,
    isHeadShot: true,
    isThroughWall: false,
    isOpponentElite: true,
    reactionSpeed: 1,
    weapon: "pistol",
  }, player)).toStrictEqual({ 
    points: 11,
    player
  });

  expect(shotDataProcessor({
    isHit: true,
    meters: 2,
    wasKilled: true,
    isHeadShot: true,
    isThroughWall: false,
    isOpponentElite: true,
    reactionSpeed: 0.2,
    weapon: "sniper",
  }, player)).toStrictEqual({ 
    points: 29,
    player: {...player, isSuspected: true},
  });

  expect(shotDataProcessor({
    isHit: true,
    meters: 120,
    wasKilled: false,
    isHeadShot: true,
    isThroughWall: true,
    isOpponentElite: true,
    reactionSpeed: 0.2,
    weapon: "pistol",
  }, player)).toStrictEqual({ 
    points: 17,
    player: player,
  });
}

function testInputInfo() {
  // InputInfo
  expect(inputInfo(2)).toStrictEqual({
    isNumber: true,
    isString: false,
    meta: {
      isInteger: true,
      isEven: true,
    },
  });

  expect(inputInfo("5")).toStrictEqual({
    isNumber: true,
    isString: true,
    meta: {
      isInteger: true,
      isEven: false,
    },
  });

  expect(inputInfo("5.1")).toStrictEqual({
    isNumber: true,
    isString: true,
    meta: {
      isInteger: false,
      isEven: false,
    },
  });

  expect(inputInfo("ABC")).toStrictEqual({
    isNumber: false,
    isString: true,
    meta: {
      spaceCount: 0,
      upperCount: 3,
      lowerCount: 0,
    },
  });

  expect(inputInfo("Hello my name is SaintMiner")).toStrictEqual({
    isNumber: false,
    isString: true,
    meta: {
      spaceCount: 4,
      upperCount: 3,
      lowerCount: 20,
    },
  });

  expect(inputInfo(106.51)).toStrictEqual({
    isNumber: true,
    isString: false,
    meta: {
      isInteger: false,
      isEven: false,
    },
  });

  expect(inputInfo("")).toStrictEqual({
    isNumber: false,
    isString: true,
    meta: {
      spaceCount: 0,
      upperCount: 0,
      lowerCount: 0,
    },
  });

  expect(inputInfo(true)).toStrictEqual({
    isNumber: false,
    isString: false,
    meta: null,
  });

  expect(inputInfo(false)).toStrictEqual({
    isNumber: false,
    isString: false,
    meta: null,
  });

  expect(inputInfo(-5)).toStrictEqual({
    isNumber: true,
    isString: false,
    meta: {
      isInteger: true,
      isEven: false,
    },
  });

  expect(inputInfo(0)).toStrictEqual({
    isNumber: true,
    isString: false,
    meta: {
      isInteger: true,
      isEven: true,
    },
  });
}

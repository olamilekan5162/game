// console.log("Fibonacci sequence");
// const array = [];
// let j = 1;
// let k = 0;
// for (let i = 0; i <= 10; i++) {
//   array.push(j);
//   let m = j + k;
//   k = j;
//   j = m;
// }
// console.log(array);

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => {
    reputation++;
  };

  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => {
    level++;
  };

  const getLevel = () => level;
  return { name, getReputation, giveReputation, increaseLevel, getLevel };
}

const josh = createPlayer("josh", 1);
josh.giveReputation();
josh.giveReputation();
josh.increaseLevel();
josh.increaseLevel();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.name,
  reputation: josh.getReputation(),
  level: josh.getLevel(),
});

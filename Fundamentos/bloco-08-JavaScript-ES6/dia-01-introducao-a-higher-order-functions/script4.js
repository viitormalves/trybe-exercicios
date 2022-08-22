const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const battleMembers = { mage, warrior, dragon };

let round = 0;

const dragonAttack = (dragon) => {
    const min = Math.ceil(15);
    const max = dragon.strength;
        return Math.floor(Math.random() * (max - min + 1) + min);
  };

const warriorAttack = (warrior) => {
    const min = warrior.strength;
    const max = min * (warrior.weaponDmg);
    warrior.damage = Math.floor(Math.random() * (max - min + 1) + min);
    return warrior.damage;
  };

const mageAttack = (mage) => {
    const min = mage.intelligence;
    const max = mage.intelligence * 2;
    let attack = {
        damage: Math.floor(Math.random() * (max - min + 1) + min),
        mana: mage.mana,
    };
    if (mage.mana < 15) {
        mage.mana = 0;
        return `Não possui mana suficiente`
    } return attack
};

const gameActions = {
    warriorRound: (warriorAttack) => {
    const damage = warriorAttack(warrior)
    warrior.damage = damage;
    dragon.healthPoints -= warrior.damage;
    },
    mageRound: (mageAttack) => {
    const attack = mageAttack(mage);
    const damage = attack.damage;
    mage.damage = damage;
    dragon.healthPoints -= damage;
    mage.mana -= 15;
    },
    dragonRound: (dragonAttack) => {
    let damage = dragonAttack(dragon)
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    },
    resultRound: () => battleMembers,
};

gameActions.warriorRound(warriorAttack);
gameActions.mageRound(mageAttack);
gameActions.dragonRound(dragonAttack);

console.log(gameActions.resultRound())
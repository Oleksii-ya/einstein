export const types = {
  color: "color",
  nation: "nation",
  drink: "drink",
  cigar: "cigar",
  animal: "animal"
}

export const attrs = {
  [types.color]: {
    blue: "blue",
    white: "white",
    yellow: "yellow",
    green: "green",
    red: "red"
  },
  [types.nation]: {
    swedish: "swedish",
    dane: "dane",
    english: "english",
    german: "german",
    norwegian: "norwegian"
  },
  [types.drink]: {
    beer: "beer",
    coffee: "coffee",
    tea: "tea",
    water: "water",
    milk: "milk"
  },
  [types.cigar]: {
    dunhill: "dunhill",
    marlboro: "marlboro",
    rothmans: "rothmans",
    pall_mall: "pall mall",
    phillip_morris: "phillip morris"
  },
  [types.animal]: {
    horses: "horses",
    birds: "birds",
    fish: "fish",
    cats: "cats",
    dogs: "dogs"
  }
}

export const inHardData = [
  {
    condition: "Норвежець живе в 1 будинку.",
    ind1: 0,
    attr2: { type: types.nation, val: attrs.nation.norwegian }
  },
  {
    condition: "Той, хто живе в центральному будинку, п'є молоко.",
    ind1: 2,
    attr2: { type: types.drink, val: attrs.drink.milk }
  }
]

export const inData = [
  {
    condition: "Англієць живе в червоному будинку.",
    attr1: { type: types.nation, val: attrs.nation.english },
    attr2: { type: types.color, val: attrs.color.red }
  },
  {
    condition: "Данець п'є чай.",
    attr1: { type: types.nation, val: attrs.nation.dane },
    attr2: { type: types.drink, val: attrs.drink.tea }
  },
  {
    condition: "Той, хто живе в жовтому будинку, курить Dunhill.",
    attr1: { type: types.color, val: attrs.color.yellow },
    attr2: { type: types.cigar, val: attrs.cigar.dunhill }
  },
  {
    condition: "Німець курить Marlboro.",
    attr1: { type: types.nation, val: attrs.nation.german },
    attr2: { type: types.cigar, val: attrs.cigar.marlboro }
  },
  {
    condition: "Той, хто курить Pall Mall, розводить пташок.",
    attr1: { type: types.cigar, val: attrs.cigar.pall_mall },
    attr2: { type: types.animal, val: attrs.animal.birds }
  },
  {
    condition: "Швед розводить собак.",
    attr1: { type: types.nation, val: attrs.nation.swedish },
    attr2: { type: types.animal, val: attrs.animal.dogs }
  },
  {
    condition: "Той, хто розводить коней, живе в синьому будинку.",
    attr1: { type: types.animal, val: attrs.animal.horses },
    attr2: { type: types.color, val: attrs.color.blue }
  },
  {
    condition: "Той, хто курить Phillip Morris, п'є пиво.",
    attr1: { type: types.cigar, val: attrs.cigar.phillip_morris },
    attr2: { type: types.drink, val: attrs.drink.beer }
  },
  {
    condition: "В зеленому будинку п'ють каву.",
    attr1: { type: types.color, val: attrs.color.green },
    attr2: { type: types.drink, val: attrs.drink.coffee }
  },
]

export const leftHouseData = [
  {
    condition: "Зелений будинок перший зліва від білого.",
    green: { type: types.color, val: attrs.color.green },
    white: { type: types.color, val: attrs.color.white }
  }
]

export const nearHouseData = [
  {
    condition: "Той, хто курить Rothmans, живе біля того, хто розводить котів.",
    attr1: { type: types.cigar, val: attrs.cigar.rothmans },
    attr2: { type: types.animal, val: attrs.animal.cats }
  },
  {
    condition: "Сусід того, хто курить Rothmans, п'є воду.",
    attr1: { type: types.cigar, val: attrs.cigar.rothmans },
    attr2: { type: types.drink, val: attrs.drink.water }
  },
  {
    condition: "Норвежець живе біля синього будинку.",
    attr1: { type: types.nation, val: attrs.nation.norwegian },
    attr2: { type: types.color, val: attrs.color.blue }
  }
]
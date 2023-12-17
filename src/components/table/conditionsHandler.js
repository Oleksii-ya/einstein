import { inHardData } from "./data"
import { inData } from "./data"
import { leftHouseData } from "./data"
import { nearHouseData } from "./data"

// returns the index of the attribute or -1
const findIndex = (st, type, att) => {
  return st.findIndex((item) => item[type] === att)
}

const inHardChecker = (st, inObj) => {
  const { ind1 } = inObj
  const type2 = inObj.attr2.type
  const val2 = inObj.attr2.val
  const ind2 = findIndex(st, type2, val2)

  const errObj = { err: true, text: inObj.condition }
  const okObj = { err: false, text: inObj.condition }

  if (ind2 !== -1) {
    return ind1 === ind2 ? null : errObj
  }
  return st[ind1][type2] ? errObj : okObj
}

const inChecker = (st, inObj) => {
  const type1 = inObj.attr1.type
  const val1 = inObj.attr1.val
  const type2 = inObj.attr2.type
  const val2 = inObj.attr2.val
  const ind1 = findIndex(st, type1, val1)
  const ind2 = findIndex(st, type2, val2)

  const errObj = { err: true, text: inObj.condition }
  const okObj = { err: false, text: inObj.condition }

  if (ind1 === -1 && ind2 === -1) {
    return okObj
  }
  if (ind1 !== -1 && ind2 !== -1) {
    return ind1 === ind2 ? null : errObj
  }
  if (ind1 !== -1) {
    return st[ind1][type2] ? errObj : okObj
  }
  return st[ind2][type1] ? errObj : okObj
}

const leftHouseChecker = (st, inObj) => {
  const type = inObj.green.type
  const valGreen = inObj.green.val
  const valWhite = inObj.white.val
  const indGreen = findIndex(st, type, valGreen)
  const indWhite = findIndex(st, type, valWhite)

  const errObj = { err: true, text: inObj.condition }
  const okObj = { err: false, text: inObj.condition }

  if (indGreen === -1 & indWhite === -1) {
    return okObj
  }

  if (indGreen !== -1 & indWhite !== -1) {
    return indGreen === indWhite - 1 ? null : errObj
  }

  if (indGreen === 4 || indWhite === 0) {
    return errObj
  }

  if (indGreen !== -1) {
    return st[indGreen + 1][type] ? errObj : okObj
  }

  return st[indWhite - 1][type] ? errObj : okObj
}

const nearHouseChecker = (st, inObj) => {
  const type1 = inObj.attr1.type
  const val1 = inObj.attr1.val
  const type2 = inObj.attr2.type
  const val2 = inObj.attr2.val
  const ind1 = findIndex(st, type1, val1)
  const ind2 = findIndex(st, type2, val2)

  const errObj = { err: true, text: inObj.condition }
  const okObj = { err: false, text: inObj.condition }

  if (ind1 === -1 && ind2 === -1) {
    return okObj
  }
  if (ind1 !== -1 && ind2 !== -1) {
    return Math.abs(ind1 - ind2) !== 1 ? errObj : null
  }
  if (ind1 === 0) {
    return st[ind1 + 1][type2] ? errObj : okObj
  }
  if (ind1 === 4) {
    return st[ind1 - 1][type2] ? errObj : okObj
  }
  if (ind1 !== -1) {
    return st[ind1 + 1][type2] && st[ind1 - 1][type2] ? errObj : okObj
  }
  if (ind2 === 0) {
    return st[ind2 + 1][type1] ? errObj : okObj
  }
  if (ind2 === 4) {
    return st[ind2 - 1][type1] ? errObj : okObj
  }
  return st[ind2 + 1][type1] && st[ind2 - 1][type1] ? errObj : okObj
}

export default (st) => {
  const conditions = []

  const runCheckers = (arrCon, foo) => {
    arrCon.forEach((inObj) => {
      const condition = foo(st, inObj)
      if (condition) {
        conditions.push(condition)
      }
    })
  }

  runCheckers(inHardData, inHardChecker)
  runCheckers(inData, inChecker)
  runCheckers(leftHouseData, leftHouseChecker)
  runCheckers(nearHouseData, nearHouseChecker)

  return conditions
}
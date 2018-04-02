import {
  curry,
  chain,
  toPairs,
  fromPairs,
  flip,
  concat,
  contains,
  map,
  replace,
  pipe,
  always,
  ifElse,
  equals,
  cond,
  when
} from 'ramda/es'

import {
  renameKeysWith
} from 'ramda-adjunct/es'

export {
  curry,
  chain,
  toPairs,
  fromPairs,
  flip,
  concat,
  contains,
  map,
  replace,
  renameKeysWith,
  pipe,
  always,
  ifElse,
  equals,
  cond,
  when
}

export const camelToKebab = str => str
  .split(/(?=[A-Z])/)
  .map(s => s.toLowerCase())
  .join('-')
export const px = num => `${num}px`
export const flattenObj = obj => {
  const go = obj_ => chain(([k, v]) => {
    if (Object.prototype.toString.call(v) === '[object Object]') {
      return map(([k_, v_]) => [`${k}.${k_}`, v_], go(v))
    } else {
      return [[k, v]]
    }
  }, toPairs(obj_))

  return fromPairs(go(obj))
}
export const appendStr = flip(concat)
export const inList = flip(contains)
export const toCssVars = pipe(
  flattenObj,
  renameKeysWith(camelToKebab),
  renameKeysWith(replace('.', '--')),
  renameKeysWith(concat('--m-'))
)
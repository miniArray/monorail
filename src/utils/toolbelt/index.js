import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
const px = num => `${num}px`

export default {
  ...R,
  ...RA,
  appendStr: R.flip(R.concat),
  inList: R.flip(R.contains),
  px
}
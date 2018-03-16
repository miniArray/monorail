import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

export default {
  ...R,
  ...RA,
  appendStr: R.flip(R.concat),
  inList: R.flip(R.contains)
}
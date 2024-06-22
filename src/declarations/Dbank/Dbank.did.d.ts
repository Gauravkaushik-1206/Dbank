import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkbalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'toUp' : (arg_0: number) => Promise<undefined>,
  'withdraw' : (arg_0: number) => Promise<undefined>,
}

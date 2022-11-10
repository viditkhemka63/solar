import { TILES } from '@/constants';

/*
  n height
  m width

  r1 min tiles in first alignment
  r2 min tiles in second alignment


*/

export function Solve(n: number, m: number) {
  // console.log(m, n);
  if (n <= 0 || m <= 0) {
    return 0;
  }

  for (let i = 0; i < TILES.length; i += 1) {
    const x = TILES[i][0];
    const y = TILES[i][1];

    // console.log('x', x);

    if ((n === x && m === y) || (n === y && m === x)) {
      return 1;
    }
  }

  let r1 = Number.POSITIVE_INFINITY;
  let r2 = Number.POSITIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  // console.log('Start');
  // const minMatrix = null;

  for (let i = 0; i < TILES.length; i += 1) {
    const x = TILES[i][0];
    const y = TILES[i][1];

    if (x <= Math.min(n, m) && y <= Math.min(n, m)) {
      r1 = Math.min(
        Solve(n, m - x) + Solve(n - y, x),
        Solve(n, m - y) + Solve(n - x, y)
      );

      r2 = Math.min(
        Solve(y, m - x) + Solve(n - y, m),
        Solve(x, m - y) + Solve(n - x, m)
      );

      min = Math.min(r1, Math.min(r2, min));
    }
  }

  return min + 1;
}

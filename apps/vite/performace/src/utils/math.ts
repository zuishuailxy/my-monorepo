// math.js
interface AddParams {
  a: number;
  b: number;
}

export const add = ({ a, b }: AddParams): number => a + b;
export const divide = (a: number, b: number): number => a / b;

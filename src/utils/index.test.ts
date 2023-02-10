import { addTwo } from '.';

describe('utils unit test', () => {
  it('add two numbers', () => {
    const sum = addTwo(100, 1);
    expect(sum).toBe(101);
  });
});

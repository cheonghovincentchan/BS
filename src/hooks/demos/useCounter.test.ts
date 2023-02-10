/**
 * @jest-environment jsdom
 * hooks unit testing api refs https://react-hooks-testing-library.com/reference/api
 */

import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

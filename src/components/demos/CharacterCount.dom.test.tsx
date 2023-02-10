/**
 * @jest-environment jsdom
 * component dom unit testing api refs https://jestjs.io/docs/tutorial-react#dom-testing
 */
import { cleanup, render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './CharacterCounter';

describe('CharaterCount dom unit test', () => {
  afterEach(cleanup);

  it('TextInput unit test', () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>,
    );
    expect((getByTestId('text-input') as HTMLInputElement).value).toBe('');
    fireEvent.change(getByTestId('text-input') as HTMLInputElement, { target: { value: 'new value' } });
    expect((getByTestId('text-input') as HTMLInputElement).value).toBe('new value');
    expect((getByTestId('text-show') as HTMLSpanElement).textContent).toBe('Character Count: 9');
  });
});

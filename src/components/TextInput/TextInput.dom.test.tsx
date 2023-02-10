/**
 * @jest-environment jsdom
 * component dom unit testing api refs https://jestjs.io/docs/tutorial-react#dom-testing
 */
import { cleanup, render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('CharaterCount dom unit test', () => {
  afterEach(cleanup);

  it('TextInput unit test', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder="text-input" />);

    const getInputEle = () => getByPlaceholderText('text-input') as HTMLInputElement;

    expect(getInputEle().value).toBe('');
    fireEvent.change(getInputEle(), { target: { value: 'new value' } });
    expect(getInputEle().value).toBe('new value');
  });
});

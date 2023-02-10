import textState, { charCountState } from '@states/demo';
import { useRecoilValue, useRecoilState } from 'recoil';
import React from 'react';
import { Button, DatePicker } from 'antd';

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <span data-testid="text-show">Character Count: {count}</span>;
}

export function TextInputDemo() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: { target: { value: string | ((currVal: string) => string) } }) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input data-testid="text-input" type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <>
        <Button type="primary">PRESS ME</Button>
        <DatePicker placeholder="select date" />
      </>
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div>
      <TextInputDemo test-id="text-input" />
      <CharacterCount />
    </div>
  );
}

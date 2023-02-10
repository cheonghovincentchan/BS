import { useRef, useState } from 'react';
import './inputOpt.css';
import classNames from 'classnames';
const PIN_LENGTH = 4;
const KEYCODE = Object.freeze({
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  END: 35,
  HOME: 36,
  SPACE: 32,
});
type InputOtpProps = {
  getValue?: (val: string) => void;
};
export default function InputOtp(props: InputOtpProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value || '';
    setValue(val);
    props.getValue?.(val);
  };
  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.keyCode) {
      case KEYCODE.LEFT_ARROW:
      case KEYCODE.RIGHT_ARROW:
      case KEYCODE.HOME:
      case KEYCODE.END:
      case KEYCODE.SPACE:
        e.preventDefault();
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={
        'container w-[8.816rem] h-[1.159rem] outline-none border-[#D5D4DC] border-[0.04rem] rounded-[0.193rem] bg-white'
      }
    >
      <input
        className={'hiddenInput'}
        ref={inputRef}
        type="number"
        pattern="\d*"
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        maxLength={PIN_LENGTH}
      />
      {Array.from({ length: PIN_LENGTH }).map((_, index) => {
        return (
          <input
            className={classNames(value[index] ? 'border-none mt-[0.241rem]' : 'border-solid', 'pinInput')}
            key={index}
            value={value[index] || ''}
            readOnly={true}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}

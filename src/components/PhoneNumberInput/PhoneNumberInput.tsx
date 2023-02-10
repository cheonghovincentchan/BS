import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import { useMemoizedFn } from 'ahooks';

import classNames from 'classnames';

import { isValidPhoneNumber } from 'libphonenumber-js';

type PhoneNumberInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  onIsValidChange?: (v: boolean) => void;
  style?: {
    width: string;
  };
};
export default function PhoneNumberInput(props: PhoneNumberInputProps) {
  const [isValid, setValid] = useState(false);
  const isValidNumber = useMemoizedFn((val: string) => {
    if (val && isValidPhoneNumber(val)) {
      setValid(true);
      props.onIsValidChange?.(true);
    } else {
      setValid(false);
      props.onIsValidChange?.(false);
    }
    props.onChange?.(val || '');
  });
  return (
    <div>
      <div
        className={classNames(
          isValid || props.value === '' ? 'bg-[#ffffff] border-[#D5D4DC]' : 'bg-[#FBEFEF] border-[#C83532]',
          'rounded-[0.192rem] w-[7.9rem] text-[0.386rem] h-[1.15rem] flex items-center justify-center border-[0.04rem] ',
        )}
        style={props.style}
      >
        <PhoneInput
          value={props.value}
          numberInputProps={{ className: 'bg-[#00000000] outline-0 text-[0.386rem] w-[6rem]' }}
          international
          defaultCountry="CN"
          onChange={isValidNumber}
        />
      </div>
    </div>
  );
}

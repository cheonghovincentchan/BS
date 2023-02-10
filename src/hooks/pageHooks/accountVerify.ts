import { isEmail } from '@utils/index';
import { RadioChangeEvent } from 'antd';
import { useMemo, useState } from 'react';
import { useMemoizedFn } from 'ahooks';

export function usePhoneNumberVerify() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  return {
    phoneNumber,
    setPhoneNumber,
    isPhoneNumberValid,
    handleIsPhoneNumberValidChange: setIsPhoneNumberValid,
  };
}

export function useEmailVerify() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newEmail = e.target.value;
    setIsEmailValid(isEmail(newEmail));
    setEmail(newEmail);
  };

  return {
    email,
    setEmail,
    isEmailValid,
    handleEmailChange,
  };
}

export function useAccoutVerify() {
  const { phoneNumber, setPhoneNumber, isPhoneNumberValid, handleIsPhoneNumberValidChange } = usePhoneNumberVerify();

  const { email, setEmail, isEmailValid, handleEmailChange } = useEmailVerify();

  const [accountType, setAccountType] = useState<'phoneNumber' | 'Email'>('phoneNumber');

  const handleAccountTypeChange = useMemoizedFn((e: RadioChangeEvent) => {
    setAccountType(e.target.value);
    if (e.target.value === 'phoneNumber') {
      setEmail('');
    } else {
      setPhoneNumber('');
    }
  });
  const continueDisabled = useMemo(() => {
    if (accountType === 'Email') {
      return true;
    }
    return !isPhoneNumberValid;
  }, [accountType, isPhoneNumberValid]);
  return {
    accountType,
    handleAccountTypeChange,
    email,
    phoneNumber,
    isEmailValid,
    handleEmailChange,
    isPhoneNumberValid,
    handleIsPhoneNumberValidChange,
    continueDisabled,
    setPhoneNumber,
  };
}

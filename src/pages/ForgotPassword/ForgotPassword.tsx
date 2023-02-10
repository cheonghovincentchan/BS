import PhoneNumberInput from '@components/PhoneNumberInput/PhoneNumberInput';
import TextInput from '@components/TextInput/TextInput';

import { Radio, Button } from 'antd';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccoutVerify } from 'src/hooks/pageHooks/accountVerify';

const ForgotPassword: React.FC = () => {
  const {
    accountType,
    handleAccountTypeChange,
    email,
    phoneNumber,
    isEmailValid,
    handleEmailChange,
    handleIsPhoneNumberValidChange,
    continueDisabled,
    setPhoneNumber,
  } = useAccoutVerify();

  const isEmailShouldShowError = useMemo(() => {
    if (accountType === 'Email' && !isEmailValid && email !== '') {
      return true;
    }
    return false;
  }, [accountType, email, isEmailValid]);

  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full flex justify-center  opacity-80 flex-col"
      style={{
        background: '#f0fffe',
        padding: '0 0.5854rem',
      }}
    >
      <p className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto">Forgot Password</p>
      <p className="text-[0.338rem] text-[#1D1D1D] m-auto mt-[0.65rem] mb-[0.314rem]">
        Select which contact details should we use to reset your password, we will send you the username and a 4-digit
        verification code
      </p>
      <Radio.Group onChange={handleAccountTypeChange} buttonStyle="solid" value={accountType}>
        <Radio value="phoneNumber">via sms</Radio>
        <div className="pl-[0.6rem] mt-[0.362rem] mb-[0.676rem]">
          <PhoneNumberInput
            value={phoneNumber}
            onChange={setPhoneNumber}
            onIsValidChange={handleIsPhoneNumberValidChange}
          />
        </div>

        <Radio value="Email">via email, or enter your username</Radio>
        <div className="pl-[0.6rem] mt-[0.362rem] mb-[0.676rem]">
          <TextInput
            status={isEmailShouldShowError ? 'error' : undefined}
            value={email}
            onChange={handleEmailChange}
            placeholder="Email/Username"
          />
        </div>
      </Radio.Group>
      <Button
        className="h-[1.2rem] text-[#ffffff] text-[0.386rem]"
        style={{
          backgroundImage: continueDisabled ? 'none' : 'linear-gradient(91.08deg, #A7DC4D 0%, #2DBDB6 100%)',
        }}
        type="primary"
        disabled={continueDisabled}
        onClick={() => navigate(`/checkVerifyCode/${accountType}`)}
      >
        Continue
      </Button>
      <span className="text-[0.242rem] mt-[0.6rem] text-[#1D1D1D] m-auto">
        *Message and data rates may apply to the text messages we send to the phone number you provided.
      </span>
    </div>
  );
};

export default ForgotPassword;

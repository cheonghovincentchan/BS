import InputOtp from '@components/InputOpt/InputOpt';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { StringObj } from 'types/types';

const accountTypeText: StringObj = {
  email: 'Email',
  phoneNumber: 'SMS',
};

const CheckVerifyCode: React.FC = () => {
  const accountType = useParams().accountType;
  return (
    <div
      className="w-full h-full flex justify-center  opacity-80 flex-col"
      style={{
        background: '#f0fffe',
        padding: '0 0.5854rem',
      }}
    >
      <p className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto">
        Check Your {accountType && accountTypeText[accountType]}
      </p>
      <p className="text-[0.338rem] text-[#1D1D1D] m-auto mt-[0.65rem] mb-[0.314rem]">
        A 4 digit verification code has been sent to +852 ****2521. Please enter it to verify your phone number. You
        have 5 attempts.
      </p>
      <section className="mb-[1.04rem] mt-[0.3rem]">
        <p className="text-[0.44rem] text-center">Verification code</p>
        <InputOtp />
      </section>
      <Button
        className="h-[1.2rem]"
        style={{
          backgroundImage: 'linear-gradient(91.08deg, #A7DC4D 0%, #2DBDB6 100%)',
        }}
        type="primary"
      >
        Continue
      </Button>
      <p className="text-[#2DBDB6] text-center text-[0.386rem] mt-[0.821rem]">Resend Code</p>
      <p className="mt-[5.748rem] text-center text-[0.386rem] ">
        <span className="text-[#2DBDB6]">Back</span> to previous page
      </p>
    </div>
  );
};

export default CheckVerifyCode;

import InputOtp from '@components/InputOpt/InputOpt';
import { Button } from 'antd';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { message } from 'antd';

const Verify: React.FC = () => {
  // let params = useParams();
  const location = useLocation();
  const [method, setMethod] = useState<any | null>('');
  const navigate = useNavigate();

  const getMethodParam = (urlLocation: any) => {
    let arrObj = `www.${urlLocation.search}`.split('?');
    const val = arrObj[1].split('=');
    return val[1];
  };

  const getValue = (val: any) => {
    if (val.length === 4) {
      // 点击按钮
      message.success('The verification code is correct');
      setTimeout(() => {
        navigate('/verifySuccess');
      }, 1000);
    }
  };

  useEffect(() => {
    const res = getMethodParam(location);
    setMethod(res);
  }, [location]);

  return (
    <div
      className="w-full h-full flex justify-center  opacity-80 flex-col"
      style={{
        background: '#f0fffe',
        padding: '0 0.5854rem',
      }}
    >
      <p className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto">
        {method === 'email' ? 'Check Your Email ' : 'Check Your SMS '}
      </p>
      <p className="text-[0.338rem] text-[#1D1D1D] m-auto mt-[0.65rem] mb-[0.314rem]">
        {method === 'email'
          ? 'A 4 digit OTP has been sent to testing@ph******.com. Please enter it to verify your Email. You have 5 attempts.'
          : 'A 4 digit verification code has been sent to +852 ****2521. Please enter it to verify your phone number. You have 5 attempts.'}
      </p>
      <section className="mb-[1.04rem] mt-[0.3rem]">
        <p className="text-[0.44rem] text-center">Verification code</p>
        <InputOtp getValue={getValue} />
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

export default Verify;

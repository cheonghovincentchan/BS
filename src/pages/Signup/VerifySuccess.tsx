import React from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import correct from '../../images/correct.svg';
import BaseButton from '@components/BaseButton/BaseButton';

const style: any = {
  container: {
    background: '#f0fffe',
    padding: '0 0.5854rem',
  },
};

const VerifySuccess: React.FC = () => {
  const navigate = useNavigate();
  // 点击按钮
  const clickButton = () => {
    // TODO 为用户添加登录信息
    message.success('Turn to the booking page');
    setTimeout(() => {
      navigate('/booking');
    }, 1000);
  };

  return (
    <div className="w-full h-full flex justify-center  opacity-80 flex-col" style={style.container}>
      <img src={correct} alt="frame" className="object-cover w-[0.9756rem] m-[auto] mt-[3.0976rem] mb-[0.4878rem]" />
      <div className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto  mb-[1.4634rem]">Thank You</div>
      <div className="font-[700] text-[0.3902rem] text-[#1D1D1D] leading-[0.5122rem] mb-[1rem]">
        We have sent you a confirmation email. You may now start booking with your Email / Phone number.
      </div>
      {/* <div className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto  mb-[1.4634rem]">signed up.</div> */}
      {/* <Button onClick={clickButton} type="primary" danger>
         (5)
      </Button> */}
      <BaseButton
        onClick={clickButton}
        htmlType="submit"
        buttonClassName="w-full mt-[0.4878rem] mb-[0.1951rem]"
        value={'Go to booking'}
        status={'default'}
        width="100%"
      ></BaseButton>
    </div>
  );
};

export default VerifySuccess;

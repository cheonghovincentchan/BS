import React from 'react';
import { Form } from 'antd';
import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
// TODO checkbox需要再看一下

import PasswordInput from '@components/PasswordInput/PasswordInput';
import BaseButton from '@components/BaseButton/BaseButton';

const style: any = {
  container: {
    background: '#f0fffe',
    padding: '0 0.5854rem',
  },
};

const ResetPassword: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center  opacity-80 flex-col" style={style.container}>
      <div className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto">Reset Password</div>

      <Form
        name="normal_login"
        className="w-[100%]"
        initialValues={{
          remember: true,
        }}
      >
        <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[0.3171rem] mb-[0.1951rem]">Password</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter the password',
            },
            { min: 6, message: 'Login password must be at least 6 digits' },
            {
              max: 20,
              message: 'Login password cannot be greater than 20 digits',
            },
          ]}
        >
          <PasswordInput placeholder="Password" width={'100%'}></PasswordInput>
        </Form.Item>

        <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[0.3171rem] mb-[0.1951rem]">Confirm Password</div>
        <Form.Item
          name="confirm"
          // label="二次确认新密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your new password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords are inconsistent!'));
              },
            }),
          ]}
        >
          <PasswordInput placeholder="Re-enter your password to confirm" width={'100%'}></PasswordInput>
        </Form.Item>

        <Form.Item>
          <BaseButton
            // onClick={()=>}
            htmlType="submit"
            buttonClassName="w-full"
            value={'submit'}
            status={'default'}
            width="100%"
          ></BaseButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;

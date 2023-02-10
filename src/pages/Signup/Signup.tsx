import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Form, Spin, message, Radio, Checkbox } from 'antd';
import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
// TODO checkbox需要再看一下
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import TextInput, { TextInputStatus } from '@components/TextInput/TextInput';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import BaseButton from '@components/BaseButton/BaseButton';
import PhoneNumberInput from '@components/PhoneNumberInput/PhoneNumberInput';
import { isEmail } from '@utils/index';

interface IFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const style: any = {
  container: {
    background: '#f0fffe',
    padding: '0 0.5854rem',
  },
};

// TODO 注册phone的逻辑还没做【还需要再看一下如何处理】
const SignUp: React.FC = () => {
  const navigate = useNavigate();

  // method的值为’email‘ 或者’phone‘
  const [method, setMethod] = useState('email');
  // const [phoneValue, setPhoneValue] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  // Email / Username表单的样式
  //  TODO 到时候全局替换
  const [euInputObj, setEuInputObj] = useState<{
    helpText: string;
    status: TextInputStatus;
  }>({
    helpText: '',
    status: undefined,
  });
  const { helpText, status } = euInputObj;

  // 当Email / Username表单的内容改变时
  const euInputChange = (e: any) => {
    const inputValue = e.target.value;
    if (isEmail(inputValue)) {
      setEuInputObj({
        helpText: 'correct',
        status: 'success',
      });
    } else {
      setEuInputObj({
        helpText: 'email error',
        status: 'error',
      });
    }
  };

  // 当method改变时
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setMethod(e.target.value);
    // 设置为初始值
    // setPhoneValue('+86');
  };
  // 登录
  const onFinish = (values: IFormValues) => {
    // TODO 先执行email的逻辑
    if (values.password != null) {
      message.success(`go to verify your ${method}`);
      // message.success(t('login.success'));
      setLoading(true);
      setTimeout(() => {
        // TODO 携带url参数过去，从而确定是手机还是验证码
        navigate(`/verify?method=${method}`);
        // configStore.crumbItem();
        setLoading(false);
      }, 1000);
    } else {
      message.error('login.error');
      // message.error(t('login.error'));
    }
  };

  const onBoxChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="w-full h-full flex justify-center  opacity-80 flex-col" style={style.container}>
      <div className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto">Sign Up</div>
      <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[1.0732rem] mb-[0.439rem]">
        Choose Sign Up method
      </div>
      <Radio.Group onChange={onChange} value={method}>
        <Radio value={'email'}>Email</Radio>
        <Radio value={'phone'}>Phone</Radio>
      </Radio.Group>
      {/* Login Form */}
      <Spin spinning={loading}>
        <Form
          name="normal_login"
          className="w-[100%]"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[1.0732rem] mb-[0.1951rem]">
            {method === 'email' ? 'Email' : 'Phone number'}
          </div>
          {method === 'email' ? (
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please enter Email / Username',
                },
              ]}
            >
              {/* 替换Input */}
              <TextInput
                placeholder="Email"
                width={'100%'}
                helpText={helpText}
                status={status}
                onChange={euInputChange}
              ></TextInput>
            </Form.Item>
          ) : (
            <PhoneNumberInput style={{ width: '100%' }} />
            // <PhoneInput
            //   international
            //   defaultCountry="CN"
            //   value={phoneValue}
            //   onChange={(val) => {
            //     console.log(val);
            //     setPhoneValue(val);
            //   }}
            // />
          )}

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

          <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[0.3171rem] mb-[0.1951rem]">
            Confirm Password
          </div>
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
              value={'Sign up'}
              status={'default'}
              width="100%"
            ></BaseButton>
          </Form.Item>

          <div className="flex">
            {/* TODO 需要再调整一下UI*/}
            {/* TODO 可能需要调整一下样式 */}
            {/* 圆形+颜色换成固定颜色 */}
            <Checkbox onChange={onBoxChange}></Checkbox>
            <div className="font-[400] text-[0.3415rem] text-[#2D3748] ml-[0.1951rem]">
              I have read and agreed to the
              <a href="/tos">
                <a className="text-[#2DBDB6]">&nbsp;{'Terms and Conditions'}</a>
              </a>
              &nbsp;{'and'}&nbsp;
              <a href="/privacy">
                <a className="text-[#2DBDB6]">{'Privacy policy'}</a>
              </a>
            </div>
          </div>

          {/* <a className='flex justify-center font-[500] text-[0.3902rem] text-[#2DBDB6]' onClick={() =>
            navigate('/forgot')
          }>{'Forgot password?'}</a> */}
          <div className="flex justify-center font-[500] text-[0.3902rem] mb-[1.0732rem] mt-[0.878rem]">
            <div className="text-[#1D1D1D]">{'Already an INDICAID memeber? '}</div>
            <a
              className="font-[500] text-[0.3902rem] text-[#2DBDB6] ml-[0.1951rem]"
              style={{ color: '#2DBDB6' }}
              onClick={() => navigate('/login')}
            >
              {'Login'}
            </a>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default SignUp;

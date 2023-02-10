import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Form, Spin, message, Radio } from 'antd';
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';

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

const Login: React.FC = () => {
  // method的值为’p‘ 或者’eu‘
  const [method, setMethod] = useState('p');
  // const [phoneValue, setPhoneValue] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  // Email / Username表单的样式
  const [euInputObj, setEuInputObj] = useState<{
    helpText: string;
    status: TextInputStatus;
  }>({
    helpText: '',
    status: undefined,
  });
  const { helpText, status } = euInputObj;

  const navigate = useNavigate();
  // 当Email / Username表单的内容改变时
  const euInputChange = (e: any) => {
    const inputValue = e.target.value;
    console.log(inputValue.indexOf('@') != -1, 'inputValue.indexOf(@) != -1');
    // 代表不是用户名，是邮箱
    if (inputValue.indexOf('@') != -1) {
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
    } else {
      // 输入的是用户名，不展示消息内容
      setEuInputObj({
        helpText: '',
        status: undefined,
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
    // values.username == 'admin' && values.password == '123456'
    if (values.password != null) {
      message.success('login.success');
      setLoading(true);
      setTimeout(() => {
        navigate('/');
        setLoading(false);
      }, 1000);
    } else {
      message.error('login.error');
    }
  };
  return (
    <div className="w-full h-full flex justify-center  opacity-80 flex-col" style={style.container}>
      <div className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto mt-[0.9756rem] mb-[1.0732rem]">Login</div>
      <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mb-[0.439rem]">Choose login method</div>
      <Radio.Group onChange={onChange} value={method}>
        <Radio value={'p'}>Phone</Radio>
        <Radio value={'eu'}>Email / Username</Radio>
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
          <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[0.9756rem] mb-[0.1951rem]">
            {method === 'eu' ? 'Email / Username' : 'Phone number'}
          </div>
          {method === 'eu' ? (
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please enter Email / Username',
                },
              ]}
            >
              <TextInput
                placeholder="Email / Username"
                width={'100%'}
                helpText={helpText}
                status={status}
                onChange={euInputChange}
              ></TextInput>
            </Form.Item>
          ) : (
            <PhoneNumberInput style={{ width: '100%' }} />
          )}
          <div className="font-[600] text-[0.3902rem] text-[#1D1D1D] mt-[0.6585rem] mb-[0.1951rem]">Password</div>
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

          <Form.Item>
            <BaseButton
              htmlType="submit"
              buttonClassName="w-full mt-[0.4878rem] mb-[0.1951rem]"
              value={'Login'}
              status={'default'}
              width="100%"
            ></BaseButton>
          </Form.Item>

          <a
            className="flex justify-center font-[500] text-[0.3902rem] text-[#2DBDB6]"
            onClick={() => navigate('/forgotpassword')}
          >
            {'Forgot password?'}
          </a>
          <div className="flex justify-center font-[500] text-[0.3902rem] mb-[1.0732rem]">
            <div className="text-[#1D1D1D]">{'Not an INDICAID member? '}</div>
            <a
              className="font-[500] text-[0.3902rem] text-[#2DBDB6] ml-[0.1951rem]"
              style={{ color: '#2DBDB6' }}
              onClick={() => navigate('/signup')}
            >
              {'Sign up'}
            </a>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default Login;

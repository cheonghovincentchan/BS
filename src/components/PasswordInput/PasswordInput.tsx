import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import { Input } from 'antd';
const borderColor = {
  default: '#D5D4DC',
  warning: '#EF8943',
  error: '#C83532',
  success: '#2BAC47',
};
const bgColor = {
  default: '#ffffff',
  warning: '#FDF3EC',
  error: '#FBEFEF',
  success: '#F1F8F2',
};
export type PasswordInputStatus = 'error' | 'warning' | 'success' | undefined;
type PasswordInputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: number | string;
  status?: PasswordInputStatus;
  placeholder?: string;
  disable?: boolean;
  helpText?: string;
};

export default function PasswordInput(props: PasswordInputProps = {}) {
  const width = props.width || '7.9rem';

  const renderHelpTextIcon = () => {
    if (!props.helpText || !props.status) {
      return null;
    }
    if (props.status === 'success') {
      return (
        <CheckCircleFilled
          style={{
            color: borderColor[props.status],
            width: '0.32rem',
          }}
        />
      );
    } else {
      return (
        <ExclamationCircleFilled
          style={{
            color: borderColor[props.status],
            width: '0.32rem',
          }}
        />
      );
    }
  };

  return (
    <section>
      <Input.Password
        value={props.value}
        onChange={props.onChange}
        style={{
          width,
          backgroundColor: bgColor[props.status || 'default'],
          fontSize: '0.386rem',
          borderColor: borderColor[props.status || 'default'],
        }}
        placeholder={props.placeholder}
        disabled={props.disable}
        className="h-[1.15rem] text-[0.57rem]"
      ></Input.Password>
      <div className="flex items-center">
        {renderHelpTextIcon()}
        <span
          className="text-[0.32rem] ml-[0.1rem]"
          style={{
            color: borderColor[props.status || 'default'],
          }}
        >
          {props.helpText}
        </span>
      </div>
    </section>
  );
}

import { Button } from 'antd';
import type { ButtonHTMLType } from './buttonHelpers';
const bgColor = {
  // TODO 可能需要调整
  default: '#ffffff',
  disabled: '#F5F5F5;',
};
const textColor = {
  default: '#ffffff',
  disabled: 'rgba(0, 0, 0, 0.25)',
};
export type ButtonStatus = 'default' | 'disabled' | undefined;
type BaseButtonProps = {
  value?: string;
  // TODO 需要进行调整
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  width?: number | string;
  status?: ButtonStatus;
  placeholder?: string;
  disable?: boolean;
  helpText?: string;
  loading?: boolean;
  htmlType?: ButtonHTMLType;
  buttonClassName?: string;
};

export default function BaseButton(props: BaseButtonProps = {}) {
  const width = props.width || '7.9rem';

  return (
    <section>
      <Button
        // TODO 这个可能需要进行修改
        onClick={props.onClick}
        style={{
          width,
          backgroundColor: bgColor[props.status || 'default'],
          fontSize: '0.386rem',
          backgroundImage: 'linear-gradient(91.08deg, #A7DC4D 0%, #2DBDB6 100%)',
          color: textColor[props.status || 'default'],
        }}
        placeholder={props.placeholder}
        disabled={props.disable}
        htmlType={props.htmlType}
        className={`${props.buttonClassName} h-[1.2195rem] text-[0.57rem]`}
      >
        {props.value}
      </Button>
    </section>
  );
}

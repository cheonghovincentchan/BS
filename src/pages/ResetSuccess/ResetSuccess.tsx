import { Button } from 'antd';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
const ResetSuccess: React.FC = () => {
  return (
    <div
      className="w-full h-full flex justify-center  opacity-80 flex-col"
      style={{
        background: '#f0fffe',
        padding: '0 0.5854rem',
      }}
    >
      <div className="text-center text-[2.41rem]">
        <CheckCircleFilled
          style={{
            color: '#2BBFA5',
            fontSize: '1.16rem',
          }}
        />
      </div>

      <p className="font-bold text-[0.7805rem] text-[#1D1D1D] m-auto">Thank You</p>
      <p className="text-[0.41rem] text-center text-[#1D1D1D] m-auto mt-[0.65rem] mb-[0.314rem]">
        We have sent you a confirmation email. You may now start booking with your Email / Phone number.
      </p>
      <Button
        className="h-[1.2rem]"
        style={{
          backgroundImage: 'linear-gradient(91.08deg, #A7DC4D 0%, #2DBDB6 100%)',
        }}
        type="primary"
      >
        Continue
      </Button>
    </div>
  );
};

export default ResetSuccess;

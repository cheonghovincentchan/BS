import frame from '../../images/frame.svg';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { Drawer } from 'antd';
import { useState } from 'react';

function Header() {
  const [drawerOpenStatus, setDrawerOpenStatus] = useState(false);
  return (
    <div className="flex h-[1.9512rem] justify-between items-center pt-[0.2927rem] pb-[0.2927rem] px-[0.584rem]">
      <img src={frame} alt="frame" className="object-cover w-[3.6829rem] mr-[auto]" />
      {/* TODO 换成antd的menu icon */}
      <MenuOutlined
        onClick={() => setDrawerOpenStatus(true)}
        className="active:text-[#3c4148] active:bg-[#eaf3f3]"
        style={{
          color: '#2D3748',
          fontSize: '0.797rem',
        }}
      />
      <Drawer open={drawerOpenStatus} onClose={() => setDrawerOpenStatus(false)}></Drawer>
    </div>
  );
}
export default Header;

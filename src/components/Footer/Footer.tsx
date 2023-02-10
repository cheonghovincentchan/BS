import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#525252] h-[3.0976rem] flex justify-center flex-col items-center fixed bottom-0 left-0 right-0">
      <a
        className="font-[600] text-[0.3902rem] text-[#FFFFFF] mb-[0.1951rem] cursor-pointer"
        onClick={() => (window.location.href = 'https://INDICAID.com/')}
      >
        {'About INDICAID'}
      </a>
      <div className="font-[400] text-[0.3415rem] text-[#FFFFFF]">© 2023 INDICAID® All Rights Reserved</div>
      <div className="flex ">
        <a
          className="font-[400] text-[0.3415rem] text-[#FFFFFF] cursor-pointer"
          onClick={() => (window.location.href = 'https://www.baidu.com/')}
        >
          {'Terms of Service'}
        </a>
        <div className="font-[400] text-[0.3415rem] text-[#FFFFFF] mr-[0.0976rem] ml-[0.0976rem]">|</div>
        <a
          className="font-[400] text-[0.3415rem] text-[#FFFFFF] cursor-pointer"
          onClick={() => (window.location.href = 'https://www.baidu.com/')}
        >
          {'Privacy Policy'}
        </a>
      </div>
    </footer>
  );
}

export default Footer;

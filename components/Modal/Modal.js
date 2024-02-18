import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ text }) => {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#portal');
    setIsMounted(true);
  }, []);

  if (isMounted && ref.current)
    return createPortal(
      <div className='absolute top-[10%] left-[50%] text-2xl text-primary bg-white p-[20px] -translate-x-[50%] rounded-lg'>
        {text}
      </div>,
      ref.current,
    );
};

export default Modal;

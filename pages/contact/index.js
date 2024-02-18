import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import { BsArrowRight } from 'react-icons/bs';
import Animated from '../../components/Animated/Animated';
import Circles from '../../components/Circles/Circles';

const Modal = dynamic(() => import('../../components/Modal/Modal'));

import { useEffect, useState } from 'react';
import { DURATION_DEFAULT } from '../../constants/animation';

const Contact = () => {
  const [modalText, setModalText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    let timerId;

    if (modalText) {
      timerId = setTimeout(() => {
        setModalText('');
      }, 3000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [modalText]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);

    emailjs
      .sendForm('service_ec80xkp', 'template_xpv4oa9', e.target, 'I62pNDM3dUfOMYkh8')
      .then(
        () => {
          setModalText('Your message was successfully delivered');
          e.target.reset();
        },
        () => {
          setModalText('Your message has not been sent. Try again');
        },
      )
      .finally(() => setIsDisabled(false));
  };

  return (
    <div className='min-h-screen h-full bg-primary/30'>
      {modalText && <Modal text={modalText} />}
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center min-h-screen h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <Animated
            className='h2 text-center mb-12'
            element='h2'
            direction='up'
            duration={DURATION_DEFAULT}>
            Let&apos;s <span className='text-accent'>connect</span>
          </Animated>

          <Animated
            element='form'
            duration={DURATION_DEFAULT}
            direction='up'
            noValidate
            onSubmit={handleFormSubmit}>
            <fieldset
              className={`flex-1 flex flex-col gap-6 w-full mx-auto ${
                isDisabled ? 'opacity-50' : ''
              }`}
              disabled={isDisabled}>
              <div className='flex gap-x-6 w-full'>
                <input
                  type='text'
                  placeholder='name'
                  className='input name normal-case'
                  name='name'
                />
                <input
                  type='text'
                  placeholder='email'
                  className='input email normal-case'
                  name='email'
                />
              </div>

              <input
                type='text'
                placeholder='subject'
                className='input subject normal-case'
                name='subject'
              />
              <textarea
                placeholder='message'
                className='textarea message normal-case'
                name='message'
              />

              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                  Let&apos;s talk
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </fieldset>
          </Animated>
        </div>
      </div>

      <Circles />
    </div>
  );
};

export default Contact;

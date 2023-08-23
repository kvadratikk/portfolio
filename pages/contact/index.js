import Animated from '../../components/Animated/Animated';
import Circles from '../../components/Circles/Circles';
import Modal from '../../components/Modal/Modal';

import { useEffect, useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setModalText('The email is being sent...');
      setIsDisabled(true);

      const form = event.target;
      const formData = new FormData(form);

      const getValue = (className) => form.querySelector(`.${className}`).value;

      formData.append('name', getValue('name'));
      formData.append('email', getValue('email'));
      formData.append('subject', getValue('subject'));
      formData.append('message', getValue('message'));

      await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });

      setModalText('The email has been delivered successfully!');
      setIsDisabled(false);
      form.reset();
    } catch (error) {
      setModalText('Something went wrong. Try again');
      setIsDisabled(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      {modalText && <Modal text={modalText} />}
      {/* <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <Animated className="h2 text-center mb-12" element="h2" direction="up" duration={0.2}>
            Let&apos;s <span className="text-accent">connect</span>
          </Animated>

          <Animated
            element="form"
            duration={0.4}
            direction="up"
            noValidate
            onSubmit={handleFormSubmit}
          >
            <fieldset
              className={`flex-1 flex flex-col gap-6 w-full mx-auto ${
                isDisabled ? 'opacity-50' : ''
              }`}
              disabled={isDisabled}
            >
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="name" className="input name normal-case" />
                <input type="text" placeholder="email" className="input email normal-case" />
              </div>

              <input type="text" placeholder="subject" className="input subject normal-case" />
              <textarea placeholder="message" className="textarea message normal-case" />

              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </fieldset>
          </Animated>
        </div>
      </div> */}

      <Circles />
    </div>
  );
};

export default Contact;

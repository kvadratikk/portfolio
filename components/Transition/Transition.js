import TransitionScreen from './TransitionScreen/TransitionScreen';

const Transition = () => {
  return (
    <>
      <TransitionScreen zIndex='z-40' bg='bg-[#2e2257]' delay={0.2} />
      <TransitionScreen zIndex='z-30' bg='bg-[#3b2d71]' delay={0.4} />
      <TransitionScreen zIndex='z-20' bg='bg-[#4b3792]' delay={0.6} />
    </>
  );
};

export default Transition;

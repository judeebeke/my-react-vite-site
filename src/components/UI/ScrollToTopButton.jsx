import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button text-3xl font-bold rounded-full p-4 text-white bg-main hover:bg-mildMain ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </button>
  );
}

export default ScrollToTopButton;

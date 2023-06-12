import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      // Wait for new DOM elements to be painted
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        } else {
          // If we don't have element for hash, navigate to home
          navigate('/main');
        }
      }, 0);
    }
  }, [hash, navigate]); // Trigger this effect if URL hash changes

  return null;
}

export default ScrollToTop;
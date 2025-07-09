// src/components/UI/components/ScrollTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0,});
  }, [pathname]);

  return null;
};

export default ScrollTop;

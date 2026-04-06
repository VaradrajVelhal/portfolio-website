import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef();

  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animateRing);
    };

    const onMouseEnterGlobal = () => {
      if (ringRef.current) ringRef.current.classList.add('hovered');
    };
    
    const onMouseLeaveGlobal = () => {
      if (ringRef.current) ringRef.current.classList.remove('hovered');
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animateRing);

    // Initial check and mutation observer for dynamic links
    const updateHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterGlobal);
        el.addEventListener('mouseleave', onMouseLeaveGlobal);
      });
    };
    
    updateHoverListeners();
    
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        style={{
          position: 'fixed', top: 0, left: 0, width: '10px', height: '10px',
          backgroundColor: 'var(--cyan)', borderRadius: '50%', pointerEvents: 'none',
          zIndex: 9999, transform: 'translate3d(-50%, -50%, 0)', marginLeft: '-5px', marginTop: '-5px'
        }}
      />
      <div 
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, width: '44px', height: '44px',
          border: '2px solid var(--cyan)', borderRadius: '50%', pointerEvents: 'none',
          zIndex: 9998, transition: 'width 0.3s, height 0.3s, background-color 0.3s',
          marginLeft: '-22px', marginTop: '-22px', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hovered {
            width: 70px !important;
            height: 70px !important;
            background-color: rgba(0, 255, 209, 0.15) !important;
            margin-left: -35px !important;
            margin-top: -35px !important;
          }
        `}} />
      </div>
    </>
  );
};

export default Cursor;

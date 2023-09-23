//YD

import React, { useEffect } from 'react';
import "./DailyTracking.css";

const PowerInfogramComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://e.infogram.com/js/dist/embed.js?R2l';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
        }, []);

    return (
      <>
        <div
        style={{
          position: 'relative',
          top: '-100px', 
        }}
        >
        <script
          id="infogram_0_aea2de4b-11b5-4c27-857a-ba168d9485c5"
          title="Power"
          src="https://infogram.com/power-1h1749vegrell6z?live"
          type="text/javascript"
        ></script>
        </div>
        <div
          style={{
            padding: '8px 0',
            fontFamily: 'Arial!important',
            fontSize: '13px!important',
            lineHeight: '15px!important',
            textAlign: 'center',
            borderTop: 'none',
            margin: '0 30px',
          }}
        >
        </div>
        <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',  
      }}
    >
      <div className="infogram-embed" data-id="aea2de4b-11b5-4c27-857a-ba168d9485c5" data-type="interactive" data-title="Line Chart"></div>
    </div>
      </>
    );
  };

  export default PowerInfogramComponent;

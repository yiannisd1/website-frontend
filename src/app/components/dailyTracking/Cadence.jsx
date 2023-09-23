//YD

import React, { useEffect } from 'react';
import "./DailyTracking.css";

const CadenceInfogramComponent = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://e.infogram.com/js/dist/embed.js?g0z';
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
        top: '0px', 
    }}
    >
    <script
        id="infogram_0_fa24f039-5378-4485-a71f-6344e0de1134"
        title="Power"
        src="https://e.infogram.com/js/dist/embed.js?pwU"
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


export default CadenceInfogramComponent;
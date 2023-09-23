import React, { useEffect, createContext, useContext } from 'react';
import './DailyTracking.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Create a context to share data between components
const DataContext = createContext();

const AverageSpeedInfogramComponent = () => {
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
            <><div
          style={{
              position: 'relative',
              top: '-250px',
          }}
      >
          <script
              id="infogram_0_91de0fc3-02f8-49ac-ac8b-813b2adb336b"
              title="Power"
              src="https://e.infogram.com/js/dist/embed.js?pwU"
              type="text/javascript"
          ></script>
      </div><div
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
          </div><div
              style={{
                  maxWidth: '500px',
                  margin: '0 auto',
              }}
          >
              <div 
              className="infogram-embed" 
              data-id="aea2de4b-11b5-4c27-857a-ba168d9485c5" 
              data-type="interactive" 
              data-title="Line Chart"></div>
          </div></>
     
  );
};

const Speed = () => {
  const { score } = useContext(DataContext);

  // Check if score is a valid number before using it
  if (typeof score !== 'number' || isNaN(score)) {
    return <div></div>;
  }

  // Calculate color as a constant yellow color
  const calcColor = (value, start, end) => {
    return 'hsl(60, 100%, 50%)'; // Yellow color
  };

  return (
    <div className="glowing-bar-container">
      <CircularProgressbar
        value={score}
        text={`${score.toFixed(2)}`}
        circleRatio={0.7}
        maxValue={72}
        styles={buildStyles({
          trailColor: '#ddd',
          pathColor: calcColor(score, 0, 120),
          textColor: '#ddd',
          rotation: 0.65, 
          strokeLinecap: 'butt',
        })}
        strokeWidth={10}
      />
    </div>
  );
};

const CombinedComponentSpeed = (props) => {
  const { score } = props;

  return (
    <DataContext.Provider value={{ score }}>
      <div>
        <AverageSpeedInfogramComponent />
        <Speed />
      </div>
    </DataContext.Provider>
  );
};

export default CombinedComponentSpeed;

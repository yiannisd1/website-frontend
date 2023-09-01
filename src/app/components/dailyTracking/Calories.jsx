import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DataProvider from './DataProvider';
import "./DailyTracking.css";

const Calories = (props) => {
    const { score } = props;

    // Calculate color as a constant yellow colour
    const calcColor = (value, start, end) => {
        return 'hsl(60, 100%, 50%)'; // Yellow colour
    }

    return (
        <DataProvider valueStart={0} valueEnd={score}>
            {(value) => (
                <div className="glowing-bar-container"> 
                    <CircularProgressbar
                        value={value}
                        text={`${value.toFixed(2)}`} /* Display the Value as a decimal */
                        circleRatio={0.7}
                        maxValue={1500} // Yiannis Doulgerakis - solved the issue with the golden bar being full for all bars
                        styles={{
                            trail: {
                                strokeLinecap: "butt",
                                transform: "rotate(-126deg)",
                                transformOrigin: "center center"
                            },
                            path: {
                                strokeLinecap: "butt",
                                transform: "rotate(-126deg)",
                                transformOrigin: "center center",
                                stroke: calcColor(value, 0, 120),
                            },
                            text: {
                                fill: "#ddd"
                            }

                        }}
                        strokeWidth={10}
                        className="glowing-path" 
                    />
                </div>
            )}
        </DataProvider>
    )
}

export default Calories;
import React, { useState, useEffect } from 'react';
import moment from 'moment'; // or import { DateTime } from "luxon";

function Clock() {
    const [time, setTime] = useState(moment()); // or useState(DateTime.local());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment()); // or setTime(DateTime.local());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>{time.format('DD/MM/YYYY HH:mm:ss')}</p>
        </div>
    );
}

export default Clock;

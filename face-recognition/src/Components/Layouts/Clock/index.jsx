import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Clock() {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment());
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

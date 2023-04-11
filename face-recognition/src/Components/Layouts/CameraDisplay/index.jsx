import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CameraDisplay = () => {
    const [Video, setVideo] = useState('');
    const ip = useSelector((state) => state.ip);

    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                'Content-Type': 'application/json',
            };
            const result = await axios.get('http://localhost:5000/video_feed', { headers });
            setVideo(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="zone">
            <button className="flicker"></button>
            <iframe
                style={{ width: '100%', height: '100%' }}
                // src="http://192.168.1.6:8081/video"
                src={`http://${ip}`}
                title="Ip Adress"
                scrolling="no"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default CameraDisplay;

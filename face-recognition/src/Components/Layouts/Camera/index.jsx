import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Camera = () => {
    const [Video, setVideo] = useState('');

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

    return <video style={{ width: '738px', height: '432px' }} src={`data:image/jpeg;base64,${Video}`} alt="camera feed" />;
};

export default Camera;

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import getVideoFeed from '../../../api/api';

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
            <button className="flicker" />
            <img src={'http://localhost:5000/video_feed'} style={{ width: '100%', height: '100%' }} alt="Camera" />
        </div>
    );
};

export default CameraDisplay;

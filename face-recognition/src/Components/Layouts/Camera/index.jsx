import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';

const Camera = () => {
    const webcamRef = useRef(null);
    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');

    const startRecording = () => {
        setRecording(true);
        const options = {
            mimeType: 'video/webm',
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 128000,
            bitsPerSecond: 256000,
        };
        const recorder = RecordRTC(webcamRef.current.stream, options);
        recorder.startRecording();
        setTimeout(() => {
            recorder.stopRecording(() => {
                const blob = recorder.getBlob();
                setVideoURL(URL.createObjectURL(blob));
            });
        }, 5000);
    };

    return (
        <div>
            <Webcam audio={false} ref={webcamRef} />
            <button onClick={startRecording}>Quay video</button>
            {videoURL && (
                <video controls>
                    <source src={videoURL} type="video/webm" />
                </video>
            )}
        </div>
    );
};

export default Camera;

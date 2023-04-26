// import React, { useState, useEffect } from 'react';
// import { trainImage, streamVideo } from '../../../api/api';

// const CameraTrain = () => {
//     const [cameraStream, setCameraStream] = useState(null);

//     const handleCameraStream = async () => {
//         try {
//             const stream = await streamVideo(1);
//             setCameraStream(stream);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         handleCameraStream();
//     }, []);

//     const handleTrainImage = async () => {
//         try {
//             const result = await trainImage('example_parameter');
//             console.log(result);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="zone">
//             <button className="flicker"></button>
//             <button onClick={handleTrainImage}>Train Image</button>

//             <div>
//                 <iframe
//                     scrolling="no"
//                     allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     title="Camera Train"
//                     style={{ width: '100%', height: '100%', border: 'none' }}
//                     src={cameraStream}
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default CameraTrain;

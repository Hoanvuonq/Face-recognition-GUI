import axios from 'axios';

export const API_URL = 'http://127.0.0.1:5000';

export const fetchCountTodayScan = () => {
    return axios
        .get(`${API_URL}/countTodayScan`)
        .then((response) => {
            return response.data.rowcount;
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
};

export const fetchData = () => {
    return axios
        .get(`${API_URL}/loadData`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
};

// Thêm User Oke
export const addNewUser = () => {
    return axios
        .get(`${API_URL}/newnbr`)
        .then((response) => {
            console.log(response.data.newnbr);
            return response.data.newnbr;
        })
        .catch((error) => {
            console.log(error);
            throw new Error('Failed to add new user.');
        });
};

// User được thêm mới được gửi về sever
export const submitNewUser = (newUser) => {
    const { txtname, optskill } = newUser;
    return addNewUser().then((personnbr) => {
        const person = { personnbr: personnbr.toString(), txtname: txtname, optskill: optskill };
        const headers = {
            'Content-Type': 'application/json',
        };
        return axios
            .post(`${API_URL}/addprsn_submit`, person, headers)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    });
};
// Lấy user theo ID
export async function getUsers() {
    const url = `${API_URL}`;
    const data_send = {};
    const headers = {
        'Content-Type': 'application/json',
    };
    const data = await axios.post(url, data_send, { headers });
    return data;
}

export const getUserInfo = async (userId) => {
    const url = `${API_URL}/user/${userId}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios.get(url, { headers });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const trainImage = (prs) => {
    return axios
        .get(`${API_URL}/train_test/${prs}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export const streamVideo = (id) =>
    axios
        .get(`${API_URL}/vidfeed_dataset/${id}`, {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'multipart/x-mixed-replace',
            },
            transformResponse: [
                (data) =>
                    `data:image/jpeg;base64,${btoa(
                        new Uint8Array(data).reduce((binary, byte) => binary + String.fromCharCode(byte), ''),
                    )}`,
            ],
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });

const getVideoFeed = ({ onSuccess, onError }) => {
    axios
        .get(`${API_URL}/video_feed`, {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'multipart/x-mixed-replace',
            },
        })
        .then((response) => {
            const blob = new Blob([response.data], { type: 'multipart/x-mixed-replace' });
            const url = URL.createObjectURL(blob);
            onSuccess(url);
        })
        .catch((error) => {
            console.error('API error:', error);
            onError(error);
        });
};
export default getVideoFeed;

import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

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

export async function getUsers() {
    const url = `${API_URL}`;
    const data_send = {};
    const headers = {
        'Content-Type': 'application/json',
    };
    const data = await axios.post(url, data_send, { headers });
    // console.log(data);
    return data;
}

export async function getUserById(id) {
    const url = `${API_URL}/${id}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    const { data } = await axios.get(url, { headers });
    return data;
}

import { createSlice } from '@reduxjs/toolkit';

const ipSlice = createSlice({
    name: 'ip',
    initialState: '',
    reducers: {
        setIp: (state, action) => {
            return action.payload;
        },
    },
});

export const { setIp } = ipSlice.actions;
export default ipSlice.reducer;

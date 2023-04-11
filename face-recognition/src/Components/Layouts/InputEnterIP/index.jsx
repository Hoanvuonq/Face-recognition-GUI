import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setIp } from '../../../Redux/reducers/ipSlice';

function InputEnterIP() {
    const dispatch = useDispatch();
    const ip = useSelector((state) => state.ip);

    const handleChange = (event) => {
        dispatch(setIp(event.target.value));
    };

    return (
        <div className="inp-id">
            <input className="style-inp" type="text" placeholder="Enter IP Address" onChange={handleChange} />
            <button onClick={() => dispatch(setIp(ip))}></button>
            <script>const input = document.querySelector('input'); input.value = ip;</script>
        </div>
    );
}

export default InputEnterIP;

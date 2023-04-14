import React, {useState, useEffect} from 'react';
import moment from 'moment'
import 'moment-timezone';

const Clock = (props) => {
    let region = 'Europe/Moscow';
    if(props.name === 'Tokyo' && props.timeZone === '+9') {
        region = 'Asia/Tokyo';
    } else if(props.name === 'Moscow' && props.timeZone === '+3') {
        region = 'Europe/Moscow';
    } else if(props.name === 'London' && props.timeZone === '+0') {
        region = 'Europe/London';
    } else if(props.name === 'New York' && props.timeZone === '-4') {
        region = 'America/New_York';
    };
    
    const [time, setTime] = useState(moment.tz(moment(), region).format('HH:mm:ss'))

    useEffect(() => {
        const x = setInterval(() => {
            setTime(moment.tz(moment(), region).format('HH:mm:ss'));
            return clearInterval(x);
        }, 1000);
    }, [time, region])

    return <div className='clock'>
        <div className='clock-name'>
            {props.name}
            <div className='remove'
                onClick={props.remove}
            >
            </div>
        </div>
        <div className='time'>
            {time}
        </div>
    </div>
}

export default Clock;

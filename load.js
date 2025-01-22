import http from 'k6/http';
import {check, sleep} from 'k6';

export let options = {
    stages: [
        {target: 50, duration: '10s'},
        {target: 100, duration: '10s'},
        {target: 0, duration: '5s'}
    ],
    thresholds: {
        "http_req_duration": ["p(99)<2000"]
    }
};

export default function(){
    let response = http.get('https://blazedemo.com/index.php');
    check(response, {"Response code is 200": (r) => r.status === 200})
    sleep(1);
}
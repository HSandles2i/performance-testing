import http from 'k6/http';
import {check, sleep} from 'k6';

export let options = {
    stages: [
        {target: 50, duration: '5m'},
    ],
    thresholds: {
        "http_req_duration": ["p(99)<2000"]
    }
};

export default function(){
    let response = http.get('https://test.k6.io/contacts.php');
    check(response, {"Response code is 200": (r) => r.status === 200})
    sleep(1);
}
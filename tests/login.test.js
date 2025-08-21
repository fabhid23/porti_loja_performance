import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { pegarBaseURL  } from '../utils/variaveis.js';


export const options = {

  iterations: 10,

   thresholds: {
    http_req_failed: ['rate<0.01'], 
    http_req_duration: ['p(90)<2000', 'max<5000'], 
  },
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
    const url = pegarBaseURL() + '/login';
    const payload = JSON.stringify(
      postLogin
    );
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const res = http.post(url, payload, params);

    const body = res.json(); 

  check(res, {
    'Validar que o Status é 200': (r) => r.status ===200,
    'Validar que o Token é string': (r) => typeof(body.access_token) == 'string',
  });
  sleep(1);
}
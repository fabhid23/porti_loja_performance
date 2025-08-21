import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js'; 
import { pegarBaseURL  } from '../utils/variaveis.js';

export const options = {
  stages: [
    { duration: '1s', target: 1 },
    { duration: '298s', target: 100 },
    { duration: '1s', target: 0 },
    ],

  thresholds: {
    http_req_duration: ['p(95)<2000', 'max<3000'], 
  },
};

export default function() {
    const token = obterToken();
    const urlCategoria = pegarBaseURL() + '/categorias';
    const url = pegarBaseURL() + '/produtos';

    const payloadCategoria = JSON.stringify({
    nome: "Eletrônicos"
    });

    const payload = JSON.stringify({
            id: 1,
            nome: "Laptop",
            descricao: "Laptop de alta performance com 16GB RAM",
            preco: 1200.5,
            estoque: 50,
            categoria: "Eletrônicos"
        });

    const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    };

  let resCategoria = http.post(urlCategoria, payloadCategoria, params);
  if (resCategoria.status === 201){ 
    check(resCategoria, { "Categoria: status is 201": (resCategoria) => resCategoria.status === 201 });
  } else {
    check(resCategoria, { "Categoria: status is 400": (resCategoria) => resCategoria.status === 400 });
  }
  sleep(1);
  let res = http.post(url, payload, params);
  check(res, { "Produto: status is 201": (res) => res.status === 201 });
  sleep(1);
}
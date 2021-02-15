import http from '../utils/http-axios';

const logar = dados => {
    return http.post('account/signin', dados);
}

const resetarSenha = dados => {
    return http.put('account/reset-password', dados);
}

export default {
    logar,
    resetarSenha
}
import { urlBase, urlController, urlMethods } from '../api/helpers/Rest'


export const validaLogin = (user, password) => (
    // console.log(`${urlBase}${urlController.login}${urlMethods.autenticar}`),  
      
    fetch(`${urlBase}${urlController.login}${urlMethods.autenticar}`, {
        method: 'GET',
        headers: {
            login: user,
            senha: password,
            origem: 'M'
        }
    })
)
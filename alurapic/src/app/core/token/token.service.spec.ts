import { TokenService } from "./token.service"

describe('Testes para o Token Service', () => {

    let token:string;
    let service;

    beforeEach(() =>{

        token = 'QWERTYUIOP'
        service = new TokenService();

    })
    
    
    it('O serviço deve ser inicializado', () =>{
        
        expect(service).toBeTruthy();
    
    });

    it('deve armazenar o token', () => {


        service.setToken(token);

        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe('QWERTYUIOP');

    })


    it('deve remover um token', ()=>{

        service.setToken(token);
        service.removeToken();

        expect(service.hasToken()).toBeFalsy();
        
    })

    afterEach(()=>{

        localStorage.clear();

    })

})
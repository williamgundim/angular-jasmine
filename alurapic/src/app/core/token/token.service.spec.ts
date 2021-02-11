import { TokenService } from "./token.service"

fdescribe('Testes para o Token Service', () => {

    it('O serviço deve ser inicializado', () =>{
        
        const service = new TokenService();
        expect(service).toBeTruthy();
    
    });

    it('deve armazenar o token', () => {

        let token = 'QWERTYUIOP';
        let service = new TokenService();

        service.setToken(token);

        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe('QWERTYUIOP');

    })


})
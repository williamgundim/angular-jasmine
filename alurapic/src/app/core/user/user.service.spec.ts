import { TestBed } from "@angular/core/testing"
import { TokenService } from "../token/token.service"
import { UserService } from "./user.service"

describe('Testes para o serviço de usuário', () =>{

    let service 
    let tokenService

    beforeEach(()=> {

        TestBed.configureTestingModule({
            providers: [
                UserService
            ]
        });

        service = TestBed.get(UserService);

    })

    it('deve ser inicializado', ()=>{
        expect(service).toBeTruthy();
    })

    it('deve com um token, recuperar as informações do usuário', ()=>{   

    })

})
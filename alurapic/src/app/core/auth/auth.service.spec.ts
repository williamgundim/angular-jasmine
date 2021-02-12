import { HttpClient, HttpClientModule } from "@angular/common/http";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AuthService } from "./auth.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { UserService } from "../user/user.service";

describe('Testes para serviço de autenticação', ()=> {

    let authObj: AuthService;
    let httpMock: HttpTestingController;
    let userService: UserService;

    beforeEach( ()=> { 
    
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule, 
                HttpClientTestingModule,
            ],
            providers: [
                AuthService
            ]
        })
        
        authObj = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);

    });

    it('O serviço deve ser instaciado', ()=> {

        expect(authObj).toBeTruthy();

    })

    //fake Async faz uma simulação de passada de tempo, como se fosse um tempo de resposta do servidor.
    it('deve autenticar o usuário', fakeAsync(()=>{

        let fakeBody = {
            id: 1,
            nome: 'william',
            email: '@william@teste.com'
        }

        //cria um duble e pode ser "espionado"
        const spy = spyOn(userService, "setToken").and.returnValue(null);

        authObj.authenticate('william','123').subscribe((response) => {

            expect(response.body).toEqual(fakeBody);
            expect(spy).toHaveBeenCalled();

        });

        //expectOne avalia se algum método fez uma chamada http. 
        const request = httpMock.expectOne( req => {

            return req.method === 'POST';

        });

        //simula o retorno da requisição.
        request.flush(fakeBody, {
            headers:{'x-acess-token': 'tokenTest'}
        });

        tick(); //simula o tempo.

    }));

});
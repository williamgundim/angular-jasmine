import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { UserService } from "../user/user.service";
import { FooterComponent } from "./footer.component";

fdescribe("Testes para o componente Footer", () =>{

    let component:FooterComponent;

    beforeEach( async(() => {

        TestBed.configureTestingModule({
            imports:[
                RouterTestingModule
            ],
            providers:[
                UserService
            ],
            declarations: [
                FooterComponent //Utiliza o declarations por ser um componente.
            ]
        }).compileComponents();

    }));
    
    beforeEach(()=>{


        //Utilizamos o createComponent para ele pegar a composição do template html junto ao typescript.
        //Depois extraimos o componente
        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;

        //Utilizado para executar os ciclos de vida do componente. Ex.: NgOnInit, NgAfterViewInit, NgOnDestroy...
        fixture.detectChanges(); 

        //Instala um espião para conseguir mockar os métodos e o serviço.
        const userService:UserService = TestBed.get(UserService);
        spyOn(userService,"getUser").and.returnValue(of({
            email:'teste@teste.com.br',
            name:'teste',
            id:900
        }))

    });


    it("Deve ser instanciado", ()=>{

        expect(component).toBeTruthy();

    })

});
import { async, TestBed } from "@angular/core/testing"
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AlertModule } from "src/app/shared/componets/alert/alert.module";
import { LoadingModule } from "src/app/shared/componets/loading/loading.module";
import { MenuModule } from "src/app/shared/componets/menu/menu.module";
import { UserService } from "../user/user.service";
import { HeaderComponent } from "./header.component";

describe("Testes para o componente Header", ()=>{

    let headerComponent:HeaderComponent;
    let userService:UserService;
    let router:Router;
    
    //BeforeEach apenas para a criação e compilação do componente.
    beforeEach( async( ()=>{

        TestBed.configureTestingModule({
            declarations:[
                HeaderComponent
            ],
            providers: [
                UserService
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
                MenuModule,
                AlertModule,
                LoadingModule
            ]
        }).compileComponents();

    }));

    //
    beforeEach( ()=>{

        //Utilizamos o createComponent para ele pegar a composição do template html junto ao typescript.
        //Depois extraimos o componente
        const fixture = TestBed.createComponent(HeaderComponent);
        headerComponent = fixture.componentInstance;

        //Utilizado para executar os ciclos de vida do angular. Ex.: NgOnInit, NgAfterViewInit, NgOnDestroy...
        fixture.detectChanges(); 

        router = TestBed.get(Router);
        
        //Instala um espião para conseguir mockar os métodos e o serviço.
        userService = TestBed.get(UserService);
        spyOn(userService,"getUser").and.returnValue(of({
            email:'teste@teste.com.br',
            name:'teste',
            id:900
        }))

    })

    it("Deve ser criado o componente", ()=>{

        expect(headerComponent).toBeTruthy();

    })

    it("Deve ser executado o logout", ()=>{

        const spy = spyOn(userService,"logout");
        const spyRouter = spyOn(router,"navigate")

        headerComponent.logout();
        expect(spy).toHaveBeenCalled();
        expect(spyRouter).toHaveBeenCalled();

    })

})
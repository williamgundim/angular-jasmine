import { isLowerCase } from "./lower-case.validator";

describe('Teste para a função isLowerCase',() =>{

    it( 'Deve confirmar quando recebe um texto em caixa baixa', () =>{

        expect( isLowerCase('william') ).toBeTruthy() ;

    })

    it( 'Deve confirmar quando recebe um texto em caixa alta', () =>{

        expect( isLowerCase('MATOS') ).toBeFalsy() ;

    })


})
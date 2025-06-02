import { Carro } from './carro';

export function ListaCarros() { 
    return(
    <>
        <h1>Minha lista de carros</h1>
        <ul>
            <Carro marca= "Ferrari" anoLancamento= "2023" />
            <Carro marca= "Chevrolet"/>
            <Carro marca= "Volkswagen"/>
            <Carro marca= "Fiat" />
        </ul>

    </>
    )
}

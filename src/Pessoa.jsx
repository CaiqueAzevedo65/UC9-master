export function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <>
            <img src= {foto} alt= {nome} />
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <h3>Profissão: {profissao}</h3>
        </>
    )
}
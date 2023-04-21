import alunos from "./json/nomesNotas.json";
import PropTypes from 'prop-types'

function Pessoa({ nome, nota }) {

    const alunosOrdemAlfabetica = alunos.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;

        } else {
            return true;
        }
    })

    const alunosOrdemCoresNotas = alunosOrdemAlfabetica.map(aluno => {
        if (aluno.nota < 5) {
            return <p class="classeVermelho" >{nome = aluno.nome} - {nota = aluno.nota}</p>
        } else {
            return <p class="classeVerde" >{nome = aluno.nome} - {nota = aluno.nota}</p>
        }
    })

    return (
        <>
            <ul>{alunosOrdemCoresNotas}</ul>
        </>
    )
}

Pessoa.protoType = {
    nome: PropTypes.string,
    nota: PropTypes.number,
}

Pessoa.defaultProps = {
    nome: 'Faltou o nome',
    nota: 0,
}

export default Pessoa
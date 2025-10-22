import { Link } from "react-router-dom";
import { useDisciplinas } from "../../contexts/DisciplinaContext";
import { useState } from "react";
import TableLists from "../../components/TableList"
import type { Disciplina } from "../../types";
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";

const ListDisciplinas = () => {

    const { state, removerDisciplina } = useDisciplinas()
    const [busca, setBusca] = useState('')

    const handleRemoveDisciplina = (id: number) => {
        removerDisciplina(id)
    }

    const disciplinasFiltradas = state.disciplinas.filter(item =>
        item.nome.toLowerCase().includes(busca.toLowerCase())
    )
    const headers = ['Nome', 'Carga Horaria', 'Codigo', 'Turma', 'Ação']
    const renderDisciplinaRow = (disciplina: Disciplina) => (
        <tr key={disciplina.id}>
            <td>{disciplina.nome}</td>
            <td>{disciplina.cargaHoraria}</td>
            <td>{disciplina.codigo}</td>
            <td>{disciplina.turma}</td>
            <td className="actions">
                <Link to={`/disciplinas/${disciplina.id}/editar`} className="link">
                    <Button variant='accent' texto="✏️ Editar" type='button'></Button>
                </Link>
                <Button variant='danger' texto="🗑️ Remover" type='button' click={() => handleRemoveDisciplina(disciplina.id)}></Button>
            </td>
        </tr>

    )

    return (

        <div>
            <div>
                <SearchInput
                    value={busca}
                    onChange={e => setBusca(e.target.value)}
                    placeholder="Pesquise por uma disciplina..."
                />
            </div>

            <TableLists<Disciplina>
                headers={headers}
                data={disciplinasFiltradas}
                renderRow={renderDisciplinaRow}
            />
        </div>
    );
};


export default ListDisciplinas

import { useState } from "react"

import TableLists from "../../components/TableList"
import type { Professor } from "../../types"
import { useProfessores } from "../../contexts/ProfessorContext"
import { Link } from "react-router-dom"
import SearchInput from "../../components/SearchInput"
import Button from "../../components/Button"


const ListProfessor = () => {
  const [busca, setBusca] = useState('')
  const { state, removerProfessor } = useProfessores();

  const handleRemoveProfessor = (id: number) => {
    if (window.confirm('Tem certeza que deseja remover este professor?')) {
      removerProfessor(id);
    }
  }
  const headers = ['Matricula', 'Nome', 'Area', 'Turma', 'Ação']

  const professoresFiltrados = state.professores.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  )

  const renderProfessorRow = (professor: Professor) => (
    <tr key={professor.id}>
      <td>{professor.matricula}</td>
      <td>{professor.nome}</td>
      <td>{professor.area}</td>
      <td>{professor.turma}</td>
      <td className="actions">
        <Link to={`/professores/${professor.id}/editar`} className="link">
          <Button variant='accent' texto="✏️ Editar" type='button'></Button>
        </Link>
        <Button variant='danger' texto="🗑️ Remover" type='button' click={() => handleRemoveProfessor(professor.id)}></Button>
      </td>
    </tr>
  )

  return (
    <div>
      <div>
        <SearchInput
          value={busca}
          onChange={e => setBusca(e.target.value)}
          placeholder="Pesquise por um professor..."
        />
      </div>

      <TableLists<Professor>
        headers={headers}
        data={professoresFiltrados}
        renderRow={renderProfessorRow}
      />
    </div>
  )
}

export default ListProfessor

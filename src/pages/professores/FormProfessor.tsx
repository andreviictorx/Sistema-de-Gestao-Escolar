import { useEffect, useState } from "react"
import InputForm from "../../components/InputForm"
import Button from "../../components/Button"
import { useNavigate, useParams } from "react-router-dom"
import { useProfessores } from "../../contexts/ProfessorContext"
import type { Professor } from "../../types"
import { useTurmas } from "../../contexts/TurmaContext"


import { FormContainer, FormTitle, FormWarning, ButtonContainer } from "../../styles/formstyles"

const FormProfessor = () => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [area, setArea] = useState('');
  const [turma, setTurma] = useState('');

  const { state: TurmaState } = useTurmas();
  const { state, adicionarProfessor, editProfessor } = useProfessores();
  const { professorId } = useParams<{ professorId: string }>();
  const isProfessor = professorId !== undefined;
  const professorToEdit = isProfessor ? state.professores.find(item => item.id === Number(professorId)) : null;
  const navigate = useNavigate();
  const hasTurmas = TurmaState.turmas.length > 0;

  useEffect(() => {
    if (professorToEdit) {
      setMatricula(professorToEdit.matricula);
      setNome(professorToEdit.nome);
      setArea(professorToEdit.area);
      setTurma(professorToEdit.turma);
    }
  }, [professorToEdit]);

  const handleSubmitProfessor = (e: React.FormEvent) => {
    e.preventDefault();
    if (professorId && isProfessor) {
      const profAtualizado: Professor = {
        id: Number(professorId),
        area: area,
        matricula: matricula,
        nome: nome,
        turma: turma
      };
      editProfessor(profAtualizado);
    } else {
      adicionarProfessor({ nome, area, matricula, turma });
    }
    navigate('/professores/');
  };

  const handleCancelFormProf = () => {
    navigate('/professores/');
  };

  return (
    // 2. Substitui as tags e classes pelos componentes estilizados
    <FormContainer onSubmit={handleSubmitProfessor}>
      <FormTitle>{isProfessor ? 'Editar Professor' : 'Cadastrar Novo Professor'}</FormTitle>

      {!hasTurmas && (
        <FormWarning>
          ⚠️ Nenhuma turma cadastrada. Por favor, crie uma turma primeiro para poder criar um professor.
        </FormWarning>
      )}

      <fieldset disabled={!hasTurmas}>
        <InputForm
          onChange={(e) => setMatricula(e.target.value)}
          value={matricula}
          label={'Matrícula'}
          placeholder={"Digite a matrícula do Professor"}
          type={"text"}
        />
        <InputForm
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          label={'Nome do Professor'}
          placeholder={"Digite o nome do Professor"}
          type={"text"}
        />
        <InputForm
          onChange={(e) => setArea(e.target.value)}
          value={area}
          label={'Área de Ensino'}
          placeholder={"Digite a área do Professor"}
          type={"text"}
        />

        <div className="form-group">
          <label htmlFor="turma">Turma</label>
          <select
            id="turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            required
          >
            <option value="" disabled>Selecione uma turma</option>
            {TurmaState.turmas.map(turmaItem => (
              <option key={turmaItem.id} value={turmaItem.nome}>
                {turmaItem.nome}
              </option>
            ))}
          </select>
        </div>

        <ButtonContainer>
          <Button variant='accent' texto={isProfessor ? 'Atualizar' : 'Salvar'} type={"submit"} />
          <Button variant='danger' texto="Cancelar" type={"button"} click={handleCancelFormProf} />
        </ButtonContainer>
      </fieldset>
    </FormContainer>
  );
};

export default FormProfessor;

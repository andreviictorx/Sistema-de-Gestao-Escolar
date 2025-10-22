import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDisciplinas } from "../../contexts/DisciplinaContext";
import type { Disciplina } from "../../types";
import { useTurmas } from "../../contexts/TurmaContext";
import { FormContainer, FormTitle, FormWarning, ButtonContainer } from "../../styles/formstyles";

const FormDisciplinas = () => {
  const { state, adicionarDisciplina, editarDisciplina } = useDisciplinas();
  const navigate = useNavigate();
  const { disciplinaId } = useParams<{ disciplinaId: string }>();

  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [turma, setTurma] = useState('');
  const { state: TurmaState } = useTurmas();

  const isDisciplina = disciplinaId !== undefined;
  const disciplinaToEdit = isDisciplina ? state.disciplinas.find(item => item.id === Number(disciplinaId)) : null;
  const hasTurmas = TurmaState.turmas.length > 0;

  useEffect(() => {
    if (disciplinaToEdit) {
      setCodigo(disciplinaToEdit.codigo);
      setNome(disciplinaToEdit.nome);
      setCargaHoraria(disciplinaToEdit.cargaHoraria);
      setTurma(disciplinaToEdit.turma);
    }
  }, [disciplinaToEdit]);

  const handleSubmitDisciplina = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisciplina && disciplinaId) {
      const newDisciplina: Disciplina = {
        id: Number(disciplinaId),
        cargaHoraria: cargaHoraria,
        codigo: codigo,
        nome: nome,
        turma: turma
      };
      editarDisciplina(newDisciplina);
    } else {
      adicionarDisciplina({ nome, cargaHoraria, codigo, turma });
    }
    navigate('/disciplinas/');
  };

  const cancelarDisciplina = () => {
    navigate('/disciplinas/');
  };

  return (
    <FormContainer onSubmit={handleSubmitDisciplina}>
      <FormTitle>{isDisciplina ? 'Editar Disciplina' : 'Cadastrar Nova Disciplina'}</FormTitle>

      {!hasTurmas && (
        <FormWarning>
          ⚠️ Nenhuma turma cadastrada. Por favor, crie uma turma primeiro para poder criar uma disciplina.
        </FormWarning>
      )}

      <fieldset disabled={!hasTurmas}>
        <InputForm
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          label={'Nome da disciplina'}
          placeholder={"Digite o nome da disciplina"}
          type={"text"}
        />
        <InputForm
          onChange={(e) => setCodigo(e.target.value)}
          value={codigo}
          label={'Código'}
          placeholder={"Digite o código da disciplina"}
          type={"text"}
        />
        <InputForm
          onChange={(e) => setCargaHoraria(e.target.value)}
          value={cargaHoraria}
          label={'Carga Horária (CH)'}
          placeholder={"Digite a carga Horária"}
          type={"number"}
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
          <Button variant='accent' texto={isDisciplina ? "Atualizar" : "Salvar"} type={"submit"} />
          <Button variant='danger' texto="Cancelar" type={"button"} click={cancelarDisciplina} />
        </ButtonContainer>
      </fieldset>
    </FormContainer>
  );
};

export default FormDisciplinas;

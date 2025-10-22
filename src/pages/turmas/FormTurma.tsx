import { useEffect, useState } from "react"
import InputForm from "../../components/InputForm"
import { useTurmas } from "../../contexts/TurmaContext"
import { useNavigate, useParams } from "react-router-dom"
import type { Turma } from "../../types"
import Button from "../../components/Button"
import { FormContainer, FormTitle, ButtonContainer } from "../../styles/formstyles"

const FormTurma = () => {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [ano, setAno] = useState('');
  const navigate = useNavigate();

  const { turmaId } = useParams<{ turmaId: string }>();
  const { state, addTurma, editTurma } = useTurmas();
  const isTurmaEdit = turmaId !== undefined;
  const turmaToEdit = isTurmaEdit ? state.turmas.find(item => item.id === Number(turmaId)) : null;

  useEffect(() => {
    if (turmaToEdit) {
      setCodigo(turmaToEdit.codigo);
      setNome(turmaToEdit.nome);
      setAno(turmaToEdit.ano);
    }
  }, [turmaToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTurmaEdit && turmaId) {
      const newTurma: Turma = {
        id: Number(turmaId),
        nome: nome,
        codigo: codigo,
        ano: ano,
      };
      editTurma(newTurma);
    } else {
      addTurma({
        nome, ano, codigo
      });
    }
    navigate('/turmas');
  };

  const cancelarTurma = () => {
    navigate('/turmas/');
  };

  return (

    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{isTurmaEdit ? 'Editar Turma' : 'Cadastrar Nova Turma'}</FormTitle>

      <InputForm
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        label={'Nome da turma'}
        placeholder={"Digite o nome da turma"}
        type={"text"}
      />
      <InputForm
        onChange={(e) => setCodigo(e.target.value)}
        value={codigo}
        label={'Código'}
        placeholder={"Digite o código da turma"}
        type={"text"}
      />
      <InputForm
        onChange={(e) => setAno(e.target.value)}
        value={ano}
        label={'Ano da Turma'}
        placeholder={"Digite o ano da turma"}
        type={"text"}
      />

      <ButtonContainer>
        <Button variant='accent' texto={isTurmaEdit ? 'Atualizar' : 'Salvar'} type='submit' />
        <Button variant='danger' texto="Cancelar" type='button' click={cancelarTurma} />
      </ButtonContainer>
    </FormContainer>
  );
};

export default FormTurma;

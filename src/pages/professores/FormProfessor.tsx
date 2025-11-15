import { useEffect } from "react"
import InputForm from "../../components/InputForm"
import Button from "../../components/Button"
import { useNavigate, useParams } from "react-router-dom"
import { useProfessores } from "../../contexts/ProfessorContext"
import type { Professor } from "../../types"
import { useTurmas } from "../../contexts/TurmaContext"
import { FormContainer, FormTitle, FormWarning, ButtonContainer } from "../../styles/formstyles"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const professorFormSchema = z.object({
  nome: z.string().min(2, 'O nome do professor deve ter no minimo 2 caracteres'),
  matricula: z.string().min(2, 'A matricula do professor deve ter no minimo 2 caracteres'),
  area: z.string().min(3,'A area de ensino do professor deve ter no minimo 3 caracteres'),
  turma: z.string().min(1, 'O professor deve ter pelo menos uma turma vinculada')
})

type professorData = z.infer<typeof professorFormSchema>;


const FormProfessor = () => {

  const {register, handleSubmit, formState:{errors}, reset, setError} = useForm<professorData>({
    resolver: zodResolver(professorFormSchema),
    defaultValues: {
      nome:'',
      matricula:'',
      area:'',
      turma:''
    }
  });

  const { state: TurmaState } = useTurmas();
  const { state, adicionarProfessor, editProfessor } = useProfessores();
  const { professorId } = useParams<{ professorId: string }>();
  const isProfessor = professorId !== undefined;
  const professorToEdit = isProfessor ? state.professores.find(item => item.id === Number(professorId)) : null;
  const navigate = useNavigate();
  const hasTurmas = TurmaState.turmas.length > 0;

  useEffect(() => {
    if (professorToEdit) {
        reset(professorToEdit)
    }
  }, [professorToEdit, reset]);

  const handleSubmitProfessor = (data: professorData) => {
    try{
      if (professorId && isProfessor) {
        const profAtualizado: Professor = {
          id: Number(professorId), ...data
        };
        editProfessor(profAtualizado);
      } else {
        adicionarProfessor(data);
      }
      navigate('/professores/');
    }catch(error:any){
      if(error.message.includes('matricula')){
        setError('matricula', {type:'manual', message: error.message})
      }else{
        console.error('Opa, algo deu errado', error)
      }
    }

  };

  const handleCancelFormProf = () => {
    navigate('/professores/');
  };

  return (

    <FormContainer onSubmit={handleSubmit(handleSubmitProfessor)}>
      <FormTitle>{isProfessor ? 'Editar Professor' : 'Cadastrar Novo Professor'}</FormTitle>

      {!hasTurmas && (
        <FormWarning>
          ⚠️ Nenhuma turma cadastrada. Por favor, crie uma turma primeiro para poder criar um professor.
        </FormWarning>
      )}

      <fieldset disabled={!hasTurmas}>
        <InputForm
          {...register('matricula')}
          label={'Matrícula'}
          placeholder={"Digite a matrícula do Professor"}
          type={"text"}
        />
        {errors.matricula && <FormWarning>{errors.matricula.message}</FormWarning>}
        <InputForm
          {...register('nome')}
          label={'Nome do professor'}
          placeholder={"Digite o nome do Professor"}
          type={"text"}
        />
        {errors.nome && <FormWarning>{errors.nome.message}</FormWarning>}
        <InputForm
          {...register('area')}
          label={'Área de Ensino'}
          placeholder={"Digite a área do Professor"}
          type={"text"}
        />
        {errors.area && <FormWarning>{errors.area.message}</FormWarning>}

        <div className="form-group">
          <label htmlFor="turma">Turma</label>
          <select
            id="turma"
            {...register('turma')}
          >
            <option value="" disabled>Selecione uma turma</option>
            {TurmaState.turmas.map(turmaItem => (
              <option key={turmaItem.id} value={turmaItem.nome}>
                {turmaItem.nome}
              </option>
            ))}
          </select>
          {errors.turma && <FormWarning>{errors.turma.message}</FormWarning>}
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

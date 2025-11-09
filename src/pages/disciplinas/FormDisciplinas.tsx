import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDisciplinas } from "../../contexts/DisciplinaContext";
import type { Disciplina } from "../../types";
import { useTurmas } from "../../contexts/TurmaContext";
import { FormContainer, FormTitle, FormWarning, ButtonContainer } from "../../styles/formstyles";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const disciplinaFormSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  cargaHoraria: z.string().min(2, 'Deve ter pelo menos 2 caracteres'),
  codigo: z.string().min(3, 'Codigo deve ter pelo menos 3 caracteres'),
  turma: z.string().min(1, 'turma é obrigatorio')
})

type disciplinaFormData = z.infer<typeof disciplinaFormSchema>

const FormDisciplinas = () => {
  const { state, adicionarDisciplina, editarDisciplina } = useDisciplinas();
  const navigate = useNavigate();
  const { disciplinaId } = useParams<{ disciplinaId: string }>();

  const {handleSubmit, register, formState:{errors}, reset, setError} = useForm<disciplinaFormData>({
    resolver: zodResolver(disciplinaFormSchema),
    defaultValues:{
      nome:'',
      codigo:'',
      cargaHoraria:'',
      turma:''
    }
  });

  const { state: TurmaState } = useTurmas();

  const isDisciplina = disciplinaId !== undefined;
  const disciplinaToEdit = isDisciplina ? state.disciplinas.find(item => item.id === Number(disciplinaId)) : null;
  const hasTurmas = TurmaState.turmas.length > 0;

  useEffect(() => {
    if (disciplinaToEdit) {
      reset(disciplinaToEdit)
    }
  }, [disciplinaToEdit, reset]);

  const handleSubmitDisciplina = (data: disciplinaFormData) => {
    try{
      if (isDisciplina && disciplinaId) {
        const newDisciplina: Disciplina = {
          id: Number(disciplinaId), ...data
        };
        editarDisciplina(newDisciplina);
      } else {
        adicionarDisciplina(data);
      }
      navigate('/disciplinas/');
    }catch(error:any){
      if(error.message.includes('codigo')){
        setError('codigo', {type:'manual', message: error.message})
      }
    }

  };

  const cancelarDisciplina = () => {
    navigate('/disciplinas/');
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitDisciplina)}>
      <FormTitle>{isDisciplina ? 'Editar Disciplina' : 'Cadastrar Nova Disciplina'}</FormTitle>

      {!hasTurmas && (
        <FormWarning>
          ⚠️ Nenhuma turma cadastrada. Por favor, crie uma turma primeiro para poder criar uma disciplina.
        </FormWarning>
      )}

      <fieldset disabled={!hasTurmas}>
        <InputForm
          {...register('nome')}
          label={'Nome da disciplina'}
          placeholder={"Digite o nome da disciplina"}
          type={"text"}
        />
        {errors.nome && <FormWarning>{errors.nome.message}</FormWarning>}
        <InputForm
          {...register('codigo')}
          label={'Código'}
          placeholder={"Digite o código da disciplina"}
          type={"text"}
        />
        {errors.codigo && <FormWarning>{errors.codigo.message}</FormWarning>}
        <InputForm
          {...register('cargaHoraria')}         
          label={'Carga Horária (CH)'}
          placeholder={"Digite a carga Horária"}
          type={"number"}
        />
        {errors.cargaHoraria && <FormWarning>{errors.cargaHoraria.message}</FormWarning>}

        <div className="form-group">
          <label htmlFor="turma">Turma</label>
          <select
            id="turma"
            {...register('turma')}
            required
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
          <Button variant='accent' texto={isDisciplina ? "Atualizar" : "Salvar"} type={"submit"} />
          <Button variant='danger' texto="Cancelar" type={"button"} click={cancelarDisciplina} />
        </ButtonContainer>
      </fieldset>
    </FormContainer>
  );
};

export default FormDisciplinas;

import { useEffect} from "react"
import InputForm from "../../components/InputForm"
import { useTurmas } from "../../contexts/TurmaContext"
import { useNavigate, useParams } from "react-router-dom"
import type { Turma } from "../../types"
import Button from "../../components/Button"
import { FormContainer, FormTitle, ButtonContainer, FormWarning } from "../../styles/formstyles"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const turmaDataSchema = z.object({
  nome: z.string().min(2, 'O nome da turma deve ter no minimo dois caracteres'),
  ano: z.string().min(4, 'O ano da turma deve ter no minimo 4 caracteres'),
  codigo: z.string().min(2, 'O codigo da turma deve possuir no minimo 2 caracteres')
})

type turmaData = z.infer<typeof turmaDataSchema>

const FormTurma = () => {
  const {register, handleSubmit, formState:{errors}, reset, setError} = useForm<turmaData>({
    resolver: zodResolver(turmaDataSchema),
    defaultValues:{
      nome:'',
      ano:'',
      codigo:''
    }
  })

  const navigate = useNavigate();

  const { turmaId } = useParams<{ turmaId: string }>();
  const { state, addTurma, editTurma } = useTurmas();
  const isTurmaEdit = turmaId !== undefined;
  const turmaToEdit = isTurmaEdit ? state.turmas.find(item => item.id === Number(turmaId)) : null;

  useEffect(() => {
    if (turmaToEdit) {
      reset(turmaToEdit)
    }
  }, [turmaToEdit, reset]);

  const handleSubmitTurma = (data: turmaData) => {
    try{
      if (isTurmaEdit && turmaId) {
        const newTurma: Turma = {
          id: Number(turmaId), ...data
        };
        editTurma(newTurma);
      } else {
        addTurma(data);
      }
      navigate('/turmas');
    }catch(error: any){
      if(error.message.includes('codigo')){
        setError('codigo', {type:'manual', message: error.message})
      } else {
        console.error('Opa, algo deu errado', error)
      }
    }
    
  };

  const cancelarTurma = () => {
    navigate('/turmas/');
  };

  return (

    <FormContainer onSubmit={handleSubmit(handleSubmitTurma)}>
      <FormTitle>{isTurmaEdit ? 'Editar Turma' : 'Cadastrar Nova Turma'}</FormTitle>

      <InputForm
        {...register('nome')}
        label={'Nome da turma'}
        placeholder={"Digite o nome da turma"}
        type={"text"}
      />
      {errors.nome && <FormWarning>{errors.nome.message}</FormWarning>}
      <InputForm
        {...register('codigo')}
        label={'Código'}
        placeholder={"Digite o código da turma"}
        type={"text"}
      />
      {errors.codigo && <FormWarning>{errors.codigo.message}</FormWarning>}
      <InputForm
        {...register('ano')}
        label={'Ano da Turma'}
        placeholder={"Digite o ano da turma"}
        type={"text"}
      />
      {errors.ano && <FormWarning>{errors.ano.message}</FormWarning>}
      <ButtonContainer>
        <Button variant='accent' texto={isTurmaEdit ? 'Atualizar' : 'Salvar'} type='submit' />
        <Button variant='danger' texto="Cancelar" type='button' click={cancelarTurma} />
      </ButtonContainer>
    </FormContainer>
  );
};

export default FormTurma;

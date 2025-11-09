import { useEffect} from "react";
import Button from "../../components/Button";
import { useAlunos } from "../../contexts/AlunoContext";
import { useNavigate, useParams } from "react-router-dom";
import type { Aluno } from "../../types";
import InputForm from "../../components/InputForm";

import { useTurmas } from "../../contexts/TurmaContext";
import { ButtonContainer, FormContainer, FormTitle} from "./AlunoForm.styles";
import {z} from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWarning } from "../../styles/formstyles";

const alunoFormSchema = z.object({
    nome: z.string().min(2, 'O nome do aluno é obrigatório'),
    matricula: z.string().min(1, 'Matricula é obrigatoria'),
    turma: z.string().min(1, 'Turma é obrigatorio')
})

type alunoFormData = z.infer<typeof alunoFormSchema>;


const AlunoForm = () => {
    const { state: alunoState, adicionarAluno, editarAluno } = useAlunos();
    const { state: turmaState } = useTurmas();

    const navigate = useNavigate();
    const { alunoId } = useParams<{ alunoId: string }>();

    const {handleSubmit,register, formState: {errors}, reset, setError} = useForm<alunoFormData>({
        resolver: zodResolver(alunoFormSchema),
        defaultValues: {
            nome:'',
            matricula:'',
            turma:''
        }
    })


    const isEditing = alunoId !== undefined;
    const alunoToEdit = isEditing ? alunoState.alunos.find(item => item.id === Number(alunoId)) : null;


    const hasTurmas = turmaState.turmas.length > 0;

    useEffect(() => {
        if (alunoToEdit) {
            reset(alunoToEdit)
        }
    }, [alunoToEdit, reset]);

    const handleSubmitAluno = (data: alunoFormData) => {
        try{
            if (isEditing && alunoId) {
                const alunoAtualizado: Aluno = {
                    id: Number(alunoId), ...data
                };
                editarAluno(alunoAtualizado);
            } else {
                adicionarAluno(data);
            }
            navigate('/alunos/');
        }catch(error: any){
            if(error.message.includes('matricula')){
                setError('matricula', {type:'manual', message: error.message})
            }else{
                console.error('Opa, algo deu errado.', error)
            }   
        }
        
    };

    const cancelar = () => {
        navigate('/alunos/');
    };

    return (
        <FormContainer  onSubmit={handleSubmit(handleSubmitAluno)}>
            <FormTitle>
                {isEditing ? "Editar Aluno" : "Cadastrar Novo Aluno"}
            </FormTitle>
            {!hasTurmas && (
                <FormWarning>
                    ⚠️ Nenhuma turma cadastrada. Por favor, crie uma turma primeiro para poder matricular um aluno.
                </FormWarning>
            )}

            

            <fieldset disabled={!hasTurmas}>
                <InputForm
                    {...register('nome')}
                    placeholder={'Nome do aluno'}
                    label={"Digite o nome do aluno"}
                    type={"text"}
                />
                {errors.nome && <FormWarning>{errors.nome.message}</FormWarning>}
                <InputForm
                    {...register('matricula')}
                    label={'Matricula'}
                    placeholder={"Digite o numero da matricula do aluno"}
                    type={"text"}
                />
                {errors.matricula && <FormWarning>{errors.matricula.message}</FormWarning>}

                <div className="form-group">
                    <label htmlFor="turma">Turma</label>
                    <select
                        id="turma"
                        {...register('turma')}
                        required
                    >
                        <option value="" disabled>Selecione uma turma</option>
                        {turmaState.turmas.map(turmaItem => (
                            <option key={turmaItem.id} value={turmaItem.nome}>
                                {turmaItem.nome}
                            </option>
                        ))}
                    </select>
                    {errors.turma && <FormWarning>{errors.turma.message}</FormWarning>}
                </div>
                <ButtonContainer>
                    <Button variant='accent' texto={isEditing ? "Atualizar" : "Salvar"} type={"submit"} />
                  
                    <Button variant='danger' texto="Cancelar" type={"button"} click={cancelar} />
                </ButtonContainer>
            </fieldset>
        </FormContainer>
    );
};

export default AlunoForm;


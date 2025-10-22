import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useAlunos } from "../../contexts/AlunoContext";
import { useNavigate, useParams } from "react-router-dom";
import type { Aluno } from "../../types";
import InputForm from "../../components/InputForm";

import { useTurmas } from "../../contexts/TurmaContext";
import { ButtonContainer, FormContainer, FormTitle} from "./AlunoForm.styles";

const AlunoForm = () => {
    const { state: alunoState, adicionarAluno, editarAluno } = useAlunos();
    const { state: turmaState } = useTurmas();

    const navigate = useNavigate();
    const { alunoId } = useParams<{ alunoId: string }>();

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [turma, setTurma] = useState('');

    const isEditing = alunoId !== undefined;
    const alunoToEdit = isEditing ? alunoState.alunos.find(item => item.id === Number(alunoId)) : null;


    const hasTurmas = turmaState.turmas.length > 0;

    useEffect(() => {
        if (alunoToEdit) {
            setNome(alunoToEdit.nome);
            setMatricula(alunoToEdit.matricula);
            setTurma(alunoToEdit.turma);
        }
    }, [alunoToEdit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && alunoId) {
            const alunoAtualizado: Aluno = {
                id: Number(alunoId),
                nome,
                matricula,
                turma
            };
            editarAluno(alunoAtualizado);
        } else {
            adicionarAluno({ nome, matricula, turma });
        }
        navigate('/alunos/');
    };

    const cancelar = () => {
        navigate('/alunos/');
    };

    return (
        <FormContainer  onSubmit={handleSubmit}>
            <FormTitle>
                {isEditing ? "Editar Aluno" : "Cadastrar Novo Aluno"}
            </FormTitle>
            {!hasTurmas && (
                <p className="form-warning">
                    ⚠️ Nenhuma turma cadastrada. Por favor, crie uma turma primeiro para poder matricular um aluno.
                </p>
            )}

            <fieldset disabled={!hasTurmas}>
                <InputForm
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    placeholder={'Nome do aluno'}
                    label={"Digite o nome do aluno"}
                    type={"text"}
                />
                <InputForm
                    onChange={(e) => setMatricula(e.target.value)}
                    value={matricula}
                    label={'Matricula'}
                    placeholder={"Digite o numero da matricula do aluno"}
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
                        {turmaState.turmas.map(turmaItem => (
                            <option key={turmaItem.id} value={turmaItem.nome}>
                                {turmaItem.nome}
                            </option>
                        ))}
                    </select>
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


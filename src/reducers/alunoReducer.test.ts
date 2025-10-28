import { describe, it, expect } from "vitest";
import {
  alunoReducer,
  initialState,
  type alunoAction,
  type AlunoState,
} from "./alunoReducer";
import type { Aluno } from "../types";

describe("alunoReducer", () => {
  it("should return the initial state when no action is provided", () => {
    const state = alunoReducer(undefined, {} as any);
    expect(state).toEqual(initialState);
    expect(state.alunos).toEqual([]);
  });

  it("should handle AddAluno action", () => {
    const state = alunoReducer(undefined, {} as any);
    const newAlunoData = {
      nome: "teste",
      matricula: "123",
      turma: "A",
    };
    const action: alunoAction = {
      type: "AddAluno",
      payload: newAlunoData,
    };

    const newState = alunoReducer(state, action);
    expect(newState.alunos).toHaveLength(1);
    expect(newState.alunos[0]).toEqual(expect.objectContaining(newAlunoData));
    expect(newState.alunos[0].id).toEqual(expect.any(Number));

  });
  it("should handle removeAlunos action", () => {
    const previousState: AlunoState = {
      alunos: [
        { id: 1, nome: "Aluno 1", matricula: "001", turma: "A" },
        { id: 2, nome: "Aluno 2", matricula: "002", turma: "B" },
        { id: 3, nome: "Aluno 3", matricula: "003", turma: "A" },
      ],
    };

    const action: alunoAction = {
      type: "removeAluno",
      payload: { id: 2 },
    };

    const newState = alunoReducer(previousState, action);

    expect(newState.alunos).toHaveLength(2);
    expect(newState.alunos.find((a) => a.id === 2)).toBeUndefined();
    expect(previousState.alunos).toHaveLength(3);
  });
  it('should handle editAlunos action', ()=>{
     const previousState: AlunoState = {
       alunos: [
         { id: 1, nome: "Aluno 1", matricula: "001", turma: "A" },
         { id: 2, nome: "Aluno 2", matricula: "002", turma: "B" },
         { id: 3, nome: "Aluno 3", matricula: "003", turma: "A" },
       ],
     };
     const updatedAlunoData: Aluno = {
        id: 2,
        nome:"Andre",
        matricula:'012',
        turma:'C'
     }
     const action: alunoAction = {
        type:'EditAluno',
        payload: updatedAlunoData
     }

     const newState = alunoReducer(previousState, action)

     expect(newState.alunos).toHaveLength(3)
     expect(newState.alunos.find(a=> a.id ===2)).toEqual(updatedAlunoData)
     expect(newState.alunos.find(a=> a.id ===1)).toEqual(previousState.alunos[0])
     expect(newState.alunos.find(a=> a.id ===3)).toEqual(previousState.alunos[2])
     expect(newState.alunos).not.toBe(previousState.alunos)

  })
});

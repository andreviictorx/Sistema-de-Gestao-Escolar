
import type { Aluno } from "../types";


export interface AlunoState {
    alunos: Aluno[]
}

export const initialState: AlunoState = {
  alunos:[]
};

type addAluno = {
    type:'AddAluno',
    payload: Omit<Aluno, 'id'>
}

type removeAluno = {
    type:'removeAluno',
    payload: {
        id:number,
    }
}
type editAluno = {
  type: 'EditAluno',
  payload: Aluno
}

export type alunoAction = addAluno | removeAluno | editAluno
export const alunoReducer = (state: AlunoState, action: alunoAction)=>{
    switch(action.type){
        case 'AddAluno':
            const newAluno: Aluno = {
                id: Date.now(),
                ...action.payload,
            };
            return {...state,
              alunos: [...state.alunos, newAluno]
            }
        case 'removeAluno':
             return {
                ...state,
                alunos: state.alunos.filter(aluno => aluno.id !== action.payload.id),
        };
        case 'EditAluno':
          return {
            ...state, 
            alunos: state.alunos.map(aluno=> 
              aluno.id === action.payload.id 
              ? 
              action.payload
              : 
              aluno
            )
          }
        default: 
          return state
    }
}


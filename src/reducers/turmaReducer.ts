import type { Turma } from "../types";


export interface TurmaState {
    turmas: Turma[]
}

 
export const initialStateTurma: TurmaState = {
  turmas:[]
};

type AddTurma = {
    type:'AddTurma',
    payload: Omit<Turma, 'id'>
}
type removerTurma = {
    type:'RemoverTurma',
    payload: {id:number}
}

type editTurma = {
  type: 'EditTurma',
  payload: Turma
}

export type turmaAction = AddTurma |removerTurma | editTurma 
export const turmaReducer = (state:TurmaState = initialStateTurma, action: turmaAction)=>{
    switch (action.type) {
      case "AddTurma":
        const newTurma: Turma = {
          id: Date.now(),
          ...action.payload,
        };
        return { ...state, turmas: [...state.turmas, newTurma] };

      case "RemoverTurma":
        return {
          ...state,
          turmas: state.turmas.filter(
            (turma) => turma.id !== action.payload.id
          ),
        };
      case "EditTurma":
        return {
          ...state,
          turmas: state.turmas.map((turma) =>
            turma.id === action.payload.id ? action.payload : turma
          ),
        };
        default:
            return state
    }

}

import type { Disciplina } from "../types";

export interface DisciplinaState {
    disciplinas: Disciplina[]
}

export const initialStateDisciplina: DisciplinaState = {
  disciplinas:[]
};


type AddDisciplina = {
    type:'AdicionarDisciplina',
    payload: Omit<Disciplina, 'id'>
}

type RemoverDisciplina ={
    type:'RemoverDisciplina',
    payload:{id:number}
}

type EditDisciplina = {
    type: 'EditarDisciplina',
    payload: Disciplina
}

type disciplinaAction = AddDisciplina | RemoverDisciplina | EditDisciplina
export const disciplinaReducer = (state:DisciplinaState, action:disciplinaAction)=>{
    switch(action.type){    
        case 'AdicionarDisciplina':
            const newDisciplina: Disciplina = {
                id: Date.now(),
                ...action.payload
            }
            return {...state, disciplinas: [...state.disciplinas, newDisciplina]}
        case 'RemoverDisciplina':
          return{
            ...state, 
            disciplinas: state.disciplinas.filter(item=> item.id !== action.payload.id)
        }
        case 'EditarDisciplina':
            return {
                ...state,
                disciplinas: state.disciplinas.map((item)=>
                    item.id === action.payload.id ? action.payload : item
                )
            }
        default:
            return state
    }
}
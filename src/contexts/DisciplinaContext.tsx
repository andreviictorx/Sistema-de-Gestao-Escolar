import React, { createContext, useContext, useEffect, useReducer } from "react";
import { disciplinaReducer, initialStateDisciplina, type DisciplinaState } from "../reducers/disciplinaReducer";
import type { Disciplina } from "../types";


type DisciplpinaContextType = {
  state: DisciplinaState ; 
  adicionarDisciplina : (disciplinaData: Omit<Disciplina, 'id'>)=> void;
  removerDisciplina: (id:number)=> void;
  editarDisciplina: (disciplinaAtualizada: Disciplina)=> void;
}

const STORAGE_DISCIPLINA_KEY = 'disciplinaContext'
const DisciplinaContext = createContext<DisciplpinaContextType | null>(null)

const loadInitiaDisciplinaState = (): DisciplinaState => {
    const storedState = localStorage.getItem(STORAGE_DISCIPLINA_KEY);
    
    if (storedState) {
      try {
        const parsedState = JSON.parse(storedState);

        if (parsedState && Array.isArray(parsedState.disciplinas)) {
          return parsedState;
        }
      } catch (e) {
        console.error("Erro ao carregar estado do localStorage", e);
      }
    }
    return initialStateDisciplina; 
};

export const DisciplinaContextProvider = ({children}: {children:React.ReactNode})=>{
    const [state, dispatch] = useReducer(disciplinaReducer,undefined,loadInitiaDisciplinaState)

    useEffect(()=>{
        localStorage.setItem(STORAGE_DISCIPLINA_KEY, JSON.stringify(state))
    },[state])

    
    const adicionarDisciplina = (disciplinaData:  Omit<Disciplina, 'id'>)=>{
        const codigoExists = state.disciplinas.find(disciplina=> disciplina.codigo === disciplinaData.codigo);
        if(codigoExists){
            throw new Error('O codigo deve ser unico para cada disciplina. Verifique e tente novamente')
        }
        dispatch({
            type:'AdicionarDisciplina',
            payload: disciplinaData
        })
    }
    const removerDisciplina = (id:number)=>{
        dispatch({
            type:'RemoverDisciplina',
            payload:{id}
        })
    }

    const editarDisciplina = (disciplinaAtualizada: Disciplina)=>{
        const codigoExists = state.disciplinas.find(disciplina => disciplina.codigo === disciplinaAtualizada.codigo && disciplina.id !== disciplinaAtualizada.id);
        if (codigoExists) {
            throw new Error('O codigo deve ser unico para cada disciplina. Verifique e tente novamente')
        }
        dispatch({
            type:'EditarDisciplina',
            payload: disciplinaAtualizada
        })

    }
    return (
        <DisciplinaContext.Provider value={{state, adicionarDisciplina, removerDisciplina, editarDisciplina}}>
            {children}
        </DisciplinaContext.Provider>
    )
}

export const useDisciplinas= () => {
    const context = useContext(DisciplinaContext);

    if (!context) {
        throw new Error('useDisciplinas deve ser usado dentro de um DisciplinaContextProvider');
    }
    return context;
};
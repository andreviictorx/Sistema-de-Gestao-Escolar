import { createContext, useContext, useEffect, useReducer } from "react";
import { alunoReducer, initialState, type AlunoState } from "../reducers/alunoReducer";
import type { Aluno } from "../types";

type AlunoContextType = {
  state: AlunoState ; 
  adicionarAluno : (alunoData: Omit<Aluno, 'id'>)=> void;
  removerAluno: (id:number)=> void;
  editarAluno: (alunoAtualizado: Aluno)=> void;
}

const STORAGE_KEY = 'alunosContexts'
export const AlunoContext = createContext<AlunoContextType | null>(null);

const loadInitialState = (): AlunoState => {
    const storedState = localStorage.getItem(STORAGE_KEY);
    
    if (storedState) {
      try {
        const parsedState = JSON.parse(storedState);

        if (parsedState && Array.isArray(parsedState.alunos)) {
          return parsedState;
        }
      } catch (e) {
        console.error("Erro ao carregar estado do localStorage", e);
      }
    }
    return initialState; 
};

export function AlunoContextProvider ({children}:{children:React.ReactNode}){
    
    const [state, dispatch] = useReducer(alunoReducer, undefined ,loadInitialState)
    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    },[state])
    
    const adicionarAluno =(alunoData:Omit<Aluno, 'id'>)=>{
      const matriculaExists = state.alunos.find(aluno=> aluno.matricula === alunoData.matricula);
      if(matriculaExists){
        throw new Error('O campo matricula deve ser unico para cada aluno. Verifique as informações')
      }
        dispatch({
            type: 'AddAluno',
            payload: alunoData
        })
    }

    const removerAluno = (id:number)=>{
        dispatch({
            type: 'removeAluno',
            payload: {id}
        })
    }

    const editarAluno = (alunoAtualizado: Aluno)=>{
      const matriculaExists = state.alunos.find(aluno => aluno.matricula === alunoAtualizado.matricula && aluno.id !== alunoAtualizado.id)  ;
      if (matriculaExists) {
        throw new Error('O campo matricula deve ser unico para cada aluno. Verifique as informações')
      }
        dispatch({
            type:'EditAluno',
            payload: alunoAtualizado
        })
    }
    return (
        <AlunoContext.Provider value={{state, adicionarAluno, removerAluno, editarAluno}}>
            {children}
        </AlunoContext.Provider>
    )
}

export const useAlunos = () => {
    const context = useContext(AlunoContext);
    
    if (!context) {
      throw new Error('useAlunos deve ser usado dentro de um AlunoContextProvider');
    }
    return context;
};
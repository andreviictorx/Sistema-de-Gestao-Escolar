import { createContext, useContext, useEffect, useReducer } from "react";
import type { Turma } from "../types";
import { initialStateTurma, turmaReducer, type TurmaState } from "../reducers/turmaReducer";


type TurmaContextType = {
    state: TurmaState,
    addTurma: (turmaData:Omit<Turma, 'id'>)=> void,
    removerTurma: (id:number)=> void,
    editTurma: (turmaData:Turma)=>void

}
const TurmaContext = createContext<TurmaContextType | null>(null)



const STORAGE_KEY_TURMA = 'turmasContexts'

const loadInitialStateTurma = (): TurmaState => {
    const storedState = localStorage.getItem(STORAGE_KEY_TURMA);

    if (storedState) {
        try {
            const parsedState = JSON.parse(storedState);

            if (parsedState && Array.isArray(parsedState.turmas)) {
                return parsedState;
            }
        } catch (e) {
            console.error("Erro ao carregar estado do localStorage", e);
        }
    }
    return initialStateTurma;
};


export const TurmaContextProvider = ({ children}:{ children: React.ReactNode })=>{
    const [state, dispatch] = useReducer(turmaReducer, undefined,loadInitialStateTurma)
    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY_TURMA, JSON.stringify(state))
    },[state])

    const addTurma=(turmaData: Omit<Turma, 'id'>) => {
        dispatch({
            type: 'AddTurma',
            payload: turmaData
        })
    }

    const removerTurma = (id: number) => {
        dispatch({
            type: 'RemoverTurma',
            payload: { id }
        })
    }

    const editTurma = (turmaAtualizado: Turma) => {
        dispatch({
            type: 'EditTurma',
            payload: turmaAtualizado
        })
    }

    return (
        <TurmaContext.Provider value={{state, addTurma, removerTurma, editTurma}}>
            {children}
        </TurmaContext.Provider>
    )
}

export const useTurmas= () => {
    const context = useContext(TurmaContext);

    if (!context) {
        throw new Error('useAlunos deve ser usado dentro de um AlunoContextProvider');
    }
    return context;
};
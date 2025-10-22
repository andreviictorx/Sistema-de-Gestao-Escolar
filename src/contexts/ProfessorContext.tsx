import React, { createContext, useContext, useEffect, useReducer } from "react";
import type { Professor } from "../types";
import { initialStateProfessor, ProfessorReducer, type ProfessorState } from "../reducers/professor";

type ProfessorContexType = {
    state: ProfessorState;
    adicionarProfessor: (profData: Omit<Professor, 'id'>) => void;
    removerProfessor: (id: number) => void;
    editProfessor: (profDataAtualizado: Professor) => void;
}


const STORAGE_KEY_PROFESSOR = 'professorContexts'
const loadInitialStateProfessor = (): ProfessorState => {
    const storedState = localStorage.getItem(STORAGE_KEY_PROFESSOR);

    if (storedState) {
        try {
            const parsedState = JSON.parse(storedState);

            if (parsedState && Array.isArray(parsedState.professores)) {
                return parsedState;
            }
        } catch (e) {
            console.error("Erro ao carregar estado do localStorage", e);
        }
    }
    return initialStateProfessor;
};


const ProfessorContext = createContext<ProfessorContexType | null>(null)

export const ProfessorContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(ProfessorReducer, undefined, loadInitialStateProfessor)
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_PROFESSOR, JSON.stringify(state))
    }, [state])


    const adicionarProfessor = (profData: Omit<Professor, 'id'>) => {
        dispatch({ type: 'AdicionarProfessor', payload: profData });
    };

    const removerProfessor = (id: number) => {
        dispatch({ type: 'RemoverProfessor', payload: { id } });
    };

    const editProfessor = (profDataAtualizado: Professor) => {
        dispatch({ type: 'EditarProfessor', payload: profDataAtualizado });
    };
    return (
        <ProfessorContext.Provider value={{ state, adicionarProfessor, removerProfessor, editProfessor }}>
            {children}
        </ProfessorContext.Provider>
    )
}

export const useProfessores = () => {
    const context = useContext(ProfessorContext);

    if (!context) {
        throw new Error('useProfessores deve ser usado dentro de um ProfessorContextProvider');
    }
    return context;
};
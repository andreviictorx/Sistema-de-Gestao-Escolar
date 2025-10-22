import type { Professor } from "../types";

export interface ProfessorState {
  professores: Professor[];
}

export const initialStateProfessor: ProfessorState = {
  professores: [],
};

type AddProf = {
  type: "AdicionarProfessor";
  payload: Omit<Professor, "id">;
};

type RemoveProf = {
  type: "RemoverProfessor";
  payload: { id: number };
};

type EditProf = {
  type: "EditarProfessor";
  payload: Professor;
};
type ProfAction = AddProf | RemoveProf | EditProf;
export function ProfessorReducer(state: ProfessorState, action: ProfAction) {
  switch (action.type) {
    case "AdicionarProfessor":
      const newProfessor: Professor = {
        id: Date.now(),
        ...action.payload,
      };

      return {
        ...state,
        professores: [...state.professores, newProfessor],
      };

    case "RemoverProfessor":
      return {
        ...state,
        professores: state.professores.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "EditarProfessor":
      return {
        ...state,
        professores: state.professores.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}

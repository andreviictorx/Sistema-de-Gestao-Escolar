import { describe, it, expect } from "vitest";
import {
  disciplinaReducer,
  initialStateDisciplina,
  type disciplinaAction,
  type DisciplinaState,
} from "./disciplinaReducer";

describe("disciplinaReducer", () => {
  it("should return the initial when no action provided", () => {
    const state = disciplinaReducer(undefined, {} as any);
    expect(state.disciplinas).toEqual([]);
    expect(state).toEqual(initialStateDisciplina);
  });

  it("should handle adicionarDisciplina action", () => {
    const state = disciplinaReducer(undefined, {} as any);

    const newDisciplina = {
      codigo: "123",
      cargaHoraria: "20",
      nome: "Matematica",
      turma: "ABC",
    };

    const action: disciplinaAction = {
      type: "AdicionarDisciplina",
      payload: newDisciplina,
    };
    const newState = disciplinaReducer(state, action);

    expect(newState.disciplinas).toHaveLength(1);
    expect(newState.disciplinas[0]).toEqual(
      expect.objectContaining(newDisciplina)
    );
  });

  it("should handle removeDisciplina action", () => {
    const previousState: DisciplinaState = {
      disciplinas: [
        {
          id: 1,
          cargaHoraria: "20",
          codigo: "12",
          nome: "Matematica",
          turma: "A",
        },
        {
          id: 2,
          cargaHoraria: "30",
          codigo: "123",
          nome: "Portugues",
          turma: "A",
        },
        {
          id: 3,
          cargaHoraria: "40",
          codigo: "1234",
          nome: "Programação",
          turma: "A",
        },
      ],
    };

    const action: disciplinaAction = {
      type: "RemoverDisciplina",
      payload: { id: 3 },
    };

    const newState = disciplinaReducer(previousState, action);

    expect(newState.disciplinas).toHaveLength(2);
    expect(newState.disciplinas.find((d) => d.id === 3)).toBeUndefined();
    expect(newState.disciplinas.find((d) => d.id === 1)).toEqual(
      previousState.disciplinas[0]
    );
    expect(newState.disciplinas.find((d) => d.id === 2)).toEqual(
      previousState.disciplinas[1]
    );
    expect(newState.disciplinas).not.toBe(previousState.disciplinas);
  });

  it("should handle editarDisciplina action", () => {
    const previousState: DisciplinaState = {
      disciplinas: [
        {
          id: 1,
          cargaHoraria: "20",
          codigo: "12",
          nome: "Matematica",
          turma: "A",
        },
        {
          id: 2,
          cargaHoraria: "30",
          codigo: "123",
          nome: "Portugues",
          turma: "A",
        },
        {
          id: 3,
          cargaHoraria: "40",
          codigo: "1234",
          nome: "Programação",
          turma: "A",
        },
      ],
    };

    const newEditDisciplina = {
      id: 3,
      cargaHoraria: "40",
      codigo: "1234",
      nome: "Jest test",
      turma: "D",
    };

    const action: disciplinaAction = {
      type: "EditarDisciplina",
      payload: newEditDisciplina,
    };

    const newState = disciplinaReducer(previousState, action);

    expect(newState.disciplinas).toHaveLength(3);
    expect(newState.disciplinas.find((d) => d.id === 1)).toEqual(
      previousState.disciplinas[0]
    );
    expect(newState.disciplinas.find((d) => d.id === 2)).toEqual(
      previousState.disciplinas[1]
    );
    expect(newState.disciplinas).not.toBe(previousState.disciplinas);
  });
});

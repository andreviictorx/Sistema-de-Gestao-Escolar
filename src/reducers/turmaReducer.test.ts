import { describe, expect, it } from "vitest";
import {
  initialStateTurma,
  turmaReducer,
  type turmaAction,
  type TurmaState,
} from "./turmaReducer";
import type { Turma } from "../types";

describe("turmaReducer", () => {
  it("should return the inital state when no action provided", () => {
    const state = turmaReducer(undefined, {} as any);

    expect(state.turmas).toEqual([]);
    expect(state).toEqual(initialStateTurma);
  });

  it("should handle adicionarTurma action", () => {
    const state = turmaReducer(undefined, {} as any);

    const newTurma = {
      codigo: "11",
      ano: "2025",
      nome: "9 Ano",
    };

    const action: turmaAction = {
      type: "AddTurma",
      payload: newTurma,
    };

    const newState = turmaReducer(state, action);

    expect(newState.turmas).toHaveLength(1);
    expect(newState.turmas[0]).toEqual(expect.objectContaining(newTurma));
  });

  it("should handle removeTurma action", () => {
    const previousState: TurmaState = {
      turmas: [
        { id: 1, ano: "2025", codigo: "12", nome: "8 ano" },
        { id: 2, ano: "2026", codigo: "123", nome: "9 ano" },
        { id: 3, ano: "2027", codigo: "1234", nome: "1 medio" },
      ]
    };

    const action: turmaAction = {
      type: "RemoverTurma",
      payload: { id: 3 },
    };

    const newState = turmaReducer(previousState, action);
    expect(newState.turmas).toHaveLength(2);
    expect(newState.turmas.find((t) => t.id === 3)).toBeUndefined();
    expect(newState.turmas).not.toBe(previousState.turmas);
  });

  it("should handle editTurma action", () => {
    const previousState: TurmaState = {
      turmas: [
        { id: 1, ano: "2025", codigo: "12", nome: "8 ano" },
        { id: 2, ano: "2026", codigo: "123", nome: "9 ano" },
        { id: 3, ano: "2027", codigo: "1234", nome: "1 medio" },
      ]
    };
    const newTurmaData: Turma = {
        id:3,
        nome:'7 ano',
        ano:'2025',
        codigo:'1234'
    };

    const action: turmaAction = {
        type:'EditTurma',
        payload: newTurmaData
    };

    const newState = turmaReducer(previousState,action);

    expect(newState.turmas).toHaveLength(3);
    expect(newState.turmas.find(t=> t.id ===3)).toEqual(newTurmaData);
    expect(newState.turmas.find(t=> t.id ===1)).toEqual(previousState.turmas[0]);
    expect(newState.turmas.find(t=> t.id ===2)).toEqual(previousState.turmas[1]);
    expect(newState.turmas).not.toBe(previousState.turmas)

  });
});

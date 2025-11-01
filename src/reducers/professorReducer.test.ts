import { describe, it, expect } from "vitest";
import { initialStateProfessor, ProfessorReducer, type ProfAction, type ProfessorState } from "./professor";
import type { Professor } from "../types";

describe('professorReducer', ()=>{
    it('should return the inital state when is no action provided', ()=>{
        const state = ProfessorReducer(undefined, {} as any);
        expect(state.professores).toEqual([]);
        expect(state).toEqual(initialStateProfessor)
    })

    it('should handle AddProfessor action', ()=>{
        const state = ProfessorReducer(undefined, {} as any)
        const newProfData = {
            nome: 'Joao',
            area:'Humanas',
            matricula:'123',
            turma:'ABC'
        }

        const action:ProfAction = {
            type:'AdicionarProfessor',
            payload: newProfData
        }

        const newState = ProfessorReducer(state, action)
        expect(newState.professores).toHaveLength(1)
        expect(newState.professores[0]).toEqual(expect.objectContaining(newProfData))
    })

    it('should handle removeProfessor action', ()=>{
          const previousState: ProfessorState = {
            professores: [
              {
                id: 1,
                nome: "Maria",
                matricula: "001",
                turma: "A",
                area: "mtm",
              },
              {
                id: 2,
                nome: "Professor 2",
                matricula: "002",
                turma: "B",
                area: "cnc",
              },
              {
                id: 3,
                nome: "Professor 3",
                matricula: "003",
                turma: "A",
                area: "prt",
              },
            ],
          };

          const action: ProfAction = {
            type:'RemoverProfessor',
            payload: {id: 1}
          }

          const newState = ProfessorReducer(previousState,action);
          expect(newState.professores.length).toEqual(2)
          expect(newState.professores.find(p=> p.id ===1)).toBeUndefined()
          expect(previousState.professores).toHaveLength(3)
    })

    it('should handle editProfessor action', ()=>{
          const previousState: ProfessorState = {
            professores: [
              {
                id: 1,
                nome: "Maria",
                matricula: "001",
                turma: "A",
                area: "mtm",
              },
              {
                id: 2,
                nome: "Professor 2",
                matricula: "002",
                turma: "B",
                area: "cnc",
              },
              {
                id: 3,
                nome: "Professor 3",
                matricula: "003",
                turma: "A",
                area: "prt",
              },
            ],
          };

          const newProfEdit:Professor= {
            id:1,
            area:'mtm',
            matricula:'1234',
            nome:'Joana',
            turma:'D'
          }

          const action:ProfAction = {
            type:'EditarProfessor',
            payload: newProfEdit
          }

          const newState = ProfessorReducer(previousState,action)

          expect(newState.professores).toHaveLength(3);
          expect(newState.professores.find(p=> p.id === 1)).toEqual(newProfEdit)
          expect(newState.professores.find(p=> p.id === 2)).toEqual(previousState.professores[1])
          expect(newState.professores.find(p=> p.id === 3)).toEqual(previousState.professores[2])
    })
})
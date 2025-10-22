import { createBrowserRouter } from "react-router-dom";
import AlunosPage from "../pages/alunos/AlunosPage";
import TurmasPage from "../pages/turmas/TurmasPage";
import DisciplinasPage from "../pages/disciplinas/DisciplinasPage";
import ProfessoresPage from "../pages/professores/ProfessoresPage";
import AlunoForm from "../pages/alunos/AlunoForm";
import AlunoItems from "../pages/alunos/AlunoItems";
import Dashboard from "../pages/DashboardPage";
import App from "../App";
import TurmasList from "../pages/turmas/TurmasList";
import FormTurma from "../pages/turmas/FormTurma";
import TurmasDetalhes from "../pages/turmas/TurmasDetalhes";
import ListDisciplinas from "../pages/disciplinas/ListDisciplinas"
import ListProfessor from "../pages/professores/ListProfessor";
import FormProfessor from "../pages/professores/FormProfessor";
import FormDisciplinas from "../pages/disciplinas/FormDisciplinas";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {

                index: true,
                element: <Dashboard />

            },
            {
                path: 'alunos',
                element: <AlunosPage />,
                children: [
                    {
                        index: true,
                        element: <AlunoItems />
                    },
                    {
                        path: 'novoaluno',
                        element: <AlunoForm />
                    },
                    {
                        path: ':alunoId/editar',
                        element: <AlunoForm />

                    }
                ]
            },
            {
                path: 'turmas',
                element: <TurmasPage />,
                children: [
                    {
                        index: true,
                        element: <TurmasList />
                    },
                    {
                        path: 'novaturma',
                        element: <FormTurma />
                    },
                    {
                        path: ':turmaId/editar',
                        element: <FormTurma />
                    },
                    {
                        path: ':turmaId/detalhes',
                        element: <TurmasDetalhes />
                    }
                ]
            },
            {
                path: 'disciplinas',
                element: <DisciplinasPage />,
                children: [
                    {
                        index: true,
                        element: <ListDisciplinas />
                    },
                    {
                        path: 'novadisciplina',
                        element: <FormDisciplinas />
                    },
                    {
                        path: ':disciplinaId/editar',
                        element: <FormDisciplinas />
                    }
                ]
            },
            {
                path: 'professores',
                element: <ProfessoresPage />,
                children: [
                    {
                        index: true,
                        element: <ListProfessor />
                    },
                    {
                        path: 'criar',
                        element: <FormProfessor />
                    },
                    {
                        path: ':professorId/editar',
                        element: <FormProfessor />
                    }

                ]
            }
        ]
    }
])
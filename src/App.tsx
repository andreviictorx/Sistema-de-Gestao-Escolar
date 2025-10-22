
import Layout from "./components/Layout"
import { AlunoContextProvider } from "./contexts/AlunoContext"
import { DisciplinaContextProvider } from "./contexts/DisciplinaContext"
import { ProfessorContextProvider } from "./contexts/ProfessorContext"
import { TurmaContextProvider } from "./contexts/TurmaContext"


function App() {

  return (
    <AlunoContextProvider>
      <TurmaContextProvider>
        <DisciplinaContextProvider>
          <ProfessorContextProvider>
            <Layout />
          </ProfessorContextProvider>
        </DisciplinaContextProvider>
      </TurmaContextProvider>
    </AlunoContextProvider>
  )
}

export default App

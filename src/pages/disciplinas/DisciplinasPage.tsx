import { Link , Outlet} from "react-router-dom"
import Button from "../../components/Button"
import { PageContainer, PageHeader, PageTitle } from "../../styles/common.styles"
const DisciplinasPage = () => {

  return (
    <PageContainer>
      <PageHeader >
        <PageTitle>Gerenciamento de Disciplinas</PageTitle>
        <Link to='/disciplinas/novadisciplina' >
          <Button variant='accent' texto="+ Criar Disciplina" type='button'></Button>
        </Link>
      </PageHeader>
      <Outlet />
    </PageContainer>
  )
}

export default DisciplinasPage

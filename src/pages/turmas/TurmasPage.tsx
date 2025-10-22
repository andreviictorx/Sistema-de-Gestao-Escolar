import { Link, Outlet } from "react-router-dom"
import Button from "../../components/Button"
import { PageContainer, PageHeader, PageTitle } from "../../styles/common.styles"


const TurmasPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle className="page-title">Gerenciamento de Turmas</PageTitle>
        <Link to='/turmas/novaturma' className="button green">
          <Button variant='accent' texto="+ Adicionar Turma" type='button'></Button>
        </Link>
      </PageHeader>
      <Outlet />
    </PageContainer>
  )
}

export default TurmasPage

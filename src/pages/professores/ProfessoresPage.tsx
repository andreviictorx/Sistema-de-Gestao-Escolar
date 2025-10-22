import { Link, Outlet } from "react-router-dom"
import Button from "../../components/Button"
import { PageContainer, PageHeader, PageTitle } from "../../styles/common.styles"
const ProfessoresPage = () => {
 return (
    <PageContainer>
      <PageHeader className="page-header">
        <PageTitle className="page-title">Gerenciamento de Professores</PageTitle>
        <Link to='/professores/criar' className="button green">
         <Button variant='accent' texto="+ Criar Professor" type='button'></Button>
        </Link>
      </PageHeader>
      <Outlet />
    </PageContainer>
  )
}

export default ProfessoresPage
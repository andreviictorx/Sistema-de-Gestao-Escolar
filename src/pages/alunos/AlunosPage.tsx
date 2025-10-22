import { Outlet,Link} from "react-router-dom"
import Button from "../../components/Button"
import { PageContainer, PageHeader, PageTitle } from '../../styles/common.styles'
const AlunosPage = () => {

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle >Gerenciamento de Alunos</PageTitle>
        <Link to='/alunos/novoaluno' className="button green">
          <Button variant='accent' texto="+ Adicionar Aluno" type='button'></Button>
        </Link>
      </PageHeader>
      <Outlet/>
    </PageContainer>
  )
}

export default AlunosPage
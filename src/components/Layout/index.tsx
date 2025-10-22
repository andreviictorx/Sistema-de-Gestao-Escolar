import { Link, Outlet } from "react-router-dom";
import Button from "../Button";
import { AppContainer, HeaderContainer, HeaderTitle, MainContent, NavContainer } from "./Layout.styles";

const Layout = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <HeaderTitle>SIGESTE - Sistema de Gestão Escolar🎓 </HeaderTitle>
        <NavContainer>
          <Link to='/'><Button variant='primary' texto="Dashboard" type="button" /></Link>
          <Link to='/alunos'><Button variant='primary' texto="Alunos" type="button" /></Link>
          <Link to='/turmas'><Button variant='primary' texto="Turmas" type="button" /></Link>
          <Link to='/disciplinas'><Button variant='primary' texto="Disciplinas" type="button" /></Link>
          <Link to='/professores'><Button variant='primary' texto="Professores" type="button" /></Link>
        </NavContainer>
      </HeaderContainer>

      <MainContent>
        <Outlet />
      </MainContent>
    </AppContainer>
  );
};

export default Layout;


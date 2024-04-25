import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <div>
          <NavLink to="/">Calorie Info</NavLink>
          <NavLink to="/create">➕ Add Food</NavLink>
          <NavLink to="/user">➕ Add User</NavLink>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

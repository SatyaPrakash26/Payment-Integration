import styled from 'styled-components'
import Burger from "./Burger";

const Nav = styled.nav`
position:fixed;
z-index:9999;
width:100vw;
height:65px;
padding:0 80px;
background:#22161C;
color: #E2AE6C;

display: flex;
justify-content:space-between;

.logo{
    padding-top: 0.5rem ;
    font-size:2rem;
}

`
const Navbar = () => {

    return ( 
        <Nav>    
            <div className="logo"><i class="fas fa-hand-holding-usd"></i></div>
            <Burger />                     
        </Nav>
     );
}
 
export default Navbar;
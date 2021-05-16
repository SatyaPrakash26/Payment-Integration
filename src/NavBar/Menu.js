import {NavLink} from  'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav `
padding-top:0.1rem;
color:white;
display: flex;
flex-flow:row nowrap;
background:#22161C;
color: #E2AE6C;

a{
    color: #E2AE6C;
    padding:15px;
    font-size:1.2rem;
    text-decoration:none;
}

${'' /* a:hover{
    background:white;
    color:#101522;
    border-radius:10px;
} */}

@media (max-width: 768px){
   flex-flow: column nowrap;
   z-index:999;
   background:#22161C;
   position:fixed;
   transform : ${({open})=> open? 'translateX(0)': 'translateX(100%)'};
   top:0;
   right:0;
   height:100vh;
   width: 250px;
   padding-top:3.6rem;
   transition: transform 0.3s linear;

   a{
       padding-top: 5rem;
       padding-left: 5rem;
   }

}
`
const RightNav = ({open}) => {
    return ( 
        <Menu open ={open}>
                <NavLink to ='/'>Home</NavLink>              
                <NavLink to ='/Gallery'>Gallery</NavLink>
                <NavLink to ='/About'>About</NavLink>
        </Menu>
     );
}
 
export default RightNav;
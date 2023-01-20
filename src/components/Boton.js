import styled from 'styled-components'

function Boton(){
    const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
    return(
      <div className='App'>
    <div>
      <h1>ESTA ES MI PRACTICA Y SOY SANTILLAN LEDESMA MARIA FERNANDA</h1>
   <a href='https://utd.edu.mx/' target={"_blank"}><Button>UTD</Button> </a> 
   <a href='https://www.facebook.com/mariafernanda.santillanledesma' target={"_blank"}> <Button primary>Facebook</Button></a>
   <a href='https://github.com/Mafe-SL' target={"_blank"}><Button>GitHub</Button></a>
    </div>
    </div>
    );
}
export default Boton;
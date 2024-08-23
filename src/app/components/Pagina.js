import { Container, Nav, Navbar } from "react-bootstrap"

export default function Pagina(props){

    return (
         <>    
         <Navbar bg="dark" data-bs-theme="dark">
         <Container>
         <Navbar.Brand href="hashtaghashtag#home">Navbar</Navbar.Brand>
         <Nav className="me-auto">
         <Nav.Link href="hashtaghashtag#home">Home</Nav.Link>
         <Nav.Link href="hashtaghashtag#features">Features</Nav.Link>
         <Nav.Link href="hashtaghashtag#pricing">Pricing</Nav.Link>
         </Nav>
         </Container>
         </Navbar>
         <div className="bg-secondary text white text center p-3">
         <h1>Arrays</h1>
         </div>
         <Container>
         <h2>conteúdo página </h2>
         <p>Conteudo página</p>
         <p>Conteudo da página</p>

         </Container>
        
         </>
         )
        }
            


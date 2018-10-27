import React, {Component} from "react";
import  {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

class NavBar extends Component {
    state = {
        isOpen: false
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">BIZZY</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/task">
                                        Task
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/timer">
                                        Timer
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/user">
                                        Login
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default NavBar;
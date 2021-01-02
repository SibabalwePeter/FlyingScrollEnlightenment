import * as React from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from '../Pictures/FLYING SCROL LOGO.jpg'

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
                    <Container>
                        <img src={logo} alt='Logo' style={{width: 101, height: 50 }}/>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} to="/" className="text-white">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/counter">Counter</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/PractitionersAndLearners">Practitioners And Learners</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/Services">Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white ml-3" to="/AboutUs">About Us</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

import React, {Component} from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { Animation, Input, Button,
    Navbar, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,Container,
    Modal, ModalBody, ModalHeader, ModalFooter, MDBDataTable,
    MDBBtn, MDBTable, MDBTableBody, MDBTableHead, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import ManagerHocVienKhoaHoc from "../components/ManagerHocVienKhoaHoc";
class ManagerHocVien extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }


    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render(){
        const { history, match, success, errors, removeError, removeSuccess, coQuanQuanLys } = this.props;
        // console.log(this.props);
        return(
                <div>
                    <Navbar className="p-0 m-0" color="#0277bd light-blue darken-2" expand="md" dark>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav left>
                                <NavItem>
                                    <NavLink className="nav-link m-0" to={`${this.props.match.url}/khoahoc`}>Khóa học</NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                    <div className="my-2 p-0">
                        <div style={{width: "100%"}}>
                            <Route
                                exact
                                path={`${this.props.match.url}/khoahoc`}
                                render={() =>
                                    <ManagerHocVienKhoaHoc
                                        {...this.props}
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(
    ManagerHocVien
);

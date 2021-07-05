import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import OwnerComponent from "./owner/OwnerComponent";
import PetComponent from "./pets/PetComponent";
import "./Header.css";

const Header = () => {
  return (
    <BrowserRouter>
      <Navbar bg="info" variant="dark">
        <NavLink className="link" to="/">
          <Navbar.Brand href="#home">PetServices</Navbar.Brand>
        </NavLink>

        <Nav className="mr-auto">
          <NavLink className="link" to="/">
            Dono
          </NavLink>
          <NavLink className="link" to="/pet">
            Pet
          </NavLink>
          <NavLink className="link" to="/donopet">
            Dono e Pet
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>

      <Route
        path="/"
        exact
        render={() => (
          <>
            <h1>
              <i class="fas fa-users icon text-info"></i>
            </h1>
            <OwnerComponent />
          </>
        )}
      />
      <Route
        path="/pet"
        exact
        render={() => (
          <>
            <h1>
              <i class="fas fa-paw icon text-info"></i>
            </h1>
            <PetComponent />
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Header;

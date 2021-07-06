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
import PetOwnerComponent from "./PetOwner/PetOwnerComponent";

const Header = () => {
  return (
    <BrowserRouter>
      <Navbar bg="info" variant="dark">
        <NavLink className="link" to="/">
          <Navbar.Brand href="#home">
            <i class="fas fa-bone mr-2"></i>PetServices
          </Navbar.Brand>
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
          <FormControl
            type="text"
            placeholder="Pesquisar"
            className="mr-sm-2"
          />
          <Button variant="outline-light">Pesquisar</Button>
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
      <Route
        path="/donopet"
        exact
        render={() => (
          <>
            <h1>
              <i class="fas icon text-info fa-cat"></i>
              <i class="fas icon text-info fa-dog"></i>
            </h1>
            <PetOwnerComponent />
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Header;

import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Dialog.css";

const PetOwnerList = ({ petOwnerList, deletePetOwner }) => {

  let bg = "bg-light";
  let cont = 0;
  return (
    <Container>
      <Row className="bg-light">
        <Col>
          <p>Nome do Dono</p>
        </Col>
        <Col>
          <p>Nome do Pet</p>
        </Col>
        <Col>
          <p>Deletar</p>
        </Col>
      </Row>

      {petOwnerList.map((value) => {
        cont++;
        if (cont % 2 == 0) {
          bg = "bg-light";
        } else {
          bg = "bg-withe";
        }
        return (
          <div className="form">
            <Row className={bg}>
              <Col>
                <p>{value.nome_owner}</p>
              </Col>
              <Col>
                <p>{value.nome_pet}</p>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => {
                    deletePetOwner(value.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default PetOwnerList;

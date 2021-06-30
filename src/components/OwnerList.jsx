import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const OwnerList = ({ owners, deleteOwner }) => {
  let bg = "bg-light";
  let cont = 0;
  return (
    <Container>
      <Row className="bg-light">
        <Col>
          <p>Nome</p>
        </Col>
        <Col>
          <p>CPF</p>
        </Col>
        <Col>
          <p>Data Nascimento</p>
        </Col>
        <Col>
          <p>Sexo</p>
        </Col>
        <Col>
          <p>Deletar</p>
        </Col>
      </Row>

      {owners.map((value) => {
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
                <p>{value.nome}</p>
              </Col>
              <Col>
                <p>{value.cpf}</p>
              </Col>
              <Col>
                <p>{value.data_nascimento}</p>
              </Col>
              <Col>
                <p>{value.sexo}</p>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => {
                    deleteOwner(value.cpf);
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

export default OwnerList;

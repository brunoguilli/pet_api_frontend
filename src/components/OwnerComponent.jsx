import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OwnerComponent = ({ submitOwner }) => {
  const [ownerName, setOwnerName] = useState("");
  const [ownerCpf, setOwnerCpf] = useState("");
  const [ownerData, setOwnerData] = useState("");
  const [ownerSexo, setOwnerSexo] = useState("");

  const handleSubmitOwner = () => {
    submitOwner(ownerName, ownerCpf, ownerData, ownerSexo);
  };

  return (
    <>
      {/* <br /> */}
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Jumbotron className="bg-white">
              <Form>
                <br />
                <Form.Group>
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="ownerName"
                    onChange={(e) => {
                      setOwnerName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>CPF</Form.Label>
                      <Form.Control
                        type="text"
                        name="ownerCpf"
                        onChange={(e) => {
                          setOwnerCpf(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Data de Nascimento</Form.Label>
                      <Form.Control
                        type="date"
                        name="ownerData"
                        onChange={(e) => {
                          setOwnerData(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridSex">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Masculino"
                      name="formHoriRadios"
                      ids="formHoriRadios1"
                      value="M"
                      onChange={(e) => {
                        setOwnerSexo(e.target.value);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Feminino"
                      name="formHoriRadios"
                      ids="formHoriRadios1"
                      value="F"
                      onChange={(e) => {
                        setOwnerSexo(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Button
                  variant="info"
                  type="submit"
                  onClick={handleSubmitOwner}
                >
                  Cadastrar
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OwnerComponent;

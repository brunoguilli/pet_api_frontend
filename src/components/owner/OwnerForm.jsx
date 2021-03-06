import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OwnerForm = ({
  submitOwner,
  ownerNameUpdate,
  ownerCpfUpdate,
  ownerDataUpdate,
  ownerSexoUpdate,
  operationType,
  updateOwner,
  checkedFemale,
  checkedMale,
}) => {
  const [operation, setOperationType] = useState(operationType);
  const [ownerName, setOwnerName] = useState(ownerNameUpdate);
  const [ownerCpf, setOwnerCpf] = useState(ownerCpfUpdate);
  const [ownerData, setOwnerData] = useState(ownerDataUpdate);
  const [ownerSexo, setOwnerSexo] = useState(ownerSexoUpdate);

  const handleSubmitOwner = () => {
    submitOwner(ownerName, ownerCpf, ownerData, ownerSexo);
  };

  const handleUpdateOwner = () => {
    updateOwner(ownerName, ownerCpf, ownerData, ownerSexo);
  };

  const handleOperationSubmit = () => {
    if (operation == "Cadastrar") {
      handleSubmitOwner();
    } else if (operation == "Atualizar") {
      handleUpdateOwner();
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Jumbotron className="bg-white">
              <Form>
                <Form.Group>
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="ownerName"
                    value={ownerName}
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
                        value={ownerCpf}
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
                        value={ownerData}
                        onChange={(e) => {
                          setOwnerData(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridOwnerSex">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setOwnerSexo(e.target.value);
                      }}
                      defaultValue={ownerSexo}
                    >
                      <option>Escolha...</option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                    </Form.Control>
                  </Form.Group>
                </Row>

                {/* <Form.Row>
                  <Form.Group as={Col} controlId="formGridSex">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Masculino"
                      name="formHoriRadios"
                      ids="formHoriRadios1"
                      value="M"
                      checked={checkedMale}
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
                      checked={checkedFemale}
                      onChange={(e) => {
                        setOwnerSexo(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row> */}
                <Button
                  variant="info"
                  type="submit"
                  onClick={handleOperationSubmit}
                >
                  <i class="fas fa-save mr-2"></i>
                  {operation}
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OwnerForm;

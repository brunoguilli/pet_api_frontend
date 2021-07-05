import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PetForm = ({
  submitPet,
  petNameUpdate,
  petRacaUpdate,
  petTipoAnimalUpdate,
  petDataUpdate,
  petSexoUpdate,
  petIdUpdate,
  operationType,
  updatePet,
  checkedFemale,
  checkedMale,
}) => {
  const [operation, setOperationType] = useState(operationType);
  const [petName, setPetName] = useState(petNameUpdate);
  const [petRaca, setPetRaca] = useState(petRacaUpdate);
  const [petData, setPetData] = useState(petDataUpdate);
  const [petSexo, setPetSexo] = useState(petSexoUpdate);
  const [petId, setPetId] = useState(petIdUpdate);
  const [petTipoAnimal, setPetTipoAnimal] = useState(petTipoAnimalUpdate);

  const handleSubmitPet = () => {
    submitPet(petName, petTipoAnimal, petData, petSexo, petRaca);
  };

  const handleUpdatePet = () => {
    console.log("petId -> " + petId);
    updatePet(petId, petName, petData, petSexo, petTipoAnimal, petRaca);
  };

  const handleOperationSubmit = () => {
    if (operation == "Cadastrar") {
      handleSubmitPet();
    } else if (operation == "Atualizar") {
      handleUpdatePet();
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
                  <Form.Label>Nome do Pet</Form.Label>
                  <Form.Control
                    type="text"
                    name="petName"
                    value={petName}
                    onChange={(e) => {
                      setPetName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Raça</Form.Label>
                      <Form.Control
                        type="text"
                        name="petRaca"
                        value={petRaca}
                        onChange={(e) => {
                          setPetRaca(e.target.value);
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
                        value={petData}
                        onChange={(e) => {
                          setPetData(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridTypeAnimal">
                    <Form.Label>Tipo de Animal</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setPetTipoAnimal(e.target.value);
                      }}
                      defaultValue={petTipoAnimal}
                    >
                      <option>Escolha...</option>
                      <option value="1">Cachorro</option>
                      <option value="2">Gato</option>
                    </Form.Control>
                  </Form.Group>
                </Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridSex">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Macho"
                      name="formHoriRadios"
                      ids="formHoriRadios1"
                      value="M"
                      checked={checkedMale}
                      onChange={(e) => {
                        setPetSexo(e.target.value);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Fêmea"
                      name="formHoriRadios"
                      ids="formHoriRadios1"
                      value="F"
                      checked={checkedFemale}
                      onChange={(e) => {
                        setPetSexo(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Button
                  variant="info"
                  type="submit"
                  onClick={handleOperationSubmit}
                >
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

export default PetForm;

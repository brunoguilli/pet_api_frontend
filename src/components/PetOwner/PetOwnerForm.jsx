import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PetOwnerForm = ({
  submitPetOwner,
  operationType,
  updatePetOwner,
  ownerUpdateId,
  petUpdateId,
  petOwnerUpdateId,
  ownerList,
  petList,
}) => {
  const [operation, setOperationType] = useState(operationType);
  const [ownerId, setOwnerId] = useState(ownerUpdateId);
  const [petId, setPetId] = useState(petUpdateId);
  const [petOwnerId, setPetOwnerId] = useState(petOwnerUpdateId);

  const handleSubmitPetOwner = () => {
    submitPetOwner(ownerId, petId);
  };

  const handleUpdatePetOwner = () => {
    updatePetOwner(petOwnerId, ownerId, petId);
  };

  const handleOperationSubmit = () => {
    if (operation == "Cadastrar") {
      handleSubmitPetOwner();
    } else if (operation == "Atualizar") {
      handleUpdatePetOwner();
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Jumbotron className="bg-white">
              <Form>
                <Row>
                  <Form.Group as={Col} controlId="formGridTypeAnimal">
                    <Form.Label>Selecione o Dono</Form.Label>
                    <Form.Control
                      as="select"
                        onChange={(e) => {
                          setOwnerId(e.target.value);
                        }}
                        defaultValue={ownerId}
                    >
                      <option>Escolha...</option>
                      {ownerList.map((value) => {
                        return <option value={value.id}>{value.nome}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridTypeAnimal">
                    <Form.Label>Selecione o Pet</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setPetId(e.target.value);
                      }}
                      defaultValue={petId}
                    >
                      <option>Escolha...</option>
                      {petList.map((value) => {
                        return <option value={value.id}>{value.nome}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                </Row>

                <Button
                  variant="info"
                  type="submit"
                  onClick={handleOperationSubmit}
                ><i class="fas fa-save mr-2"></i>
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

export default PetOwnerForm;

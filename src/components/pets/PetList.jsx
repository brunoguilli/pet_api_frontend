import React, { useState } from "react";
import { format } from "date-fns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import "./Dialog.css";
import PetForm from "./PetForm";

const PetList = ({ pets, updatePet, deletePet, getPetById }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [petName, setPetName] = useState("");
  const [petRaca, setPetRaca] = useState("");
  const [petData, setPetData] = useState("");
  const [petSexo, setPetSexo] = useState("");
  const [petTipoAnimalUpdate, setPetTipoAnimalUpdate] = useState("");
  const [petId, setPetId] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);

  const setPetValues = (value) => {
    setPetName(value.nome);
    setPetRaca(value.raca);
    setPetId(value.id);
    var date = new Date(value.data_nascimento);
    var formattedDate = format(date, "yyyy-MM-dd");
    setPetData(formattedDate);
    setPetSexo(value.sexo);
    setPetTipoAnimalUpdate(value.tipo_animal);
    if (value.sexo == "M") {
      setCheckedMale(true);
      setCheckedFemale(false);
    } else {
      setCheckedFemale(true);
      setCheckedMale(false);
    }
  };

  const handleGetPetById = () => {
    getPetById(petId);
  };

  let bg = "bg-light";
  let cont = 0;

  return (
    <Container>
      <Modal className="custom-dialog" isOpen={modalIsOpen}>
        <Container className="container-dialog">
          <h3 style={{ textAlign: "center", fontSize: 22 }}>
            Alterar Registro
          </h3>
          <PetForm
            petNameUpdate={petName}
            petRacaUpdate={petRaca}
            petDataUpdate={petData}
            petSexoUpdate={petSexo}
            petTipoAnimalUpdate={petTipoAnimalUpdate}
            petIdUpdate={petId}
            checkedMale={checkedMale}
            checkedFemale={checkedFemale}
            operationType={"Atualizar"}
            updatePet={updatePet}
          />

          <a
            className="link"
            class="fas fa-times text-danger ml-3 mb-1"
            style={{ height: 50, fontSize: 40 }}
            onClick={() => setModalIsOpen(false)}
          ></a>
        </Container>
      </Modal>

      <Container>
        <Row className="mb-5">
          <input
            type="text"
            style={{ width: "30%" }}
            className="ml-0"
            placeholder="Informe o ID"
            onChange={(e) => {
              setPetId(e.target.value);
            }}
          />
          <Button variant="white" onClick={handleGetPetById}>
            <i class="fas fa-search text-info"></i>
          </Button>
        </Row>
      </Container>

      <Row className="bg-light">
        <Col>
          <p>ID</p>
        </Col>
        <Col>
          <p>Nome</p>
        </Col>
        <Col>
          <p>Tipo</p>
        </Col>
        <Col>
          <p>Raça</p>
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
        <Col>
          <p>Editar</p>
        </Col>
      </Row>

      {pets.map((value) => {
        cont++;
        if (cont % 2 == 0) {
          bg = "bg-light";
        } else {
          bg = "bg-withe";
        }
        var date = new Date(value.data_nascimento);
        var formattedDate = format(date, "dd/MM/yyyy");
        var tipoAnimal;

        if(value.tipo_animal == 1 ){
            tipoAnimal = "Cachorro";
        } else {
            tipoAnimal = "Gato";
        }

        return (
          <div className="form">
            <Row className={bg}>
              <Col>
                <p>{value.id}</p>
              </Col>
              <Col>
                <p>{value.nome}</p>
              </Col>
              <Col>
                <p>{tipoAnimal}</p>
              </Col>
              <Col>
                <p>{value.raca}</p>
              </Col>
              <Col>
                <p>{formattedDate}</p>
              </Col>
              <Col>
                <p>{value.sexo}</p>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => {
                    deletePet(value.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  onClick={() => {
                    setModalIsOpen(true);
                    setPetValues(value);
                  }}
                >
                  <i class="fas fa-edit"></i>
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default PetList;

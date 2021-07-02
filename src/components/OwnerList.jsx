import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import "./Dialog.css";

const OwnerList = ({ owners, updateOwner, deleteOwner }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [ownerCpf, setOwnerCpf] = useState("");
  const [ownerData, setOwnerData] = useState("");
  const [ownerSexo, setOwnerSexo] = useState("");

  const setOwnerValues = (value) => {
    setOwnerName(value.nome);
    setOwnerCpf(value.cpf);
    setOwnerData(value.data_nascimento);
    setOwnerSexo(value.sexo);
  };

  const handleUpdateOwner = () => {
    updateOwner(ownerName, ownerCpf, ownerData, ownerSexo);
  };

  let bg = "bg-light";
  let cont = 0;

  return (
    <Container>
      <Modal className="custom-dialog" isOpen={modalIsOpen}>
        <div className="header-dialog"></div>
        <Container className="container-dialog">
          <input
            type="text"
            value={ownerName}
            onChange={(e) => {
              setOwnerName(e.target.value);
            }}
          />
          <input
            type="text"
            value={ownerCpf}
            onChange={(e) => {
              setOwnerCpf(e.target.value);
            }}
          />
          <input
            type="date"
            value={ownerData}
            onChange={(e) => {
              setOwnerData(e.target.value);
            }}
          />
          <input
            type="text"
            value={ownerSexo}
            onChange={(e) => {
              setOwnerSexo(e.target.value);
            }}
          />
          <Button variant="primary" onClick={() => setModalIsOpen(false)}>
            Voltar
          </Button>
          <Button variant="primary" onClick={handleUpdateOwner}>
            Salvar
          </Button>
        </Container>
      </Modal>

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
        <Col>
          <p>Editar</p>
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
              <Col>
                <Button
                  variant="info"
                  onClick={() => {
                    setModalIsOpen(true);
                    setOwnerValues(value);
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

export default OwnerList;

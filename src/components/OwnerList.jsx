import React, { useState } from "react";
import { format } from "date-fns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import OwnerComponent from "./OwnerComponent";
import "./Dialog.css";

const OwnerList = ({ owners, updateOwner, deleteOwner, getOwnerByCpf }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [ownerCpf, setOwnerCpf] = useState("");
  const [ownerData, setOwnerData] = useState("");
  const [ownerSexo, setOwnerSexo] = useState("");

  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);

  const setOwnerValues = (value) => {
    setOwnerName(value.nome);
    setOwnerCpf(value.cpf);
    var date = new Date(value.data_nascimento);
    var formattedDate = format(date, "yyyy-MM-dd");
    setOwnerData(formattedDate);
    setOwnerSexo(value.sexo);
    if (value.sexo == "M") {
      setCheckedMale(true);
      setCheckedFemale(false);
    } else {
      setCheckedFemale(true);
      setCheckedMale(false);
    }
  };

  const handleGetOwnerByCpf = () => {
    getOwnerByCpf(ownerCpf);
  };

  let bg = "bg-light";
  let cont = 0;

  return (
    <Container>
      <Modal className="custom-dialog" isOpen={modalIsOpen}>
        <Container className="container-dialog">
          <h3 style={{textAlign:"center", fontSize: 22}}>Alterar Registro</h3>
          <OwnerComponent
            ownerNameUpdate={ownerName}
            ownerCpfUpdate={ownerCpf}
            ownerDataUpdate={ownerData}
            ownerSexoUpdate={ownerSexo}
            checkedMale={checkedMale}
            checkedFemale={checkedFemale}
            operationType={"Atualizar"}
            updateOwner={updateOwner}
          />

          <a className="link"
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
            placeholder="Informe o CPF"
            onChange={(e) => {
              setOwnerCpf(e.target.value);
            }}
          />
          <Button variant="white" onClick={handleGetOwnerByCpf}>
            <i class="fas fa-search text-info"></i>
          </Button>
        </Row>
      </Container>

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
        var date = new Date(value.data_nascimento);
        var formattedDate = format(date, "dd/MM/yyyy");

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
                <p>{formattedDate}</p>
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

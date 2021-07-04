import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Header from "./components/Header";
import OwnerComponent from "./components/OwnerComponent";
import OwnerList from "./components/OwnerList";
import Footer from "./components/Footer";

function App() {
  // const [ownerName, setOwnerName] = useState("");
  // const [ownerCpf, setOwnerCpf] = useState("");
  // const [ownerData, setOwnerData] = useState("");
  // const [ownerSexo, setOwnerSexo] = useState("");

  const [ownerList, setOwnerList] = useState([]);

  // const [newOwner, setNewOwner] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/v1/owners").then((response) => {
      setOwnerList(response.data);
    });
  }, []);

  // submitOwner(ownerName,ownerCpf,ownerData,ownerSexo);
  const submitOwner = (name, cpf, data, sexo) => {
    Axios.post("http://localhost:3000/v1/owners", {
      cpf: cpf,
      nome: name,
      data_nascimento: data,
      sexo: sexo,
    });

    alert("Owner cadastrado com sucesso!");

    setOwnerList([
      ...ownerList,
      {
        cpf: cpf,
        nome: name,
        data_nascimento: data,
        sexo: sexo,
      },
    ]);
  };

  const deleteOwner = (cpf) => {
    Axios.delete(`http://localhost:3000/v1/owners/${cpf}`);

    const newOwners = ownerList.filter((owner) => owner.cpf != cpf);
    setOwnerList(newOwners);
  };

  const getOwnerByCpf = (cpf) => {
    console.log("cpf -> " + cpf);
    if (!!cpf) {
      console.log("2cpf -> " + cpf);
      const owner = ownerList.filter((owner) => owner.cpf == cpf);
      setOwnerList(owner);
    } else {
      Axios.get("http://localhost:3000/v1/owners").then((response) => {
        setOwnerList(response.data);
      });
    }
  };

  const updateOwner = (name, cpf, data, sexo) => {
    Axios.put(`http://localhost:3000/v1/owners/${cpf}`, {
      cpf: cpf,
      nome: name,
      data_nascimento: data,
      sexo: sexo,
    });

    alert("Owner atualizado com sucesso!");
    const newOwners = ownerList.filter((owner) => owner.cpf != cpf);
    setOwnerList(newOwners);
    setOwnerList([
      ...newOwners,
      {
        cpf: cpf,
        nome: name,
        data_nascimento: data,
        sexo: sexo,
      },
    ]);
  };

  return (
    <div className="App">
      <Header />
      <OwnerComponent submitOwner={submitOwner} operationType={"Cadastrar"} />
      <OwnerList
        owners={ownerList}
        updateOwner={updateOwner}
        deleteOwner={deleteOwner}
        getOwnerByCpf={getOwnerByCpf}
      />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./OwnerForm.css";

const OwnerForm = ({ owners, submitOwner }) => {
    const [ownerName, setOwnerName] = useState("");
    const [ownerCpf, setOwnerCpf] = useState("");
    const [ownerData, setOwnerData] = useState("");
    const [ownerSexo, setOwnerSexo] = useState("");

    const handleSubmitOwner = () => {
      submitOwner(ownerName, ownerCpf, ownerData, ownerSexo);
    };

  return (
    <>
      <div className="form">
        <h1>Dono do pet</h1>
        <label>Nome Completo:</label>
        <input
          type="text"
          name="ownerName"
          onChange={(e) => {
            setOwnerName(e.target.value);
          }}
        ></input>
        <label>CPF:</label>
        <input
          type="text"
          name="ownerCpf"
          onChange={(e) => {
            setOwnerCpf(e.target.value);
          }}
        ></input>
        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="ownerData"
          onChange={(e) => {
            setOwnerData(e.target.value);
          }}
        ></input>
        <label>Sexto:</label>
        <input
          type="text"
          name="ownerSexo"
          onChange={(e) => {
            setOwnerSexo(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmitOwner}>Submit </button>
      </div>
    </>
  );
};

export default OwnerForm;

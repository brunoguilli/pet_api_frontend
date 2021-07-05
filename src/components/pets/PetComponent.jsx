import React, { useState, useEffect } from "react";
import Axios from "axios";
import PetForm from "./PetForm";
import PetList from "./PetList";

const PetComponent = () => {
  const [petList, setpetList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/v1/pets").then((response) => {
      setpetList(response.data);
    });
  }, []);

  // submitOwner(ownerName,ownerCpf,ownerData,petsexo);
  const submitPet = (name, tipoAnimal, data, sexo, raca) => {
    Axios.post("http://localhost:3000/v1/pets", {
      tipo_animal: tipoAnimal,
      nome: name,
      data_nascimento: data,
      sexo: sexo,
      raca: raca,
    });

    alert("Pet cadastrado com sucesso!");

    setpetList([
      ...petList,
      {
        tipo_animal: tipoAnimal,
        nome: name,
        data_nascimento: data,
        sexo: sexo,
        raca: raca,
      },
    ]);
  };

  const deletePet = (id) => {
    Axios.delete(`http://localhost:3000/v1/pets/${id}`);

    const newpets = petList.filter((pet) => pet.id != id);
    setpetList(newpets);
  };

  const getPetById = (id) => {
    if (!!id) {
      const pet = petList.filter((pet) => pet.id == id);
      setpetList(pet);
    } else {
      Axios.get("http://localhost:3000/v1/pets").then((response) => {
        setpetList(response.data);
      });
    }
  };

  const updatePet = (id, name, data, sexo, tipoAnimal, raca) => {
    Axios.put(`http://localhost:3000/v1/pets/${id}`, {
      tipo_animal: tipoAnimal,
      nome: name,
      data_nascimento: data,
      sexo: sexo,
      raca: raca,
    });

    alert("Pet atualizado com sucesso!");
    const newpets = petList.filter((pet) => pet.id != id);
    setpetList(newpets);
    setpetList([
      ...newpets,
      {
        tipo_animal: tipoAnimal,
        nome: name,
        data_nascimento: data,
        sexo: sexo,
        raca: raca,
      },
    ]);
  };
  return (
    <>
      <PetForm
        submitPet={submitPet}
        updatePet={updatePet}
        operationType={"Cadastrar"}
      />
      <PetList
        pets={petList}
        updatePet={updatePet}
        deletePet={deletePet}
        getPetById={getPetById}
      />
    </>
  );
};

export default PetComponent;

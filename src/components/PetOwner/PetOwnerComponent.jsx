import React, { useState, useEffect } from "react";
import Axios from "axios";
import PetOwnerForm from "./PetOwnerForm";
import PetOwnerList from "./PetOwnerList";

const PetOwnerComponent = () => {
  const [petOwnerList, setPetOwnerList] = useState([]);
  const [ownerList, setOwnerList] = useState([]);
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/v1/petowners/name").then((response) => {
      setPetOwnerList(response.data);
    });
    Axios.get("http://localhost:3000/v1/owners").then((response) => {
      setOwnerList(response.data);
    });
    Axios.get("http://localhost:3000/v1/pets").then((response) => {
      setPetList(response.data);
    });
  }, []);

  // submitOwner(ownerName,ownerCpf,ownerData,ownerSexo);
  const submitPetOwner = (owner_id, pet_id) => {
    Axios.post("http://localhost:3000/v1/petowners", {
      owner_id: owner_id,
      pet_id: pet_id,
    });

    alert("Vínculo cadastrado com sucesso!");

    setPetOwnerList([
      ...petOwnerList,
      {
        // id: id,
        owner_id: owner_id,
        pet_id: pet_id,
      },
    ]);
  };

  const deletePetOwner = (id) => {
    Axios.delete(`http://localhost:3000/v1/petowners/${id}`);

    const newPetOwners = petOwnerList.filter((petOwner) => petOwner.id != id);
    setPetOwnerList(newPetOwners);
  };

  const getOwnerByCpf = (cpf) => {
    console.log("cpf -> " + cpf);
    if (!!cpf) {
      console.log("2cpf -> " + cpf);
      const owner = petOwnerList.filter((owner) => owner.cpf == cpf);
      setPetOwnerList(owner);
    } else {
      Axios.get("http://localhost:3000/v1/owners").then((response) => {
        setPetOwnerList(response.data);
      });
    }
  };

  const updatePetOwner = (id, owner_id, pet_id) => {
    Axios.put(`http://localhost:3000/v1/owners/${id}`, {
      id: id,
      owner_id: owner_id,
      pet_id: pet_id,
    });

    alert("Owner atualizado com sucesso!");
    const newPetOwners = petOwnerList.filter((opetOwner) => opetOwner.id != id);
    setPetOwnerList(newPetOwners);
    setPetOwnerList([
      ...newPetOwners,
      {
        id: id,
        owner_id: owner_id,
        pet_id: pet_id,
      },
    ]);
  };

  return (
    <>
      <PetOwnerForm
        submitPetOwner={submitPetOwner}
        updatePetOwner={updatePetOwner}
        operationType={"Cadastrar"}
        ownerList={ownerList}
        petList={petList}
        petOwnerList={petOwnerList}
      />
      <PetOwnerList
        petOwnerList={petOwnerList}
        deletePetOwner={deletePetOwner}
      />
    </>
  );
};

export default PetOwnerComponent;

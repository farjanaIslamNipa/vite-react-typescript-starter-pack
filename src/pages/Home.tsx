import {useEffect, useState} from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Container from "../components/ui/Container";
import NormalForm from "../components/NormalForm/NormalForm";

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal(prev => !prev)
  }

 
  return (
    <Container>
      <Button onClick={() =>setModal(prev => !prev)}>Open Modal</Button>
      <Modal isOpen={modal} onClose={handleModalClose}>
        <h1 >This is modal</h1>
        <Modal.Header>
          <h2>This is modal header</h2>
        <Modal.CloseButton />
        </Modal.Header>

      </Modal>

      <div className="mt-5">
        <NormalForm />
      </div>
    </Container>
  );
};

export default Home;
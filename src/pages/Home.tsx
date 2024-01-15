import {useEffect, useState} from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal(prev => !prev)
  }

 
  return (
    <div>
      <Button onClick={() =>setModal(prev => !prev)}>Open Modal</Button>
      <Modal isOpen={modal} onClose={handleModalClose}>
        <h1>This is modal</h1>
      </Modal>
    </div>
  );
};

export default Home;
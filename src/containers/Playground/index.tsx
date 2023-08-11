import { useState } from "react";
import Button from "components/Button";
import Modal from "components/Modal";

const Playground = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button label="test" fill={false} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <div> test</div>
        </Modal>
      )}
    </div>
  );
};

export default Playground;

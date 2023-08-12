import { useState } from 'react';

import { motion } from 'framer-motion';

import Button from 'components/Button';
import Modal from 'components/Modal';

const MotionButton = motion(Button);

const Playground = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <MotionButton
        label="test"
        fill={false}
        onClick={() => setIsOpen(true)}
        noPadding
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
      />
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <div> test</div>
        </Modal>
      )}

      <Button label="test" fill={false} onClick={() => setIsOpen(true)} />
    </div>
  );
};

export default Playground;

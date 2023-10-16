import { ModalCar } from 'components/ModalCar/ModalCar';
import { Btn } from './ButtonLearnMore.styled';
import { useState, useEffect } from 'react';



export const ButtonLearnMore =
  ({  car  }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
useEffect(() => {
  if (isModalOpen) {
     document.body.style.overflow = 'hidden';
  } 
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isModalOpen]);
    
     const openModal = () => {
       setIsModalOpen(true);
    };
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    return (
      <div>
        <div>
          <Btn type="button" onClick={openModal}>
            Рецепт
          </Btn>
        </div>
        <>
          <ModalCar isOpen={isModalOpen} onClose={closeModal} car={car} />
        </>
      </div>
    );
  };



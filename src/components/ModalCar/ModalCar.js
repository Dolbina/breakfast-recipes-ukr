import Modal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai';

import {
  CloseBtn,
  CloseBtnWrap,
  ModalWrap,
  Img,
  ImageContainer,
  SubtitleCardForModal,
 
 
} from './ModalCar.styled';

import { SubtitleCardBlue, TextWrapAddress } from 'components/CarCard/CarCard.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(18, 20, 23, 0.50)',
    zIndex: '3',
   
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    borderRadius: '24px',
    outline: 'none',
    padding: '16px',
    zIndex: '999',
  },
};

Modal.setAppElement('#root');

export const ModalCar = ({ car, isOpen, onClose }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Car modal"
    >
      <CloseBtnWrap>
        <CloseBtn aria-label="Close" onClick={onClose}>
          <AiOutlineClose size="24" fill="#121417" />
        </CloseBtn>
      </CloseBtnWrap>
      <ModalWrap>
        <ImageContainer>
          <Img src={car.img} alt={car.title} />
        </ImageContainer>
        <div>
          <SubtitleCardForModal>
            {`${car.title} `}
            <SubtitleCardBlue>{`${car.person}`}</SubtitleCardBlue>
            
          </SubtitleCardForModal>
        </div>
        <TextWrapAddress>
          <p>{`${car.recipe}`}</p>
        </TextWrapAddress>
       
        
      </ModalWrap>
    </Modal>
  );
};



import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ContactModal } from '../components/ContactModal.jsx';

const ModalContext = createContext({
  isOpen: false,
  defaultService: '',
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  const openModal = (service = '') => {
    setDefaultService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDefaultService('');
  };

  return (
    <ModalContext.Provider value={{ isOpen, defaultService, openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} defaultService={defaultService} />
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useModal() {
  return useContext(ModalContext);
}

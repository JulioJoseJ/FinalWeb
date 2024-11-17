import React from 'react';
import './styles/ModelList.css';
import { ModelI } from '../assets/ModelsAsset';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: ModelI | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, model }) => {
  if (!isOpen || !model) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{model.name}</h2>
        <p>Age: {model.age}</p>
        <p>Gender: {model.gender}</p>
        <h3>Portfolio</h3>
        <p>{model.portfolio}</p>
      </div>
    </div>
  );
};

export default Modal;

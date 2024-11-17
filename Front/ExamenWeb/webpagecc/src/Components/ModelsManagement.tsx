import React, { useState } from 'react';
import { ModelI } from '../assets/ModelsAsset';
import './styles/Models.css'
import Modal from './modalPopUp';

// Updated sample data with more female models
const models: ModelI[] = [
  {
    name: 'Jane Doe',
    age: 28,
    gender: 'Female',
    portfolio: 'Jane has worked on numerous high-fashion campaigns and editorial shoots.',
  },
  {
    name: 'Emily Clarke',
    age: 25,
    gender: 'Female',
    portfolio: 'Emily is known for her runway and commercial modeling work.',
  },
  {
    name: 'Sophia Martinez',
    age: 30,
    gender: 'Female',
    portfolio: 'Sophia has extensive experience in both print and television modeling.',
  },
  {
    name: 'Olivia Johnson',
    age: 22,
    gender: 'Female',
    portfolio: 'Olivia has made a name for herself in the fashion industry with her unique style.',
  },
  {
    name: 'Ava White',
    age: 27,
    gender: 'Female',
    portfolio: 'Ava is recognized for her versatile looks and work with international brands.',
  },
  {
    name: 'Isabella Thompson',
    age: 29,
    gender: 'Female',
    portfolio: 'Isabella has a successful career in both high-fashion and commercial modeling.',
  },
  {
    name: 'Mia Davis',
    age: 24,
    gender: 'Female',
    portfolio: 'Mia is a rising star in the modeling world with several major ad campaigns.',
  },
  {
    name: 'Charlotte Harris',
    age: 31,
    gender: 'Female',
    portfolio: 'Charlotte is known for her work in lifestyle and beauty modeling.',
  },
  {
    name: 'Amelia Lewis',
    age: 26,
    gender: 'Female',
    portfolio: 'Amelia has worked with top designers and appeared in numerous fashion magazines.',
  },
  {
    name: 'Ella Wilson',
    age: 23,
    gender: 'Female',
    portfolio: 'Ella is celebrated for her editorial work and dynamic runway presence.',
  }
];

const ModelList: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelI | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (model: ModelI) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  return (
    <div className='ModelsSection'>
      <h1 className='modelListTitle'>Model List</h1>
      <div className='modelList'>
      <ul>
        {models.map((model, index) => (
          <li className="modelInfo"key={index} onClick={() => openModal(model)}>
            {model.name} - {model.age} - {model.gender}
          </li>
        ))}
      </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} model={selectedModel} />
    </div>
  );
};

export default ModelList;

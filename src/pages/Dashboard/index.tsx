import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Explore repositórios do GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53972764?v=4"
            alt="Samuel Alves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable React & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

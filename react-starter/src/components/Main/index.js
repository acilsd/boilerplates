import React from 'react';

import List from '../List';
import TopForm from '../TopForm';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';

const Main = () => {
  return (
    <div>
      <TopForm />
      <List />
      <ModalDelete />
      <ModalEdit />
    </div>
  );
};

export default Main;

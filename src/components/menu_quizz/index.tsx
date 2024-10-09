import React from 'react';
import { Menu } from 'antd';
import {
  ArrowLeftOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd/lib';

const items: MenuProps['items'] = [
  {
    key: 'back',
    icon: <ArrowLeftOutlined />,
    label: 'Voltar',
  },
  {
    type: 'group',
    key: 'assuntos',
    label: 'ASSUNTOS',
    children: [
      { key: '1', label: 'Informática Básica' },
      { key: '2', label: 'Inglês' },
      { key: '3', label: 'Desenvolvimento Front-end' },
      { key: '4', label: 'Lógica de Programação' },
      { key: '5', label: 'Matemática' },
    ],
  },
];

const MenuQuizz: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        backgroundColor: '#5f89c4', 
        color: '#fff', 
        fontSize: '16px',
        fontWeight: 'bold',
        height:"100vh"
      }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      theme="dark"
    />
  );
};

export default MenuQuizz;

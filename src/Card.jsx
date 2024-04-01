import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardComp = ({ imagem, title, description }) => (
  <Card
    hoverable
    style={{ width: 280, marginBottom: 16, boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)' }}
    cover={<img className="h-1/2" alt="example" src={imagem} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardComp;
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardComp = ({ imagem, title, description }) => (
  <Card
    hoverable
    style={{ width: 280, marginBottom: 16 }}
    cover={<img className="h-1/2" alt="example" src={imagem} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardComp;
import React from 'react';
import { Card as ProductCard } from 'antd';

const Card: React.FC = () => (
  <ProductCard title="Card title" variant="borderless" style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </ProductCard>
);

export default Card;
import React from 'react';

// Estilos
import { Wrapper, Content, Text } from './HeroImage.style';

export default function HeroImage({ image, title, text }) {
  return (
    <>
      <Wrapper image={image} alt={title}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <p>{text}</p>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
}

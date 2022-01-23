import React from 'react';

// Estilos
import { Wrapper, Content } from './MovieGrid.style';

export default function MovieGrid( { header, children } ) {
  return (
    <>
      <Wrapper>
        <h1>{header}</h1>
        <Content>
          {children}
        </Content>
      </Wrapper>
    </>
  )
}

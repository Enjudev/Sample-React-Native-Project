import React from 'react';
import * as S from './styled';
import useBody from './useBody';

const Body = () => {
    const {
        button,
        goToSecond,
        state
      } = useBody();
    return (
    <S.Container>
        <S.Title>This is Home Screen</S.Title>
        <S.Title>{state}</S.Title>
        <S.Button title={button} onPress={goToSecond} />
    </S.Container>
    )
}


export default Body;
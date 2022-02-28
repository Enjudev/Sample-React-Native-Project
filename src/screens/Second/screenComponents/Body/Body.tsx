import React from 'react';
import * as S from './styled';
import useBody from './useBody';
import ScreenRoutes from '../../../../navigation/routes';

const Body = () => {
    const {
        navigation,
        button,
      } = useBody();
    return (
    <S.Container>
        <S.Title>This is Second Screen</S.Title>
        <S.Button title={button} onPress={() => navigation.navigate(ScreenRoutes.Home)} />
    </S.Container>
    )
}


export default Body;
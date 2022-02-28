import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.black};
    font-size:${({theme}) => theme.spacing[2]};  
`;
// cai font size a de nhu binh thuong cung dc ko phai import tu theme lam j

export const Button = styled.Button`
    
`;
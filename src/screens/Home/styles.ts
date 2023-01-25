import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const NavBar = styled.View`
  flex-direction: row;
    justify-content: space-between;
    background-color: black;
`;

export const Title = styled.Text`
    font-weight: bold;
`

export const Button = styled.TouchableOpacity`
    width: 50px;
    height: 20px;
    background-color: #00ba4d;
    align-items: center;
`

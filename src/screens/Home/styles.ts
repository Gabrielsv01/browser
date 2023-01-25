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
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 20px;
  background-color: rgb(0, 186, 77);
  align-items: center;
`;

export const CloudButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: 'rgba(55, 55, 55, 0.8)';
  align-items: center;
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 99;
  border-radius: 5px;
`;

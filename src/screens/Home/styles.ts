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
  width: 18px;
  height: 45px;
  background-color: #00000075;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 99;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Point = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background-color: white;
`;

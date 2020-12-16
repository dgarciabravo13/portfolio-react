import styled from "styled-components";
import { Card, CardTitle } from "react-mdl";

export const Container = styled.div`
  display: flex;
`;

export const CardStyle = styled(Card)`
  min-width: 450;
  margin: auto;
`;

export const TitleStyle = styled(CardTitle)`
  color: #fff;
  height: 176px;
  background: url('https://reactjs.org/logo-og.png') center / cover;
`;

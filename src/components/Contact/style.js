import styled from "styled-components";
import { Grid, ListItemContent,List } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  margin: auto;
  /* position: fixed; */
  width: 100%;
  height: 100%;
  padding-top: 2em;
  justify-content: center;
`;

export const GridStyle = styled(Grid)`
  text-align: center;
  justify-content: center;
  width: 80%;
  height: 575px;
  background: white;
  color: black;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font-family: "Anton", sans-serif;
`;

export const Paragraph = styled.p`
  width: 75%;
  margin: auto;
  padding-top: 1em;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
`;

export const HR = styled.hr`
  border-top: 5px dotted black;
  width: 50%;
  margin: auto;
`;

export const Content = styled(List)`
  display: flex;
  flex-flow: column wrap;
  height:75%;
  justify-content:space-evenly;
`;

export const ItemContent = styled(ListItemContent)`
  font-size: 25px;
  font-family: "Anton", sans-serif;
  justify-content:center;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding-right: 1em;
`;

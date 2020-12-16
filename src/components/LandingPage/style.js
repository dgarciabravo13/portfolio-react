import styled from "styled-components";
import { Grid } from "react-mdl";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const GridStyle = styled(Grid)`
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Img = styled.img`
  height: 250px;
  padding-top: 5em;
`;

export const BannerText = styled.div`
  background-color: black;
  opacity: 0.8;
  width: 75%;
  margin: auto;
  border-radius: 10px;
`;

export const H1 = styled.h1`
  font-size: 66px;
  font-weight: bold;
  color: white;
`;

import styled from "styled-components";
import {device} from "../../device";
import { Grid } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  text-align:center;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;

export const Img = styled.img`
  height: 150px;
  padding-top: 5em;
  @media ${device.tablet} {
    height: 250px;
  }
`;

export const BannerText = styled.div`
  background-color: black;
  opacity: 0.8;
  width: 75%;
  margin: auto;
  border-radius: 10px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding-top:1em;
  @media ${device.tablet} {
    font-size: 66px;
    padding-top:0;
  }

`;

export const HR = styled.hr`
  border-top: 2px dotted white;
  width:50%;
  margin:auto;
  @media ${device.tablet} {
    border-top: 5px dotted white;
    width:50%;
  }
`;

export const Paragraph = styled.p`
  color:white;
  font-size: 10px;
  padding: 1em;
  @media ${device.tablet} {
    font-size: 20px;
    padding: 1em;
  }
`;

export const SocialLinks = styled.div`
  display:flex;
  justify-content:space-evenly;
  width:50%;
  margin:auto;
`;

export const Icon = styled(FontAwesomeIcon)`
  color:white;
  font-size:2em;
  padding:8px;
  @media ${device.tablet} {
    font-size: 5em;
  }
`;

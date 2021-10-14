import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    is_left,
    is_between,
    margin,
    padding,
    bg,
    width,
    onClick,
    children,
  } = props;
  const styles = {
    is_flex: is_flex,
    is_between: is_between,
    margin: margin,
    padding: padding,
    bg: bg,
    width: width,
    is_left,
  };
  return (
    <React.Fragment>
      <GridBox onClick={onClick} {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};
Grid.defaultProps = {
  is_flex: false,
  is_left: false,
  is_between: false,
  margin: false,
  padding: false,
  bg: false,
  width: "100%",
  onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding : ${props.padding}` : "")};
  ${(props) => (props.bg ? `padding : ${props.bg}` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between`
      : ""};
  ${(props) =>
    props.is_left
      ? `display: flex; align-items: center; justify-content: flex-start`
      : ""};
  ${(props) =>
    props.is_between
      ? `display: flex; align-items: center; justify-content: space-around`
      : ""};
`;

export default Grid;

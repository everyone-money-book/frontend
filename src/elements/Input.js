import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label, placeholder, type, value, onChange, width, padding, margin } =
    props;
  const styles = {
    width: width,
    padding: padding,
    margin: margin,
  };
  return (
    <React.Fragment>
      <ElInput
        {...styles}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        defaulValue={value}
      />
    </React.Fragment>
  );
};
Input.defaultProps = {
  label: false,
  placeholder: "텍스트를 입력해주세요",
  type: "text",
  value: "",
  onChange: () => {},
  width: "100%",
  padding: false,
  margin: false,
};
const ElInput = styled.input`
  border: 1px solid #808080;
  border-radius: 4px;
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding : ${props.padding}` : "")};
  box-sizing: border-box;
`;
export default Input;

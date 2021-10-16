import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { width, height, margin, padding, text, bg, radius, color, onClick, is_float, children, position } = props;

    const styles = {
        width: width, 
        margin: margin, 
        padding: padding,
        text: text,
        radius: radius,
        position: position,
    }
    if(is_float) {
        return (
            <React.Fragment>
                <FloatButton {...styles} onClick={onClick}>
                    {children}
                </FloatButton>
            </React.Fragment>
        )
    }
 
    return (
        <React.Fragment>
            <ElButton {...styles} onClick={onClick}>
                {children}
            </ElButton>
        </React.Fragment>
    )
}
Button.defaultProps = {
    text: '텍스트',
    is_float: false,
    width: '100%',
    height: '100%',
    margin: false,
    padding: false,
    bg: false,
    color: false,
    onClick: () => {},
    radius: false,
    position: false,
}
const ElButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) => props.margin ? `margin: ${props.margin}`: ''};
    ${(props) => props.padding ? `padding: ${props.padding}`: ''};
    ${(props) => props.bg ? `background-color: ${props.bg}`: ''};
    ${(props) => props.color ? `color: ${props.color}`: ''};
    ${(props) => props.radius ? `border-radius: ${props.radius}`: ''};
    ${(props) => props.position ? `position: absolute; left: 50%; transform: translateX(-50%); : ${props.position}`: ''};
    box-sizing: border-box;
    border: none;
    text-align: center;
    background: #212121;
    color: #fff;
    transition: 0.3s linear;
    cursor: pointer;

    &:hover {
        background: #ddd;
        color: #212121;
    }
`

const FloatButton = styled.button`
    position: fixed;
    right: 16px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    background-color: #f9e000;
    box-sizing: border-box;
    font-weight: 800;
    font-size: 38px;
    border: none;
    border-radius: 50px;
    color: #212121;
`
export default Button
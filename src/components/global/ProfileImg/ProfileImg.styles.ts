import styled from "styled-components";

type StyleImg = {
  width?: string;
  height?: string;
  border?: string;
  pointer?: boolean;
};

export const StyleProfileImg = {
  Wrapper: styled.div`
    position: relative;
    display: inline-block;
  `,
  RoundImg: styled.img<StyleImg>`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border: ${(props) => (props.border ? props.border : 0)};
    border-radius: 100%;
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  EditButton: styled.button`
    position: absolute;
    display: flex;
    bottom: -10px;
    right: -10px;
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
  `,
};

import styled from "styled-components";

type StyleImg = {
  width?: string;
  height?: string;
  border?: string;
  pointer?: boolean;
};

export const StyleProfileImg = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  RoundImg: styled.img<StyleImg>`
    position: relative;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border: ${(props) => (props.border ? props.border : 0)};
    border-radius: 100%;
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  EditButton: styled.button`
    position: absolute;
    padding: 5px;
    cursor: pointer;
    top: 150px;
    left: 260px;
  `,
};

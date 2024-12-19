import styled from "styled-components";

type StyleImg = {
  width?: string;
  height?: string;
  border?: string;
  pointer?: boolean;
  borderRadius?: string;
};

export const StyleProfileImg = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    /* margin: 20px 0; */
  `,
  RoundImg: styled.img<StyleImg>`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border: ${(props) => (props.border ? props.border : 0)};
    border-radius: ${(props) => props.borderRadius || "100%"};
    cursor: ${(props) => props.pointer && "pointer"};
    object-fit: cover;
    position: relative;
  `,
  EditButton: styled.button`
    position: absolute;
    bottom: -10px;
    right: 140px;
    padding: 5px;
    cursor: pointer;
  `,
};

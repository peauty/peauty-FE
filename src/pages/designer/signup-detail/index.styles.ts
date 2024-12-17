import styled from "styled-components";

export const Style = {
  RegisterPageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-bottom: 100px;
  `,
  SectionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 20px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  RowWrapper: styled.div`
    display: flex;
    gap: 8px;
  `,
  ColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `,
  RadioWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  AddWrapper: styled.div`
    width: 60px;
    margin-top: 10px;
  `,
  ImageContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,

  ImageUnit: styled.img`
    width: 100%;
    height: 50px;
    border-radius: 10px;
  `,

  ImageList: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  `,

  ImageItem: styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    /* overflow: hidden; */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  DeleteButton: styled.button`
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
  `,
};

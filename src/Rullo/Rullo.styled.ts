import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: ${(props) => props.theme.gameWidth}px;
  margin: 20px 0;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
`;

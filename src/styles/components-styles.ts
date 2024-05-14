import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const Section = styled.section`
  flex: 1;
  padding: 20px;
`;

export const BookContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

export const BookImage = styled.img`
  width: 100px;
  height: 150px;
`;

export const Button = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const RemoveButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.removeBtn};
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FixedCart = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  height: 100vh;
`;

export const Container = styled.div`
  padding: 32px 32px 0px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 32px;
  top: 32px;
  img {
    height: 88px;
    width: 88px;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  gap: 24px;
`;

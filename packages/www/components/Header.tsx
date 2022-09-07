import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { apiEndpoint } from '../lib/constants';
import styled, { theme } from '../styles';
import SearchPopover from './SearchPopover';
import Text from './Text';

const Header = ({ me }: any) => {
  const [googleAuthUrl, setGoogleAuthUrl] = useState<string | null>(null);
  const [googleAuthError, setGoogleAuthError] = useState<boolean>(false);

  useEffect(() => {
    const getGoogleAuthUrl = async () => {
      const res = await axios.get(`${apiEndpoint}/auth/google?redirect=/`);

      if (!res || !res.data || !res.data.ok || !res.data.authUrl) {
        setGoogleAuthError(true);
      } else {
        setGoogleAuthUrl(res.data.authUrl);
      }
    };

    getGoogleAuthUrl();
  }, []);

  return (
    <>
      <Container>
        <Main>
          <Left>
            <Link href="/">
              <Logo>
                <Text fontSize="3.6rem" fontWeight="700" color="white">
                  Kordio
                </Text>
              </Logo>
            </Link>
            <SearchPopover
              boxShadow="none"
              height="5rem"
              borderRadius="500px"
            />
          </Left>
          <Right>
            {!me && (
              <ButtonNav>
                <LoginButton href={googleAuthUrl!}>Login</LoginButton>
                <AuthButton href={googleAuthUrl!}>Sign up</AuthButton>
              </ButtonNav>
            )}
            {me && (
              <ButtonNav>
                <Link href="/dashboard">
                  <DashboardButton>Dashboard</DashboardButton>
                </Link>
              </ButtonNav>
            )}
          </Right>
        </Main>
        <BorderBottom />
      </Container>
      <Spacer />
    </>
  );
};

const Spacer = styled.div`
  width: 100%;
  height: 10rem;
`;

// const Fixed = styled.div`
//   width: 100%;
//   display: fixed;
// `;

const ButtonNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const AuthButton = styled.a`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  height: 4.4rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 5px;
  padding: 0 3rem;
  justify-content: center;

  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const DashboardButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  height: 4.4rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 5px;
  padding: 0 3rem;
  justify-content: center;

  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const LoginButton = styled.a`
  margin-right: 2rem;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  background: none;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const SubmitResourceButton = styled.button`
  margin-right: 2rem;
  height: 4.2rem;
  border: 1px solid white;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  border-radius: 5000px;
  background: none;
  color: white;

  transition: all 0.7s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Logo = styled.div`
  margin-right: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  width: 70rem;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
`;

const BorderBottom = styled.div`
  height: 1rem;
  width: 100%;
  background: #11fac7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #11fac7,
    #f8ffae
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #11fac7,
    #f8ffae
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  flex-direction: column;
  height: 10rem;
  display: flex;
  z-index: 25;
  width: 100%;
  position: fixed;
`;

const Main = styled.div`
  display: flex;
  height: 10rem;
  padding: 0 3rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export default Header;

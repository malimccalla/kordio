import Link from 'next/link';

import styled from '../styles';
import SearchPopover from './SearchPopover';
import Text from './Text';

const Header = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Link href="/">
            <Logo>
              <Text fontSize="3.6rem" fontWeight="700" color="white">
                KORD
              </Text>
            </Logo>
          </Link>
          <SearchPopover height="5rem" borderRadius="500px" />
        </Left>
        <Right>
          <SubmitResourceButton>Submit Resource</SubmitResourceButton>
          <AuthButton>Signup / Login</AuthButton>
        </Right>
      </Main>
      <BorderBottom />
    </Container>
  );
};

const AuthButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  height: 4.2rem;
  display: flex;
  align-items: center;
  border-radius: 5000px;
  padding: 0 2rem;
  justify-content: center;

  transition: all 0.7s ease;

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
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f8ffae,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #f8ffae, #43c6ac);
`;

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  flex-direction: column;
  height: 10rem;
  width: 100%;
  display: flex;
`;

const Main = styled.div`
  display: flex;
  height: 10rem;
  padding: 0 5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export default Header;

import styled from '../styles';
import SearchPopover from './SearchPopover';
import Text from './Text';

const Header = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Logo>
            <Text fontSize="3.6rem" fontWeight="700" color="white">
              KORD
            </Text>
          </Logo>
          <SearchPopover />
        </Left>
        <Right></Right>
      </Main>
      <BorderBottom />
    </Container>
  );
};

const Logo = styled.div``;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div``;

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
  padding: 0 3rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export default Header;

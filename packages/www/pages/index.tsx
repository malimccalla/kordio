import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Page from '../components/Page';
import Popover from '../components/SearchPopover';
import Text from '../components/Text';
import { apiEndpoint } from '../lib/constants';
import { getCurrentUser } from '../lib/getCurrentUser';
import styled from '../styles';

const Home: NextPage = ({ me }: any) => {
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
    <Page title="Kordio – The #1 Place for music industry contacts and resources">
      <Banner />
      <Container>
        <Header>
          <Logo>Kordio</Logo>
          {!me && (
            <ButtonNav>
              <LoginButton href={googleAuthUrl!}>Login</LoginButton>
              <AuthButton href={googleAuthUrl!}>Sign up</AuthButton>
            </ButtonNav>
          )}
          {me && (
            <ButtonNav>
              <DashboardButton>Dashboard</DashboardButton>
              {/* <Divider />
              <UserSection>
                <Avatar />
                <Text fontWeight="600" color="white">
                  {me.name}
                </Text>
              </UserSection> */}
            </ButtonNav>
          )}
        </Header>
        <Main>
          <Title>The #1 Place to Build Your Team in the Music Industry</Title>
          {/* <Refer>
            (but{' '}
            <Span onClick={() => alert('TODO: Implement referral system')}>
              don&apos;t tell anyone &rarr;
            </Span>{' '}
            🤫)
          </Refer> */}
          <SearchSection>
            <Popover />
            <TrendingSearches>
              Trending: <TrendingSearch>artist management</TrendingSearch>,{' '}
              <TrendingSearch>radio stations</TrendingSearch>,{' '}
              <TrendingSearch>music blogs</TrendingSearch>
            </TrendingSearches>
          </SearchSection>

          <Grid>
            <Card>
              <CardTitle>Radio, Blogs, & Media &rarr;</CardTitle>
              <CardDescription>
                Submit your music to tastemakers and brands accross Radio, Blogs
                & Media.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Networking & Events &rarr;</CardTitle>
              <CardDescription>
                Mingle with industry folk at upcoming events hosted in your area
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Fan Engagement &rarr;</CardTitle>
              <CardDescription>
                Growth and engagement tips for nurturing a sustainable fanbase
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Record Labels &rarr;</CardTitle>
              <CardDescription>
                Contact record label execs and get your music heard by A&Rs!
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Tools & Technology &rarr;</CardTitle>
              <CardDescription>
                Leverage the latest technology to keep up to date with industry
                trends
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Law & Business &rarr;</CardTitle>
              <CardDescription>
                Tips and contacts to help make sense of the legal side of the
                industry
              </CardDescription>
            </Card>
          </Grid>
          <AllCategoriesButton>More Categories</AllCategoriesButton>
        </Main>
      </Container>
    </Page>
  );
};

const Banner = styled.div`
  height: 1rem;
  background-color: ${(props) => props.theme.colors.pink};
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

  width: 100%;
`;

const Container = styled.div`
  padding: 3.5rem;
  background-color: ${(props) => props.theme.colors.black};
`;

const Avatar = styled.div`
  height: 4.4rem;
  width: 4.4rem;
  margin-right: 2rem;
  border-radius: 5000px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AllCategoriesButton = styled.button`
  height: 5.2rem;
  width: 18rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.black};

  transition: all 1s ease;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Divider = styled.div`
  height: 4.4rem;
  width: 1px;
  background-color: #999;
  margin: 0 3rem;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  color: white;
  max-width: 108rem;
  text-align: center;
  font-size: 7.4rem;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 6rem;
  max-width: 108rem;
`;

const CardTitle = styled.h2`
  font-size: 2.2rem;
  color: white; //${(props) => props.theme.colors.primary};
`;

const CardDescription = styled.p`
  margin-top: 1rem;
  color: #d8d8d8;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid #999;
  flex-direction: column;
  color: white;
  transition: transform 0.5s ease;
  max-width: 33.5rem;
  min-height: 20.7rem;
  text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    border: 1px solid white;
  }

  &:hover ${CardTitle} {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover ${CardDescription} {
    color: white;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

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

const Refer = styled.p`
  margin: 2.4rem 0;
  margin-bottom: 4rem;
  font-size: 2rem;
  color: white;
  font-weight: 500;
`;

const SearchSection = styled.div`
  max-width: 64rem;
  margin-top: 5rem;
  width: 100%;
`;

const TrendingSearch = styled.span`
  color: #d8d8d8;

  transition: all 300ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

const TrendingSearches = styled.p`
  color: white;
  margin-top: 1.4rem;
`;

const Logo = styled.div`
  color: white;
  font-weight: 700;
  font-size: 3.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export default Home;

import type { NextPage } from 'next';
import {
  Configure,
  Highlight,
  Hits,
  Index,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom';

import Page from '../components/Page';
import Popover from '../components/SearchPopover';
import { searchClient } from '../lib/searchClient';
import styled from '../styles';

const Home: NextPage = () => {
  return (
    <Page title="KORD – The #1 Place for music industry contacts and resources">
      <Banner />
      <Container>
        <Header>
          <Logo>Platform.</Logo>
          <ButtonNav>
            <SubmitResourceButton>Submit Resource</SubmitResourceButton>
            <AuthButton>Signup / Login</AuthButton>
          </ButtonNav>
        </Header>
        <Main>
          <Title>The #1 Place for Music Industry Contacts & Resources</Title>
          <Refer>
            (but{' '}
            <Span onClick={() => alert('TODO: Implement referral system')}>
              don&apos;t tell anyone &rarr;
            </Span>{' '}
            🤫)
          </Refer>

          <SearchSection>
            <Popover />
            <TrendingSearches>
              Trending: <TrendingSearch>logic pro tips</TrendingSearch>,{' '}
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
  width: 100%;
`;

const Container = styled.div`
  padding: 3.5rem;
  background-color: ${(props) => props.theme.colors.black};
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
  height: 4.2rem;
  width: 16rem;
  margin-top: 2rem;
  border-radius: 5000px;
  color: white;

  transition: all 1s ease;
  background-color: ${(props) => props.theme.colors.blue};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
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
    color: ${(props) => props.theme.colors.blue};
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

const ButtonNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

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

const Refer = styled.p`
  margin: 2.4rem 0;
  font-size: 2rem;
  color: white;
  font-weight: 500;
`;

const SearchSection = styled.div`
  max-width: 64rem;
  width: 100%;
`;

const TrendingSearch = styled.span`
  color: #d8d8d8;

  &:hover {
    cursor: pointer;
    color: white;
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
`;

export default Home;

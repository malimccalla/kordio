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
import Popover from '../components/Popover';
import { searchClient } from '../lib/searchClient';
import styled from '../styles';

const Home: NextPage = () => {
  return (
    <Page title="KORD – The #1 Place for music industry contacts and resources">
      <Container>
        <Header>
          <Logo>KORD</Logo>
          <ButtonNav>
            <SubmitResourceButton>Submit Resource</SubmitResourceButton>
            <AuthButton>Signup / Login</AuthButton>
          </ButtonNav>
        </Header>
        <Main>
          <Title>The #1 Place for Music Industry Contacts & Resources</Title>
          <Refer>
            (but <Span>don&apos;t tell anyone</Span> 🤫)
          </Refer>

          <SearchSection>
            <Popover />
            {/* <InstantSearch
              indexName="dev_contacts"
              searchClient={searchClient}
            >
              <SearchBox />
              <Hits />
            </InstantSearch> */}
            <TrendingSearches>
              Trending: logic pro tips, radio stations, music blogs
            </TrendingSearches>
          </SearchSection>

          <Grid>
            <Card>
              <CardTitle>Radio, Blogs, & Media</CardTitle>
              <CardDescription>
                Submit your music to tastemakers and brands accross Radio, Blogs
                & Media.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Networking & Events</CardTitle>
              <CardDescription>
                Mingle with industry folk at upcoming events hosted in your area
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Fan Engagement</CardTitle>
              <CardDescription>
                Growth and engagement tips for growing a sustainable fanbase
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Record Labels</CardTitle>
              <CardDescription>
                Contact record label execs and get your music heard by A&Rs!
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Tools & Technology</CardTitle>
              <CardDescription>
                Leverage the latest technology to keep up to date with industry
                trends
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Law & Business</CardTitle>
              <CardDescription>
                Tips and contacts to help make sense of the legal side of the
                industry
              </CardDescription>
            </Card>
          </Grid>
          <AllCategoriesButton>All Categories</AllCategoriesButton>
        </Main>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  padding: 3.5rem;
  background-image: linear-gradient(
    90deg,
    #000000 0%,
    #c3e1fc 100%,
    #d8ded6 100%
  );
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
  height: 5rem;
  width: 20rem;
  margin-top: 2rem;
  border-radius: 5000px;

  transition: all 1s ease;

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
  flex-direction: column;
  color: white;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 33.5rem;
  min-height: 20.7rem;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
`;

const AuthButton = styled.button`
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 5000px;
  padding: 0 3rem;
  justify-content: center;
`;

const SubmitResourceButton = styled.button`
  margin-right: 3rem;
  height: 5rem;
  border: 1px solid white;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  border-radius: 5000px;
  background: none;
  color: white;
`;

const Refer = styled.p`
  margin: 2.4rem 0;
  margin-top: 3rem;
  font-size: 2rem;
  color: white;
  font-weight: 500;
`;

const CardTitle = styled.h2`
  font-size: 2.2rem;
  text-decoration: underline;
`;

const CardDescription = styled.p`
  margin-top: 1rem;
`;

const SearchSection = styled.div`
  max-width: 64rem;
  width: 100%;
`;

const TrendingSearches = styled.p`
  color: white;
  margin-top: 1rem;
`;

const Logo = styled.div`
  color: white;
  font-weight: 700;
  font-size: 3.2rem;
`;

export default Home;

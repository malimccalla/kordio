import Link from 'next/link';
import { useEffect } from 'react';

import Page from '../components/Page';
import Text from '../components/Text';
import { redirect } from '../lib/redirect';
import styled, { media } from '../styles';

const Dashboard = ({ me }: any) => {
  useEffect(() => {
    if (!me) {
      redirect({}, '/');
    }
  }, [me]);

  if (!me) {
    return null;
  }

  const dummy = [];

  return (
    <Page title="Dashboard">
      {/* <SideNav>
        <SideHeader>
          <Text fontSize="2.4rem" fontWeight="500" color="#999">
            Dashboard
          </Text>
        </SideHeader>
        <SideContent></SideContent>
      </SideNav> */}
      <Container>
        <Content>
          <Text fontSize="2rem" color="#999">
            Dashboard
          </Text>
          <Text
            fontWeight="600"
            paddingTop="1rem"
            fontSize="3.2rem"
            color="white"
          >
            Saved Companies
          </Text>
          <Divider />
          {me.savedCompanies.length < 1 && (
            <EmptyState>
              <Text fontSize="1.8rem" textAlign="center" color="white">
                You have not saved any companies yet. When you do they will
                appear here.
              </Text>
            </EmptyState>
          )}
          <Grid>
            {me.savedCompanies.map((company: any) => (
              <Link key={company.id} href={`/company/${company.id}`}>
                <ResultContainer key={company.id}>
                  <ResultLeft>
                    <ResultImage src={company.imageUrl}>
                      <Text fontWeight="500" fontSize="3rem" color="#999">
                        {company.name[0].toLocaleUpperCase()}
                      </Text>
                    </ResultImage>
                    <TextContainer>
                      <Text fontSize="2rem" fontWeight="500">
                        {company.name}
                      </Text>
                      <Categories>
                        {company.categories.map((category: any) => {
                          return (
                            <Category color={category.color} key={category.id}>
                              {category.name}
                            </Category>
                          );
                        })}
                      </Categories>
                    </TextContainer>
                  </ResultLeft>
                  <ResultRight>
                    <ArrowBox>&rarr;</ArrowBox>
                  </ResultRight>
                </ResultContainer>
              </Link>
            ))}
          </Grid>
        </Content>
      </Container>
    </Page>
  );
};

const SideContent = styled.div`
  width: 100%;
`;

const SideHeader = styled.div`
  height: 8rem;
  padding: 2rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #2e2e2e;
  align-items: center;
`;

const SideNav = styled.div`
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-top: 40rem; */
  background-color: #1b1b1b;
  width: 26rem;
  position: fixed;
  left: 0;
`;

const CTAButton = styled.button`
  height: 7rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: none;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 100%;
  padding-bottom: 5rem;

  ${media.large`
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  `}
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  width: 108rem;
  margin-top: 5rem;
  /* margin-left: 26rem; */ //enable for side nav
`;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  display: flex;
  width: 100%;
`;

//

const Categories = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const Category = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.black};
  height: 1.8rem;
  font-weight: 500;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5000px;
  margin-right: 6px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
`;

const ArrowBox = styled.div`
  height: 3rem;
  width: 3rem;
  color: ${(props) => props.theme.colors.black};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  background-color: white;
  display: none;
`;

const ResultLeft = styled.div`
  display: flex;
`;

const ResultRight = styled.div``;

const ResultImage = styled.div<{ src: string }>`
  width: 6rem;
  height: 6rem;
  display: flex;
  font-size: 2rem;
  background-size: cover;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: linear-gradient(112deg, #eaeaea 0%, #505050 100%);
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 10rem;
  color: white;
  padding: 0 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: #2a2a2a;
  border-radius: 7px;
  border: 1px solid #363636;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    color: white;
  }

  &:hover ${ArrowBox} {
    display: flex;
    background-color: white;
  }

  &:hover ${TextContainer} {
    display: flex;
    color: ${(props) => props.theme.colors.black};
    /* background-color: ${(props) => props.theme.colors.blue}; */
  }
`;

const EmptyState = styled.div`
  width: 100%;
  padding: 3rem;
  border-radius: 8px;
  border: 1px solid #666;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;

  transition: all 0.3s ease;
`;

const DummySearchBox = styled.div<{
  height?: string;
  borderRadius?: string;
  boxShadow?: string;
}>`
  height: ${(props) => props.height || '6rem'};
  display: flex;
  padding-left: 2rem;
  width: 100%;
  align-items: center;
  color: #999999;
  font-size: 1.8rem;
  border: 1px solid white;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.borderRadius || '11px'};

  box-shadow: ${(props) => props.boxShadow || '0 2px 0 0 rgba(197, 197, 197)'};

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #333;
  }

  &:hover ${IconBox} {
    /* transform: rotate(20deg); */
    transform: scale(1.1);
  }
`;

export default Dashboard;

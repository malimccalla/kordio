import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import Page from '../../components/Page';
import Text from '../../components/Text';
import { GET_COMPANY_QUERY } from '../../data/companies';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';
import styled, { media } from '../../styles';

const CompanyPage = ({ data: { company } }: any) => {
  return (
    <Page title="Contact">
      <Container>
        <ContactCard>
          <CardHeader>
            <Picture>
              <Text fontSize="8rem" fontWeight="700" color="#999">
                {company.name[0].toUpperCase()}
              </Text>
            </Picture>
            <HeaderRight>
              <Text
                paddingBottom="2rem"
                fontSize="4.2rem"
                fontWeight="600"
                color="white"
              >
                {company.name}
              </Text>
              <Categories>
                {company.categories.map((category: any) => (
                  <Category color={category.color} key={category.id}>
                    <Text fontSize="1.4rem">{category.name}</Text>
                  </Category>
                ))}
              </Categories>
            </HeaderRight>
          </CardHeader>
          <CardBody>
            <Text fontSize="2rem" fontWeight="500" color="white">
              Overview
            </Text>
            <Details>
              <Detail>
                <DetailKey>
                  <Text color="white">Website:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">
                    <LinkSpan>{company.website}</LinkSpan>
                  </Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text color="white">Contact email:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">{company.contactEmail || 'N/A'}</Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text color="white">Phone:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">{company.phoneNumber || 'N/A'}</Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text color="white">Address:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">
                    {company.address ||
                      'Pepper House, 1 Pepper Road Hazel Grove Stockport SK7 5DP'}
                  </Text>
                </DetailValue>
              </Detail>
            </Details>
          </CardBody>
          <SaveContactButton>
            <Text fontSize="1.8rem">Save Contact</Text>
          </SaveContactButton>
        </ContactCard>
      </Container>
    </Page>
  );
};

const SaveContactButton = styled.div`
  width: 100%;
  height: 6rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  justify-content: center;
  border: 1px solid #999;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`;

const LinkSpan = styled.span`
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DetailKey = styled.div`
  min-width: 20rem;
  font-weight: 500;
`;

const DetailValue = styled.div``;

const Detail = styled.div`
  display: flex;
  margin-bottom: 3rem;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  flex-direction: column;
`;

const CardBody = styled.div`
  margin-top: 4rem;
`;

const Category = styled.div<{ color: string }>`
  height: 2.4rem;
  display: flex;
  padding: 0 1.4rem;
  background-color: ${(props) => props.color};
  border-radius: 1000px;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  align-items: center;
`;

const Categories = styled.div`
  display: flex;
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  justify-content: space-around;
`;

const Picture = styled.div`
  min-height: 12rem;
  min-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-image: linear-gradient(112deg, #eaeaea 0%, #505050 100%);
`;

const ContactCard = styled.div`
  width: 90rem;
  height: 57rem;
  background-color: #111;
  flex-direction: column;
  border: 2px solid #ccc;
  display: flex;
  border-radius: 11px;
  justify-content: space-between;
  padding: 4rem;
  box-shadow: rgba(255, 255, 255, 0.4) 5px 5px,
    rgba(239, 239, 239, 0.2) 10px 10px, rgba(219, 219, 219, 0.1) 15px 15px,
    rgba(38, 172, 221, 0.05) 20px 20px, rgba(204, 30, 141, 0.025) 25px 25px;

  ${media.medium`
    width: 100%;
    border: none;
    height: auto;
    /* height: 100vh; */
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 11rem);
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  console.log('Context query', context.query);

  const where = { id: context.query.id };

  const { data } = await apolloClient.query({
    query: GET_COMPANY_QUERY,
    variables: { where },
  });

  return addApolloState(apolloClient, {
    props: { data },
  });
};

export default CompanyPage;
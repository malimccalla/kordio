import { GetServerSideProps, NextPage } from 'next';

import Page from '../../components/Page';
import Text from '../../components/Text';
import { GET_COMPANY_QUERY } from '../../data/companies';
import styled, { media } from '../../styles';

const CompanyPage: NextPage = ({ data: { company } }: any) => {
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
                fontSize="4rem"
                fontWeight="600"
                color="white"
              >
                {company.name}
              </Text>
              <CTAButtons>
                <SaveContactButton>
                  <Text fontSize="1.8rem">Save</Text>
                </SaveContactButton>
                {/* <SubmitButton>
                  <Text fontSize="1.8rem">Submit Music</Text>
                </SubmitButton> */}
              </CTAButtons>
            </HeaderRight>
          </CardHeader>
          <CardBody>
            <Text fontSize="2.4rem" fontWeight="500" color="white">
              Overview
            </Text>
            <Categories>
              {company.categories.map((category: any) => (
                <Category color={category.color} key={category.id}>
                  <Text fontSize="1.3rem">{category.name}</Text>
                </Category>
              ))}
            </Categories>
            {company.description && (
              <Text
                paddingTop="2rem"
                fontSize="1.5rem"
                lineHeight="1.4"
                color="white"
              >
                {company.description}
              </Text>
            )}
            <Details>
              <Detail>
                <DetailKey>
                  <Text>Website:</Text>
                </DetailKey>
                <DetailValue>
                  <a target="_blank" rel="noreferrer" href={company.website}>
                    <LinkSpan>{company.website}</LinkSpan>
                  </a>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text>Contact email:</Text>
                </DetailKey>
                <DetailValue>
                  <Text>{company.contactEmail || 'N/A'}</Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text>Phone:</Text>
                </DetailKey>
                <DetailValue>
                  <Text>{company.phoneNumber || 'N/A'}</Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text>Address:</Text>
                </DetailKey>
                <DetailValue>
                  <Text>{company.address || 'N/A'}</Text>
                </DetailValue>
              </Detail>
            </Details>
          </CardBody>
        </ContactCard>
      </Container>
    </Page>
  );
};

const Note = styled.div`
  width: 100%;
  background-color: red;
`;

const CTAButtons = styled.div`
  display: flex;
`;

const SaveContactButton = styled.button`
  width: 14rem;
  height: 4rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  width: 16rem;
  height: 4rem;
  margin-left: 1rem;
  border-radius: 1000px;
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.primary};
  align-items: center;
  background-color: black;
  /* background-color: ${(props) => props.theme.colors.primary}; */
  justify-content: center;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const LinkSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DetailKey = styled.div`
  min-width: 20rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
`;

const DetailValue = styled.div`
  font-size: 1.5rem;
  color: white;
`;

const Detail = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  flex-direction: column;
`;

const CardBody = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div<{ color: string }>`
  height: 2.4rem;
  display: flex;
  padding: 0 1.4rem;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  border-radius: 1000px;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  align-items: center;
`;

const Categories = styled.div`
  display: flex;
  margin-top: 2rem;
  float: left;
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const HeaderRight = styled.div`
  flex-direction: column;
  width: 100%;
  margin-left: 3rem;
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
  position: relative;
  overflow: scroll;
  width: 90rem;
  height: 57rem;
  background-color: #111;
  flex-direction: column;
  border: 1px solid #ccc;
  display: flex;
  border-radius: 11px;
  /* justify-content: space-between; */
  padding: 4rem;
  box-shadow: rgba(207, 207, 207, 0.301) 5px 5px,
    rgba(239, 239, 239, 0.3) 10px 10px, rgba(219, 219, 219, 0.1) 15px 15px,
    rgba(38, 172, 221, 0.05) 20px 20px, rgba(204, 30, 141, 0.025) 25px 25px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ${media.medium`
    width: 100%;
    border: none;
    height: auto;
    box-shadow: none;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 11rem);
`;

CompanyPage.getInitialProps = async (context: any) => {
  const where = { id: context.query.id };

  const { data } = await context.apolloClient.query({
    query: GET_COMPANY_QUERY,
    variables: { where },
  });

  return { data };
};

export default CompanyPage;

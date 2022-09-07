import { useMutation, useQuery } from '@apollo/client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { NextPage } from 'next';

import Page from '../../components/Page';
import Text from '../../components/Text';
import {
  GET_COMPANY_QUERY,
  IS_COMPANY_SAVED_BY_USER_QUERY,
  SAVE_COMPANY_MUTATION,
} from '../../data/companies';
import { ME_QUERY } from '../../data/user';
import styled, { media, theme } from '../../styles';

const CompanyPage: NextPage = ({ data: { company, initIsSaved } }: any) => {
  console.log('INIT IS SAVED', initIsSaved);

  const { data, loading } = useQuery(IS_COMPANY_SAVED_BY_USER_QUERY, {
    variables: { where: { id: company.id } },
  });

  console.log('DDDDD', data);

  const [saveCompanyMutation] = useMutation(SAVE_COMPANY_MUTATION, {
    variables: { input: { companyId: company.id } },
    optimisticResponse: {
      saveCompany: {
        __typename: 'SaveCompanyPayload',
        ok: true,
        errors: null,
      },
    },
    refetchQueries: [{ query: ME_QUERY }],
    awaitRefetchQueries: true,
    update: (cache) => {
      cache.writeQuery({
        query: IS_COMPANY_SAVED_BY_USER_QUERY,
        variables: { where: { id: company.id } },
        data: { isCompanySavedByUser: true },
      });
    },
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [60, -60]);
  const rotateY = useTransform(x, [-200, 200], [-60, 60]);

  const contactCardStyle = { x, y, rotateX, rotateY, z: 10 };
  const dragConstraints = { top: 0, bottom: 0, left: 0, right: 0 };

  const onSaveCompany = async () => {
    console.log('Save company');
    const res = await saveCompanyMutation();

    console.log('RES', res);
  };

  return (
    <Page title={company.name}>
      <Container>
        <ContactCard
          style={contactCardStyle}
          drag={true}
          dragElastic={0.08}
          whileHover="dragging"
          whileTap="dragging"
          dragConstraints={dragConstraints}
        >
          <CardHeader>
            <Picture>
              <Text fontSize="8rem" fontWeight="700" color="#999999">
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
                {loading && initIsSaved && (
                  <UnsaveButton onClick={() => console.log('unsave')}>
                    <Text fontSize="1.8rem">Saved</Text>
                  </UnsaveButton>
                )}
                {loading && !initIsSaved && (
                  <SaveButton onClick={onSaveCompany}>
                    <Text fontSize="1.8rem">Save</Text>
                  </SaveButton>
                )}
                {!data || !data.isCompanySavedByUser ? (
                  <SaveButton onClick={onSaveCompany}>
                    <Text fontSize="1.8rem">Save</Text>
                  </SaveButton>
                ) : (
                  <UnsaveButton onClick={() => console.log('unsave')}>
                    <Text fontSize="1.8rem">Saved</Text>
                  </UnsaveButton>
                )}
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
                  <Text color={theme.colors.black} fontSize="1.3rem">
                    {category.name}
                  </Text>
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

const SaveButton = styled.button`
  width: 12rem;
  height: 3.8rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: transparent;
  }
`;

const UnsaveButton = styled.button`
  width: 12rem;
  height: 3.8rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease;
  color: white;
  background-color: transparent;

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

const Picture = styled(motion.div)`
  min-height: 12rem;
  min-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-image: linear-gradient(112deg, #eaeaea 0%, #505050 100%);
`;

const ContactCard = styled(motion.div)`
  position: relative;
  overflow: scroll;
  width: 90rem;
  height: 57rem;
  /* background-color: #2a2a2a; */
  background: linear-gradient(112deg, #2a2a2a 30%, #171717 100%);
  flex-direction: column;
  border: 1px solid #444444;
  display: flex;
  border-radius: 11px;
  /* justify-content: space-between; */
  padding: 4rem;
  box-shadow: rgba(23, 23, 23, 0.301) 5px 5px,
    rgba(114, 114, 114, 0.3) 10px 10px, rgba(49, 49, 49, 0.1) 15px 15px,
    rgba(0, 0, 0, 0.094) 20px 20px;

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
  position: relative;
  align-items: center;
  justify-content: center;
  perspective: 2400;
  z-index: 30; // Greater than header, less than modal
  width: 100%;
  height: calc(100vh - 11rem);
`;

CompanyPage.getInitialProps = async (context: any) => {
  const where = { id: context.query.id };

  const { data } = await context.apolloClient.query({
    query: GET_COMPANY_QUERY,
    variables: { where },
  });

  const res = await context.apolloClient.query({
    query: IS_COMPANY_SAVED_BY_USER_QUERY,
    variables: { where },
  });

  return {
    data: {
      company: data.company,
      initIsSaved: res.data.isCompanySavedByUser,
    },
  };
};

export default CompanyPage;

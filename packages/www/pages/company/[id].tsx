import { useMutation, useQuery } from '@apollo/client';
import axios from 'axios';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Page from '../../components/Page';
import Text from '../../components/Text';
import {
  GET_COMPANY_QUERY,
  IS_COMPANY_SAVED_BY_USER_QUERY,
  SAVE_COMPANY_MUTATION,
  UNSAVE_COMPANY_MUTATION,
} from '../../data/companies';
import { ME_QUERY } from '../../data/user';
import { API_ENDPOINT } from '../../lib/constants';
import styled, { css, media, theme } from '../../styles';

const CompanyPage: NextPage = ({ me, data: { company, initIsSaved } }: any) => {
  const [googleAuthUrl, setGoogleAuthUrl] = useState<string | null>(null);
  const [googleAuthError, setGoogleAuthError] = useState<boolean>(false);

  useEffect(() => {
    const getGoogleAuthUrl = async () => {
      const res = await axios.get(`${API_ENDPOINT}/auth/google?redirect=/`);

      if (!res || !res.data || !res.data.ok || !res.data.authUrl) {
        setGoogleAuthError(true);
      } else {
        setGoogleAuthUrl(res.data.authUrl);
      }
    };

    getGoogleAuthUrl();
  }, []);

  const { data, loading } = useQuery(IS_COMPANY_SAVED_BY_USER_QUERY, {
    variables: { where: { id: company.id } },
  });

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

  const [unsaveCompanyMutation] = useMutation(UNSAVE_COMPANY_MUTATION, {
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
        data: { isCompanySavedByUser: false },
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
    await saveCompanyMutation();
  };

  const onUnsaveCompany = async () => {
    await unsaveCompanyMutation();
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
            <CompanyStatus></CompanyStatus>
            <Picture imageUrl={company.picture}>
              {!company.picture && (
                <Text fontSize="8rem" fontWeight="700" color="#999999">
                  {company.name[0].toUpperCase()}
                </Text>
              )}
            </Picture>
            <HeaderRight>
              <div>
                <Text
                  fontSize="4.2rem"
                  paddingBottom="2rem"
                  fontWeight="600"
                  color="white"
                >
                  {company.name}
                </Text>
              </div>

              <CTAButtons>
                {!me && (
                  <a target="_blank" rel="noreferrer" href={googleAuthUrl!}>
                    <SaveButton onClick={() => null}>
                      <Text fontSize="1.6rem">Save</Text>
                    </SaveButton>
                  </a>
                )}
                {me && loading && initIsSaved && (
                  <UnsaveButton onClick={onUnsaveCompany}>
                    <Text fontSize="1.6rem">Saved</Text>
                  </UnsaveButton>
                )}
                {me && loading && !initIsSaved && (
                  <SaveButton onClick={onSaveCompany}>
                    <Text fontSize="1.6rem">Save</Text>
                  </SaveButton>
                )}
                {me ? (
                  !data || !data.isCompanySavedByUser ? (
                    <SaveButton onClick={onSaveCompany}>
                      <Text fontSize="1.6rem">Save</Text>
                    </SaveButton>
                  ) : (
                    <UnsaveButton onClick={onUnsaveCompany}>
                      <Text fontSize="1.6rem">Saved</Text>
                    </UnsaveButton>
                  )
                ) : null}
              </CTAButtons>
            </HeaderRight>
          </CardHeader>
          <Nav>
            <NavItem active={true}>
              <Text fontSize="1.6rem" fontWeight="500">
                Overview
              </Text>
            </NavItem>
            <NavItem active={false}>
              <Text fontSize="1.6rem" fontWeight="500">
                People
              </Text>
            </NavItem>
            {/* <NavItem active={false}>
              <Text fontSize="1.6rem" fontWeight="500">
                Reviews
              </Text>
            </NavItem> */}
            <NavItem active={false}>
              <Text fontSize="1.6rem" fontWeight="500">
                Contact & Submissions
              </Text>
            </NavItem>
          </Nav>
          <CardBody>
            <Categories>
              {company.categories.map((category: any) => (
                <Category color={category.color} key={category.id}>
                  <Text color="white" fontSize="1.3rem">
                    {category.name}
                  </Text>
                </Category>
              ))}
            </Categories>
            {company.description && (
              <Text fontSize="1.5rem" lineHeight="1.4" color="white">
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
                  <Text>Contact:</Text>
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
          {/* {activeTab === 'people' && (
            <CardBody>
              <People>
                <Text color="white">
                  There is noone currently workign at {company.name}
                </Text>
              </People>
            </CardBody>
          )} */}
        </ContactCard>
      </Container>
    </Page>
  );
};

const CompanyStatus = styled.div`
  display: flex;
`;

const People = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #464646;
`;

const Nav = styled.div`
  display: flex;
  margin-top: 2rem;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
`;

const Note = styled.div`
  width: 100%;
  background-color: red;
`;

const CTAButtons = styled.div`
  display: flex;
`;

const SaveButton = styled.button`
  width: 10rem;
  height: 4.2rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const UnsaveButton = styled.button`
  width: 10rem;
  height: 4.2rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
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
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
`;

const Category = styled.div<{ color: string }>`
  height: 2.8rem;
  display: flex;
  padding: 0 2rem;
  border: 1px solid ${(props) => props.theme.colors.primary}90;
  background-color: ${(props) => props.color};
  border-radius: 1000px;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  align-items: center;
`;

const Categories = styled.div`
  display: flex;
  float: left;
  margin-bottom: 2rem;
  /* position: absolute;
  right: 0;
  top: 0; */
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

const HeaderRight = styled.div`
  flex-direction: column;
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  margin-left: 3rem;
  /* justify-content: space-around; */
`;

const Picture = styled.div<{ imageUrl?: string }>`
  min-height: 12rem;
  min-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;

  ${(props) =>
    props.imageUrl
      ? css`
          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUAAAD5Ox38PB3/PR5xGw3CLhfrOBzPMRiiJhP1Oh33Ox0+DwcrCgU1DAY8DgfFLxcmCQQxDAZDEAhhFwvWMxkJAgEkCQTiNRqcJRKnKBNYFQroNxsdBwM3DQZFEAi5LBYXBQOk0JWEAAACHklEQVR4nO3b3VLCMBBA4TQFtChUFP9QxPd/Sul42ySbNNPuMue7z0zOJIE2DM4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEvBzvxvXBIX1gxODYv844eZFV60e1m+CQTWDIMKo7zDh3mVXbjPKRQj8+5Dqoe5xx6kI1C1UG1iz03duMExerV+i7pxnnLVetUOcWdfUK1QbWKlR6Bgd1CvWuYKVCzYFVCrV+iv6rUKg7sEKh6i3qKhRqD5xcqHyLusmF+gMnFqrfom5ioYXASYUGtqibVGhiBacUGgksL7QSWFxo4wwOCgvNrGBpoaHAskI7W9SVFbaWAosKDW1RV1T4ru+3iZhQYdN93I/7PC095zzBwqYNaZ6XnnSWcGGQt5VYUHhNfFh62hlKChvvDSUGCzfhH0JtbdTgt8XXd3cbiZHvw8M2mrhfeupCsW/8Q3QVvZFVjD7T7OIb1cbHTfyp7XwDiYnn0hs4i6kn7/hZtLCKyXeL+Fnc6k9Mvz1Z/7gRvB8aP4uSN2Dbqyh6xzd9FmW3GJY3qvCexnCi9CbK7lkU37UlEvWuovw2MbFRz0vMXiLjvjTxAKd1FXNuhG2exaw778TLlM5VzLvVt3gWM3+3MPiJmvvLTHyjanyAy/7PzK4L/2XGt/5n1tlLnPr1uEtoxD40YtCvf2ecPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMOcPygQaZTTqa3cAAAAASUVORK5CYII=');
          background-position: center;
        `
      : css`
          background-image: linear-gradient(112deg, #eaeaea 0%, #505050 100%);
        `}
`;

const ContactCard = styled(motion.div)`
  position: relative;
  overflow: scroll;
  width: 100rem;
  height: 73vh;
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

const NavItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  color: #a2a2a2;
  border-bottom: 2px solid #3c3c3c;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      color: white;
    `}
  justify-content: center;

  transition: 100ms all ease;

  /* &:hover {
    cursor: pointer;
    color: white;
    ${(props) =>
    !props.active &&
    css`
      border-bottom: 2px solid #646464;
    `}
  } */
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

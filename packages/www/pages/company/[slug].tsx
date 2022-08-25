import { useRouter } from 'next/router';

import Page from '../../components/Page';
import Text from '../../components/Text';
import styled, { media } from '../../styles';

const CompanyPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const tags = [{ id: 2, text: 'Sync', color: '#3BFFA4' }];

  return (
    <Page title="Contact">
      <Container>
        <ContactCard>
          <CardHeader>
            <Picture />
            <HeaderRight>
              <Text
                paddingBottom="2rem"
                fontSize="5.2rem"
                fontWeight="600"
                color="white"
              >
                Acme Co.
              </Text>
              <Tags>
                {tags.map((tag) => (
                  <Tag color={tag.color} key={tag.id}>
                    <Text color="white">{tag.text}</Text>
                  </Tag>
                ))}
              </Tags>
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
                    <LinkSpan>https://acme.com</LinkSpan>
                  </Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text color="white">Contact email:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">email@acme.com</Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text color="white">Phone:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">+447497435112</Text>
                </DetailValue>
              </Detail>
              <Detail>
                <DetailKey>
                  <Text color="white">Address:</Text>
                </DetailKey>
                <DetailValue>
                  <Text color="white">
                    Pepper House, 1 Pepper Road Hazel Grove Stockport SK7 5DP
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

const Tag = styled.div<{ color: string }>`
  height: 2.7rem;
  display: flex;
  padding: 0 2rem;
  border: 1px solid ${(props) => props.color};
  border-radius: 1000px;
  justify-content: center;
  margin-right: 1rem;
  align-items: center;
`;

const Tags = styled.div`
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
  height: 12rem;
  width: 12rem;
  border-radius: 2px;
  background-image: linear-gradient(112deg, #eaeaea 0%, #505050 100%);
`;

const ContactCard = styled.div`
  width: 90rem;
  height: 56rem;
  border: 1px solid #999;
  flex-direction: column;
  display: flex;
  border-radius: 11px;
  justify-content: space-between;
  padding: 4rem;

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

export default CompanyPage;

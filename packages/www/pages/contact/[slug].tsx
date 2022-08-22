import { useRouter } from 'next/router';

import Header from '../../components/Header';
import Page from '../../components/Page';
import Text from '../../components/Text';
import styled from '../../styles';

const Contact = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Page title="Contact">
      <Header />
      <Text color="white">contact page {slug}</Text>
    </Page>
  );
};

const Banner = styled.div`
  height: 1rem;
  background-color: ${(props) => props.theme.colors.pink};
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f8ffae,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f8ffae,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
`;

export default Contact;

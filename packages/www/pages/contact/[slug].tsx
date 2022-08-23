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

export default Contact;

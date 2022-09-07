import Head from 'next/head';
import * as React from 'react';

import styled, { media } from '../styles';
import { OgMeta } from '../typings';

interface Props {
  meta?: OgMeta;
  title: string;
  children: React.ReactNode;
  padding?: string;
}

const Page = (props: Props) => {
  const { title, meta, children, padding } = props;

  // For more information on the open graph protocol visit http://ogp.me/
  // TODO: Update to Kordio
  const defaultOg = {
    title: 'Kordio', // og title not page title
    type: 'website',
    url: 'https://staging.kordio.co',
    image: {
      url: 'https://storage.googleapis.com/kordio-static/kordio-banner.png',
      height: '630',
      width: '1200',
    },
    description:
      'Kordio is the #1 place to build your team in the music industry. Connect with industry professionals, submit music to record labels, or discover resources to help you develop your craft.',
  };

  const og = meta || defaultOg;

  if (!title) throw new Error('You must add a title for the page');

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={og.description || defaultOg.description}
        />
        <link rel="canonical" href="https://staging.kordio.co/" />
        <meta property="og:type" content={og.type || defaultOg.type} />
        <meta property="og:url" content={og.url || defaultOg.url} />
        <meta property="og:title" content={og.title || defaultOg.title} />
        <meta
          property="og:description"
          content={og.description || defaultOg.description}
        />

        <meta
          property="og:image"
          content={og.image.url || defaultOg.image.url}
        />
        <meta
          property="og:image:width"
          content={og.image.width || defaultOg.image.width}
        />
        <meta
          property="og:image:height"
          content={og.image.height || defaultOg.image.height}
        />

        <meta property="og:locality" content="London" />
        <meta property="og:country-name" content="United Kingdom" />
      </Head>
      <Main padding={padding}>{children}</Main>
    </div>
  );
};

const Main = styled.div<{ padding?: string }>`
  padding: ${(props) => props.padding || '0'};

  // margin-bottom: 8rem; /* clear player */

  ${media.xsmall`
    width: 100%;
  `}
`;

export default Page;

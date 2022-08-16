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
    const defaultOg = {
        title: 'Tunebase - Building an artist-first music industry, starting with communities', // og title not page title
        type: 'website',
        url: 'https://tunebase.com',
        image: {
            url: 'https://storage.googleapis.com/tunebase-static/banner.png',
            height: '630',
            width: '1200',
        },
        description:
            "On Tunebase, artists connect directly and build communities with their most engaged fans—it's where artists and fans create meaningful and mutually beneficial relationships.",
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
                <link rel="canonical" href="https://tunebase.com/" />
                <meta property="og:type" content={og.type || defaultOg.type} />
                <meta property="og:url" content={og.url || defaultOg.url} />
                <meta
                    property="og:title"
                    content={og.title || defaultOg.title}
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
                <meta
                    property="og:description"
                    content={og.description || defaultOg.description}
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

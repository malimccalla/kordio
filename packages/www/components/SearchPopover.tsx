import { getEnabledCategories } from 'trace_events';

import { useQuery } from '@apollo/client';
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import Link from 'next/link';
import React, { cloneElement, useState } from 'react';

import { GET_COMPANIES_QUERY } from '../data/companies';
import { useApollo } from '../lib/apolloClient';
import styled, { css, media, theme } from '../styles';
import { SearchIcon } from './icons';
import Text from './Text';

const icons = [
  'book',
  'article',
  'app',
  'website',
  'money',
  'person',
  'company',
  'megaphone',
];

const results = [
  {
    id: 0,
    featured: true,
    name: 'A Featured Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 3, name: 'blog', color: theme.colors.secondary },
    ],
    imageUrl: 'https://picsum.photos/200',
    type: 'person',
  },
  {
    id: 1,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 3, name: 'blog', color: theme.colors.secondary },
    ],
    imageUrl: 'https://picsum.photos/200',
    type: 'person',
  },
  {
    id: 2,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 3, name: 'blog', color: theme.colors.secondary },
    ],
    imageUrl: 'https://picsum.photos/200',
    type: 'company',
  },
  {
    id: 3,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 2, name: 'article', color: theme.colors.blue },
    ],
    imageUrl: 'https://picsum.photos/200',
    type: 'article',
  },
  {
    id: 4,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 2, name: 'article', color: theme.colors.blue },
    ],
    imageUrl: 'https://picsum.photos/200',
    type: 'video',
  },
  {
    id: 5,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 1, name: 'marketing', color: theme.colors.pink },
    ],
    imageUrl: 'https://picsum.photos/200',
    type: 'tech',
  },
  {
    id: 6,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 3, name: 'blog', color: theme.colors.secondary },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 7,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 1, name: 'marketing', color: theme.colors.pink },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 8,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 2, name: 'article', color: theme.colors.blue },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 9,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 1, name: 'marketing', color: theme.colors.pink },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 10,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 2, name: 'article', color: theme.colors.blue },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 11,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 3, name: 'blog', color: theme.colors.secondary },
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 2, name: 'article', color: theme.colors.blue },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 12,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 3, name: 'blog', color: theme.colors.secondary },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 13,
    name: 'A Relevant Contact or Resource',
    url: 'google.com',
    categories: [
      { id: 1, name: 'marketing', color: theme.colors.pink },
      { id: 2, name: 'article', color: theme.colors.blue },
      { id: 3, name: 'blog', color: theme.colors.secondary },
    ],
    imageUrl: 'https://picsum.photos/200',
  },
];

interface Props {
  open?: boolean;
  render: (props: {
    close: () => void;
    labelId: string;
    descriptionId: string;
  }) => React.ReactNode;
  children: JSX.Element;
}

export const Dialog = ({
  render,
  open: passedOpen = false,
  children,
}: Props) => {
  const [open, setOpen] = useState(passedOpen);

  const { reference, floating, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props })
      )}
      <FloatingPortal>
        {open && (
          <StyledFloatingOverlay lockScroll>
            <FloatingFocusManager context={context}>
              <div
                {...getFloatingProps({
                  ref: floating,
                  'aria-labelledby': labelId,
                  'aria-describedby': descriptionId,
                })}
              >
                {render({
                  close: () => {
                    setOpen(false);
                  },
                  labelId,
                  descriptionId,
                })}
              </div>
            </FloatingFocusManager>
          </StyledFloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};

const SearchPopover = (props: {
  height?: string;
  borderRadius?: string;
  boxShadow?: string;
}) => {
  const { loading, data, error } = useQuery(GET_COMPANIES_QUERY);

  console.log(loading, data);
  console.log(error);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [hasSearchQuery, setHasSearchQuery] = React.useState(false);

  const onSearchInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const currentQuery = (e.target as HTMLInputElement).value;

    if (currentQuery !== '') {
      setHasSearchQuery(true);
    } else {
      setHasSearchQuery(false);
    }

    setSearchQuery(currentQuery);
  };

  return (
    <Dialog
      render={({ close }) => (
        <SearchContainer>
          <DialogSearchBox hasSearchQuery={hasSearchQuery}>
            <IconBox>
              <SearchIcon size="24px" />
            </IconBox>
            <SearchInput
              onChange={onSearchInputChange}
              value={searchQuery}
              autoFocus={true}
              placeholder="What are you looking for?"
            ></SearchInput>
            <CancelSection>
              <CloseButton onClick={close}>Cancel</CloseButton>
            </CancelSection>
          </DialogSearchBox>
          {hasSearchQuery && (
            <Results>
              {data.companies.map((company: any) => {
                return (
                  <Link key={company.id} href={`/company/${company.id}`}>
                    <ResultContainer featured={!!company.featured}>
                      <ResultLeft>
                        <ResultImage src={company.imageUrl}>
                          <Text fontWeight="500" color="#999">
                            {company.name[0].toLocaleUpperCase()}
                          </Text>
                        </ResultImage>
                        <TextContainer>
                          <Text fontSize="1.6rem" fontWeight="500">
                            {company.name}
                          </Text>
                          <Categories>
                            {company.categories.map((category: any) => {
                              return (
                                <Category
                                  color={category.color}
                                  key={category.id}
                                >
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
                );
              })}
            </Results>
          )}
        </SearchContainer>
      )}
    >
      <DummySearchBox
        boxShadow={props.boxShadow}
        height={props.height}
        borderRadius={props.borderRadius}
      >
        <IconBox>
          <SearchIcon size="20px" />
        </IconBox>
        <Text paddingLeft="1rem">What are you looking for?</Text>
      </DummySearchBox>
    </Dialog>
  );
};

const Categories = styled.div`
  display: flex;
`;

const Category = styled.div<{ color: string }>`
  background-color: ${(props) => props.color}BB;
  font-size: 1.3rem;
  height: 2rem;
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
  justify-content: space-between;
  flex-direction: column;
  padding-left: 1rem;
`;

const ArrowBox = styled.div`
  height: 3rem;
  width: 3rem;
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
  width: 4.4rem;
  height: 4.4rem;
  display: flex;
  font-size: 2.6rem;
  background-size: cover;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #eee;
`;

const ResultContainer = styled.div<{ featured: boolean }>`
  width: 100%;
  height: 8rem;
  padding: 0 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: white;
  border-radius: 7px;
  margin-bottom: 0.6rem;

  ${(props) =>
    props.featured &&
    css`
      /* border-top: 8px solid ${(props) => props.theme.colors.pink}; */
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
      height: 10rem;
      color: white;
    `}

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
    color: white;
  }

  &:hover ${ArrowBox} {
    display: flex;
    color: ${(props) => props.theme.colors.blue};
  }
`;

const Results = styled.div`
  background-color: rgba(230, 230, 230);
  width: 100%;
  max-height: 80vh;
  min-height: 80vh;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  overflow-x: scroll;

  padding: 0.6rem;

  ${media.large`
    max-height: calc(100vh - 7rem);
  `}
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CancelSection = styled.div`
  border-left: 1px solid #dbdbdb;
  padding-left: 2rem;
`;

const StyledFloatingOverlay = styled(FloatingOverlay)`
  display: grid;
  padding-top: 5rem;
  background: rgba(25, 25, 25, 0.6);
  align-items: flex-start;
  justify-content: center;

  ${media.large`
    padding: 0;
  `}
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 1.6rem;
  color: #999;
  transition: all 0.1s ease;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;

  transition: all 0.3s ease;
`;

const SearchInput = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  font-size: 2.2rem;
  background-color: transparent;
  font-weight: 400;

  &::placeholder {
    color: #999999;
  }
`;

const DialogSearchBox = styled.div<{ hasSearchQuery: boolean }>`
  display: flex;
  height: 7rem;
  width: 104rem;
  align-items: center;
  padding: 0 2rem;
  color: #999999;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 11px;
  box-shadow: 0 4px 0 0 rgba(197, 197, 197);

  ${(props) =>
    props.hasSearchQuery &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    `}

  ${media.large`
    width: 100vw;
    margin: 0;
    border-radius: 0px;
  `}
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
  background-color: white;
  border-radius: ${(props) => props.borderRadius || '11px'};

  box-shadow: ${(props) => props.boxShadow || '0 4px 0 0 rgba(197, 197, 197)'};
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #eaeaea;
  }

  &:hover ${IconBox} {
    /* transform: rotate(20deg); */
    transform: scale(1.1);
  }
`;

export default SearchPopover;

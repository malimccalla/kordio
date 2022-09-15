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
  useListNavigation,
  useRole,
} from '@floating-ui/react-dom-interactions';
import Link from 'next/link';
import React, { cloneElement, useEffect, useState } from 'react';
import {
  Configure,
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
  useInstantSearch,
} from 'react-instantsearch-hooks-web';

import { DEPLOY_ENV } from '../lib/constants';
import { searchClient } from '../lib/searchClient';
import styled, { media, theme } from '../styles';
import { SearchIcon } from './icons';
import Text from './Text';

interface Props {
  open?: boolean;
  render: (props: {
    close: () => void;
    labelId: string;
    descriptionId: string;
  }) => React.ReactNode;
  children: JSX.Element;
  initialValue?: string;
}

export const Dialog = ({
  render,
  open: passedOpen = false,
  initialValue,
  children,
}: Props) => {
  const [open, setOpen] = useState(passedOpen);
  const { setIndexUiState } = useInstantSearch();

  useEffect(() => {
    setIndexUiState({ query: initialValue });
  }, [initialValue, open, children, render, setIndexUiState]);

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
    useListNavigation(context),
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

const Hit = ({ hit }: any) => {
  return (
    <Link key={hit.id} href={`/company/${hit.id}`}>
      <ResultContainer>
        <ResultLeft>
          <ResultImage src={hit.imageUrl}>
            <Text fontWeight="500" fontSize="4rem" color="#999">
              {hit.name[0].toLocaleUpperCase()}
            </Text>
          </ResultImage>
          <TextContainer>
            <Text fontSize="2rem" fontWeight="500">
              {hit.name}
            </Text>
            <Categories>
              {hit.categories.map((category: any) => {
                return <Category key={category.id}>{category.name}</Category>;
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
};

const SearchPopover = (props: {
  height?: string;
  borderRadius?: string;
  boxShadow?: string;
  triggerComponent: any;
  initialValue?: string;
}) => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={`${DEPLOY_ENV}_companies`}
    >
      <Dialog
        initialValue={props.initialValue}
        render={({ close }) => (
          <SearchContainer>
            <DialogSearchBox>
              <IconBox>
                <SearchIcon size="24px" />
              </IconBox>
              <SearchInput
                autoFocus={true}
                placeholder="Press & PR, Publishing, Management..."
              ></SearchInput>
              <CancelSection>
                <CloseButton onClick={close}>Cancel</CloseButton>
              </CancelSection>
            </DialogSearchBox>
            <Results>
              <HitsContainer>
                <Configure />
                <Hits onClick={close} hitComponent={Hit} />
              </HitsContainer>
            </Results>
          </SearchContainer>
        )}
      >
        <div>{props.triggerComponent}</div>
      </Dialog>
    </InstantSearch>
  );
};

const HitsContainer = styled.div`
  width: 100%;
`;

const Categories = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
`;

const Category = styled.div`
  font-size: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary}60;
  height: 2.2rem;
  font-weight: 500;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5000px;
  margin-right: 6px;
`;
const ArrowBox = styled.div`
  height: 4rem;
  width: 4rem;
  color: ${(props) => props.theme.colors.black};
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
  width: 7rem;
  height: 7rem;
  display: flex;
  font-size: 2rem;
  background-size: cover;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: linear-gradient(112deg, #eaeaea 0%, #505050 100%);
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 11rem;
  color: white;
  padding: 0 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: #2a2a2a;
  border-radius: 7px;
  margin-bottom: 1rem;
  border: 1px solid #363636;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    color: white;
  }

  &:hover ${ArrowBox} {
    display: flex;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    background-color: #333;
  }

  &:hover ${TextContainer} {
    display: flex;
    /* font-weight: 700; */
    color: #333; // ${(props) => props.theme.colors.black};
    /* background-color: ${(props) => props.theme.colors.blue}; */
  }

  &:hover ${Category} {
    border: 1px solid black;
    background-color: #333;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Results = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  max-height: 80vh;
  border-radius: 11px;
  display: flex;
  border: 1px solid #999;
  border-top: none;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  min-height: 80vh;

  position: relative;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  padding: 2rem;

  ${media.large`
    max-height: calc(100vh - 7rem);
    border: none;
  `}
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column; ;
`;

const CancelSection = styled.div`
  border-left: 1px solid #656565;
  padding-left: 2rem;
`;

const StyledFloatingOverlay = styled(FloatingOverlay)`
  display: grid;
  padding-top: 5rem;
  background: rgba(255, 255, 255, 0.203);
  align-items: flex-start;
  z-index: 50;
  justify-content: center;

  ${media.large`
    padding: 0;
  `}
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 1.6rem;
  color: #999999;
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

const SearchInput = styled(SearchBox)`
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

const DialogSearchBox = styled.div`
  display: flex;
  height: 7rem;
  width: 104rem;
  align-items: center;
  padding: 0 2rem;
  color: #999999;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid #999;
  border-bottom-color: #333;
  border-radius: 11px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  ${media.large`
    width: 100vw;
    border: none;
    margin: 0;
    border-radius: 0px;
    border-bottom: 1px solid #333;
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
  border: 1px solid white;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.borderRadius || '11px'};

  box-shadow: ${(props) => props.boxShadow || '0 2px 0 0 rgba(197, 197, 197)'};

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #333;
  }

  &:hover ${IconBox} {
    /* transform: rotate(20deg); */
    transform: scale(1.1);
  }
`;

export default SearchPopover;

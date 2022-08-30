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
import React, { cloneElement, useState } from 'react';
import {
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-hooks-web';

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
            <Text fontWeight="500" fontSize="3rem" color="#999">
              {hit.name[0].toLocaleUpperCase()}
            </Text>
          </ResultImage>
          <TextContainer>
            <Categories>
              {hit.categories.map((category: any) => {
                return (
                  <Category color={category.color} key={category.id}>
                    {category.name}
                  </Category>
                );
              })}
            </Categories>
            <Text color={theme.colors.black} fontSize="1.8rem" fontWeight="500">
              {hit.name}
            </Text>
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
}) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_companies">
      <Dialog
        render={({ close }) => (
          <SearchContainer>
            <DialogSearchBox>
              <IconBox>
                <SearchIcon size="24px" />
              </IconBox>
              <SearchInput
                autoFocus={true}
                placeholder="What are you looking for?"
              ></SearchInput>
              <CancelSection>
                <CloseButton onClick={close}>Cancel</CloseButton>
              </CancelSection>
            </DialogSearchBox>
            <Results>
              <Hits onClick={close} hitComponent={Hit} />
            </Results>
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
    </InstantSearch>
  );
};

const Categories = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const Category = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.black};
  height: 1.8rem;
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
  justify-content: flex-end;
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
  width: 6rem;
  height: 6rem;
  display: flex;
  font-size: 2rem;
  background-size: cover;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #eee;
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 10rem;
  color: white;
  padding: 0 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: white;
  border-radius: 7px;
  margin-bottom: 0.6rem;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    cursor: pointer;
    color: white;
  }

  &:hover ${ArrowBox} {
    display: flex;
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

const Results = styled.div`
  background-color: rgba(230, 230, 230);
  width: 100%;
  max-height: 80vh;
  min-height: 80vh;

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
  background-color: white;
  border-radius: 11px;
  box-shadow: 0 4px 0 0 rgba(197, 197, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

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

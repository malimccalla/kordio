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
import React, { cloneElement, useState } from 'react';

import styled, { media } from '../styles';
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
                  close: () => setOpen(false),
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

const SearchPopover = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [hasSearchQuery, setHasSearchQuery] = React.useState(false);

  const onSearchInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const currentQuery = (e.target as HTMLInputElement).value;

    if (searchQuery !== '') {
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
          <DialogSearchBox>
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
        </SearchContainer>
      )}
    >
      <DummySearchBox>
        <IconBox>
          <SearchIcon size="20px" />
        </IconBox>
        <Text paddingLeft="1rem">What are you looking for?</Text>
      </DummySearchBox>
    </Dialog>
  );
};

const SearchContainer = styled.div`
  display: flex;
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

  ${media.large`
    width: 100vw;
    margin: 0;
    border-radius: 0px;
  `}
`;

const DummySearchBox = styled.div`
  height: 6rem;
  display: flex;
  padding-left: 2rem;
  align-items: center;
  color: #999999;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 11px;
  box-shadow: 0 4px 0 0 rgba(197, 197, 197);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #eaeaea;
  }
`;

export default SearchPopover;

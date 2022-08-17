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

import styled from '../styles';

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
          <FloatingOverlay
            lockScroll
            style={{
              display: 'grid',
              placeItems: 'center',
              background: 'rgba(25, 25, 25, 0.8)',
            }}
          >
            <FloatingFocusManager context={context}>
              <div
                {...getFloatingProps({
                  ref: floating,
                  className: 'Dialog',
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
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};

export default function App() {
  return (
    <Dialog
      render={({ close, labelId, descriptionId }) => (
        <DialogSearchBox>
          <IconBox></IconBox>
          <SearchInput></SearchInput>
          <CloseButton onClick={close}>x</CloseButton>
        </DialogSearchBox>
      )}
    >
      <SearchBox>What are you looking for?</SearchBox>
    </Dialog>
  );
}

const CloseButton = styled.button`
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const IconBox = styled.div`
  min-height: 3rem;
  min-width: 3rem;
  background-color: #ccc;
`;

const SearchInput = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.8rem;
  background-color: transparent;
`;

const DialogSearchBox = styled.div`
  display: flex;
  height: 6rem;
  width: 100%;
  align-items: center;
  padding: 0 2rem;
  color: #999999;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 11px;
  box-shadow: 0 4px 0 0 rgba(197, 197, 197, 0.8);
`;

const SearchBox = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  color: #999999;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 11px;
  box-shadow: 0 4px 0 0 rgba(197, 197, 197, 0.8);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #eaeaea;
  }
`;

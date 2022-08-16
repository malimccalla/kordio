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
        <>
          <h1 id={labelId}>This is a dialog!</h1>
          <p id={descriptionId} />
          <button onClick={close}>Close</button>
        </>
      )}
    >
      <SearchBox>What are you looking for?</SearchBox>
    </Dialog>
  );
}

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

  &:hover {
    cursor: pointer;
  }
`;

import styled, { css, truncate } from '../styles';

const Text = styled.p<{
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  padding?: string;
  textAlign?: string;
  textDecoration?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  margin?: string;
  maxWidth?: string;
  lineHeight?: string;
  truncate?: string;
  textTransform?: string;
  letterSpacing?: string;
  clickable?: boolean;
}>`
  letter-spacing: 0;
  ${(props) => props.paddingTop && `padding-top: ${props.paddingTop};`}
  ${(props) => props.paddingRight && `padding-right: ${props.paddingRight};`}
  ${(props) => props.paddingBottom && `padding-bottom: ${props.paddingBottom};`}
  ${(props) => props.paddingLeft && `padding-left: ${props.paddingLeft};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`}
  ${(props) => props.marginRight && `margin-right: ${props.marginRight};`}
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.textAlign && `text-align: ${props.textAlign};`}
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration};`}
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${(props) => props.textTransform && `text-transform: ${props.textTransform};`}
  ${(props) => props.letterSpacing && `letter-spacing: ${props.letterSpacing};`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'inherit'};
  ${(props) =>
    props.truncate &&
    css`
      width: 100%;
      ${truncate(props.truncate)};
    `}
  ${(props) =>
    props.clickable &&
    css`
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `}
`;

export default Text;

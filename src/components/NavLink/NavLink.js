import React from 'react'
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...delegated}) => {
  return (
    <Wrapper {...delegated}>
        <Text>{children}</Text>
        <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
    display: block;
    transform: translateY(0%);
    transition: transform 200ms;

    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 300ms;
    }
`;

const HoverText = styled.span`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-weight: ${WEIGHTS.bold};
    transform: translateY(100%);
    transition: transform 200ms;

    ${Wrapper}:hover & {
      transform: translateY(0%);
      transition: transform 300ms;
    }
`;

export default NavLink
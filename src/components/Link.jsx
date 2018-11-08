import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledLink = styled.a `
  border: 4px solid #e22d60;
  box-sizing: border-box;
  display: inline-block;
  transform: skew(-8deg);
  padding: .5em 2em;
  margin: 0 20px 10px 0;
  font-weight: 700;
  transition-delay: 0s;
  transition-duration: 2s;
  transition-property: color;
  transition-timing-function: ease;
  :hover {
    color: #841a37;
  }
`

const Link = ({title, url}) => {
  return (
    <StyledLink target="_blank" rel="noopener noreferrer" href={url}>
      {title}
    </StyledLink>
  );
};

Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default Link;

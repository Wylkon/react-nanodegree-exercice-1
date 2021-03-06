import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => (
  <StyledHeader>
    <div className="grid-container">
      <Link to="/">
        <h1>
          <box-icon name="book-open" type="solid" size="md" />
          My Reads
        </h1>
      </Link>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid ${props => props.theme.lightGray};

  h1 {
    display: flex;
    align-items: center;
    margin: 0;
  }

  box-icon[name='book-open'] {
    margin-right: 8px;
    padding: 4px;
    background: ${props => props.theme.green};
    border-radius: 4px;
  }

  a {
    color: ${props => props.theme.dark};
    text-decoration: none;
  }
`;

export default Header;

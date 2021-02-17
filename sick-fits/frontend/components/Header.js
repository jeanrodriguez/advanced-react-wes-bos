import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

const LogoStyle = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: red;
  transform: skew(-7deg);

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyle = styled.header`
 .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className='bar'>
        <LogoStyle>
          <Link href='/'>logo</Link>
        </LogoStyle>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyle>
  );
};

export default Header;

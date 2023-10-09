import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  LogoWrap,
  Logo,
 
  ContactInfo,
} from './Sharedlayout.styled';



export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LogoWrap>
            <Logo></Logo>
            {/* <img src={Logo} alt="logo" width="60" /> */}
          </LogoWrap>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <div>
          <ContactInfo>
            <p>
              Email:{' '}
              <a href={`mailto:info@breakfastrecipes.com`}>
                info@breakfastrecipes.com
              </a>
            </p>
          </ContactInfo>
        </div>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

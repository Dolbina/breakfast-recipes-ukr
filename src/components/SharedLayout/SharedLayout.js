import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  LogoWrap,
  LinkLogo,
  // Logo,
 
  ContactInfo,
} from './Sharedlayout.styled';



export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkLogo to="/">
            <LogoWrap>
              
            </LogoWrap>
          </LinkLogo>

          <Link to="/catalog">Рецепти</Link>
          <Link to="/favorites">Улюблені</Link>
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

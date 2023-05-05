import { selectorIsLoggedIn } from 'Redux/auth/auth-selectors';
import { Title, HomeLink, Section, ButtonContainer } from '../Home/HomeStyled';
import { useSelector } from 'react-redux';

export const Home = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <>
      <Section>
        <Title>Contact book cloud</Title>
        {!isLoggedIn && (
          <ButtonContainer>
            <HomeLink to="/register">Sign Up</HomeLink>
            <HomeLink to="/login">Sign In</HomeLink>
          </ButtonContainer>
        )}
      </Section>
    </>
  );
};
export default Home;
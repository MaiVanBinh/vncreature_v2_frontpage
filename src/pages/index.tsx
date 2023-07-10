import { useEffect } from 'react'
import Articles from '@/components/mobile/Article';
import HomeBanner from '@/components/mobile/Banner'
import ResponsiveAppBar from '@/components/mobile/AppBar'
import RedBookList from '@/components/mobile/RedBookList';
import HomePageServices from '@/components/mobile/Services';
import styled from 'styled-components'
import Footer from '@/components/mobile/Footer';
import { useDispatch } from 'react-redux';
import { getCreature } from '@/container/creatures/actions';

const HomePageContainer = styled('div')`
  padding: 1em 4vw;
  background: ${props => props.theme?.colors.bg};
`

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreature({}));
  }, [])

  return (
    <>
      <ResponsiveAppBar />
      <HomeBanner />
      <HomePageContainer>
        <HomePageServices />
        <RedBookList />
        <Articles />
      </HomePageContainer>
      <Footer />
    </>
  )
}

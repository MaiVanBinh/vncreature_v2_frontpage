import { useEffect } from 'react'
import Articles from '@/components/mobile/Article';
import HomeBanner from '@/components/mobile/Banner'
import ResponsiveAppBar from '@/components/mobile/AppBar'
import RedBookList from '@/components/mobile/RedBookList';
import HomePageServices from '@/components/mobile/Services';
import styled from 'styled-components'
import Footer from '@/components/mobile/Footer';
import { useDispatch } from 'react-redux';
import { getCreaturesRedbook } from '@/container/creatures/actions';
import { useAppSelector } from '@/container/store';
import { getPosts } from '@/container/posts/actions';

const HomePageContainer = styled('div')`
  padding: 1em 4vw;
  background: ${props => props.theme?.colors.bg};
`

export default function Home() {
  const dispatch = useDispatch();
  const redbookData = useAppSelector(state => state.creaturesReducer.redbookData);
  const posts = useAppSelector(state => state.postsReducer.data);
  useEffect(() => {
    dispatch(getCreaturesRedbook({}));
    dispatch(getPosts({}));
  }, [])

  return (
    <>
      <ResponsiveAppBar />
      <HomeBanner />
      <HomePageContainer>
        <HomePageServices />
        {redbookData.animals && <RedBookList redbookData={redbookData.animals?.data} />}
        {redbookData.plants && <RedBookList redbookData={redbookData.plants?.data} />}
        {redbookData.insect && <RedBookList redbookData={redbookData.insect?.data} />}
        <Articles posts={posts} />
      </HomePageContainer>
      <Footer />
    </>
  )
}
import Profile from './profile/profile.jsx'
import News from './news/news.jsx'

function MainContent(params) {
  return (
    <main className='main-content block'>
      <Profile />
      <News />
    </main>
  )
}

export default MainContent;
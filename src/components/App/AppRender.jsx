import Main from '../page1/Main/main.jsx'
import Header from '../page1/header.jsx'
import Footer from '../page1/footer/footer.jsx'
import Nav from '../page1/footer/navbar/nav.jsx'

function AppRender() {
  return (
    <div className='app-container'>
      <Header />
      <Main />
      <Footer />
      <Nav />
    </div>
  )
}

export default AppRender
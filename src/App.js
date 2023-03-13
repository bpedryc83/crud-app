import Home from './components/pages/home/Home';
import Post from './components/pages/post/Post';
import AddPost from './components/pages/addPost/AddPost';
import EditPost from './components/pages/editPost/EditPost';
import Categories from './components/pages/categories/Categories';
import Category from './components/pages/category/Category';
import About from './components/pages/about/About';
import PageNotFound from './components/pages/pageNotFound/PageNotFound';
import { Container } from 'react-bootstrap';
import Header from './components/views/header/Header';
import Footer from './components/views/footer/Footer';

import { Routes, Route } from 'react-router-dom';

const App = () => <Container>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/post/:id" element={<Post />}/>
    <Route path="/post/add" element={<AddPost />} />
    <Route path="/post/edit/:id" element={<EditPost />}/>
    <Route path="/categories" element={<Categories />}/>
    <Route path="/category/:categoryId" element={<Category />}/>
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<PageNotFound />}/>
  </Routes>
  <Footer />
</Container>

export default App;

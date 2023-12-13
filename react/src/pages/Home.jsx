import React, {useEffect, useMemo, useState} from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../Styles/App.css'
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import PostService from "../API/PostService";

function Home() {
  const [posts, setPosts] = useState([])

//sort- выбранный алгоритм сортировки; и посиковая строка; за логику изменения алгоритма сортировки отвечает setFilter
  const [filter, setFilter] = useState({sort: '', query: ''})
      
  // const [modal, setModal] = useState(false);

  //возвращает функцию колбэк и массив зависимостей, колбэк осущесвтится, если какая-то из зависимостей в массиве поменяет своё значение,
  // меняем копию массива,а не массив на прямую, потом берем поле, выбранное пользователем и сравниванием локалкомпэйром
    const sortedPost = useMemo(() => {
          if (filter.sort) {
              console.log(filter.query)
                  return [...posts].sort((a, b) => b[filter.sort].localeCompare(a[filter.sort]))
          }
          return posts;
      }, [filter.sort, posts]);
  //в функции колбэк по поисковой строке фильтруем массив с помощью инклюда, принимающего поисковую строку
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.nameRu.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPost])

    // const createPost = (newPost) => {
    //   setPosts([...posts, newPost])
    //     setModal(false)
    // }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.filmId !== post.filmId))
    }

    //берет список фильмов
    async function fetchPost() {
      const posts = await PostService.getAll();
      setPosts(posts)
  }

      console.log(posts)
      useEffect(() => {
          fetchPost();
      }, [])

    return (
      <div className="App">
          {/* <MyButton style={{marginTop: '50px'}} onClick={() => setModal(true)}>
              Создать фильм
          </MyButton> */}
          <hr style={{margin: '15px 0'}}/>
          <PostFilter filter={filter} setFilter={setFilter}/>
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title = 'Список фильмов'/>
      </div>
    );
};

export default Home;

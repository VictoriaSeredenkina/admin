import React, {useState} from 'react';
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import PostService from "../API/PostService";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        // nameRu: '',
        // posterUrlPreview: '',
        // year: '',
        // filmLength: '',
        // countries: '',
        // genres: '',
        // ratingKinopoisk: ''
    })
    const [inputOne, setInputOne] = useState('');

    async function addNewPost (e){
        e.preventDefault()
        console.log(e)
        console.log(inputOne)
        const posts = await PostService.getId(inputOne);
        console.log(posts)
        if (posts == undefined) {
            const posts = await PostService.getId(301);
            create(posts)
        }else
        create(posts)
      }


    return (
        <form>
            <MyInput type="text"
                     name='input1'
                     value={inputOne}
                     onChange={(event) => setInputOne(event.target.value)}
                     placeholder='id фильма'/>

            <MyButton onClick={addNewPost}>Создать</MyButton>
        </form>
    )
}

export default PostForm
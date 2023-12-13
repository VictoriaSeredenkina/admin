import React, {useEffect, useState} from "react";
import viewed from "./icons/yes.png"
import notViewed from "./icons/no.png"
import favourites from "./icons/maybe.png"
import RadioButtons from "./RadioButtons";
import ComentList from "./ComentList";
import CommentForm from "./CommentForm";

const PostItem = (props) => {
    const [comments, setComments] = useState([

    ])
    const createComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const removeComment = (comment) => {
        setComments(comments.filter(p => p.filmId !== comment.filmId))
    }

    let imge = "";
    let info = localStorage.getItem("serials") ?? "";

    
    if(info) {
        // Получаем сохраненное значение из localStorage
        const arr = JSON.parse(localStorage.getItem('serials'));
        // Если значение существует, устанавливаем его в состояние компонента
        let index = -1;
        arr.map((it, i) => {
        if(props.post.filmId in it) index = i;
        })

        if(index > -1) {
        const obj = arr[index];
        const key = Object.keys(obj)[0];
        const val = obj[key];

        console.log(val);
      
        if(val == "yes") imge = viewed;
        if(val == "maybe") imge = favourites;
        if(val == "no") imge = notViewed;
        }
    }

    return (
        <div className='post'>
           <div className='post_name'>
                    <strong>{props.number}. {props.post.nameRu}</strong>
                    {/* <MyButton onClick = {() => props.remove(props.post)}>Удалить</MyButton> */}
                    <img className='icon' src={imge}/>
            </div>
            <div className='postContent'>
                <div className='postInfo'>
                    <img src={props.post.posterUrlPreview}/>
                </div>
                <div className='postBtns'>
                    <div>Год: {props.post.year}</div>
                    <div className='countries'>Страна: <div className='country'>{props.post.countries.map(countrie => <div style={{margin:'5px 0 0 0'}}>{countrie.country}</div>)}</div></div>
                    <div>Время: {props.post.filmLength}</div>
                    <div className='countries'>Жанр: <div className='country'>{props.post.genres.map(genre => <div style={{margin:'5px 0 0 0'}}>{genre.genre}</div>)}</div></div>
                    <RadioButtons id={props.post.filmId}/>
                        
                </div>
            </div>
            <div className='postInfoWrapper'>
                <p>Рейтинг: {props.post.rating}{props.post.ratingKinopoisk}</p> 
            </div>  
            <div>
                   <h3>Комментарии:</h3>
                   <CommentForm create={createComment}/>
                   <ComentList remove={removeComment} comments={comments}/>
            </div>   
        </div>

    )
}

export default PostItem;
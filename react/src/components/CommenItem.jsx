import React from 'react';

const CommenItem = (props) => {
    return (
        <div className='comment'>
            <div className='cooment__content'>
                <div>{props.comment.body}</div>
            </div>
        </div>
    )
}

export default CommenItem;
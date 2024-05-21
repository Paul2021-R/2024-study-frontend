import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "이인재",
        comment: "안녕하세요 소플입니다",
    },
    {
        name: "유재석",
        comment: "유재석입니다!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 잘하고 싶어요",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((component) => {
                return <Comment name={component.name} comment={component.comment} />
            })}
        </div>
    );
}

export default CommentList;
import './SauceComment.scss';

const SauceComment = ({ comment }) => {
    return (
        <div className='sauce-comment'>
            <h3 className='sauce-comment__username'>{comment.userName} says...</h3>
            <p className='sauce-comment__input'>"{comment.comment}"</p>
        </div>
    )
}

export default SauceComment
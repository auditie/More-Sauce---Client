import './CommentSubmit.scss';
import exit from '../../assets/icons/symbols/exit.svg';

const CommentSubmit = ({ postComment }) => {
    return (
        <div className='comment-submit'>
            <button className='comment-submit__close'>
                <img src={exit} alt='back arrow' className='comment-submit__close-icon' />
            </button>
            <form className='comment-submit__form' onSubmit={postComment}>
                <div className='comment-submit__form-divide'>
                    <div>
                        <label for='userName' className='comment-submit__form-label'>User Name:</label><br />
                        <input 
                        type='text' 
                        id='userName'
                        className='comment-submit__form-input' />
                    </div>
                    <button className='comment-submit__form-cta' >Comment</button>
                </div>
                <label for='comment' className='comment-submit__form-label' >Comment:</label>
                <input
                type='text'
                id='comment'
                className='comment-submit__form-input comment-submit__form-input--large' />
            </form>
        </div>
    )
}

export default CommentSubmit
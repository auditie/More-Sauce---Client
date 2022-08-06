import './PageHeader.scss';
import { Link } from 'react-router-dom';

const PageHeader = () => {
    return (
        <div className='page-header'>
            <Link to='/login' className='page-header__login'>Log In</Link>
        </div>
    )
}

export default PageHeader
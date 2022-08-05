import { Link } from 'react-router-dom'
import './NavBar.css'


export default function NavBar() {


    return (
        <div className="navBar">
            <Link to='/'>
                <p>Trackit</p>
            </Link>


            <div className='navBarImg' src='' alt='IMG' />
        </div>
    )

}

import { Link } from 'react-router-dom';
import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <Link 
         onClick={props.clicked}
         className={props.class}
         to={props.link}
         preventScrollReset={false} 
        >{props.children}
        </Link> 
    </li>
);

export default navigationItem;
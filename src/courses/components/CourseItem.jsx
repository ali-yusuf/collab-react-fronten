import {Link} from 'react-router-dom';
import './CourseItem.css'
const CourseItem = props =>{
    return( 
        <li className="course-item">
            <div className="course-item__content card">
                <Link to={`/${props.id}/${props.course}`}>
                <div>
                    <img className="card-img-top" src={props.image} alt={props.title}/>
                </div>
                <div className="course-item__info card-body center">
                    <h2>{props.title}</h2>
                    <h4>{'Enroll - $'}{props.fee}</h4>
                    <p><strong>{'author: '}</strong>{props.author}</p>
                </div>
                </Link>
            </div>
        </li>
    )
}
export default CourseItem;
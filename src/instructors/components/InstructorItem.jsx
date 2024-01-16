import {Link} from 'react-router-dom'
import './InstructorItem.css'
const InstructorItem = props =>{
    return(
        <li className="instructor-item">
            <div className="instructor-item__content card">
                <Link to={`/${props.authorId}/courses`}>
                <div>
                    <img className="card-img-top" src={props.image} alt={props.name}/>
                </div>
                <div className="instructor-item__info card-body center">
                    <h4><strong>{props.name}</strong></h4>
                    <p><strong>{'Qualification: '}{props.qualification}</strong></p>
                    <p>{'Experience: '}{props.experience}</p>
                    <p>{'Contribution: '}{props.courseCount} {props.courseCount === 1 ? 'Course' : 'Courses'}</p>
                </div>
                </Link>
            </div>
        </li>
    )
}
export default InstructorItem;
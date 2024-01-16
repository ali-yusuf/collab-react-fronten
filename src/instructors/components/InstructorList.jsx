import InstructorItem from './InstructorItem'
import './InstructorList.css'
const InstructorList = props =>{
    if(props.items.lenght === 0){
        return (<div className="center">
            <h2>No users found.</h2>
        </div>
        );
    }
    return(<ul className="instructor-list">
        {
        props.items.map(instructor => (
<InstructorItem key={instructor.id} id={instructor.id} name={instructor.name} image={instructor.image} qualification={instructor.qualification} experience={instructor.experience} courseCount={instructor.courseCount} authorId={instructor.authorId}/>
            ))}
    </ul>
    );
}
export default InstructorList;
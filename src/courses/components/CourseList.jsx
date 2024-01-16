import CourseItem from "./CourseItem";
import './CourseList.css';
const CourseList = props =>{
    if(props.items.lenght === 0){
        return (<div className="center">
            <h2>No users found.</h2>
        </div>
        );
    }

    return <ul className="courses-list">
        {props.items.map(course => (
             <CourseItem key={course.id} id={course.id} course={course.course} image={course.image} title={course.title} fee={course.fee} author={course.author} authorId={course.authorId}/>
        ))}
    </ul>
}
export default CourseList;
import CourseList from "../components/CourseList";
import { useParams } from "react-router-dom";
import python from '../../assets/python.jpg'
const Courses = () => {
const COURSES = [{
    id: 'c1',
    image: python ,
    title: 'Basics of Python',
    course: 'python',
    fee: 760,
    author: 'Vinesh Pande',
    authorId: 'a1'
},
{
    id: 'c2',
    image: python,
    title: 'Basics of Java',
    course: 'java',
    fee: 760,
    author: 'Yusuf Ali',
    authorId: 'a1'
},
{
    id: 'c3',
    image: python,
    title: 'Basics of C',
    course: 'c',
    fee: 760,
    author: 'Yusuf Ali',
    authorId: 'a3'
},
{
    id: 'c4',
    image: python,
    title: 'Basics of Python',
    course: 'javascript',
    fee: 760,
    author: 'Yusuf Ali',
    authorId: 'a4'
},
{
    id: 'c5',
    image: python,
    title: 'Basics of Python',
    course: 'css',
    fee: 760,
    author: 'Yusuf Ali',
    authorId: 'a5'
},
{
    id: 'c6',
    image: python,
    title: 'Basics of Python',
    course: 'html',
    fee: 760,
    author: 'Yusuf Ali',
    authorId: 'a6'
}
];
const userId = useParams().authorId;
const loadedCourses = COURSES.filter(course => course.authorId === userId)
console.log(loadedCourses.length);
console.log(COURSES.length);

    return(
        <>{loadedCourses.length > 0  ? <CourseList items={loadedCourses}/>: <CourseList items={COURSES}/>}</>);
};
export default Courses;
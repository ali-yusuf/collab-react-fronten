import InstructorList from "../components/InstructorList";
import image from '../../assets/instructor.webp'
const TEACHERS= [{
authorId: 'a1',
name: 'Ritika Sahejde',
image: image,
qualification: 'M.TECH B.TECH',
experience: '2 years',
courseCount: 2
},
{
    authorId: 'a2',
    name: 'Ritika Sahejde',
    image: image,
    qualification: 'M.TECH B.TECH',
    experience: '2 years',
    courseCount: 1
    },
    {
        authorId: 'a3',
        name: 'Ritika Sahejde',
        image: image,
        qualification: 'M.TECH B.TECH',
        experience: '2 years',
        courseCount: 2
        }
]

const Instructors = () => {
    return(
        <><InstructorList items={TEACHERS}/></>
    );
};
export default Instructors;
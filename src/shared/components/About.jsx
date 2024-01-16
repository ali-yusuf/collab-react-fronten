import React, { useState } from 'react';
import './AboutStyle.css'
const CourseList = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to Programming', instructor: 'John Doe' },
    { id: 2, title: 'Web Development Basics', instructor: 'Jane Smith' },
    { id: 3, title: 'Data Structures and Algorithms', instructor: 'Sam Johnson' },
    // Add more courses as needed
  ]);

  return (
    <div>
      <h2>Available Courses</h2>
      <ul className='course-list'>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.title}</strong> - Instructor: {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

const About = () => {
  return (
    <div className='align-center'>
      <header>
        <h1>Welcome to Collab Learn</h1>
        <p>Empower your coding journey with our diverse range of computer science courses.</p>
      </header>
      <main>
        <CourseList />
      </main>
    </div>
  );
};

export default About;

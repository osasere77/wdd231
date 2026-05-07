const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];

const courseContainer = document.querySelector('#courseContainer');
const totalCredits = document.querySelector('#totalCredits');

function displayCourses(courseList) {

    courseContainer.innerHTML = '';

    courseList.forEach(course => {

        const card = document.createElement('div');

        card.classList.add('course-card');

        if (course.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        courseContainer.appendChild(card);
    });

    const credits = courseList.reduce((total, course) => total + course.credits, 0);

    totalCredits.textContent = `Total Credits Displayed: ${credits}`;
}


displayCourses(courses);


document.querySelector('#allCourses').addEventListener('click', () => {
    displayCourses(courses);
});


document.querySelector('#wddCourses').addEventListener('click', () => {
    const filtered = courses.filter(course => course.subject === 'WDD');
    displayCourses(filtered);
});


document.querySelector('#cseCourses').addEventListener('click', () => {
    const filtered = courses.filter(course => course.subject === 'CSE');
    displayCourses(filtered);
});
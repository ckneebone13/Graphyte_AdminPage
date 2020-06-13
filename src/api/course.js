// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const CourseAPI = {
  courses: [
    {
      number: 1,
      name: 'Software Engineering',
      professor: {
        name: 'David Vineyard',
        email: 'dvineyar@kettering.edu',
        phone: '810-525-3223',
      },
      assignments: [
        {
          date: 'May 19, 2020 23:59:99',
          posted: 'May 18, 2020 23:59:99',
          name: 'assignment3',
          submitted: false,
        },
        {
          date: 'May 17, 2020 23:59:99',
          posted: 'May 16, 2020 23:59:99',
          name: 'assignment2',
          submitted: false,
        },
        {
          date: 'May 16, 2020 23:59:99',
          posted: 'May 14, 2020 23:59:99',
          name: 'assignment1',
          submitted: true,
        },
      ],
      meetings: [
        {
          date: 'May 17, 2020 16:00:00',
        },
        {
          date: 'May 18, 2020 16:00:00',
        },
      ],
      announcements: ['hopefully things are cool', 'everyone stay safe'],
    },
    {
      number: 2,
      name: 'Computer Architecture',
      professor: {
        name: 'Nozar Tabrizi',
        email: 'dvineyar@kettering.edu',
        phone: '810-525-3223',
      },
      assignments: [
        // { date: "2020-05-17", name: "assignment1", submitted: true }
      ],
      meetings: [],
      announcements: ['hopefully', 'everyone'],
    },
    {
      number: 3,
      name: 'Artificial Intelligence',
      professor: {
        name: 'David Vineyard',
        email: 'dvineyar@kettering.edu',
        phone: '810-525-3223',
      },
      assignments: [
        {
          date: 'May 19, 2020 23:59:99',
          posted: 'May 18, 2020 23:59:99',
          name: 'assignment3',
          submitted: false,
        },
        {
          date: 'May 17, 2020 23:59:99',
          posted: 'May 16, 2020 23:59:99',
          name: 'assignment2',
          submitted: false,
        },
        {
          date: 'May 16, 2020 23:59:99',
          posted: 'May 14, 2020 23:59:99',
          name: 'assignment1',
          submitted: true,
        },
      ],
      meetings: [
        {
          date: 'May 17, 2020 16:00:00',
        },
        {
          date: 'May 18, 2020 16:00:00',
        },
      ],
      announcements: ['hopefully things are cool', 'everyone stay safe'],
    },
  ],
  all: function() {
    return this.courses
  },
}
export default CourseAPI

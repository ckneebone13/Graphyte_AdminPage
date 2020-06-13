// A simple mock data API that will be used to get the data for our
// assignments. On a real website, a more robust data fetching
// solution would be more appropriate.
const AssignmentsAPI = {
  assignments: [
    {
      id: 1,
      courseid: 1,
      section: 1,
      duedate: 'May 19, 2020 23:59:99',
      posted: 'May 18, 2020 23:59:99',
      name: 'assignment3',
      submissions: [
        {
          id: 1,
          studentid: 1,
          submissiondate: 'May 19, 2020 22:59:99',
          grade: 0,
        },
        {
          id: 2,
          studentid: 2,
          submissiondate: 'May 19, 2020 22:59:99',
          grade: 0,
        },
      ],
    },
    {
      id: 2,
      courseid: 1,
      section: 1,
      duedate: 'May 17, 2020 23:59:99',
      posted: 'May 16, 2020 23:59:99',
      name: 'assignment2',
      submitted: false,
      submissions: [
        {
          id: 1,
          studentid: 1,
          submissiondate: 'May 19, 2020 22:59:99',
          grade: 20,
        },
        {
          id: 2,
          studentid: 2,
          submissiondate: 'May 19, 2020 22:59:99',
          grade: 40,
        },
      ],
    },
    {
      id: 3,
      courseid: 2,
      section: 2,
      duedate: 'May 16, 2020 23:59:99',
      posted: 'May 14, 2020 23:59:99',
      name: 'assignment1',
      submitted: true,
      submissions: [
        {
          id: 1,
          studentid: 1,
          submissiondate: 'May 19, 2020 22:59:99',
          grade: 40,
        },
        {
          id: 2,
          studentid: 2,
          submissiondate: 'May 19, 2020 22:59:99',
          grade: 60,
        },
      ],
    },
  ],
  all: function() {
    return this.assignments
  },
  get: function(id) {
    const isAssignment = p => p.number === id
    return this.assignment.find(isAssignment)
  },
}

export {AssignmentsAPI}

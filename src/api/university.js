// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const UniversityAPI = {
  users: [
    {
      id: 1,
      name: 'Jeffery Ceja',
      address: '888 somewhere ln, davison mi',
      roles: ['student'],
      username: 'jrceja',
      password: 'password',
      childrenids: [],
      courses: [
        {
          id: 1,
          section: 1,
          name: 'Software Engineering',
          professor: {
            name: 'David Vineyard',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Friday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '11:00:00',
            },
          ],
        },
        {
          id: 2,
          section: 2,
          name: 'Computer Architecture',
          professor: {
            name: 'Nozar Tabrizi',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Tuesday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '16:00:00',
            },
          ],
        },
        {
          id: 3,
          section: 1,
          name: 'Artificial Intelligence',
          professor: {
            name: 'David Vineyard',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Monday',
              time: '16:00:00',
            },
            {
              day: 'Thursday',
              time: '16:00:00',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Caraline Kneebone',
      address: '886 somewhere ln, davison mi',
      roles: ['student'],
      username: 'cknee',
      password: 'password',
      childrenids: [],
      courses: [
        {
          id: 4,
          section: 1,
          name: 'Computing & Algorithms I',
          professor: {
            name: 'David Vineyard',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Friday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '11:00:00',
            },
          ],
        },
        {
          id: 2,
          section: 2,
          name: 'Computer Architecture',
          professor: {
            name: 'Nozar Tabrizi',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Tuesday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '16:00:00',
            },
          ],
        },
        {
          id: 5,
          section: 3,
          name: 'Abstract Algebra',
          professor: {
            name: 'David Vineyard',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Monday',
              time: '16:00:00',
            },
            {
              day: 'Thursday',
              time: '16:00:00',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'David Vineyard',
      address: 'Kettering University',
      roles: ['professor'],
      username: 'dvineyard',
      password: 'password',
      childrenids: [],
      courses: [
        {
          id: 1,
          name: 'Software Engineering',
          section: 1,
          meetings: [
            {
              day: 'Friday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '11:00:00',
            },
          ],
          students: [
            {
              id: 1,
              name: 'Jeffery Ceja',
              address: '888 somewhere ln, davison mi',
            },
            {
              id: 2,
              name: 'Caraline Kneebone',
              address: '886 somewhere ln, davison mi',
            },
          ],
        },
        {
          id: 2,
          section: 2,
          name: 'Computer Architecture',
          professor: {
            name: 'Nozar Tabrizi',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Tuesday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '16:00:00',
            },
          ],
          students: [],
        },
        {
          id: 3,
          section: 1,
          name: 'Artificial Intelligence',
          professor: {
            name: 'David Vineyard',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Monday',
              time: '16:00:00',
            },
            {
              day: 'Thursday',
              time: '16:00:00',
            },
          ],
          students: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Sarah Ceja',
      address: '888 something ln, Davison MI',
      roles: ['parent', 'student'],
      username: 'sceja',
      password: 'password',
      childrenids: [1, 2],
      courses: [
        {
          id: 4,
          section: 1,
          name: 'Computing & Algorithms I',
          professor: {
            name: 'David Vineyard',
            email: 'dvineyar@kettering.edu',
            phone: '810-525-3223',
          },
          meetings: [
            {
              day: 'Friday',
              time: '16:00:00',
            },
            {
              day: 'Wednesday',
              time: '11:00:00',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Kyle Kneebone',
      address: '884 something ln, Davison MI',
      roles: ['parent'],
      username: 'sknee',
      password: 'password',
      childrenids: [2],
      courses: [],
    },
    {
      id: 6,
      name: 'Michael Admin',
      address: '880 something ln, Davison MI',
      roles: ['admin'],
      username: 'admin',
      password: 'admin',
      childrenids: [],
    },
  ],
  all: function() {
    return this.users
  },
  getById: function(id) {
    return this.users.find(user => user.id === id)
  },
  getByName: function(name) {
    const isUser = p => p.name === name
    return this.users.find(isUser)
  },
  getUserByCredentials: function(username, password) {
    let userInfo = this.users.find(
      user => user.username === username && user.password === password,
    )
    if (userInfo !== []) {
      return {
        name: userInfo.name,
        address: userInfo.address,
        roles: userInfo.roles,
      }
    }
    return userInfo
  },
  getUserCourseInformation: function(id, courseid) {
    let userInfo = this.users.find(user => user.id === id)
    if (userInfo !== undefined) {
      let courses = userInfo.courses.find(course => course.id === courseid)
      return courses
    } else {
      return userInfo
    }
  },
}

export default UniversityAPI

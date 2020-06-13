// A simple mock data API that will be used to get the data for our
// assignments. On a real website, a more robust data fetching
// solution would be more appropriate.
//calendar/meetings/{userid} for calendar data for a user
//calendar/personal/{userid} for personal calendar data of a user

const CalendarAPI = {
  meetings: [
    {
      id: 1,
      start: 'May 18, 2020 23:59:99',
      end: 'May 19, 2020 23:59:99',
      name: 'CS 471 Meeting',
      description: 'Nothing',
      personal: false,
    },
    {
      id: 2,
      start: 'May 16, 2020 23:59:99',
      end: 'May 17, 2020 23:59:99',
      name: 'CS 471 Meeting',
      description: 'something',
      personal: false,
    },
    {
      id: 3,
      start: 'May 14, 2020 23:59:99',
      end: 'May 16, 2020 23:59:99',
      name: 'something2',
      description: 'something else',
      personal: false,
    },
  ],
  all: function() {
    return this.meetings
  },
  getById: function(id) {
    return this.meetings.find(meeting => meeting.id === id)
  },
}

export default CalendarAPI

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const featuresAPI = {
  features: [
    {
      id: 0,
      name: 'Manage Roles',
      enabledFor: {
        course: [],
        user: [],
      },
    },
    {
      id: 1,
      name: 'Live Chat/Video',
      enabledFor: {
        course: [],
        user: [],
      },
    },
    {
      id: 2,
      name: 'Calendar',
      enabledFor: {
        user: [],
      },
    },
    {
      id: 3,
      name: 'Forum',
      enabledFor: {
        course: [],
      },
    },
    {
      id: 4,
      name: 'Assignments',
      enabledFor: {
        user: [],
      },
    },
  ],

  all: function() {
    return this.features
  },
}

export default featuresAPI

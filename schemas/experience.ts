export default {
    name: 'experience',
    type: 'document',
    title: 'experience',
    fields: [
      {
        name: 'nameOfCompany',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role'
      },
      {
        name: 'startDate',
        type: 'date',
        title: 'Start Date'
      },
      {
        name:"currentlyWorking",
        type:"boolean",
        title:"Currently Working"
      },
      {
        name: 'endDate',
        type: 'date',
        title: 'End Date'
      },
      {
        name: 'responsibilities',
        type: 'array',
        of: [{type: 'string'}],
        title: 'Responsibilities',
      }

    ]
  }
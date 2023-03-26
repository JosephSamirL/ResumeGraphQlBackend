

export default {
    name: 'profile',
    type: 'document',
    title: 'profile',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name:"about",
        type:"text",
        title:"About"
      },
      {
        name: 'resume',
        type: 'file',
        title: 'Resume'
      },
      {
        name: 'summary',
        type: 'text',
        title: 'Summary'
      },
      {
        name: 'email',
        type: 'email',
        title: 'Email'
      },
      {
        name: 'link',
        title: 'Links',
        type: 'array',
        of: [{type: 'link'}]
      },
      {
        name: "skill",
        type: "array",
        title: "Skills",
        of: [{ type: "skill" }]
      },
      {
        name: 'number',
        type: 'string',
        title: 'Number'
      },
      {
        name: 'profilePicture',
        type: 'image',
        title: 'Profile Picture'
      }
    ]
  }
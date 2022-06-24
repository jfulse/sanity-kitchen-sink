export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b592bcbd7ae86b1f22cc8b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jfvumufx',
                  apiId: '85b3b672-b01d-48ec-839b-46c1a5fe6bfc'
                },
                {
                  buildHookId: '62b592bc02648a6bdc674e4c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8dy5xobj',
                  apiId: '9203fdc2-8a98-41d7-bd67-4b35bbff3bba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jfulse/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8dy5xobj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

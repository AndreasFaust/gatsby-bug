module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        // url: 'https://lisa-api.andreasfaust.de',
        // url: 'http://localhost:8888/lisa/api',
        url: {
          development: 'http://localhost:8888/lisa/api',
          production: 'https://lisa-api.andreasfaust.de'
        },
        imageKeys: ['contentStart', 'contentWork'],
        schemas: {
          work: {
            url: '',
            title: '',
            text: '',
            description: '',
            contentStart: [],
            contentWork: []
          },
          contentStart: {
            type: '',
            videoDesktop: '',
            videoMobile: '',
            url: '',
            alttext: ''
          },
          contentWork: {
            type: '',
            videoDesktop: '',
            videoMobile: '',
            url: '',
            alttext: ''
          }
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}

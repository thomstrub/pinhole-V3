/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Puget Sound Pinhole Society`,
    siteUrl: `https://www.pinholecalculator.com`,
    description: `Calculation for pinhole photography. See psps.club!`,
    author: `Thom Strub`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`,`https://fonts.gstatic.com`],
        web: [
          {
            name: `Karla`,
            file: `https://fonts.googleapis.com/css2?family=Karla:wght@600;700;800&display=swap`,
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "pinholecalculator.com",
        protocol: "https",
        hostname: "pinholecalculator.com",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // Adjust this regex to match your SVG folder
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pinhole Calculator`,
        short_name: `Pinhole Calc`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#555B6F`,
        display: `standalone`,
        icon: `src/assets/PSPSlogo.svg`,
      },
    },
  ],
}

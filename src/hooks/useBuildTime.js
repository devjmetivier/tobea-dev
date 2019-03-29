import { useStaticQuery, graphql } from 'gatsby';

const useBuildTime = () => {
  const time = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "DD/MM/YYYY")
      }
    }
  `);

  return time.site.buildTime;
};

export default useBuildTime;

import { useStaticQuery, graphql } from 'gatsby';
// import { distanceInWordsToNow } from 'date-fns';

export default function useBuildTime() {
  const time = useStaticQuery(graphql`
    query {
      site {
        #        buildTime
        buildTime(formatString: "MM/DD/YYYY")
      }
    }
  `);

  return time.site.buildTime;
  // return time.site.buildTime;
}

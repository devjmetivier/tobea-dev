import { useStaticQuery, graphql } from 'gatsby';
import { distanceInWordsToNow } from 'date-fns';

const useBuildTime = () => {
  const time = useStaticQuery(graphql`
    query {
      site {
        #        buildTime(formatString: "MM/DD/YYYY")
        buildTime(formatString: "MM/DD/YYYY")
      }
    }
  `);

  // return distanceInWordsToNow(time.site.buildTime);
  return time.site.buildTime;
};

export default useBuildTime;

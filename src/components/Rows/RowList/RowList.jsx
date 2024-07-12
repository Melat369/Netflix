import requests from "../../../utils/request";
import SingleRow from "../SingleRow/SingleRow"

function RowList() {
  return (
    <>
      <SingleRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOriginals}
        isLargeRow={true}
      />

      <SingleRow
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />

      <SingleRow
        title="Top Rated"
        fetchUrl={requests.topRatedMovies}
        isLargeRow={true}
      />

      <SingleRow
        title="Action Movies"
        fetchUrl={requests.actionMovies}
        isLargeRow={true}
      />

      <SingleRow
        title="Comedy"
        fetchUrl={requests.comedyMovies}
        isLargeRow={true}
      />

      <SingleRow
        title="Horror Movies"
        fetchUrl={requests.horrorMovies}
        isLargeRow={true}
      />

      <SingleRow
        title="ROMANCE"
        fetchUrl={requests.romanticMovies}
        isLargeRow={true}
      />

      <SingleRow
        title="DOCUMENTARIES"
        fetchUrl={requests.documentaries}
        isLargeRow={true}
      />
      <SingleRow
        title="TV SHOWS"
        fetchUrl={requests.tVShows}
        isLargeRow={true}
      />
    </>
  );
}

export default RowList
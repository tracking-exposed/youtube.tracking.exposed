
const dev = 1; // baaaad

var buildApiUrl = function(end) {
  /* this buildApiUrl should work:
    - in production
    - with localhost:1313 and localhost:9000 (not yet supported)
    - while testing with fixtures because HUGO has them
   */
  if (dev) {
    const l = window.location.href.replace(/:(\d+)/, '').split('/');
    const x = _.reduce(_.compact(l), function(memo, c) {
        const noise = ['http:', 'localhost', '#dummytoken'];
        if(noise.indexOf(c) != -1)
            return memo;

        memo += "/" + c;
        return memo;
    }, "/fixtures");

    console.log(`Development mode, URL composed ${x}/${end}.json`);
    return `${x}/${end}.json`;

  } else {

    const api_path = "/api/v1"
    console.log(`(production) URL composed ${window.location.origin}${api_path}${end}`);
    return `${window.location.origin}${api_path}${end}`
  }
}


const dev = 1; // baaaad
var buildApiUrl = function(end) {
  /* this buildApiUrl should work:
    - in production
    - with localhost:1313 and localhost:9000
    - in testing with fixtures
   */
  let api_path = "/api/v1"
  if (dev) {
    api_path = "/fixtures"
        end = end + ".json"
  }
  console.log(`URL composed ${window.location.origin}${api_path}${end}`);
  return `${window.location.origin}${api_path}${end}`
}


function buildApiUrl(apiName, option) {

  let rv = null;

  /* option is optional, but if present need to have value */
  if(!_.isUndefined(option) && !_.size(option)) {
    console.log(`Problem: option is expected in ${apiName} but option is empty`);
    return rv;
  } else {
    console.log(`(option is) ${option}`);
  }

  if (window.location.origin.match(/localhost/)) {
    const x = 'https://youtube.tracking.exposed/v1'

    if(option) {
        rv = `${x}/${apiName}/${option}`;
    }
    else {
        rv = `${x}/${apiName}`;
    }

    console.log(`(in development) URL composed ${rv}`);
  } else {
    const api_path = "/api/v1/"
    rv = `${window.location.origin}${api_path}${apiName}`;
    console.log(`(in production) URL composed ${rv}`);
  }
  return rv;
}

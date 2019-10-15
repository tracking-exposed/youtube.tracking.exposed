
function buildApiUrl(apiName, option) {

    // const SERVER = 'https://youtube.tracking.exposed';
    const SERVER = 'http://localhost:9000';
    let rv = null;

    /* option is optional, but if present need to have value */
    if(!_.isUndefined(option) && !_.size(option)) {
        console.log(`Problem: option is expected in ${apiName} but option is empty`);
        return rv;
    } else {
        console.log(`(option is) ${option}`);
    }

    if (window.location.origin.match(/localhost/)) {
        const x = SERVER;

        if(option) {
                rv = `${x}/api/v1/${apiName}/${option}`;
        }
        else {
                rv = `${x}/api/v1/${apiName}`;
        }

        console.log(`Builing URL by hardcoded domains (development) URL composed ${rv}`);
    } else {
        const api_path = "/api/v1/"
        rv = `${window.location.origin}${api_path}${apiName}/${option}`;
        console.log(`Building URL by window...href (production) URL composed ${rv}`);
    }
    return rv;
}

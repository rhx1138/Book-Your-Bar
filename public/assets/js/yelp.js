const YELP_API_KEY ='E9sq0Y7E8_DboWKY5PkIjLMcx1-sJa5YAkrg4W3GnoHBTNZjxErdzN-RD0luGzbZXvVTYgixAcyUcR5bqydER0sPP0rVMHlrlJV99GqV3g_UlqsORGPE67cvL_fKYnYx';
const cityName = 'Cleveland';
const category = '';
function getYelp() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="${cityName}"&term=restaurants&categories=${category}`;
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
      Origin: null
    },
  };
  fetch(url, apiOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("yelp js", data.businesses);
    });
}

const axios = require("axios");

let events = [];
const urls = [];

const setEvents = async () => {
  try {
    const response = await axios.get(
      "https://services.kommunity.com/upcomings?page=1&limit=50&timezone=Europe%2FIstanbul"
    );
    events = response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const start = async () => {
  await setEvents();
  let arrayOfMatched = []
  const mevent = await Promise.all(events.map(async (event) => {
    const eventSlug = event.slug;
    const komSlug = event.community.slug;
    const url = `https://api.kommunity.com/api/v3/${komSlug}/events/${eventSlug} `;
    const response = (await axios.get(url)).data
    const detail = response.data.detail;
    const include = detail.search('Nasıl serdarı seçersin ya ')
    
    if(include !== -1){
     arrayOfMatched.push(url)
    }
   
  }))
  console.log(arrayOfMatched);
};

start();

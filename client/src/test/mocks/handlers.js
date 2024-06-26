
import {http, HttpResponse, delay} from "msw";

const handlers = [
    http.get("https://timestamps-microservice.netlify.app/api/dates/1999-12-31", () => {
        delay(2000);
        return HttpResponse.json({unix: "946598400000", utc: "Fri, 31 Dec 1999 00:00:00 GMT"});
    }),
    http.get("https://timestamps-microservice.netlify.app/api/dates/1999-31-12"), () => {
        delay(2000);
        return HttpResponse.json({error: "Whoops...check the year, month and/or day!"});
    },
    http.get("https://timestamps-microservice.netlify.app/api/dates/12-31-1999", () => {
        return HttpResponse.json({error: "That is not an accepted date (or even a date at all)!"});
    }),
    http.get("https://timestamps-microservice.netlify.app/api/dates/3891372832792377218191111", () => {
        delay(2000);
        return HttpResponse.json({error: "Woah...that date is too far out to get timestamps!"});
    }),
    http.get("https://timestamps-microservice.netlify.app/api/dates/-1723482374", () => {
        return HttpResponse.json({unix: "-1723482374", utc: "Fri, 12 Dec 1969 01:15:17 GMT"});
    }),
    http.get("https://timestamps-microservice.netlify.app/api/dates/4782.*DD&S*1", () => {
        delay(2000);
        return HttpResponse.json({error: "That is not an accepted date (or even a date at all)!"});
    })
];

export {handlers};
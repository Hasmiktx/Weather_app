import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  console.log(dayInWeek, "dayinWeek");
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    className="icon-small"
                    alt="daily-weather"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">{`${Math.round(
                    item.main.temp_min
                  )}°C/${Math.round(item.main.temp_max)}°C`}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div>
                  <div className="daily-details-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                </div>
                <div>
                  <div className="daily-details-item">
                    <label>Wind speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;

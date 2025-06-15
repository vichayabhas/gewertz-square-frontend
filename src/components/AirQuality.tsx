
import React from "react";
import GetTimeHtml from "./GetTimeHtml";
import { zeroTimeOffset } from "./setup";
import getAirQuality from "@/libs/getAirQuality";

export default async function AirQuality() {

  const  timeOffset = zeroTimeOffset;

  const airQuality = await getAirQuality();
  return (
    <table>
      <tr>
        <th>time</th>
        <th>pm2.5</th>
        <th>aqi</th>
      </tr>
      {airQuality.measurements.hourly.map((hourly, i) => {
        if (!hourly.pm25) {
          return null;
        }
        return (
          <tr key={i}>
            <td>
              <GetTimeHtml input={hourly.ts} offset={timeOffset} />
            </td>
            <td>{hourly.pm25.concentration}</td>
            <td>{hourly.aqi}</td>
          </tr>
        );
      })}
    </table>
  );
}

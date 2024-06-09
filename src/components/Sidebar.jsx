import React from "react";
import WeatherKeyInfo from "./WeatherKeyInfo";

function WeatherComponent() {
  return (
    <div className="bg-foreground w-fit h-full rounded-xl border-b-4 border-component-border">
      {/* Main Wrapper */}
      <div className="w-full h-full py-16 px-6 2xl:px-12 flex flex-col items-center justify-between">
        {/* Realtime Wrapper */}
        <div className="w-full flex flex-col gap-6 items-center">
          <p className="text-center font-medium text-3xl text-primary">
            Grand Island
          </p>
          <img
            className="size-48 -my-5"
            src={`${process.env.PUBLIC_URL}/assets/clear-day.svg`}
            alt="Clear Day"
          />
          <div className="flex flex-col gap-2">
            <p className="text-center font-bold text-5xl text-primary">75°F</p>
            <p className="text-center text-base text-primary">Sunny</p>
          </div>
        </div>
        {/* Weather Details Wrapper */}
        <div className="w-full flex flex-col gap-4 items-center">
          {/* Weather Key Pair */}
          <div className="w-full flex gap-4">
            <WeatherKeyInfo svg="sunrise" text="6:43am" />
            <WeatherKeyInfo svg="sunset" text="10:00pm" />
          </div>
          {/* Weather Key Pair */}
          <div className="w-full flex gap-4">
            <WeatherKeyInfo svg="thermometer" text="95°F" />
            <WeatherKeyInfo svg="humidity" text="86%" />
          </div>
          {/* Weather Key Pair */}
          <div className="w-full flex gap-4">
            <WeatherKeyInfo svg="wind" text="5 mph" />
            <WeatherKeyInfo svg="raindrops" text="5 mph" />
          </div>
        </div>
        {/* Logo */}
        <img
          className="w-36"
          src={`${process.env.PUBLIC_URL}/assets/fitcast.svg`}
          alt=""
        />
      </div>
    </div>
  );
}

export default WeatherComponent;

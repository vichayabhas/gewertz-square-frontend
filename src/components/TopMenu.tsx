import styles from "./topMenu.module.css";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dayjs from "dayjs";
import React from "react";
import getSystemInfo from "@/libs/getSystemInfo";
import DateConvert from "./DateConvert";
export default async function TopMenu() {
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const session = await getServerSession(authOptions);
  const { systemMode } = await getSystemInfo();
  if (session) {
    const dateObj = dayjs(Date.now())
      .toDate();
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = monthArray[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
        return (
          <div className={styles.menuContainer}>
            <DateConvert
              day={day}
              minutes={minutes}
              month={month}
              year={year}
              hours={hours}
            />
            <div>{systemMode}</div>
            <div className="flex flex-row absolute right-10 top-0 h-full py-2 text-center">
              {/* <TopMenuItem title="weather" pageRef="/weather" /> */}
              <TopMenuItem title="gewertz square" pageRef="/gewertzSquare" />
              {/* <TopMenuItem title="Update Profile" pageRef="/updateProfile" /> */}
              <TopMenuItem title="Sign Out" pageRef="/api/auth/signout" />
              <TopMenuItem title="Home" pageRef="/" />
            </div>
          </div>
        );
  } else {
    const dateObj = new Date(Date.now());
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = monthArray[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    return (
      // not login
      <div className={styles.menuContainer}>
        {/* <Logo /> */}
        <DateConvert
          day={day}
          minutes={minutes}
          month={month}
          year={year}
          hours={hours}
        />
        <div>{systemMode}</div>
        <div className="flex flex-row absolute right-10 top-0 h-full py-2 text-center">
          {/* <TopMenuItem title="weather" pageRef="/weather" /> */}
          <TopMenuItem title="gewertz square" pageRef="/gewertzSquare" />
          <TopMenuItem title="Sign In" pageRef="/api/auth/signin" />
          <TopMenuItem title="Register" pageRef="/signup" />
          <TopMenuItem title="Home" pageRef="/" />
        </div>
      </div>
    );
  }
  //return <TopMenuItem title="Sign Out" pageRef="/api/auth/signout" />
} /*
{role === "admin" && user.mode === "pee" ? (
          <TopMenuItem title="Admin Action" pageRef="" />
        ) : null}
        <TopMenuItem title="Reservations" pageRef="/booking/" />
        {session ? (
          <TopMenuItem title="Sign Out" pageRef="/api/auth/signout" />
        ) : (
          
        )}*/

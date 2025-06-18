"use client";
import { TextField } from "@mui/material";
import React from "react";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { CommonUser } from "../../interface";
import { setTextToString } from "./setup";
import FinishButton from "./FinishButton";
import bypassRole from "@/libs/bypassRole";
import updateGewertzSquareAccount from "@/libs/updateGewertzSquareAccount";

// note fixed text box border bg-white ,width to 60%, title color ,button color &  mx-2, checkbox color

export default function UpdateProfileRaw({
  user,
  session,
}: {
  user: CommonUser;
  session: Session | null;
}) {
  const [name, setName] = React.useState<string>(user.name);
  const [tel, setTel] = React.useState<string>(user.tel);
  const [email, setEmail] = React.useState<string>(user.email);
  const [lastname, setLastname] = React.useState<string>(user.lastname);
  const [key, setKey] = React.useState<string>("");
  const router = useRouter();
  if (!session) {
    router.push("/");
    return <></>;
  }
  //console.log(user)
  return (
    <div className="w-[100%] flex flex-col items-center pt-20 space-y-10">
      <div
        className="text-4xl font-bold"
        style={{
          color: "#961A1D",
        }}
      >
        Update Profile
      </div>

      <form
        className="w-[70%] items-center p-10 rounded-3xl"
        style={{
          backgroundColor: "#961A1D",
        }}
      >
        <div className="flex flex-row items-center">
          <label className="w-2/5 text-2xl text-white">ชื่อจริง</label>
          <TextField
            name="Name"
            id="Name"
            value={name}
            className="w-3/5 bg-white rounded-2xl "
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: " 1rem",
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "#5479FF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5479FF",
                },
              },
            }}
            onChange={setTextToString(setName, true)}
            required
          />
        </div>
        <div className="flex flex-row items-center my-5">
          <label className="w-2/5 text-2xl text-white">นามสกุล</label>
          <TextField
            name="LastName"
            id="LastName"
            className="w-3/5 bg-white rounded-2xl border-gray-200"
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: " 1rem",
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "#5479FF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5479FF",
                },
              },
            }}
            onChange={setTextToString(setLastname, true)}
            value={lastname}
            required
          />
        </div>
        <div className="flex flex-row items-center my-5">
          <label className="w-2/5 text-2xl text-white">Email</label>
          <TextField
            name="Email"
            id="Email"
            type="email"
            className="w-3/5 bg-white rounded-2xl border-gray-200"
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: " 1rem",
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "#5479FF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5479FF",
                },
              },
            }}
            onChange={setTextToString(setEmail)}
            value={email}
            required
          />
        </div>

        <div className="flex flex-row items-center my-5">
          <label className="w-2/5 text-2xl text-white">เบอร์โทรศัพท์</label>
          <TextField
            name="Tel"
            id="Tel"
            type="number"
            className="w-3/5 bg-white rounded-2xl border-gray-200"
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: " 1rem",
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "#5479FF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#5479FF",
                },
              },
            }}
            onChange={setTextToString(setTel)}
            value={tel}
            required
          />
        </div>
        <div className="flex flex-row justify-end">
          <button
            className="bg-white p-3 mx-2 font-medium rounded-lg shadow-[10px_10px_10px_-10px_rgba(0,0,0,0.5)] hover:bg-rose-700"
            style={{
              color: "#961A1D",
            }}
            onClick={() => {
              alert(user._id);
            }}
          >
            รหัส mongo
          </button>
          <button
            className="bg-white p-3 mx-2 font-medium rounded-lg shadow-[10px_10px_10px_-10px_rgba(0,0,0,0.5)] hover:bg-rose-700"
            style={{
              color: "#961A1D",
            }}
            onClick={() => {
              try {
                updateGewertzSquareAccount(
                  { email, tel, name, lastname },
                  session.user.token
                );
              } catch (error) {
                console.log(error);
              }
            }}
          >
            update all
          </button>
        </div>
        {user.fridayActEn ? (
          <>
            <div className="flex flex-row items-center my-5">
              <label className="w-2/5 text-2xl text-white">bypass</label>
              <TextField
                name="citizenId"
                id="citizenId"
                className="w-3/5 bg-white rounded-2xl border-gray-200"
                sx={{
                  backgroundColor: "#f5f5f5",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: " 1rem",
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "#5479FF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5479FF",
                    },
                  },
                }}
                onChange={setTextToString(setKey)}
              />
            </div>
            <FinishButton
              text="bypass"
              onClick={() => bypassRole(key, session.user.token)}
            />
          </>
        ) : null}
      </form>
    </div>
  );
}

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import GewertzSquarePageClient from "@/components/GewertzSquarePageClient";
import getGewertzSquareBooking from "@/libs/getGewertzSquareBooking";
import getGewertzSquareUserMe from "@/libs/getGewertzSquareUserMe";

import { getServerSession } from "next-auth";
import React from "react";
export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session
    ? await getGewertzSquareUserMe(session.user.token)
    : null;
  const data = await getGewertzSquareBooking(session?.user.token);
  return (
    <GewertzSquarePageClient
      data={data}
      user={user ? user.user : null}
      token={session?.user.token}
    />
  );
}

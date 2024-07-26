import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-lvh w-full flex-col items-center justify-center gap-y-5 text-5xl text-black">
      This Page Has Not Been Implemented Yet.
      <Link className="rounded-3xl bg-slate-600 p-5" href="/">
        Go Back
      </Link>
    </div>
  );
};

export default page;

import {
  AddRounded,
  BookmarkOutlined,
  ContentCutOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  console.log(session?.user?.image);

  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* Top */}
      <div
        className="bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden relative items-center
        flex flex-col text-center border border-gray-300 dark:border-none"
      >
        <div className="relative w-full h-14">
          <Image
            src="https://rb.gy/i26zak"
            layout="fill"
            priority
            alt="Imagem de cabeçalho"
          />
        </div>
        <Avatar
          onClick={() => signOut}
          src={session?.user?.image || undefined}
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-4 py-4 space-x-0.5 ">
          <h4 className="hover:underline decoration-yellow-300 underline-offset-2 cursor-pointer">
            {session?.user?.name}
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            {session?.user?.email}
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>

            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>

            <div className="sidebarButton">
              <h4 className="leading-4 text-xs">
                Access exclusive tools & insights
              </h4>
              <h4 className="dark:text-white font-medium">
                <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
                Try Premium for free
              </h4>
            </div>

            <div className="sidebarButton flex items-center space-x-1.5">
              {" "}
              <BookmarkOutlined className="!-ml-1" />
              <h4 className="dark:text-white font-medium">My items</h4>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div
        className="hidden md:flex bg-white dark:bg-[#1d2226] text-black/70 dark:text-white/75 rounded-lg
      overflow-hidden  flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 dark:border-none"
      >
        <p className="sidebarLink">Groups</p>
        <div className="flex items-center justify-between ">
          <p className="sidebarLink">Events</p>
          <AddRounded className="!h-5" />
        </div>
        <p className="sidebarLink">Followed Hashtags</p>
        <div className="sidebarButton text-center">
          <h4 className="dark:text-white font-medium text-sm">Discover More</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

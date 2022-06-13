import Image from 'next/image'
import React from 'react'
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  VideoCameraIcon,
  SpeakerphoneIcon,
  SparklesIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="bg-white flex items-center px-4 py-2 shadow-md sticky top-0 z-50">
      <div className="relative h-10 w-20 cursor-pointer flex-shrink-0">
        <Image
          src="https://links.papareact.com/fqy"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="hidden xl:inline flex-1 ml-2">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form
        action=""
        className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1"
      >
        <SearchIcon className="h-6 w-6 text-gray-600" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Reddit"
          className=" bg-transparent flex-1 outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className="hidden lg:inline-flex items-center space-x-2 mx-5 text-gray-500">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="border h-10 border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="lg:hidden items-center text-gray-500">
        <MenuIcon className="icon mx-2" />
      </div>

      {session ? (
        <div className="flex items-center">
          <div
            onClick={() => signOut()}
            className="items-center hidden lg:inline-flex flex-col text-xs text-gray-500"
          >
            <p className="cursor-pointer truncate">{session?.user?.name}</p>
            <p className="cursor-pointer">Sign Out</p>
          </div>
          <div>
            <ChevronDownIcon className="h-5 text-gray-400 mx-2 cursor-pointer" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="items-center hidden lg:inline-flex"
        >
          <p className="cursor-pointer">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header

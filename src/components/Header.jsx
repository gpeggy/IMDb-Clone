import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 max-w-7xl mx-auto">
      <ul className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={'/sign-in'} className="border-2 border-amber-500 bg-amber-500 text-black font-bold hover:bg-white hover:text-amber-500 px-3 py-1 rounded-lg">
          Sign in</Link>
        </SignedOut>
        <li className="hidden sm:block">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
      <Link href={'/'} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-1 rounded-xl">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
}

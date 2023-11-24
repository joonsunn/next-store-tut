import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { HomeIcon, LogIn } from "lucide-react";
import NavItems from "./NavItems";

export default function NavBar() {
    return (
        <nav className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO: Mobile Nav */}
                            <div className="mt-4 flex lg:ml-0">
                                <Link href={"/"}>
                                    <HomeIcon></HomeIcon>
                                    <span>Home</span>
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems></NavItems>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </nav>
    );
}

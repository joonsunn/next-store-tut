"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
    {
        name: "Instant Delivery",
        Icon: ArrowDownToLine,
        description: "Get your assets delivered to your email in seconds.",
    },
    {
        name: "Guaranteed Quality",
        Icon: CheckCircle,
        description:
            "Digitals assets checked by our team to ensure highest quality.",
    },
    {
        name: "For the Planet",
        Icon: Leaf,
        description:
            "All proceeds are channeled to the National Park Foundation.",
    },
];

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Your marketplace for high quality{" "}
                        <span className="text-blue-500 ">digital assets</span>.
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        Welcome to Next Store. Every asset on our platform is
                        verified by our team to ensure the highest qualty
                        standards.
                    </p>
                    <div className="flex flex-col sm:flex-grow gap-4 mt-6">
                        <Link href={""} className={buttonVariants()}>
                            #1
                        </Link>
                        <Button
                            variant="ghost"
                            onClick={() => alert("Button Clicked!")}
                        >
                            Our quality promise &rarr;
                        </Button>
                        <Link href={"/"}>
                            <button className="bg-slate-400 rounded-md p-2 w-full">
                                #3
                            </button>
                        </Link>
                    </div>
                </div>
                {/* TODO: List products */}
            </MaxWidthWrapper>
            <section className="border-t border-gray-200 bg-gray-100">
                <MaxWidthWrapper className="py-20">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((perk) => {
                            return (
                                <div
                                    key={perk.name}
                                    className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                                >
                                    <div className="md:flex-shrink-0 flex justify-center">
                                        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                                            <perk.Icon className="h-1/3 w-1/3"></perk.Icon>
                                        </div>
                                    </div>
                                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                        <h3 className="text-base font-medium text-gray-900">
                                            {perk.name}
                                        </h3>
                                        <p className="mt-3 text-sm text-muted-foreground">
                                            {perk.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}

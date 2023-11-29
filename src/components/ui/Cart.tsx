"use client";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "./separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./button";
import Image from "next/image";

const Cart = () => {
    const itemCount = 0;
    const fee = 1;
    const currency = "EUR";
    const total = 100;
    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                ></ShoppingCart>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {itemCount}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle></SheetTitle>Cart ({itemCount})
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            Cart items
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator></Separator>
                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">
                                        Transaction fee
                                    </span>
                                    <span>
                                        {formatPrice(fee, { currency })}
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span>
                                        {formatPrice(total, { currency })}
                                    </span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href={"/"}
                                        className={buttonVariants({
                                            className: "w-full",
                                        })}
                                    >
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div
                            aria-hidden="true"
                            className="relative mb-4 h-60 w-60 text-muted-foreground"
                        >
                            <Image
                                alt="empty cart"
                                src={"/next.svg"}
                                fill
                            ></Image>
                        </div>
                        <div className="text-xl font-semibold">
                            Your cart is empty
                        </div>
                        <SheetTrigger asChild>
                            <Link
                                href={"/"}
                                className={buttonVariants({
                                    variant: "link",
                                    size: "sm",
                                    className: "text-sm text-muted-foreground",
                                })}
                            >
                                Add items to your cart
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;

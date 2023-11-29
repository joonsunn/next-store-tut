import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config";
import payload from "payload";

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    };
}

type initOptions = {
    initOptions?: Partial<InitOptions>;
};

export const getPayloadClient = async ({ initOptions }: initOptions = {}) => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error("PAYLOAD_SECRET is missing");
    }

    if (cached.payload) {
        return cached.payload;
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        });
    }

    try {
        cached.client = await cached.promise;
    } catch (error: unknown) {
        cached.client = null;
        throw error;
    }

    return cached.client;
};

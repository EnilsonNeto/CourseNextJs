import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();
    

    return new Response('<h1>Profile Route</h1>', {
        headers : {
            "Cotent-type": "text/html"
        }
    })
}
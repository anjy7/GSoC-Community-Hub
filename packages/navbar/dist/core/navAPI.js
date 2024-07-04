import qs from "qs";
/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */ export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */ export async function fetchNavData(options = {}, urlParamsObject = {}) {
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    };
    const queryString = qs.stringify({
        populate: {
            variant1: {
                populate: [
                    "tile",
                    "subTiles"
                ]
            },
            variant2: {
                populate: [
                    "components"
                ]
            },
            variant3: {
                populate: [
                    "*"
                ]
            },
            brandLogo: {
                populate: [
                    "*"
                ]
            }
        }
    });
    const requestUrl = `${getStrapiURL(`/api/nav-datas${queryString ? `?${queryString}` : ""}`)}`;
    const response = await fetch(requestUrl, mergedOptions);
    if (!response.ok) {
        console.error(response);
        return null;
    }
    const data = await response.json();
    return data.data.length > 0 ? data.data[0].attributes : null;
}

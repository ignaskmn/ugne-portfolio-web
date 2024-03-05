import type { Work } from "@/app/_types/payload-types";

const url = process.env.NODE_ENV === 'production' ? 'https://admin.ugnemakselyte.com' : 'http://localhost:3000';

export const fetchWorks = async (): Promise<Work[]> => {
    const docs: {
        docs: Work[];
    } = await fetch(
        `${url}/api/works?depth=1&limit=100`
    ).then((res) => res.json()); // eslint-disable-line function-paren-newline

    return docs?.docs ?? [];
};

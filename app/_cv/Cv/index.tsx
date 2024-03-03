import { fetchCv } from "@/app/_api/fetchGlobals";
import { HeroCv } from "@/app/_heros/Cv";
import type { Cv } from "@/app/_types/payload-types";
import { notFound } from "next/navigation";

export default async function Cv() {
    let cv: Cv | null = null;

    try {
        cv = await fetchCv();
    } catch (error) {
        console.log(error);
    }

    if (!cv) {
        return notFound();
    }

    // console.log(cv);


    const { education, experience } = cv;

    return <>
        <div className="mx-4 md:mx-24">
            <div className="mb-16">
                <div className="flex flex-col items-start">
                    <HeroCv {...cv} />
                    {/* <CvBlock {education} />
                <CvBlock {experience} /> */}
                </div>
            </div>
        </div>
    </>
}
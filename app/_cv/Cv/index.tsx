import { fetchCv } from "@/app/_api/fetchGlobals";
import { HeroCv } from "@/app/_heros/Cv";
import CvBlock from "@/app/_blocks/CvBlock";
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


    const { education, experience } = cv;

    return <>
        <div className="mx-4 md:mx-24">
            <div className="mb-16">
                <div className="flex flex-col items-start">
                    <HeroCv {...cv} />
                    {experience && <CvBlock data={experience} type='experience' />}
                    {education && <CvBlock data={education} type='education' />}
                </div>
            </div>
        </div>
    </>
}
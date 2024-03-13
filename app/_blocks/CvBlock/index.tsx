import type { Cv } from "@/app/_types/payload-types";

type Education = Extract<Cv["education"], any[]>[number];
type Experience = Extract<Cv["experience"], any[]>[number];

type CvBlockProps = {
  data: Education[] | Experience[];
  type: "education" | "experience";
};

export default function CvBlock({ data, type }: CvBlockProps) {
  return (
    <div className="max-w-lg">
      {type === "education" ? (
        <h2 className="uppercase mb-4 text-2xl sm:text-4xl text-white">
          education
        </h2>
      ) : (
        <h2 className="uppercase mb-4 text-2xl sm:text-4xl text-white">
          experience
        </h2>
      )}
      {data.map((item, index) => (
        <div key={index} className="mb-4 pb-4 border-b border-stone-300 last:border-0 ">
          <p className="text-stone-400">
            {new Date(item.startDate).toLocaleDateString("en-GB")} - {item.endDate
              ? new Date(item.endDate).toLocaleDateString("en-GB")
              : "Ongoing"}
          </p>
          <h3 className="text-2xl text-white">
            {(item as Experience).position || (item as Education).degree}
          </h3>
          <h4 className="text-stone-100">
            {type === "education"
              ? (item as Education).institution
              : (item as Experience).organization}
          </h4>
        </div>
      ))}
    </div>
  );
}

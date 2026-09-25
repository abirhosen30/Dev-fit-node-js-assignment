import { IExercise } from "@/types/exercieses.type";
// import { exercises } from "@/data/exercises.data"; // ⚠️ আপনার আসল data source অনুযায়ী path ঠিক করে নিন
import Image from "next/image";
import { notFound } from "next/navigation";

interface DetailsPageProps {
  params: Promise<{ id: string }>;
}

const getExercises = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await res.json();

  return data;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { id } = await params;

  const exercises = await getExercises();
  const exercise: IExercise | undefined = exercises.find(
    (ex: IExercise) => String(ex.id) === id,
  );

  if (!exercise) {
    notFound();
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions,
  } = exercise;

  return (
    <div className="container mx-auto py-10">
      <div className="flex gap-10 lg:flex-row flex-col">
        {/* LEFT IMAGE */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[620px] lg:w-[320px] lg:flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-1 flex-col gap-4">
          {/* TITLE */}
          <h1 className="text-3xl font-extrabold uppercase tracking-wide">
            {name}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
            {description}
          </p>

          {/* TAGS */}
          <div className="mt-4 flex gap-2">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* DETAILS */}
          <div className="mt-5 overflow-hidden rounded-lg border border-[#252a33] bg-[#151a22]">
            <DetailRow label="Equipment" value={equipment} />
            <DetailRow label="Difficulty" value={difficulty} />
            <DetailRow label="Sets" value={sets} />
            <DetailRow label="Reps" value={reps} />
            <DetailRow label="Duration" value={`${duration} min`} />
            <DetailRow label="Calories" value={`${caloriesBurned} kcal`} />
            <DetailRow label="Rating" value={rating} last />
          </div>

          {/* INSTRUCTIONS */}
          <section className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Instructions
            </h2>
            <ol className="mt-3 space-y-2 text-xs leading-5 text-gray-400">
              {instructions.map((step, index) => (
                <li key={index}>
                  <span className="mr-2 text-white">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </section>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-md bg-lime-400 px-4 py-2 text-xs font-bold text-black transition hover:bg-lime-300"
            >
              <span>▣</span> Add to today&apos;s plan
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-xs text-gray-300 transition hover:bg-gray-800"
            >
              <span>□</span> Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function DetailRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string | number;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        last ? "" : "border-b border-[#252a33]"
      }`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <span className="text-xs text-gray-200">{value}</span>
    </div>
  );
}

export default DetailsPage;

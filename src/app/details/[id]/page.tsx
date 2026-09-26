import SavePlanButton from "@/components/exercisesDetails/SavePlanButton";
import TodayPlanButton from "@/components/exercisesDetails/TodayPlanButton";
import { IExercise } from "@/types/exercieses.type";
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        
        {/* LEFT IMAGE: Responsive height */}
        <div className="relative h-[280px] sm:h-[380px] md:h-[450px] lg:h-[600px] w-full overflow-hidden rounded-xl border border-[#252a33] lg:w-[360px] xl:w-[400px] lg:shrink-0">
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-white">
            {name}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
            {description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 pt-1">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-lime-400 px-3 py-1 text-[11px] sm:text-xs font-bold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* DETAILS TABLE */}
          <div className="mt-3 overflow-hidden rounded-lg border border-[#252a33] bg-[#151a22]">
            <DetailRow label="Equipment" value={equipment} />
            <DetailRow label="Difficulty" value={difficulty} />
            <DetailRow label="Sets" value={sets} />
            <DetailRow label="Reps" value={reps} />
            <DetailRow label="Duration" value={`${duration} min`} />
            <DetailRow label="Calories" value={`${caloriesBurned} kcal`} />
            <DetailRow label="Rating" value={rating} last />
          </div>

          {/* INSTRUCTIONS */}
          <section className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Instructions
            </h2>
            <ol className="mt-2.5 space-y-2 text-xs sm:text-sm leading-relaxed text-gray-400">
              {instructions.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="font-bold text-white shrink-0">{index + 1}.</span> 
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* BUTTONS (Responsive Grid/Flex on mobile) */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <TodayPlanButton exercise={exercise} />
            <SavePlanButton exercise={exercise} />
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
      className={`flex items-center justify-between px-4 py-2.5 sm:py-3 ${
        last ? "" : "border-b border-[#252a33]"
      }`}
    >
      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <span className="text-xs sm:text-sm text-gray-200">{value}</span>
    </div>
  );
}

export default DetailsPage;
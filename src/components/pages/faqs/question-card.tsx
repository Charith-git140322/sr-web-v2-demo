import { FC, ReactNode } from "react";
import { ArrowRightCircle } from "lucide-react";

type QuestionCardProps = {
  question: string;
  children: ReactNode;
};

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  children,
}: QuestionCardProps) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <div className="mb-2 flex flex-row items-center gap-2 text-lg font-semibold text-gray-900">
        <ArrowRightCircle className="w--8 mt-1 h-8 shrink-0 text-yellow-700" />
        <span>{question}</span>
      </div>
      <div className="text-sm text-gray-700 md:text-base">{children}</div>
    </div>
  );
};

export default QuestionCard;

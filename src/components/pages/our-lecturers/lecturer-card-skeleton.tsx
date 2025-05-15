const LecturerCardSkeleton = () => {
  return (
    <div className="flex h-auto w-[300px] flex-col rounded-3xl border bg-white p-4 shadow-sm">
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="h-[100px] w-[100px] animate-pulse rounded-full border-2 bg-gray-200" />
        <div className="h-[50px] w-[120px] animate-pulse rounded-lg bg-gray-200" />
      </div>
      <hr className="my-4 border-t border-dashed border-gray-400" />
      <div className="flex flex-col gap-y-2 whitespace-nowrap">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="h-[20px] w-[20px] animate-pulse rounded bg-gray-200" />
            <div className="h-[20px] w-[60px] animate-pulse rounded bg-gray-200" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="h-[20px] w-[20px] animate-pulse rounded bg-gray-200" />
            <div className="h-[20px] w-[60px] animate-pulse rounded bg-gray-200" />
          </div>
        </div>
        <div className="h-[40px] w-full animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  );
};

export default LecturerCardSkeleton;

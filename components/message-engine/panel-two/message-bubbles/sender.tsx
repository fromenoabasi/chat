import { CheckCheck } from "lucide-react";

const Sender = () => {
  return (
    <div className="flex ms-auto gap-x-2 sm:gap-x-4">
      <div className="space-y-3 grow text-end">
        <div className="inline-flex flex-col justify-end">
          <div className="inline-block p-4 shadow-sm bg-primary rounded-2xl">
            <p className="max-w-xl text-sm text-primary-foreground">Nice to meet you too 👍</p>
          </div>

          <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-muted-foreground pb-4">
            <CheckCheck className="flex-shrink-0 size-3" />
            Sent
          </span>
        </div>
      </div>

      <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
        <span className="text-sm font-medium leading-none text-white">AZ</span>
      </span>
    </div>
  );
};

export { Sender };

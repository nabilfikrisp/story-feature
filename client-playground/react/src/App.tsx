import { useState } from "react";
import PlusIcon from "./components/icons/plus";
import { cn } from "./utils/cn";

export default function App() {
  const [show, setShow] = useState(false);

  function openDialog() {
    setShow(true);
  }
  function closeDialog() {
    setShow(false);
  }

  return (
    <div className="bg-background text-foreground flex min-h-screen w-full flex-col">
      <div
        id="container"
        className="border-accent relative mx-auto h-full w-full max-w-4xl flex-1 border-x px-5 py-10"
      >
        <div id="stories" className="flex gap-4">
          <button
            id="add-story"
            className="border-disabled-foreground bg-accent hover:bg-disabled flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-full border-2 transition-all"
            onClick={openDialog}
          >
            <PlusIcon />
          </button>
          <div
            id="story"
            className="border-primary bg-accent flex h-20 w-20 flex-col items-center justify-center rounded-full border-2"
          >
            as
          </div>
        </div>

        <div
          id="dialog"
          className={cn(
            "absolute top-1/2 left-1/2 flex h-fit w-150 -translate-x-1/2 -translate-y-1/2 flex-col",
            show ? "block" : "hidden",
          )}
        >
          <div className="border-disabled-foreground flex h-full w-full flex-1 flex-col gap-4 rounded-xl border p-4">
            asdf
            <div className="flex w-full gap-2">
              <button
                onClick={closeDialog}
                className="border-disabled-foreground hover:bg-disabled bg-accent cursor-pointer rounded-lg border px-2 py-1"
              >
                Cancel
              </button>
              <button
                onClick={closeDialog}
                className="bg-primary border-primary hover:bg-primary/80 cursor-pointer rounded-lg border px-2 py-1"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

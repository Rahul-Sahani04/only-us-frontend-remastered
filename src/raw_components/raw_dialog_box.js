// Generate a Chat Application UI similar to Omegle that allows users to chat with strangers. The UI should have a chat box, a video box, and a button to connect with a stranger. The UI should also have a feature to report or block a user. The UI should be responsive and should work on mobile devices as well. The UI should be accessible and should work with screen readers. Keep the UI minimal and clean.  


// Tremor Raw Dialog [v0.0.0]

import React from "react";
import * as DialogPrimitives from "@radix-ui/react-dialog";

import { cx, focusRing } from "@/lib/utils";

const Dialog = (props) => {
  return <DialogPrimitives.Root {...props} />;
};
Dialog.displayName = "Dialog";

const DialogTrigger = DialogPrimitives.Trigger;
DialogTrigger.displayName = "DialogTrigger";

const DialogClose = DialogPrimitives.Close;
DialogClose.displayName = "DialogClose";

const DialogPortal = DialogPrimitives.Portal;
DialogPortal.displayName = "DialogPortal";

const DialogOverlay = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DialogPrimitives.Overlay
        ref={forwardedRef}
        className={cx(
          // base
          "fixed inset-0 z-50 overflow-y-auto",
          // background color
          "bg-black/70",
          // transition
          "data-[state=open]:animate-dialogOverlayShow",
          className
        )}
        {...props}
      />
    );
  }
);

DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DialogPortal>
        <DialogOverlay>
          <DialogPrimitives.Content
            ref={forwardedRef}
            className={cx(
              // base
              "fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border p-6 shadow-lg",
              // border color
              "border-gray-200 dark:border-gray-900",
              // background color
              "bg-white dark:bg-[#090E1A]",
              // transition
              "data-[state=open]:animate-dialogContentShow",
              focusRing,
              className
            )}
            {...props}
          />
        </DialogOverlay>
      </DialogPortal>
    );
  }
);

DialogContent.displayName = "DialogContent";

const DialogHeader = ({ className, ...props }) => {
  return <div className={cx("flex flex-col gap-y-1", className)} {...props} />;
};

DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <DialogPrimitives.Title
      ref={forwardedRef}
      className={cx(
        // base
        "text-lg font-semibold",
        // text color
        "text-gray-900 dark:text-gray-50",
        className
      )}
      {...props}
    />
  )
);

DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DialogPrimitives.Description
        ref={forwardedRef}
        className={cx("text-gray-500 dark:text-gray-500", className)}
        {...props}
      />
    );
  }
);

DialogDescription.displayName = "DialogDescription";

const DialogFooter = ({ className, ...props }) => {
  return (
    <div
      className={cx(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};

DialogFooter.displayName = "DialogFooter";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};

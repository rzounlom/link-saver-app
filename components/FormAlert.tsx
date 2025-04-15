"use client";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

import { FC } from "react";

type AlertProps = {
  alertType: "error" | "success" | "warning";
  messages: string[];
};

const iconMap = {
  error: <XCircleIcon className="size-5 text-red-400" aria-hidden="true" />,
  success: (
    <CheckCircleIcon className="size-5 text-green-400" aria-hidden="true" />
  ),
  warning: (
    <ExclamationTriangleIcon
      className="size-5 text-yellow-400"
      aria-hidden="true"
    />
  ),
};

const colorMap = {
  error: {
    bg: "bg-red-50",
    text: "text-red-800",
    subText: "text-red-700",
  },
  success: {
    bg: "bg-green-50",
    text: "text-green-800",
    subText: "text-green-700",
  },
  warning: {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    subText: "text-yellow-700",
  },
};

const Alert: FC<AlertProps> = ({ alertType, messages }) => {
  const { bg, text, subText } = colorMap[alertType];

  if (messages.length === 0) return null;

  return (
    <div className={`rounded-md p-4 ${bg} relative`}>
      <div className="flex">
        <div className="shrink-0">{iconMap[alertType]}</div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${text}`}>
            {messages.length > 1
              ? `There were ${messages.length} issues with your submission`
              : `There was an issue with your submission`}
          </h3>
          <div className={`mt-2 text-sm ${subText}`}>
            <ul role="list" className="list-disc space-y-1 pl-5">
              {messages.map((msg, idx) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

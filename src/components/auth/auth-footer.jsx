import React from "react";

export default function AuthFooter() {
  return (
    <p className="mt-8 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </p>
  );
}

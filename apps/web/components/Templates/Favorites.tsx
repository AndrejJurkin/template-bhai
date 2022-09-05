import { useState } from "react";

export default function Favorites() {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div className="flex items-center justify-between rounded bg-zinc-900 p-2 md:p-3">
      <p className="text-sm text-zinc-100 md:text-base">Show Favorites</p>
      <input
        type="checkbox"
        name="favorites"
        className="h-4 w-4 rounded border-none accent-white outline-none"
        onChange={() => setShowFavorites((prevVal) => !prevVal)}
      />
    </div>
  );
}

export const Navbar = (onHomeClick, onAddClick) => {
  const nav = document.createElement("nav");
 nav.className = "glass-card shadow-lg rounded-2xl px-6 py-3 mb-6 flex justify-between items-center text-white border border-white/10";

  nav.innerHTML = `
    <h1 class="text-xl font-bold text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]">🎟 Event Manager</h1>

    <div class="flex gap-4">
      <button id="homeBtn" class="hover:text-blue-200 transition">Home</button>
      <button id="addEventBtn" class="hover:text-blue-200 transition">Add Event</button>
    </div>
  `;

  nav.querySelector("#homeBtn").addEventListener("click", onHomeClick);
  nav.querySelector("#addEventBtn").addEventListener("click", onAddClick);

  return nav;
};

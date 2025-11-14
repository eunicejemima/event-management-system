import { fetchEvents } from "../api/eventApi.js";
import { formatDateTime } from "../utils/dateHelper.js";
import { renderHome } from "./Home.js";

export const renderEventDetail = async (id) => {
  const root = document.getElementById("app");
  root.innerHTML = "";

  const container = document.createElement("div");
  container.className = "bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg text-white max-w-md mx-auto";

  try {
    const { data } = await fetchEvents();
    const event = data.find((e) => e._id === id);

    if (!event) {
      container.innerHTML = `<p class='text-center text-red-400'>Event not found 😞</p>`;
      root.appendChild(container);
      return;
    }

    container.innerHTML = `
      <h2 class="text-2xl font-bold mb-2">${event.title}</h2>
      <p class="text-sm mb-4 opacity-90">${formatDateTime(event.date)}</p>
      <p class="mb-4">${event.description || "No description provided."}</p>
      <p class="mb-4 font-medium">${event.reminder ? "🔔 Reminder is set" : "❌ No reminder"}</p>
      <button id="backBtn" class="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">Back</button>
    `;

    root.appendChild(container);

    // Back button handler
    document.getElementById("backBtn").addEventListener("click", renderHome);
  } catch (err) {
    container.innerHTML = `<p class='text-center text-red-400'>Error loading event: ${err.message}</p>`;
    root.appendChild(container);
  }
};

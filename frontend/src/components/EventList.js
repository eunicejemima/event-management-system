import { deleteEvent } from "../api/eventApi.js";
import { formatDateTime } from "../utils/dateHelper.js";

export const EventList = (events, refresh) => {
  const container = document.createElement("div");
  container.className = "grid grid-cols-1 md:grid-cols-2 gap-4";

  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "glass-card event-card p-4 flex justify-between items-center text-white fade-in";


    card.innerHTML = `
      <div>
        <h2 class="text-lg font-bold cursor-pointer">${event.title}</h2>
        <p class="text-sm">${formatDateTime(event.date)}</p>
      </div>
      <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white shadow-md shadow-red-500/40">
  Delete
</button>

    `;

    // Delete handler
   // Click title to view details
card.querySelector("h2").addEventListener("click", async () => {
  const { renderEventDetail } = await import("../pages/EventDetail.js");
  renderEventDetail(event._id);
});

// Delete handler
card.querySelector("button").addEventListener("click", async () => {
  await deleteEvent(event._id);
  refresh();
});


    container.appendChild(card);
  });

  return container;
};

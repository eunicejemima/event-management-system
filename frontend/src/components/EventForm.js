import { createEvent } from "../api/eventApi.js";

export const EventForm = (refresh) => {
  const form = document.createElement("form");
  form.className = "glass-card p-6 rounded-xl flex flex-col gap-3 text-white shadow-lg fade-in";


  form.innerHTML = `
    <input type="text" name="title" placeholder="Event Title" class="p-2 rounded text-black" required/>
    <input type="datetime-local" name="date" class="p-2 rounded text-black" required/>
    <textarea name="description" placeholder="Description" class="p-2 rounded text-black"></textarea>
    <label><input type="checkbox" name="reminder"/> Set Reminder</label>
    <button type="submit" class="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold p-2 rounded shadow-md shadow-blue-500/30">
  Add Event
</button>

  `;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const newEvent = Object.fromEntries(formData);
    newEvent.reminder = form.reminder.checked;

    await createEvent(newEvent);
    form.reset();
    refresh();
  });

  return form;
};

import { fetchEvents } from "../api/eventApi.js";
import { EventList } from "../components/EventList.js";
import { EventForm } from "../components/EventForm.js";
import { Navbar } from "../components/Navbar.js";

export const renderHome = async () => {
  const root = document.getElementById("app");
  root.innerHTML = "";

  const loadEvents = async () => {
    const { data } = await fetchEvents();
    const list = EventList(data, loadEvents);
    const existingList = root.querySelector(".event-list");
    if (existingList) root.removeChild(existingList);
    list.className += " event-list mt-4";
    root.appendChild(list);
  };

  const scrollToForm = () => {
    const form = document.querySelector("form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  root.appendChild(Navbar(renderHome, scrollToForm));

  const heading = document.createElement("h1");
  heading.className = "text-2xl font-bold mb-4 text-white";
  heading.textContent = "📅 Event Dashboard";
  root.appendChild(heading);

  heading.className = "text-2xl font-bold mb-4 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] fade-in";

  root.appendChild(EventForm(loadEvents));
  await loadEvents();
};

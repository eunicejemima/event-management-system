import cron from "node-cron";
import Event from "../models/eventModel.js";

const scheduleReminders = () => {
  cron.schedule("* * * * *", async () => {
    const now = new Date();

    try {
      const events = await Event.find({
        reminder: true,
        date: { $lte: new Date(now.getTime() + 60000) }, // within 1 minute
      });

      events.forEach((event) => {
        console.log(`🔔 Reminder: ${event.title} at ${event.date}`);
      });
    } catch (err) {
      console.error("Error checking reminders:", err.message);
    }
  });
};

export default scheduleReminders;

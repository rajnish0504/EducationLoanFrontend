import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../utils/api";

const badgeColors = {
  INFO: "text-blue-400",
  SUCCESS: "text-green-400",
  WARNING: "text-yellow-400",
  ERROR: "text-red-400",
};

const slideVariants = {
  initial: {
    opacity: 0,
    y: -20, // start slightly above
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 20, // slide DOWN on exit
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api
      .get("/api/student/dashboard/notifications")
      .then((res) => setNotifications(res.data))
      .catch(() => {});
  }, []);

  // Rotate notifications one-by-one
  useEffect(() => {
    if (notifications.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 3000); // ⏱ change every 3 seconds

    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <div className="bg-[#131c31] border border-slate-700 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">
        Notifications
      </h3>

      {notifications.length === 0 && (
        <p className="text-slate-400 text-sm">
          No new notifications 🎉
        </p>
      )}

      <div className="relative h-[56px] overflow-hidden">
        <AnimatePresence mode="wait">
          {notifications.length > 0 && (
            <motion.div
              key={index}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="
                absolute w-full
                bg-[#0b1220]
                border border-slate-700
                rounded-lg px-4 py-3
                flex justify-between items-center
              "
            >
              <span
                className={`text-sm ${
                  badgeColors[notifications[index].type]
                }`}
              >
                • {notifications[index].message}
              </span>

              <span className="text-xs text-slate-500">
                {notifications[index].date}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationsPanel;

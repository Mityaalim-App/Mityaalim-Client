const WeekTimeline: React.FC = () => {
  const today = new Date();

  return (
    <div className="week-timeline">
      <pre className={today.getDay() === 0 ? "today" : "past"}>א</pre>
      <pre
        className={
          today.getDay() === 1
            ? "today"
            : today.getDay() < 1
            ? "future"
            : "past"
        }
      >
        ב
      </pre>
      <pre
        className={
          today.getDay() === 2
            ? "today"
            : today.getDay() < 2
            ? "future"
            : "past"
        }
      >
        ג
      </pre>
      <pre
        className={
          today.getDay() === 3
            ? "today"
            : today.getDay() < 3
            ? "future"
            : "past"
        }
      >
        ד
      </pre>
      <pre
        className={
          today.getDay() === 4
            ? "today"
            : today.getDay() < 4
            ? "future"
            : "past"
        }
      >
        ה
      </pre>
      <pre
        className={
          today.getDay() === 5
            ? "today"
            : today.getDay() < 5
            ? "future"
            : "past"
        }
      >
        ו
      </pre>
      <pre
        className={
          today.getDay() === 6
            ? "today"
            : today.getDay() < 6
            ? "future"
            : "past"
        }
      >
        ש
      </pre>
    </div>
  );
};

export default WeekTimeline;

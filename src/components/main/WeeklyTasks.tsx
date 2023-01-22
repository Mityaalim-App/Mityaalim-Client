import { ReactComponent as Leaf } from "../../assets/svgs/dashboard/leaf-outline.svg";
import { ReactComponent as LeafOutline } from "../../assets/svgs/dashboard/leaf-outline-task.svg";
import { ReactComponent as Video } from "../../assets/svgs/dashboard/video-task.svg";
import { ReactComponent as Podcast } from "../../assets/svgs/dashboard/podcast-task.svg";
import { ReactComponent as Article } from "../../assets/svgs/dashboard/article-task.svg";
import { ReactComponent as DoTask } from "../../assets/svgs/dashboard/do-task.svg";
import { ReactComponent as LeafOutlineDone } from "../../assets/svgs/dashboard/leaf-outline-task-done.svg";
import { ReactComponent as VideoDone } from "../../assets/svgs/dashboard/video-task-done.svg";
import { ReactComponent as PodcastDone } from "../../assets/svgs/dashboard/podcast-task-done.svg";
import { ReactComponent as ArticleDone } from "../../assets/svgs/dashboard/article-task-done.svg";
import { ReactComponent as DoTaskDone } from "../../assets/svgs/dashboard/do-task-done.svg";

import WeekTimeline from "./week-timeline";

import user from "../../data/user.json";

const WeeklyTasks: React.FC = () => {
  const { tasks }: { [index: string]: any } = user;


  return (
    <div className="weekly-tasks">
      <div className="title">
        <h3>משימות השבוע</h3>
        <div className="leaves">
          <pre>250</pre>
          <Leaf />
        </div>
      </div>
      <WeekTimeline />
      <div className="tasks">
        <div className={`task-preview ${tasks["video"] ? "done" : "new"}`}>
          <div className="icon">
            {tasks["video"] && <VideoDone />}
            {!tasks["video"] && <Video />}
          </div>
          <div className="title">
            <h4 className={tasks["video"] ? "done" : "new"}>וידאו</h4>
          </div>
          <div className={`status ${tasks["video"] ? "done" : "new"}`}>
            <div className="leaves">
              <pre>25</pre>
              {tasks["video"] && <LeafOutlineDone />}
              {!tasks["video"] && <LeafOutline />}
            </div>
            <div className="todo">
              {tasks["video"] && <DoTaskDone />}
              {!tasks["video"] && <DoTask />}
            </div>
          </div>
        </div>
        <div
          className={`task-preview ${tasks["podcast"] ? "done" : "new"}`}
        >
          <div className="icon">
            {tasks["podcast"] && <PodcastDone />}
            {!tasks["podcast"] && <Podcast />}
          </div>
          <div className="title">
            <h4 className={tasks["podcast"] ? "done" : "new"}>פודקאסט</h4>
          </div>
          <div className={`status ${tasks["podcast"] ? "done" : "new"}`}>
            <div className="leaves">
              <pre>25</pre>
              {tasks["podcast"] && <LeafOutlineDone />}
              {!tasks["podcast"] && <LeafOutline />}
            </div>
            <div className="todo">
              {tasks["podcast"] && <DoTaskDone />}
              {!tasks["podcast"] && <DoTask />}
            </div>
          </div>
        </div>
        <div
          className={`task-preview ${tasks["article"] ? "done" : "new"}`}
        >
          <div className="icon">
            {tasks["article"] && <ArticleDone />}
            {!tasks["article"] && <Article />}
          </div>
          <div className="title">
            <h4 className={tasks["article"] ? "done" : "new"}>מאמר</h4>
          </div>
          <div className={`status ${tasks["article"] ? "done" : "new"}`}>
            <div className="leaves">
              <pre>25</pre>
              {tasks["article"] && <LeafOutlineDone />}
              {!tasks["article"] && <LeafOutline />}{" "}
            </div>
            <div className="do-task">
              {tasks["article"] && <DoTaskDone />}
              {!tasks["article"] && <DoTask />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTasks;

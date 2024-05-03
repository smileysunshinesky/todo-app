import { useState } from "react";
import "./index.scss";

export default function TodoPage() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [task, setTask] = useState("");

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    console.log("Отправка задачи:", task);

    setTask("");
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTaskSubmit(event);
    }
  };

  return (
    <div className={`main ${isDarkTheme ? "main_dark" : "main_light"}`}>
      <div
        className={`main__background ${
          isDarkTheme ? "main__background_dark" : "main__background_light"
        }`}
      />

      <div className="main__block">
        <div className="main__section main__section_first">
          <h1 className="main__section-title">todo</h1>

          <button
            className={`main__theme-btn ${
              isDarkTheme ? "main__theme-btn_dark" : "main__theme-btn_light"
            }`}
            onClick={() => setDarkTheme(!isDarkTheme)}
          />
        </div>

        <div
          className={`input-block ${
            isDarkTheme ? "input-block_dark" : "input-block_light"
          }`}
        >
          <div
            className={`input-block__circle ${
              isDarkTheme
                ? "input-block__circle_dark"
                : "input-block__circle_light"
            }`}
          />

          <input
            type="text"
            name="task"
            id="task"
            className={`input-block__textfield ${
              isDarkTheme
                ? "input-block__textfield_dark"
                : "input-block__textfield_light"
            }`}
            value={task}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="Create a new todo..."
          />
        </div>

        <div className="tabs-block">
          <div
            className={`todo-tab ${
              isDarkTheme ? "todo-tab_dark" : "todo-tab_light"
            }`}
          >
            <input
              type="checkbox"
              className={`todo-tab__check-btn ${
                isDarkTheme
                  ? "todo-tab__check-btn_dark"
                  : "todo-tab__check-btn_light"
              }`}
            />

            <p
              className={`todo-tab__text ${
                isDarkTheme ? "todo-tab__text_dark" : "todo-tab__text_light"
              }`}
            >
              Testing IDK with very long message I think yeah... blah blahb
              lha...
            </p>
          </div>

          <div
            className={`todo-tab ${
              isDarkTheme ? "todo-tab_dark" : "todo-tab_light"
            }`}
          >
            <input
              type="checkbox"
              className={`todo-tab__check-btn ${
                isDarkTheme
                  ? "todo-tab__check-btn_dark"
                  : "todo-tab__check-btn_light"
              }`}
            />

            <p
              className={`todo-tab__text ${
                isDarkTheme ? "todo-tab__text_dark" : "todo-tab__text_light"
              }`}
            >
              Testing IDK with very long message I think yeah... blah blahb
              lha...
            </p>
          </div>

          <div
            className={`todo-tab ${
              isDarkTheme ? "todo-tab_dark" : "todo-tab_light"
            }`}
          >
            <input
              type="checkbox"
              className={`todo-tab__check-btn ${
                isDarkTheme
                  ? "todo-tab__check-btn_dark"
                  : "todo-tab__check-btn_light"
              }`}
            />

            <p
              className={`todo-tab__text ${
                isDarkTheme ? "todo-tab__text_dark" : "todo-tab__text_light"
              }`}
            >
              Testing IDK with very long message I think yeah... blah blahb
              lha...
            </p>
          </div>

          <div
            className={`total-lists ${
              isDarkTheme ? "total-lists_dark" : "total-lists_light"
            }`}
          >
            <p
              className={`total-lists__count ${
                isDarkTheme
                  ? "total-lists__count_dark"
                  : "total-lists__count-light"
              }`}
            >
              <span className="count">3</span> items left
            </p>

            <div className="total-lists__filter-block">
              <button
                className={`total-lists__btn ${
                  isDarkTheme
                    ? "total-lists__btn_dark"
                    : "total-lists__btn_light"
                }`}
              >
                All
              </button>

              <button
                className={`total-lists__btn ${
                  isDarkTheme
                    ? "total-lists__btn_dark"
                    : "total-lists__btn_light"
                }`}
              >
                Active
              </button>

              <button
                className={`total-lists__btn ${
                  isDarkTheme
                    ? "total-lists__btn_dark"
                    : "total-lists__btn_light"
                }`}
              >
                Completed
              </button>
            </div>

            <button
              className={`total-lists__btn ${
                isDarkTheme ? "total-lists__btn_dark" : "total-lists__btn_light"
              }`}
            >
              Clear Completed
            </button>
          </div>
        </div>

        <p
          className={`main__subtitle ${
            isDarkTheme ? "main__subtitle_dark" : "main__subtitle_light"
          }`}
        >
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

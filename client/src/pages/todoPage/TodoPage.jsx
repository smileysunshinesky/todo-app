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

        <div className="main__section main__section_third"></div>
      </div>
    </div>
  );
}

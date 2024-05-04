import { useSelector } from "react-redux";
import "./index.scss";

export default function TodoTab() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div
      className={`todo-tab ${isDarkTheme ? "todo-tab_dark" : "todo-tab_light"}`}
    >
      <input
        type="checkbox"
        className={`todo-tab__check-btn ${
          isDarkTheme ? "todo-tab__check-btn_dark" : "todo-tab__check-btn_light"
        }`}
      />

      <p
        className={`todo-tab__text ${
          isDarkTheme ? "todo-tab__text_dark" : "todo-tab__text_light"
        }`}
      >
        Testing IDK with very long message I think yeah... blah blahb lha...
      </p>
    </div>
  );
}

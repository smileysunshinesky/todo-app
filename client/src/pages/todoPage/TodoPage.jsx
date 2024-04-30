import { useState } from "react";
import "./index.scss";

export default function TodoPage() {
  const [isDarkTheme, setDarkTheme] = useState(false);

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

        <div className="main__section main__section_second"></div>

        <div className="main__section main__section_third"></div>
      </div>
    </div>
  );
}

import "./index.scss";

export default function TodoPage() {
  return (
    <div className="main">
      <div className="main__background main__background_light" />

      <div className="main__block">
        <div className="main__section main__section_first">
          <h1 className="main__section-title">todo</h1>

          <button className="main__theme-btn main__theme-btn_light"></button>
        </div>

        <div className="main__section main__section_second"></div>

        <div className="main__section main__section_third"></div>
      </div>
    </div>
  );
}

import {ExcelComponent} from "../../core/excelComponent";

export class Header extends ExcelComponent {
  static className = 'header'

  public toHtml(): string {
    return `
      <div class="header__wrapper">
        <div class="logo">
          <svg>
            <g xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h40v40H0z"/>
              <path fill="#fff" d="M10.5 14H30v16H10.5z"/>
              <path fill="#188038" d="M24 12l7 3.1 2-4.1-9-9-2.5 4.2z"/>
              <path fill="#34a853" d="M21 23h5v3h-5zm-7-5h5v3h-5z"/>
              <path fill="#34a853"
                    d="M24 11V2H10C8.3 2 7 3.3 7 5v30c0 1.7 1.3 3 3 3h20c1.7 0 3-1.3 3-3V11h-9zm4 17H12V16h16v12z"/>
              <path fill="#34a853" d="M14 23h5v3h-5zm7-5h5v3h-5z"/>
            </g>
          </svg>
        </div>
        <input type="text" value="Новая таблица" class="header__input-title">
      </div>
      <div class="header__inner">
        <button class="header__delete-btn">
          <span class="material-icons">delete_forever</span>
        </button>
        <button class="header__close-btn">
          <span class="material-icons">logout</span>
        </button>
      </div>
    `
  }
}
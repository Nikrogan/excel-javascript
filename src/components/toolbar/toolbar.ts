import {ExcelComponent} from "../../core/excelComponent";


interface IToolbar {
  toHtml: () => string
}

export class Toolbar extends ExcelComponent implements IToolbar {
  static className = 'toolbar'

  public toHtml():string {
    return `      
      <button class="toolbar__btn">
        <span class="material-icons">
            format_align_justify
        </span>
      </button>
      <button class="toolbar__btn">
                <span class="material-icons">
                    format_italic
                </span>
      </button>
      <button class="toolbar__btn">
                <span class="material-icons">
                    format_color_fill
                </span>
      </button>
      <button class="toolbar__btn">
                <span class="material-icons">
                    format_color_text
                </span>
      </button>
      <button class="toolbar__btn">
                <span class="material-icons">
                    format_size
                </span>
      </button>
      <button class="toolbar__btn">
                <span class="material-icons">
                    format_align_left
                </span>
      </button>
      <button class="toolbar__btn">
                <span class="material-icons">
                    format_align_center
                </span>
      </button>
      <button class="toolbar__btn">
        <span class="material-icons">
            format_align_right
        </span>
      </button>`
  }
}
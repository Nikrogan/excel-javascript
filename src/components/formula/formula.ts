import {ExcelComponent} from "../../core/excelComponent";

export class Formula extends ExcelComponent {
  static className = 'formula'

  public toHtml():string {
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>
    `
  }
}
import {ExcelComponent} from "../../core/excelComponent";

export class Table extends ExcelComponent {
  static className = 'table'

  public toHtml(): string {
    return `
      <div class="table__row">
        <div class="table__info"></div>
        <div class="table__data">
          <div class="table__column">A</div>
          <div class="table__column">B</div>
          <div class="table__column">C</div>
        </div>
      </div>
      <div class="table__row">
        <div class="table__info">1</div>
        <div class="table__data">
          <div class="table__cell">ASD</div>
          <div class="table__cell">ASDASDasda</div>
          <div class="table__cell">GFASDZXCASD</div>
        </div>
      </div>
      <div class="table__row">
        <div class="table__info">2</div>
        <div class="table__data">
          <div class="table__cell selected">ASD</div>
          <div class="table__cell">ASDASDasda</div>
          <div class="table__cell">GFASDZXCASD</div>
        </div>
      </div>
    `
  }
}
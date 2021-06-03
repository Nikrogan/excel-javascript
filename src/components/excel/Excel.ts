import {$} from "../../core/dom";
import {ExcelComponent} from '../../core/excelComponent';

export class Excel {
  private readonly $el;
  private components

  constructor(selector: string, options: {
    components: any[]
  }) {
    this.$el = $(selector)
    this.components = options.components
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components.forEach((Components) => {
      const $el = $.create('div', Components.className)
      const createComponent = new Components($el)
      $el.html(createComponent.toHtml())
      $root.append($el)
    })
    return $root
  }


  render() {
    this.$el.append(this.getRoot())
  }
}
import './scss/main.scss'
import {Excel} from "./components/excel/Excel";
import {Header} from "./components/header/header";
import {Formula} from "./components/formula/formula";
import {Toolbar} from "./components/toolbar/toolbar";
import {Table} from "./components/table/table";


const excel = new Excel("#app", {
  components: [
    Header,
    Toolbar,
    Formula,
    Table
  ]
})

excel.render()
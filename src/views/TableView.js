import React, { Component } from 'react'
import { Tabel } from '../components/Tabel'
import { columnName } from '../data/ColumnName'
import { data } from '../data/Data'


export class TableView extends Component {
    render() {
    return (
      <div>
          <Tabel label={columnName} isi={data}/>
      </div>
    )
  }
}

export default TableView


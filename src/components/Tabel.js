import React from 'react'
import { useState, useMemo } from "react"
import { sortRows, paginateRows } from '../function/helpers'
import { Pagination } from './Pagination'

export const Tabel = ({ label, isi }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
    const rowsPerPage = 3
    const count = isi.length
    const total = Math.ceil(count / rowsPerPage)

    const sortedRows = useMemo(() => sortRows(isi, sort), [isi, sort])
    const calculatedRows = paginateRows(sortedRows, currentPage, rowsPerPage)

    const sorting = initiate_name => {
        setCurrentPage(1)
        setSort(prevSort => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === initiate_name ? 'desc' : 'asc',
            orderBy: initiate_name,
        }))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {label.map(columnName => {
                            const sortIC = () => {
                                if (columnName.initiate_name === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return '⬆️'
                                    }
                                    return '⬇️'
                                } else {
                                    return '↕️'
                                }
                            }
                            return (
                                <th key={columnName.initiate_name}>
                                    <span>{columnName.label}</span>
                                    <button onClick={() => sorting(columnName.initiate_name)}>{sortIC()}</button>
                                </th>
                            )
                        })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        calculatedRows.map(data => {
                            return (
                                <tr key={data.id}>
                                    {label.map(columnName => {
                                        return <td key={columnName.initiate_name}>{data[columnName.initiate_name]}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                count={count}
                rowsPerPage={rowsPerPage}
                total={total}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

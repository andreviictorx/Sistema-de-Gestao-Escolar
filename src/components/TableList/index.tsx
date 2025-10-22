import type React from "react"
import '../TableList/TableList.styles'
import { StyledTable } from "../TableList/TableList.styles"

interface TableProps<T extends { id: number | string }> {
    headers: string[],
    data: T[],
    renderRow: (item: T) => React.ReactNode
}
const TableLists = <T extends { id: number | string }>({ headers, data, renderRow }: TableProps<T>) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="tbody">
                {data.length === 0 ? (
                    <tr>
                        <td colSpan={headers.length} style={{ textAlign: 'center' }} >
                            Nenhum Item cadastrado
                        </td>
                    </tr>
                ) : (
                    data.map((item) => renderRow(item))
                )}
            </tbody>
        </StyledTable>
    )
}

export default TableLists
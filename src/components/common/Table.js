import {
    Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableContainer,
    Flex, Center, Button, Select, Text, Spacer, Input
} from '@chakra-ui/react'
import {
    // Column,
    // Table as ReactTable,
    // PaginationState,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    // ColumnDef,
    // OnChangeFn,
    flexRender,
} from '@tanstack/react-table'

const Table = ({ columns, data }) => {

    const table = useReactTable({
        data,
        columns,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        //
        debugTable: true,
    })

    return (
        <TableContainer >
            <ChakraTable>
                <Thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <Th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </div>
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map(row => (
                        <Tr key={row.id} _hover={{ bgColor: "palette.body" }} >
                            {row.getVisibleCells().map(cell => {
                                return (
                                    <Td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </Td>
                                )
                            })}
                        </Tr>
                    ))}
                </Tbody>
            </ChakraTable>
            <Flex w="full" mt={2}>
                <Button
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    size="sm"
                    mr={1}
                >
                    {'<<'}
                </Button>
                <Button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    size="sm"
                    mr={1}
                >
                    {'<'}
                </Button>
                <Button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    size="sm"
                    mr={1}
                >
                    {'>'}
                </Button>
                <Button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    size="sm"
                    mr={1}
                >
                    {'>>'}
                </Button>
                <Center mr={1}>
                    <Text mr={1}>หน้าที่</Text>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </Center>
                <Center>
                    <Text mr={1}>| ไปยังหน้า </Text>
                    <Input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            table.setPageIndex(page)
                        }}
                        size="sm"
                    />
                </Center>
                <Spacer />
                <Select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                    size="sm"
                    w="fit-content"
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            แสดง {pageSize} รายการ
                        </option>
                    ))}
                </Select>
            </Flex>
        </TableContainer>

    )
}

export default Table
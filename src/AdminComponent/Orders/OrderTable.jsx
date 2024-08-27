import { Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const orders= [1,1,1,1,1,1,1]

export default function OrderTable() {
  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader
                title={"Tất cả đơn hàng"}
                sx={{pt:2, alignItems:"center"}}

            />
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Ảnh</TableCell>
                        <TableCell align="right">Khách hàng</TableCell>
                        <TableCell align="right">Giá tiền</TableCell>
                        <TableCell align="right">Tên</TableCell>
                        <TableCell align="right">Thành phần</TableCell>
                        <TableCell align="right">Trạng thái</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {1}
                            </TableCell>
                            <TableCell align="right">{"image"}</TableCell>
                            <TableCell align="right">{"luckydepcho1@gmail.com"}</TableCell>
                            <TableCell align="right">{"price"}</TableCell>
                            <TableCell align="right">{"pizza"}</TableCell>
                            <TableCell align="right">{"ingredient"}</TableCell>
                            <TableCell align="right">{"completed"}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    </Box>
  )
}

import { Box, Card, CardActions, CardHeader, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

const orders = [1, 1, 1, 1, 1, 1, 1]

export default function MenuTable() {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <AddIcon />
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Ảnh</TableCell>
                                <TableCell align="right">Tên món</TableCell>
                                <TableCell align="right">Thành phần</TableCell>
                                <TableCell align="right">Giá tiền</TableCell>
                                <TableCell align="right">Trạng thái</TableCell>
                                <TableCell align="right">Xóa</TableCell>

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
                                    <TableCell align="right">
                                        <IconButton>
                                            <Delete/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

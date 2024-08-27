import { Box, Card, CardActions, CardHeader, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

const orders = [1, 1, 1, 1, 1, 1, 1]

export default function IngredientCategoryTable() {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <AddIcon />
                        </IconButton>
                    }
                    title={"Danh mục thành phần"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Tên danh mục</TableCell>
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
                                    <TableCell align="left">{"name"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

import React from 'react'
import {
  Box,
  Card,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material'
import { Scrollbar } from '@/components/Scrollbar'

interface TableData {
  [key: string]: any
}
interface AppBasicTableProps {
  fields: string[]
  data: TableData[]
}
export const AppBasicTable: React.FC<AppBasicTableProps> = ({ fields, data }) => {
  return (
    <React.Fragment>
      <Card sx={{ marginTop: 2 }} variant="outlined">
        <Scrollbar>
          <Box sx={{ paddingY: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {fields.map((field, index) => (
                    <TableCell key={index}>{field}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {fields.map((field, fieldIndex) => (
                      <TableCell key={fieldIndex}>{row[field]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>
    </React.Fragment>
  )
}

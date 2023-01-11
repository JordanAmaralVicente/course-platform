import {
  Paper,
  styled,
  Table as UITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { ReactNode } from "react";
import { EmptyResult } from "../EmptyResult";

interface Column {
  label: string;
  attr: string;
}

interface Action {
  actionNode: ReactNode;
  tooltip: string;
  onClick: (rowId: string) => void;
}

interface TableProps {
  rows: any[];
  emptyDataText: string;
  columns: Column[];
  actions?: Action[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#38023B",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Table = (props: TableProps): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <UITable>
        <TableHead>
          <TableRow>
            {props?.columns?.map((column, idx) => (
              <StyledTableCell key={idx}>{column.label}</StyledTableCell>
            ))}
            {props?.actions?.map((_, idx) => (
              <StyledTableCell
                key={props?.columns.length + idx}
              ></StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {props.columns.map((column, idx) => (
                  <StyledTableCell key={row.id + idx}>
                    {row[column.attr]}
                  </StyledTableCell>
                ))}
                {!!props.actions && (
                  <>
                    {props.actions.map((action, idx) => (
                      <StyledTableCell
                        key={idx}
                        onClick={() => {
                          action.onClick(row.id);
                        }}
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <Tooltip title={action.tooltip}>
                          <div>{action.actionNode}</div>
                        </Tooltip>
                      </StyledTableCell>
                    ))}
                  </>
                )}
              </TableRow>
            );
          })}
          {!props.rows.length && <EmptyResult text={props.emptyDataText} />}
        </TableBody>
      </UITable>
    </TableContainer>
  );
};

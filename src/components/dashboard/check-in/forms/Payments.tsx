import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const TAX_RATE = 0.07;

// function ccyFormat(num: number) {
//   return `${num.toFixed(2)}`;
// }

function createRow(label: string, amount: number, currency: string) {
  return { label, amount, currency };
}

// interface Row {
//   desc: string;
//   qty: number;
//   unit: number;
//   price: number;
// }

// function subtotal(items: readonly Row[]) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

const rows = [
  createRow('Rent + Cleaning Free', 1394.6, '€'),
  createRow('City Tax', 70.4, '€'),
  createRow('Total to Pay', 1465.6, '€'),
  createRow('Total Paid', 1394.6, '€'),
  createRow('Balance Due', 70.4, '€'),
  createRow('Total Paid', 1394.6, '€'),
];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export const Payments = ({ containerProps = {} }) => {
  return (
    <Box>
      <Box mt={2}>
        <Typography color="primary" variant="h3">
          Payments
        </Typography>
        <Typography color="secondary" variant="caption">
          Breakdown of your payments
        </Typography>
      </Box>

      {/* Payments */}
      <TableContainer component={Paper} sx={{ borderRadius: '12.4808px 12.4808px 0px 0px', mt: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ bgcolor: 'secondary.main', color: 'white', fontWeight: 'regular' }}>
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row.label} sx={{ bgcolor: i % 2 === 0 ? (row.label !== 'Balance Due' ? 'rgba(139, 204, 191, 0.2)' : 'rgba(242, 146, 89, 0.2)') : 'rgba(51, 120, 98, 0.2)' }}>
                <TableCell align="left">{row.label}</TableCell>
                <TableCell align="right">
                  {row.amount}
                  {row.currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Button color="primary" variant="contained" sx={{ borderRadius: '0px 0px 12.4808px 12.4808px', px: 6, py: 2 }}>
          Pay Balance
        </Button>
      </Box>
    </Box>
  );
};

import { Box, Grid, TextField, Typography, Button } from '@mui/material';

// ** Icons
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

// ** Third party components
import { Formik, Form, FieldArray } from 'formik';

// ** Custom components
// import { GuestCard } from './passport/GuestCard';

const initialValues = {
  extras: [
    {
      roomNumber: '',
      date: '',
      details: '',
      time: '',
    },
  ],
};

export const Extras = ({ containerProps = {} }) => {
  return (
    <Grid container {...containerProps} spacing={2}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography color="primary" variant="h3">
          Extras
        </Typography>
        <Typography color="secondary" variant="caption">
          Select any extras for you stay
        </Typography>
      </Grid>

      {/* Forms */}
      <Grid item xs={12} mt={2}>
        <Formik
          initialValues={initialValues}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <FieldArray name="extras">
                {({ insert, remove, push }) =>
                  values.extras.length > 0 && (
                    <Box>
                      <Box mb={1}>
                        <Typography color="secondary" variant="caption">
                          Enter your information
                        </Typography>
                      </Box>

                      {values.extras.map((_, index) => (
                        <Grid container sx={{ ...(index === 0 && { borderTop: '1px solid #337862' }), borderBottom: '1px solid #337862', py: 2 }} key={index}>
                          <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 2 } }}>
                            <TextField name={`extras.${index}.roomNumber`} type="text" onChange={handleChange} placeholder="First Name" size="small" value={values.extras[index].roomNumber} />
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 0, md: 2, lg: 0 } }}>
                            <TextField name={`extras.${index}.date`} type="date" onChange={handleChange} placeholder="Date" size="small" value={values.extras[index].date} />
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 0, md: 0, lg: 2 } }}>
                            <TextField name={`extras.${index}.details`} type="text" onChange={handleChange} placeholder="Last Name" size="small" value={values.extras[index].details} />
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 2, md: 0, lg: 2 } }}>
                            <TextField name={`extras.${index}.time`} type="text" onChange={handleChange} placeholder="Country" size="small" value={values.extras[index].time} />
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={2}>
                            <Button
                              variant="contained"
                              type="button"
                              color="secondary"
                              onClick={() => push({ roomNumber: '', date: '', details: '', time: '' })}
                              sx={{
                                height: '45px',
                                width: '158px',

                                borderRadius: '12.480770111083984px',
                                bgcolor: '#8BCCBF',
                                fontSize: '19px',
                              }}
                            >
                              Add
                            </Button>
                          </Grid>
                          <Grid item xs={12} sm={4} md={3} lg={1}>
                            <Button
                              variant="contained"
                              type="button"
                              color="secondary"
                              onClick={() => remove(index)}
                              sx={{
                                height: '46px',
                                width: '40px',
                                borderRadius: '12.480770111083984px',
                                bgcolor: '#8BCCBF',
                                opacity: 0.5,
                              }}
                            >
                              <DeleteIcon fontSize="large" />
                            </Button>
                          </Grid>
                        </Grid>
                      ))}

                      <Box mt={1}>
                        <Typography color="secondary" variant="caption">
                          *This is the user that will be used as a reference for signing the contract.
                        </Typography>
                      </Box>
                    </Box>
                  )
                }
              </FieldArray>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

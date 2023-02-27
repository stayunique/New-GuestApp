import { Box, Grid, TextField, Typography, Button } from '@mui/material';

// ** Icons
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

// ** Third party components
import { Formik, Form, FieldArray } from 'formik';

// ** Custom components
import { GuestCard } from './passport/GuestCard';

const initialValues = {
  guests: [
    {
      firstName: '',
      lastName: '',
      date: '',
      passport: '',
      country: '',
    },
  ],
};

export const Passport = ({ containerProps = {} }) => {
  return (
    <Grid container {...containerProps} spacing={2}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography color="primary" variant="h3">
          Passport
        </Typography>
        <Typography color="secondary" variant="caption">
          Enter a new user to proceed:
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
              <FieldArray name="guests">
                {({ insert, remove, push }) => (
                  <>
                    <Box>
                      <GuestCard onClick={() => push({ firstName: '', lastName: '', date: '', passport: '', country: '' })} />

                      {values.guests.length > 0 && values.guests.map((guest, i) => <GuestCard guest={guest} sx={{ ...(i === 0 && { ml: 4 }), mr: 4 }} />)}
                    </Box>

                    {values.guests.length > 0 && (
                      <>
                        <Box
                          mt={5}
                          sx={{
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            bgcolor: '#F4F4F4',
                            py: 1,
                            px: 2,
                            display: 'inline-block',
                            width: '138.26px',
                          }}
                        >
                          <Box display="flex" alignItems="center" justifyContent="space-around">
                            <Typography color="secondary" fontWeight="bold">
                              Guest {values.guests.length}
                            </Typography>
                            <PersonIcon color="secondary" />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            // height: '196px',
                            // width: '1196px',
                            borderBottomLeftRadius: '10px',
                            borderBottomRightRadius: '10px',
                            bgcolor: '#F4F4F4',
                            p: 5,
                          }}
                        >
                          <Box mb={1}>
                            <Typography color="secondary" variant="caption">
                              Enter your information
                            </Typography>
                          </Box>

                          {values.guests.map((_, index) => (
                            <Grid
                              container
                              sx={{ ...(index === 0 && { borderTop: '1px solid #337862' }), borderBottom: '1px solid #337862', py: 2 }}
                              key={index}
                              // display="flex"
                              // alignItems="center"
                              // justifyContent="center"
                            >
                              <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 2 } }}>
                                <TextField name={`guests.${index}.firstName`} type="text" onChange={handleChange} placeholder="First Name" size="small" value={values.guests[index].firstName} />
                              </Grid>
                              <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 2 } }}>
                                <TextField name={`guests.${index}.lastName`} type="text" onChange={handleChange} placeholder="Last Name" size="small" value={values.guests[index].lastName} />
                              </Grid>
                              <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 0, md: 2 } }}>
                                <TextField name={`guests.${index}.date`} type="date" onChange={handleChange} placeholder="Date" size="small" value={values.guests[index].date} />
                              </Grid>
                              <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 2 } }}>
                                <TextField name={`guests.${index}.passport`} type="text" onChange={handleChange} placeholder="Passport" size="small" value={values.guests[index].passport} />
                              </Grid>
                              <Grid item xs={12} sm={4} md={3} lg={2} sx={{ mr: { xs: 0, sm: 2 } }}>
                                <TextField name={`guests.${index}.country`} type="text" onChange={handleChange} placeholder="Country" size="small" value={values.guests[index].country} />
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
                      </>
                    )}
                  </>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

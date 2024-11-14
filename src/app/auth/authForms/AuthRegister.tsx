'use client';

import {
  Box,
  Button,
  CardContent,
  Divider,
  FormHelperText,
  Grid,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { signIn } from 'next-auth/react';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import PasswordValidator from 'react-password-validattor';
import * as Yup from 'yup';

import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import type { RegisterType } from '@/app/(DashboardLayout)/types/auth/auth';
import BlankCard from '@/components/card.Blank';

import AuthSocialButtons from './AuthSocialButtons';

const AuthRegister = ({ title, subtitle, subtext }: RegisterType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    ConfirmPassword?: string;
  }>({});

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    ConfirmPassword: '',
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'The password must be at least 8 characters long')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Required at least one special character',
      )
      .matches(/\d/, 'The password must contain at least one number')
      .matches(/[A-Z]/, 'Required at least one capital letter')
      .matches(/[a-z]/, 'The lowercase letter is confirmed')
      .required('The password is confirmed'),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'The password matches')
      .required('Confirm password is required'),
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setLoading(true);

    try {
      await validationSchema.validate(formValues, { abortEarly: false });

      const dataForFetch = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        password: formValues.password,
      };

      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(dataForFetch),
        headers: { 'Content-Type': 'application/json' },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: '/' });
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors: { [key: string]: string } = {};
        err.inner.forEach((validationError: any) => {
          if (validationError.path) {
            errors[validationError.path] = validationError.message;
          }
        });
        setFormErrors(errors);
      }
      setLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onValidatorChangeHandler = (result: any) => {
    if (result) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="mb-6 rounded bg-red-300 py-4 text-center">{error}</p>
      )}
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      {subtitle}

      <AuthSocialButtons title="Sign in with" />
      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign up with
          </Typography>
        </Divider>
      </Box>
      <Box>
        <Stack mb={3}>
          <CustomFormLabel htmlFor="firstName">First Name</CustomFormLabel>
          <CustomTextField
            id="firstName"
            variant="outlined"
            fullWidth
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            error={!!formErrors.firstName}
          />
          {formErrors.firstName && (
            <FormHelperText error>{formErrors.firstName}</FormHelperText>
          )}

          <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
          <CustomTextField
            id="lastName"
            variant="outlined"
            fullWidth
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            error={!!formErrors.lastName}
          />
          {formErrors.lastName && (
            <FormHelperText error>{formErrors.lastName}</FormHelperText>
          )}

          <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!formErrors.email}
          />
          {formErrors.email && (
            <FormHelperText error>{formErrors.email}</FormHelperText>
          )}

          <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
          <CustomTextField
            id="password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!formErrors.password}
          />
          {formErrors.password && (
            <FormHelperText error>{formErrors.password}</FormHelperText>
          )}

          <CustomFormLabel htmlFor="ConfirmPassword">
            Confirm Password
          </CustomFormLabel>
          <CustomTextField
            id="ConfirmPassword"
            variant="outlined"
            fullWidth
            type="password"
            name="ConfirmPassword"
            value={formValues.ConfirmPassword}
            onChange={handleChange}
            error={!!formErrors.ConfirmPassword}
          />
          {formErrors.ConfirmPassword && (
            <FormHelperText error>{formErrors.ConfirmPassword}</FormHelperText>
          )}

          <Grid container spacing={1} sx={{ marginTop: '10px' }}>
            <Grid item xs={20}>
              <BlankCard sx={{ height: '100%', width: '100%' }}>
                <CardContent
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h5" mb={1}>
                    Password Validator
                  </Typography>
                  <Typography color="textSecondary" mb={3}>
                    Check here the suggested password and validations
                  </Typography>
                  <style>
                    {`
        .btnBlockSubmit {
          display: block;
          cursor: unset;
          background-color: gainsboro;
        }
        .rpv-container {
          padding: 1rem;
          border-radius: 0.375rem;
          width: 100%; /* Ajuste de largura total */
          height: 100%; /* Ajuste de altura total */
          background-color: #f9fafb;
          box-shadow: 0 1px 3px #0000001a, 0 1px 2px #0000000f;
        }
        .rpv-suggested-password {
          display: flex;
          position: relative;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          align-items: center;
          border-radius: 0.5rem;
          font-size: .875rem;
          line-height: 1.25rem;
          color: #9ca3af;
          background-color: #f3f4f6;
        }
        .rpv-copy-password, .rpv-copied-to-clipboard {
          position: absolute;
          right: 2rem;
        }
        .rpv-generate-new {
          position: absolute;
          right: 0.5rem;
        }
        .rpv-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          font-size: .75rem;
          line-height: 1rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 1rem;
        }
        .rpv-rule {
          display: flex;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
          grid-column: span 1 / span 1;
          align-items: center;
        }
        .rpv-rule>span>span {
          color: #111c2d;
        }
        .ml-2 {
          margin-left: 0.5rem;
        }
        .rpv-progress-bar {
          transition-property: all;
          transition-timing-function: cubic-bezier(.435,.15,0,1);
          transition-duration: .6s;
          transition-delay: 0ms;
          border-radius: 0.25rem;
          height: 0.5rem;
          position: absolute;
          bottom: 0;
          box-shadow: 0 1px 3px #0000001a, 0 1px 2px #0000000f;
        }
      `}
                  </style>
                  <div style={{ width: '100%' }}>
                    <PasswordValidator
                      rules={[
                        'minLength',
                        'specialChar',
                        'number',
                        'capital',
                        'matches',
                        'lowercase',
                        'notEmpty',
                      ]}
                      minLength={8}
                      password={formValues.password}
                      confirmedPassword={formValues.ConfirmPassword}
                      iconSize={16}
                      onValidatorChange={onValidatorChangeHandler}
                      config={{
                        customText: {
                          minLength: {
                            successText: 'The min length is confirmed',
                            errorText:
                              'The password must be at least 8 characters long',
                          },
                          specialChar: {
                            successText: 'The special character is confirmed',
                            errorText:
                              'Required at least one special character',
                          },
                          number: {
                            successText: 'The number is confirmed',
                            errorText:
                              'The password must contain at least one number',
                          },
                          capital: {
                            successText: 'The capital letter is confirmed',
                            errorText: 'Required at least one capital letter',
                          },
                          matches: {
                            successText: 'The password matches',
                            errorText: "The password doesn't match",
                          },
                          lowercase: {
                            successText: 'The lowercase letter is confirmed',
                            errorText: 'Required at least one lowercase letter',
                          },
                          notEmpty: {
                            successText: 'The password is confirmed',
                            errorText: 'The password must not be empty',
                          },
                        },
                        showProgressBar: true,
                        showPasswordSuggestion: true,
                      }}
                    />
                  </div>
                </CardContent>
              </BlankCard>
            </Grid>
          </Grid>
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          style={{
            backgroundColor: `${loading ? '#ccc' : '#3446eb'}`,
            color: '#fff',
            padding: '1rem',
            cursor: 'pointer',
          }}
          disabled={isLoading}
        >
          {loading ? 'loading...' : 'Sign Up'}
        </Button>
      </Box>
    </form>
  );
};

export default AuthRegister;

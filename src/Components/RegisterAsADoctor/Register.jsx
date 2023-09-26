import { useState } from "react";
import "./Register.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const defaultTheme = createTheme();

export default function Register() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="register">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0.4,
              paddingTop: "100px",
              paddingBottom: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              textAlign="center"
              variant="h4"
              fontFamily={"Poppins"}
              sx={{
                fontWeight: "bold",
                color: "#1A5276",
                paddingBottom: "10px",
              }}
            >
              Are you a doctor?
            </Typography>
            <Typography align="center" fontFamily={"Poppins"}>
              {" "}
              Join our community as a registered doctor and become a valued
              member. Share your medical knowledge and recommendations with our
              community
            </Typography>
            <Avatar sx={{ bgcolor: "#1A5276", marginTop: 3 }}>
              <HealthAndSafetyIcon />
            </Avatar>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#1A5276",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#053d5a",
                  },
                }}
                onClick={handleClickOpen}
              >
                Register as a doctor
              </Button>
            </Box>
          </Box>
        </Container>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle style={{ textAlign: "center" }}>Sign Up</DialogTitle>

          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive notifications via email"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#1A5276",
                  "&:hover": {
                    backgroundColor: "#053d5a",
                  },
                }}
              >
                Sign Up
              </Button>
            </form>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleClose} sx={{ color: "#cf142b" }}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

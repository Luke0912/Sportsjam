import { useEffect } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./login.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useState } from "react";


const theme = createTheme();

export const Login = () => {
  const myState = useSelector((state) => state.loginReducer);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandle = async (e) => {
    e.preventDefault()
    const headers = { "Content-Type": "application/json" };
    console.log(details)

    try {
      const resp = await axios.post(
        "https://cw4tanishq.herokuapp.com/login",
        details,
        { headers: headers }
      );
      console.log(resp)
      let user = {}
      user= resp.data.user
      if(resp.status===201){
        navigate("/") 
        console.log("payload",user)
        dispatch({ type: "LOGIN", payload:user });
      }else
      throw new Error("Unable to login");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleChange = (e) => {
    const val = e.target.value;
    setDetails({
      ...details,
      [e.target.name]: val,
    });
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
    navigate("/");
  }

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <>
      {/* <button onClick={toggleModal} className={style.btn-modal}>
        Open
      </button> */}

      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.modal_content}>
            <button className={style.close_modal} onClick={toggleModal}>
              <span style={{ marginBottom: "10px" }}>Close |</span>
              <span>
                <ClearIcon style={{ fontSize: "15px" }} />
              </span>
            </button>

            <div className={style.logindiv}>
              <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{}}>
                  <CssBaseline />

                  <Grid
                    className={style.loginbox}
                    item
                    xs={0}
                    sm={0}
                    md={5}
                    component={Paper}
                    elevation={0}
                    square
                  >
                    <Box
                      className={style.cardDiv}
                      sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div className={style.dev1}></div>

                      <Box
                        style={{ width: "90%" }}
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <h3 className={style.loginhead}>Login</h3>
                        <Grid className={style.passgrid}>
                          <lable className={style.email}>username</lable>
                          <input
                            className={style.inputfield}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid className={style.passgrid}>
                          <lable className={style.password}>Password </lable>
                          <input
                            className={style.inputfield}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                          />
                        </Grid>

                        <Button
                          className={style.subitbtn}
                          type="submit"
                          sx={{ mt: 5, mb: 2 }}
                          onClick={loginHandle}
                        >
                          Sign In
                        </Button>

                        <Grid style={{}}>
                          <Button className={style.loginwithfacebookbtn}>
                            login with facebook
                          </Button>
                          <Button className={style.loginwithgooglebtn}>
                            login with google{" "}
                          </Button>
                        </Grid>

                        {/*login-with-facebook-btn <Googleauth/> */}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

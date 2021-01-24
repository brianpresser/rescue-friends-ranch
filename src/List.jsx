import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DogTwo from "../src/assets/images/dog-2.jpg";
import Dog4 from "../src/assets/images/dog5.png";
import BlackDog from "../src/assets/images/small-black-dog.jpg";
import fb from "../src/assets/images/fb.png";
import cam from "../src/assets/images/cam.png";
import mail from "../src/assets/images/mail.png";
import call from "../src/assets/images/call.png";

import "./App.css";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div style={{ marginTop: "2px" }}>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title" style={{ paddingLeft: "35px" }}>
            Details
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <Avatar
              alt="Remy Sharp"
              variant="rounded"
              className={classes.rounded}
              src={DogTwo}
              style={{
                height: "150px",
                width: "200px",
                boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                marginLeft: "10px",
                marginBottom: "10px",
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: "#A6A6A6",
              }}
            />
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {/* {[...new Array(20)].map(() => `info`).join("\n")} */}
              <div style={{ marginLeft: "10px", marginTop: "30px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div
              style={{ marginLeft: "10px", float: "left", minWidth: "50px" }}
            >
              <img
                alt=""
                src={fb}
                style={{
                  marginLeft: "0px",
                  marginTop: "5px",
                  height: "25px",
                  width: "25px",
                }}
              ></img>
              <img
                alt=""
                src={cam}
                style={{
                  marginLeft: "10px",
                  marginTop: "5px",
                  height: "25px",
                  width: "25px",
                }}
              ></img>
              <img
                alt=""
                src={mail}
                style={{
                  marginLeft: "10px",
                  marginTop: "5px",
                  height: "25px",
                  width: "25px",
                }}
              ></img>
              <img
                alt=""
                src={call}
                style={{
                  marginRight: "280px",
                  marginLeft: "5px",
                  marginTop: "5px",
                  height: "25px",
                  width: "25px",
                }}
              ></img>
            </div>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <List className={classes.root}>
        <button className="Buttons" onClick={handleClickOpen("paper")}>
          <div className="gridContainer">
            <ListItem style={{ height: "255px" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="rounded"
                  className={classes.rounded}
                  src={DogTwo}
                  style={{
                    height: "170px",
                    width: "250px",
                    boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#A6A6A6",
                  }}
                />
              </ListItemAvatar>
              <div
                style={{
                  minWidth: "190px",
                  marginRight: "10px",
                  overflow: "none",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "-37px",
                    marginRight: "10px",
                    width: "85%",
                    // border: "2px solid #D8D8D8",
                    // borderRadius: "1Opx",
                    padding: "10px",
                    height: "160px",
                    overflow: "none",
                  }}
                >
                  <div>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            color: "#2D2D2D",
                            fontSize: "30px",
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                          }}
                        >
                          Benny
                        </Typography>
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "-80px", marginTop: "10px" }}>
                    <Divider variant="inset" component="li" />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Owner:{" "}
                    </span>
                    Jeff Jefferson
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Age:{" "}
                    </span>
                    13
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Breed:{" "}
                    </span>
                    Doggo
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Weight:{" "}
                    </span>
                    50 lbs
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Diet:{" "}
                    </span>
                    Meat
                  </div>
                  {/* </DialogContentText> */}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "-1px",
                  marginRight: "15px",
                  width: "65%",
                  border: "2px solid #D8D8D8",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "155px",
                  overflow: "scroll",
                }}
              >
                <p style={{ margin: 0 }}>Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "10px",
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    marginLeft: "4px",
                    marginRight: "2px",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "-30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                </div>
                <img
                  alt=""
                  src={fb}
                  style={{
                    marginLeft: "6px",
                    marginRight: "9px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <img
                  alt=""
                  src={cam}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={mail}
                  style={{ marginRight: "6px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={call}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
              </div>
            </ListItem>
          </div>
        </button>

        <Divider variant="inset" component="li" style={{ width: "100%" }} />

        <button className="Buttons" onClick={handleClickOpen("paper")}>
          <div className="gridContainer">
            <ListItem style={{ height: "255px" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="rounded"
                  className={classes.rounded}
                  src={BlackDog}
                  style={{
                    height: "170px",
                    width: "250px",
                    boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#A6A6A6",
                  }}
                />
              </ListItemAvatar>
              <div
                style={{
                  minWidth: "190px",
                  marginRight: "10px",
                  overflow: "none",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "-37px",
                    marginRight: "10px",
                    width: "85%",
                    // border: "2px solid #D8D8D8",
                    // borderRadius: "1Opx",
                    padding: "10px",
                    height: "160px",
                    overflow: "none",
                  }}
                >
                  <div>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            color: "#2D2D2D",
                            fontSize: "30px",
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                          }}
                        >
                          Charlie
                        </Typography>
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "-80px", marginTop: "10px" }}>
                    <Divider variant="inset" component="li" />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Owner:{" "}
                    </span>
                    Kim Kimson
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Age:{" "}
                    </span>
                    7
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Breed:{" "}
                    </span>
                    Doggo
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Weight:{" "}
                    </span>
                    70 lbs
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Diet:{" "}
                    </span>
                    Meat
                  </div>
                  {/* </DialogContentText> */}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "-1px",
                  marginRight: "15px",
                  width: "65%",
                  border: "2px solid #D8D8D8",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "155px",
                  overflow: "scroll",
                }}
              >
                <p style={{ margin: 0 }}>Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "10px",
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    marginLeft: "4px",
                    marginRight: "2px",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "-30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                </div>
                <img
                  alt=""
                  src={fb}
                  style={{
                    marginLeft: "6px",
                    marginRight: "9px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <img
                  alt=""
                  src={cam}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={mail}
                  style={{ marginRight: "6px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={call}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
              </div>
            </ListItem>
          </div>
        </button>

        <Divider variant="inset" component="li" style={{ width: "100%" }} />

        <button className="Buttons" onClick={handleClickOpen("paper")}>
          <div className="gridContainer">
            <ListItem style={{ height: "255px" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="rounded"
                  className={classes.rounded}
                  src={Dog4}
                  style={{
                    height: "170px",
                    width: "250px",
                    boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#A6A6A6",
                  }}
                />
              </ListItemAvatar>
              <div
                style={{
                  minWidth: "190px",
                  marginRight: "10px",
                  overflow: "none",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "-37px",
                    marginRight: "10px",
                    width: "85%",
                    // border: "2px solid #D8D8D8",
                    // borderRadius: "1Opx",
                    padding: "10px",
                    height: "160px",
                    overflow: "none",
                  }}
                >
                  <div>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            color: "#2D2D2D",
                            fontSize: "30px",
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                          }}
                        >
                          Stanley
                        </Typography>
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "-80px", marginTop: "10px" }}>
                    <Divider variant="inset" component="li" />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Owner:{" "}
                    </span>
                    Jeff Jefferson
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Age:{" "}
                    </span>
                    13
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Breed:{" "}
                    </span>
                    Doggo
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Weight:{" "}
                    </span>
                    50 lbs
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Diet:{" "}
                    </span>
                    Meat
                  </div>
                  {/* </DialogContentText> */}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "-1px",
                  marginRight: "15px",
                  width: "65%",
                  border: "2px solid #D8D8D8",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "155px",
                  overflow: "scroll",
                }}
              >
                <p style={{ margin: 0 }}>Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "10px",
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    marginLeft: "4px",
                    marginRight: "2px",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "-30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                </div>
                <img
                  alt=""
                  src={fb}
                  style={{
                    marginLeft: "6px",
                    marginRight: "9px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <img
                  alt=""
                  src={cam}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={mail}
                  style={{ marginRight: "6px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={call}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
              </div>
            </ListItem>
          </div>
        </button>

        <Divider variant="inset" component="li" style={{ width: "100%" }} />

        <button className="Buttons" onClick={handleClickOpen("paper")}>
          <div className="gridContainer">
            <ListItem style={{ height: "255px" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="rounded"
                  className={classes.rounded}
                  src={DogTwo}
                  style={{
                    height: "170px",
                    width: "250px",
                    boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#A6A6A6",
                  }}
                />
              </ListItemAvatar>
              <div
                style={{
                  minWidth: "190px",
                  marginRight: "10px",
                  overflow: "none",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "-37px",
                    marginRight: "10px",
                    width: "85%",
                    // border: "2px solid #D8D8D8",
                    // borderRadius: "1Opx",
                    padding: "10px",
                    height: "160px",
                    overflow: "none",
                  }}
                >
                  <div>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            color: "#2D2D2D",
                            fontSize: "30px",
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                          }}
                        >
                          Benny
                        </Typography>
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "-80px", marginTop: "10px" }}>
                    <Divider variant="inset" component="li" />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Owner:{" "}
                    </span>
                    Jeff Jefferson
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Age:{" "}
                    </span>
                    13
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Breed:{" "}
                    </span>
                    Doggo
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Weight:{" "}
                    </span>
                    50 lbs
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Diet:{" "}
                    </span>
                    Meat
                  </div>
                  {/* </DialogContentText> */}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "-1px",
                  marginRight: "15px",
                  width: "65%",
                  border: "2px solid #D8D8D8",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "155px",
                  overflow: "scroll",
                }}
              >
                <p style={{ margin: 0 }}>Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "10px",
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    marginLeft: "4px",
                    marginRight: "2px",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "-30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                </div>
                <img
                  alt=""
                  src={fb}
                  style={{
                    marginLeft: "6px",
                    marginRight: "9px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <img
                  alt=""
                  src={cam}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={mail}
                  style={{ marginRight: "6px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={call}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
              </div>
            </ListItem>
          </div>
        </button>

        <Divider variant="inset" component="li" style={{ width: "100%" }} />

        <button className="Buttons" onClick={handleClickOpen("paper")}>
          <div className="gridContainer">
            <ListItem style={{ height: "255px" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="rounded"
                  className={classes.rounded}
                  src={BlackDog}
                  style={{
                    height: "170px",
                    width: "250px",
                    boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#A6A6A6",
                  }}
                />
              </ListItemAvatar>
              <div
                style={{
                  minWidth: "190px",
                  marginRight: "10px",
                  overflow: "none",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "-37px",
                    marginRight: "10px",
                    width: "85%",
                    // border: "2px solid #D8D8D8",
                    // borderRadius: "1Opx",
                    padding: "10px",
                    height: "160px",
                    overflow: "none",
                  }}
                >
                  <div>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            color: "#2D2D2D",
                            fontSize: "30px",
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                          }}
                        >
                          Charlie
                        </Typography>
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "-80px", marginTop: "10px" }}>
                    <Divider variant="inset" component="li" />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Owner:{" "}
                    </span>
                    Kim Kimson
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Age:{" "}
                    </span>
                    7
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Breed:{" "}
                    </span>
                    Doggo
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Weight:{" "}
                    </span>
                    70 lbs
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Diet:{" "}
                    </span>
                    Meat
                  </div>
                  {/* </DialogContentText> */}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "-1px",
                  marginRight: "15px",
                  width: "65%",
                  border: "2px solid #D8D8D8",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "155px",
                  overflow: "scroll",
                }}
              >
                <p style={{ margin: 0 }}>Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "10px",
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    marginLeft: "4px",
                    marginRight: "2px",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "-30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                </div>
                <img
                  alt=""
                  src={fb}
                  style={{
                    marginLeft: "6px",
                    marginRight: "9px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <img
                  alt=""
                  src={cam}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={mail}
                  style={{ marginRight: "6px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={call}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
              </div>
            </ListItem>
          </div>
        </button>

        <Divider variant="inset" component="li" style={{ width: "100%" }} />

        <button className="Buttons" onClick={handleClickOpen("paper")}>
          <div className="gridContainer">
            <ListItem style={{ height: "255px" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="rounded"
                  className={classes.rounded}
                  src={Dog4}
                  style={{
                    height: "170px",
                    width: "250px",
                    boxShadow: "0 0 3px  rgba(0,0,0,0.5)",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "#A6A6A6",
                  }}
                />
              </ListItemAvatar>
              <div
                style={{
                  minWidth: "190px",
                  marginRight: "10px",
                  overflow: "none",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "-37px",
                    marginRight: "10px",
                    width: "85%",
                    // border: "2px solid #D8D8D8",
                    // borderRadius: "1Opx",
                    padding: "10px",
                    height: "160px",
                    overflow: "none",
                  }}
                >
                  <div>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          style={{
                            color: "#2D2D2D",
                            fontSize: "30px",
                            fontFamily: "Helvetica",
                            fontWeight: "bold",
                          }}
                        >
                          Stanley
                        </Typography>
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "-80px", marginTop: "10px" }}>
                    <Divider variant="inset" component="li" />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Owner:{" "}
                    </span>
                    Jeff Jefferson
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Age:{" "}
                    </span>
                    13
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Breed:{" "}
                    </span>
                    Doggo
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Weight:{" "}
                    </span>
                    50 lbs
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2D2D2D",
                        fontFamily: "Helvetica",
                      }}
                    >
                      Diet:{" "}
                    </span>
                    Meat
                  </div>
                  {/* </DialogContentText> */}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  marginTop: "-1px",
                  marginRight: "15px",
                  width: "65%",
                  border: "2px solid #D8D8D8",
                  borderRadius: "12px",
                  padding: "10px",
                  height: "155px",
                  overflow: "scroll",
                }}
              >
                <p style={{ margin: 0 }}>Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                style={{
                  marginTop: "35px",
                  marginLeft: "10px",
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    marginLeft: "4px",
                    marginRight: "2px",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "-30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={handleClickOpen}
                    style={{
                      marginTop: "30px",
                      width: "130px",
                      height: "45px",
                    }}
                  >
                    Button
                  </Button>
                </div>
                <img
                  alt=""
                  src={fb}
                  style={{
                    marginLeft: "6px",
                    marginRight: "9px",
                    height: "25px",
                    width: "25px",
                  }}
                ></img>
                <img
                  alt=""
                  src={cam}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={mail}
                  style={{ marginRight: "6px", height: "25px", width: "25px" }}
                ></img>
                <img
                  alt=""
                  src={call}
                  style={{ marginRight: "9px", height: "25px", width: "25px" }}
                ></img>
              </div>
            </ListItem>
          </div>
        </button>

        <Divider variant="inset" component="li" style={{ width: "100%" }} />
      </List>
    </div>
  );
}

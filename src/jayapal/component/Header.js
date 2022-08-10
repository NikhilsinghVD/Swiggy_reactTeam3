import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ height: "60px" }}
        className="  fw-bold fixed-top"
      >
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            <img
              src="data:image/png;base64,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"
              width="71px"
            />
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="text-decoration-none text-danger fw-bold fs-2"
            >
              <span style={{ color: "yellow" }}>Pizza</span>Menu
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getdata.length}
            color="warning"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AddShoppingCartIcon style={{ fontSize: "40px", color: "white" }} />
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Menu Details</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹{e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              {/* <i className="fas fa-trash smalltrash"></i> */}
                            </p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <i
                              className="fas fa-trash largetrash "
                              style={{ color: "black" }}
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total :₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your carts is empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;

import styles from "./NavBarHandler.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ManIcon from "@mui/icons-material/Man";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import logo from "../../ImageData/logo.jpg";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  const signInHandler = () => {
    navigate("/login");
  };
  const signUpHandler = () => {
    navigate("/signup");
  };
  const wishListHandler = () => {
    navigate("/wishlist");
  };
  const nav = [
    { title: "SPORTS" },
    { title: "FITNESS" },
    { title: "SHOES" },
    { title: "CLOTHING" },
    { title: "ACCESSORIES" },
    { title: "LEISURE SPORTS" },
    { title: "FANGEAR" },
    { title: "BRANDS" },
  ];
  const navmain = [
    { title: "Sports", to: "/Sports" },
    { title: "Fitness", to: "/Fitness" },
    { title: "Shoes", to: "/Shoes" },
    { title: "Clothing", to: "/Clothing" },
    { title: "Accessories", to: "/Accessories" },
    { title: "Leisure Sports", to: "/LeisureSports" },
    { title: "Fangear", to: "/Fangear" },
    { title: "Brands", to: "/Brands" },
  ];
  return (
    <>
      <div className={styles.navBarWrapper}>
        <div className={styles.navBarLayer1}>
          <div className={styles.navBarLayer1Actions}>
            <div className={styles.navBarLayer1Support}>
              <LocalPhoneIcon style={{ color: "white" }} />
              <p>Call Us:+93-955543555</p>
            </div>
            <div className={styles.navBarLayer1Signin} onClick={signInHandler}>
              <KeyboardDoubleArrowRightIcon style={{ color: "white" }} />
              <p>Sign in</p>
            </div>
            <div
              className={styles.navBarLayer1CreateAcc}
              onClick={signUpHandler}
            >
              <ManIcon style={{ color: "white" }} />
              <p>Create Account</p>
            </div>
            <div
              className={styles.navBarLayer1Wishlist}
              onClick={wishListHandler}
            >
              <FavoriteIcon style={{ color: "white" }} />
              <p>WishList</p>
            </div>
          </div>
        </div>
        <div className={styles.navBarLayer2}>
          <div className={styles.navBarLayer2logo} onClick={homeHandler}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.navBarLayer2SearchDiv}>
            <div className={styles.navBarLayer2Search}>
              <input type="text" placeholder="Search" />
            </div>
            <div className={styles.navBarLayer2SearchIcon}>
              <SearchSharpIcon style={{ color: "grey" }} />
            </div>
          </div>
          <div className={styles.navBarLayer2Cart}>
            <ShoppingCartSharpIcon
              style={{ color: "rgb(51,51,51)", fontSize: "50px" }}
            />
            <h3>Shopping Cart</h3>
          </div>
        </div>
        <div className={styles.navBarLayer3}>
          <div className={styles.navBarLayer3RoutesDiv}>
            <div className={styles.navBarLayer3RoutesDivMain}>
              <p>ALL</p>
              <div className={styles.navBarLayer3RoutesDivMaincontent}>
                {navmain.map((e) => (
                  <Link to={e.to}>{e.title}</Link>
                ))}
              </div>
            </div>
            {nav.map((e) => (
              <div className={styles.navBarLayer3Routes}>
                <>{e.title}</>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

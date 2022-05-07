

import { Sidebar } from "../Sidebar/sidebar";
import { goggles } from '../../configs/Goggles'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'

export const Goggles = () => {

  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="grid-format">
          {goggles.map((el) => {
            return (
              <>
                <div >
                  {/* <Link to={`/books/${el.id}`} key={el.id}> */}
                  <div className="eachdiv">
                    <div className='productimgdiv'>
                      <img src={el.img} />
                    </div>
                    <div className='producttitle'>
                      <p key={el.id}>{el.name}</p>
                    </div>
                    <div className="price-button">
                      <div className="price-list">
                        <p className="productprice-linethrough" key={el.id}>${el.price}</p>
                        <p className="productprice" key={el.id}>${el.mrp}</p>
                        <p className="product-discount" key={el.id}>{el.discount}</p>
                      </div>
                      <div className="btn"><button>Cart</button></div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </>
            )
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};


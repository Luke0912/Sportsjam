
import { Sidebar } from "../Sidebar/sidebar";
import { volleyballs } from '../../configs/Volleyballs'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'

export const Volleyballs  = () => {

  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="grid-format">
          {volleyballs.map((el) => {
            return (
              <>
                <div >
                  {/* <Link to={`/books/${el.id}`} key={el.id}> */} 
                  <div className="eachdiv">
                    <div className='productimgdiv'>
                      <img src={el.img} />
                    </div>
                    <div className='producttitle'>
                      <p key={el.id}>{el.title}</p>
                    </div>
                    <div className="price-button">
                      <div className="price-list">
                        <p className="productprice-linethrough" key={el.id}>${el.price}</p>
                        <p className="productprice" key={el.id}>${el.mrp}</p>
                        <p className="product-discount" key={el.id}>{el.discount}</p>
                      </div>
                      <div className="btn-cart"><button>Cart</button></div>
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


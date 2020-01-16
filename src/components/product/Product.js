import React, { useState } from "react";
import "./Product.scss";

const productViews = [
     "Dashboard",
     "People",
     "Campaigns",
     "Email Editor",
     "Reports"
];

const Product = () => {
     const [selectedProduct, setSelectedProduct] = useState(0);

     const onClickSlide = e => {
          const selectedImage = e.target.name;
          setSelectedProduct(selectedImage);
     };
     return (
          <>
               <div className="row">
                    <div className="col-lg-12 col-sm-12 my-auto">
                         <h4 className="font-weight-bold">
                              User Friendly Platform
                         </h4>
                    </div>

                    <div className="col-12 my-4">
                         <div className="browser-top" />
                         <img
                              className="img-fluid product-image shadow"
                              src={`https://placehold.it/800x500/ffafbd/ffffff?text=${
                                   productViews[selectedProduct]
                              }`}
                              alt="screenshot"
                         />
                    </div>
                    <div className="col-12">
                         {productViews.map((product, index) => {
                              console.log(selectedProduct, index);
                              return (
                                   <button
                                        className="btn btn-sm btn-transparent"
                                        key={index}
                                        onClick={onClickSlide}
                                        name={index}
                                   >
                                        {product}
                                   </button>
                              );
                         })}
                    </div>
               </div>
          </>
     );
};
export default Product;

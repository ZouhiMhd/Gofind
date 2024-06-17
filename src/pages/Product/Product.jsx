import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import SideBarHouse from "../../components/SideBarHouse";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);

      try {
        const response = await fetch('/houses.json');
        const data = await response.json();
        const foundProduct = data.find(item => item.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error('Produit non trouvé avec l\'ID spécifié');
        }
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
        setLoading(false);
      }

      // Simuler la récupération de produits similaires
      setLoading2(false);
    };

    getProduct();
  }, [id]);


  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      

        <>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <h4 className="text-uppercase text-muted">Information sur la maison</h4>
                <p className="card-text">
                  <strong>Localisation:</strong> {product.localisation}<br />
                  <strong>Type:</strong> {product.type}<br />
                  <strong>Nombre de pieces:</strong> {product.nbPieces}<br />
                  <strong>Facilités:</strong> {product.facilities}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">Information sur le propriétaire</h4>
            <div className="card mb-3">
              <div className="card-body">
                <img
                  className="rounded-circle"
                  src={'/v21.jpg'}
                  alt={product.ownerName}
                  width="100"
                  height="100"
                />
                <p className="card-text">
                  <strong>Nom:</strong> {product.ownerName}<br />
                  <strong>Age:</strong> {product.ownerAge}<br />
                  <strong>Sexe:</strong> {product.ownerSex}<br />
                  <strong>Caractère:</strong> {product.ownerCharacter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Louer
             
              <Link to="/cart" className="btn btn-dark mx-3">
                </Link>
                </button>
              
            </div>
          </div>
        </div>
      </>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div style={{display:'flex'}}>
        <div style={{width:'20%'}}>
          <SideBarHouse/>
        </div>
        <div style={{width:'100%'}}>
          <div className="container">
            <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
            <div className="row my-5 py-5">
              <div className="d-none d-md-block">
              <h2 className="">You may also Like</h2>
                <Marquee
                  pauseOnHover={true}
                  pauseOnClick={true}
                  speed={50}
                >
                  {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
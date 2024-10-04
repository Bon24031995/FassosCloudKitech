import React, { useEffect, useRef, useState } from 'react'
import right from '../image/right.svg';
import left from '../image/left.svg';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {

  const prevRef = useRef(null);

  const nevigate = useNavigate();

  const [food, SetFood] = useState([]);

  const [search,setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3008/data')
      .then(resp => resp.json()).then(json => {
        console.log(json);
        SetFood(json);
      })
  }, [])

  const Logout = () => {
    nevigate('/')
  }

  const data = [{
    id: 1,
    name: "Pizza",
    image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
  },
  {
    id: 2,
    name: "Burger",
    image: "https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full"
  }, {
    id: 3,
    name: "Chinese",
    image: "https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/gray/about_us/2.jpg?tr=w-3840"
  }, {
    id: 4,
    name: "Biryani",
    image: "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"
  }, {
    id: 5,
    name: "Dosa",
    image: "https://i.ytimg.com/vi/CCab5oh0ZOc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA730YKb2VkyJ2V4Q-R9cICWRXs9w"
  }, {
    id: 6,
    name: "Samosa",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg"
  }, {
    id: 7,
    name: "Rolls",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg"
  }, {
    id: 8,
    name: "Bread",
    image: "https://fullofplants.com/wp-content/uploads/2023/05/Homemade-Naan-Bread-Restaurant-Style-Vegan-thumb-1-500x500.jpg"
  }]

  return (
    <div>
      {/* Header Section */}

      <div className='headers'>
        <div className='container'>
          <img className='mb-5 ms-4 mt-4' src='https://product-assets.faasos.io/eatsure_cms/production/333b405b-13b6-429f-82db-900e9795da54.png' height={'95px'} width={'auto'} />
          <button className='btn btn-primary float-end mt-5' onClick={Logout}>Sign Out</button>
        </div>
      </div>
      <br />

      {/* Carosul Section */}

      <div className='carousel'>
        <div className='container'>
          <button style={{ border: "none", background: "none", position: "absolute", top: "85px", left: "55px" }}
            onClick={() => {
              prevRef.current.scrollBy({
                left: -200,
                behavior: "smooth"
              })
            }}
          >
            <img src={left} />
          </button>
          <div ref={prevRef} style={{ display: "flex", overflow: "hidden" }}>
            {
              data.map((x) => (
                <div key={x.id}>
                  <div className='card me-3' style={{ width: "15rem" }}>
                    <img src={x.image} alt='food-item' height="185px" />
                  </div>
                </div>
              ))
            }
          </div>
          <button style={{ border: "none", background: "none", position: "absolute", top: "80px", left: "1420px" }}
            onClick={() => {
              prevRef.current.scrollBy({
                left: 200,
                behavior: "smooth"
              })
            }}>
            <img src={right} />
          </button>
        </div>
      </div>
      {/* Search Bar */}
      <form>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='form-control mx-auto w-50 mt-5 mb-5' placeholder='Search your Fev Resturent..' />
      </form>
      {/* Food data */}
      <div className='food_data'>
        <div className='container'>
          <h1 className='text-danger'>Hungry ! grab your fev food from our top Resturent</h1>
          <Row>
            {
              food.filter((x)=>{
                if(search==""){
                  return true;
                }else{
                  return x.title.toLowerCase().includes(search.toLowerCase());
                }
              }).map((x) => (
                <Col>
                  <div key={x.id}>
                    <div className='card m-4' style={{ width: "15rem" }}>
                      <img className='card-img-top' src={x.images} alt='food_data' height="165px" />
                      <div className='card-body'>
                        <p>Returent : {x.title}</p>
                        <p>rating : {x.ratings}</p>
                        <p>Area : {x.area}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </div >
    </div >
  )
}

export default Dashboard
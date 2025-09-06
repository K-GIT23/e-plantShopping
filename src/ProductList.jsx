import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
 

const dispatch = useDispatch();


function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)
      
        setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
          ...prevState, // Spread the previous state to retain existing entries
          [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
        }));
      };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",                     description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",                     description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2021/02/03/06/22/rubber-tree-5976841_1280.jpg", 
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$16"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",                     description: "Purifies the air and has healing properties for skin.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2022/06/10/16/23/thailand-jasmine-7254857_1280.jpg", 
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", 
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$12"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",                     description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$10"
                },
                {
                    name: "Cyclamen",
                    image: "https://cdn.pixabay.com/photo/2015/11/28/13/40/flowers-1067271_1280.jpg",                     description: "Abundant blooms, occasional water and indirect light; very easy!",
                    cost: "$12"
                }
            
            ]
        },
        {  
            category: "Edibles",
            plants: [
                {
                    name: "Mango",
                    image: "https://cdn.pixabay.com/photo/2014/04/21/22/13/mango-329436_1280.jpg",                     description: "Sweet fragrance, good source of Vitamin A, C, and potassium.",
                    cost: "$12"
                },
                {
                    name: "Tomatoes (variety)",
                    image: "https://cdn.pixabay.com/photo/2016/12/08/19/07/vegetables-1892900_1280.jpg",
                    description: "Universal and delicious with so much.",
                    cost: "$12"
                },
                {
                    name: "Avocado",
                    image: "https://cdn.pixabay.com/photo/2015/08/10/12/01/avocado-882634_1280.jpg",                     description: "If you know, you know.",
                    cost: "$10"
                },
           ]
        },
        {
            category: "Tropical Plants",
            plants: [
                {
                    name: "Variegated Croton", 
                    image: "https://cdn.pixabay.com/photo/2021/09/29/07/32/variegated-croton-6666723_1280.jpg",   
                    description: "This colorful evergreen shrub makes a good indoor or outdoor plant.",
                    cost: "$12"
                },
                {
                    name: "Bromeliad Plant (Red)",
                    image: "https://cdn.pixabay.com/photo/2025/06/01/20/35/bromeliad-plant-9635936_1280.jpg",   
                    description: "Bring this easy to care for tropical oasis to your home or office.",
                    cost: "$18"
                },
                {
                    name: "Monstera deliciosa",
                    image: "https://cdn.pixabay.com/photo/2023/01/23/04/33/monstera-7737811_1280.jpg", 
                    description: "Tropical yet can tolerate low light, less water, low humidity is fine.",
                    cost: "$12"
                },
                {
                    name: "Bird of Paradise",
                    image: "https://cdn.pixabay.com/photo/2019/10/12/15/31/flower-4544113_1280.jpg",                     description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },                
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2013/01/09/13/18/aloe-74451_1280.jpg", 
                    description: "Soothing gel used for skin ailments.",
                    cost: "$12"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2020/12/02/16/36/peppermint-5798140_1280.jpg", 
                    description: "Relieves digestive issues and headaches.",
                    cost: "$10"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",                     description: "Calms nerves and promotes relaxation.",
                    cost: "$12"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",   
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://cdn.pixabay.com/photo/2015/10/08/23/59/fortune-spring-978602_1280.jpg",                     description: "Thrives in low light and requires minimal watering (once per month).",
                    cost: "$10"
                },
                {
                    name: "Clivia (orange)",
                    image: "https://cdn.pixabay.com/photo/2017/06/19/00/21/klivie-2417751_1280.jpg",                     description: "enjoy this pop of color that is easy on the eyes and easy to care for.",
                    cost: "$15"
                },
                {
                    name: "Lemon Lime Prayer Plant",
                    image: "http://www.thesill.com/cdn/shop/files/the-sill_Medium-Maranta-Lemon-Lime_Medium_Isabella_Mustard_Variant.jpg", 
                    description: "Gives a vibrant burst of color, and is non-toxic to pets",
                    cost: "$15"
                },
                {
                    name: "Red Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2023/01/31/00/48/leaves-7756885_1280.jpg",                     description: "Requires minimal care and adds color to indoor spaces. Great for beginners.",
                    cost: "$18"
                }
            ]
        }
    ];
    

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Pleasant Plantings Nursery</h3>
                                <i style={{ color: 'white' }}>Where Plants Bring Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
{plantsArray.map((category, index) => ( // Loop through each category in plantsArray
  <div key={index}> {/* Unique key for each category div */}
    <h1>
      <div>{category.category}</div> {/* Display the category name */}
    </h1>
    <div className="product-list"> {/* Container for the list of plant cards */}
      {category.plants.map((plant, plantIndex) => ( // Loop through each plant in the current category
        <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
          <img 
            className="product-image" 
            src={plant.image} // Display the plant image
            alt={plant.name} // Alt text for accessibility
          />
          <div className="product-title">{plant.name}</div> {/* Display plant name */}
          {/* Display other plant details like description and cost */}
          <div className="product-description">{plant.description}</div> {/* Display plant description */}
          <div className="product-cost">${plant.cost}</div> {/* Display plant cost */}
          <button
            className="product-button"
            onClick={() => handleAddToCart(plant)} // Handle adding plant to cart
          >
            Add to Cart
            
          </button>
        </div>
      ))}
    </div>
  </div>
))}

                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;

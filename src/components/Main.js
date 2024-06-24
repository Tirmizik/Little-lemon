// Main.js
import React from 'react';
import hasan from '../hasan.png'
import salad from '../salad.png'
import food2 from '../food2.png'
import fish from '../fish.png'
import restaurant from '../restaurant.jpg';
import sara from '../sara.png';
import lalise from '../lalise.png'
import abel from '../abel.png'
const Promotion = () => (
  <section className='promotion'>
    <h1>Little lemon</h1>
    <p style={{color:'#FFFFFF'}}>chicago</p>
    <div>
    <p style={{color:'#FFFFFF'}}>Join us for our Lemon Fest! </p>
       <p style={{color:'#FFFFFF'}}>Enjoy 20% off all lemon-themed dishes and drinks.
       Limited time offer!</p>
    </div>
    <div>
    <img src={restaurant} alt="Promotion" className='special-img1' />
    </div>
    <button style={{ padding: '10px 20px', backgroundColor: '#F4CE14', 
      color: '#333333', border: 'none', 
      borderRadius: '5px' ,marginBottom:'200px' }}>Reserved a table</button>
  </section>
);
<div>
<button style={{ padding: '10px 20px', 
  backgroundColor: '#F4CE14', color: '#333333',
   border: 'none', borderRadius: '5px', 
   marginBottom: '100px' }}>Online menu</button>

</div>
const ThisWeekSpecial = () => (
  <section style={{ padding: '20px', backgroundColor: '#FFFFFF', marginBottom: '10px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
    <h3 style={{ gridColumn: 'span 5', textAlign: 'center' }}>This Week's Special</h3>
    <button
      style={{
        gridColumn: 'span 5',
        padding: '15px 10px',
        marginBottom: '10px',
        backgroundColor: '#F4CE14',
        color: '#333333',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '16px',
        width:'250px',
        height:"80px",
        marginLeft:'2000px'
      }}
      onClick={() => alert('Redirecting to online order page...')}
    >
      Online Order
    </button>
    <div style={{ marginBottom: '10px', backgroundColor: '#EDEFEE', width: '1000px', height: '1000px' }}>
      <img src={salad} alt="Greek Salad" className='special-img' />
      <h3>Greek Salad <h2>$15.99</h2></h3>
      <p>Icttucc, peppers, olives and our Chicag.</p>
    </div>
    <div style={{ marginBottom: '10px', backgroundColor: '#EDEFEE', width: '1000px', height: '1000px' }}>
      <img src={food2} alt="Bruschetta" className='special-img' />
      <h3>Bruschetta <h2>$18.99</h2></h3>
      <p>Our Bruschetta is made from grilled bread that has been smeared with garlic.</p>
    </div>
    <div style={{ marginBottom: '10px', backgroundColor: '#EDEFEE', width: '1000px', height: '1000px' }}>
      <img src={fish} alt="Grilled Fish" className='special-img' />
      <h3>Grilled Fish <h2>$16.99</h2></h3>
      <p>Our Grilled Fish is served with a delicious garlic sauce.</p>
    </div>
  </section>
);


const Testimonials = () => (

  <section style={{ padding: '20px', backgroundColor: '#495E57', marginBottom: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
<h3 style={{ gridColumn: 'span 4', textAlign: 'center' }}>Testimonials</h3>
    <div style={{ marginBottom: '10px' ,backgroundColor:'#EDEFEE',width:'700px' ,height:'700px'}}>
      <blockquote>
      <img src={hasan} alt="Hasan" />
      <p>Hasan</p>
      <div className='rate'>4.8⭐</div>
        <p>Amazing restaurant</p>
      </blockquote>
    </div>
    <div style={{ marginBottom: '10px' ,backgroundColor:'#EDEFEE', width:'700px' ,height:'700px'}}>
      <blockquote>
      <img src={lalise} alt="Lalise" />
      <p>Lalise</p>
      <div className='rate'>5.0⭐</div>
        <p>Fastest</p>

      </blockquote>
    </div>
    <div style={{ marginBottom: '10px',backgroundColor:'#EDEFEE',width:'700px' ,height:'700px' }}>
      <blockquote>
      <img src={sara} alt="sara" />
      <p>Sara</p>
      <div className='rate'>4.9⭐</div>
        <p>I Recommend it</p>
              </blockquote>
    </div>
    <div style={{ marginBottom: '10px' ,backgroundColor:'#EDEFEE',width:'700px' ,height:'700px'}}>
      <blockquote>
      <img src={abel} alt="abel" />
      <p>Abel</p>
      <div className='rate'>4.7⭐</div>
        <p>"A unique and refreshing dining experience.</p>
      </blockquote>
    </div>
  </section>
);

function Main() {
  return (
    <div>
      <main>
        <Promotion />
        <ThisWeekSpecial />
        <Testimonials />
      </main>
    </div>
  );
}

export default Main;

import React from 'react'
import Mycard from './Mycard.js'
import './Imagecarousel.css'
const imagecarousel = () => {
    let box = document.querySelector('.product-container');
    // const btnpressprev = () =>{
    //     let width = box.clientWidth;
    //     box.scrollLeft= box.scrollLeft - width;
    //     console.log(width)
    // }
    // const btnpressnext = () =>{
    //     let width = box.clientWidth;
    //     box.scrollLeft= box.scrollLeft + width;
    //     console.log(width)
    // }
    const btnpressnext = () => {
        const slider = document.querySelector('.product-container');
        const width = slider.offsetWidth;
        slider.scrollLeft += width;
    }
    const btnpressprev  = () => {
        const slider = document.querySelector('.product-container');
        const width = slider.offsetWidth;
        slider.scrollLeft -= width;
    }
  return (
    <div className='product-carousel'>
      <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
      <button className='next-btn'onClick={btnpressnext}><p>&gt;</p></button>


      <div className='product-container'>
      <Mycard cardno='1'></Mycard>
      <Mycard cardno='2'></Mycard>
      <Mycard cardno='3'></Mycard>
      <Mycard cardno='4'></Mycard>
      <Mycard cardno='5'></Mycard>
      <Mycard cardno='7'></Mycard>
      <Mycard cardno='8'></Mycard>
      <Mycard cardno='9'></Mycard>
      <Mycard cardno='10'></Mycard>
      <Mycard cardno='11'></Mycard>
      <Mycard cardno='12'></Mycard>

      </div>
    </div>
  )
}

export default imagecarousel

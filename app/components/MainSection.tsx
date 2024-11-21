import React from 'react'

const MainSection = () => {
  return (
    <section className='text-center mt-5'>
      <h4 className='mb-5'>
        <strong>Lorem ipsum dolor sit.</strong>
      </h4>

      <div className='row'>
        <div className='col-lg-4 col-md-12 mb-4'>
          <div className='card'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <img
                src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                className='img-fluid'
              />
              <a href='#!'>
                <div className='mask'></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Lorem, ipsum.</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur earum maxime, sunt illum excepturi cupiditate
                dolorum et. Unde id tempore, officiis enim molestiae eligendi
                cupiditate asperiores vel, laborum dolorem magni.
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='card'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <img
                src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
                className='img-fluid'
              />
              <a href='#!'>
                <div className='mask'></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Lorem, ipsum.</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                id aliquid fuga iusto, qui natus doloribus temporibus rem
                eligendi!
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='card'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <img
                src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/nature-photography-flower.jpg'
                className='img-fluid'
              />
              <a href='#!'>
                <div className='mask'></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Lorem, ipsum dolor.</h5>
              <p className='card-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, consequuntur? Sed deleniti eaque praesentium
                architecto maxime voluptatibus cum quisquam.
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection

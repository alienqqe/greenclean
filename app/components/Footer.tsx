import React from 'react'

const Footer = () => {
  return (
    <section id='footer'>
      <hr className='my-5' />

      <footer
        className='text-white text-center text-lg-start'
        style={{ backgroundColor: '#23242a' }}
      >
        <div className='container p-4'>
          <div className='row mt-4'>
            <div className='col-lg-4 col-md-12 mb-4 mb-md-0'>
              <h5 className='text-uppercase mb-4'>About company</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique harum ipsam iusto quibusdam officiis odio voluptatem
                vero nostrum!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit placeat quaerat mollitia dolores officia? Similique.
              </p>

              <div className='mt-4'></div>
            </div>

            <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
              <ul className='fa-ul' style={{ marginLeft: '1.65em' }}>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-home'></i>
                  </span>
                  <span className='ms-2'>Your city, Street , Your Country</span>
                </li>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <span className='ms-2'>youremail@gmail.com</span>
                </li>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-phone'></i>
                  </span>
                  <span className='ms-2'>+743 431 91</span>
                </li>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-print'></i>
                  </span>
                  <span className='ms-2'>+39 42 44 54</span>
                </li>
              </ul>
            </div>

            <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase mb-4'>Opening hours</h5>

              <table className='table text-center text-white'>
                <tbody className='font-weight-normal'>
                  <tr>
                    <td>Mon - Friday:</td>
                    <td>8am - 10pm</td>
                  </tr>
                  <tr>
                    <td>Saturday:</td>
                    <td>10am - 8pm</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>12am - 6pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2023 Copyright
        </div>
      </footer>
    </section>
  )
}

export default Footer

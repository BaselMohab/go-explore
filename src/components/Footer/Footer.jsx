import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    const [backToTop, setbackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setbackToTop(true)
            }else{
                setbackToTop(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

return (
    <section>
        <Container fluid>
            <div className="footer">
                <p className="copyright">&copy; Copyright. Designed And Developed by Basel Mohab.</p>
            <div>
                <ul className='social'>
                    <li><i class="fa-solid fa-phone"></i> +1 (222) 777 888</li>
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-x-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                    <li><i class="fa-brands fa-google-plus-g"></i></li>
                </ul>
            </div>
            </div>
            {
                backToTop && (<button className='scroll-up' onClick={scrollUp}><i class="fa-solid fa-angles-up"></i></button>)
            }
        </Container>
    </section>
)
}


export default Footer;











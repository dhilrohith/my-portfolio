import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef();

    const activeBox = useRef();

    function initActiveBox(){

      activeBox.current.style.top = 
      lastActiveLink.current
      .offsetTop + 'px';

      activeBox.current.style.left = 
      lastActiveLink.current
      .offsetLeft + 'px';

      activeBox.current.style.width = 
      lastActiveLink.current
      .offsetWidth + 'px';

      activeBox.current.style.height = 
      lastActiveLink.current
      .offsetHeight + 'px';


    }

    useEffect(()=>{
      initActiveBox();
    }, [])

    window.addEventListener( 
      'resize', initActiveBox
    )

    const activeCurrentLink = (event)=>{
      lastActiveLink.current?.classList
      .remove('active')

      event.target.classList.add('active');
      lastActiveLink.current = event.target;
      initActiveBox();
    }

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Certificates',
          link: '#certificates',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

  return (
    <nav 
    className=
    {
        'navbar ' + (navOpen ? 'active' : '')
    }
    >
        {
        navItems.map((
            {
            label,
            link,
            className,
            ref
            }, key)=>{
                return(
                    <a href={link}
                    key={key}
                    ref={ref}
                    className={className}
                    onClick = {(event)=>{
                      activeCurrentLink(event)
                    }}
                    >
                        {label}
                    </a>
                )
            })
        }

       <div 
       className="active-box"
       ref={activeBox}
       ></div> 
    </nav>
  )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar
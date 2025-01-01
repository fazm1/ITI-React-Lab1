import "./footer.css"

function Footer(){
    return(
        <>
            <div id='Footer' className = "footer">
            <div className="leftFooter">
               <h1 className="footerTitle">Get in touch</h1> 
               
               <p><img src = "src/assets/envelope-solid.svg" width="30px" height="15px"/> farid.azzam.2001@gmail.com</p>
               <p><img src = "src/assets/phone-solid.svg" width="30px" height="15px"/> +201110366720</p>
            </div>
            <div className="rightFooter">
                <a href="https://www.linkedin.com/in/farid-azzam-2882051b2/"><img src="src/assets/linkedin-in-brands-solid.svg" width="30px" height="30px"/></a>
                <a href="https://github.com/fazm1"><img src="src/assets/github-brands-solid.svg" width="30px" height="30px"/></a>

                <p>Copyright ©2025 FA</p> 
            </div>
            </div>
            
        </>
    )
}
export default Footer;
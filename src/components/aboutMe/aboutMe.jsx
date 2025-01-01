
import "./aboutMe.css"
function AboutMe() {
    return (
        <>
            <div className="about">
                <div className="leftAbout">
                    <h1>About Me</h1>

                </div>
                <div className="rightAbout">
                    <p>After graduation, I worked breifly as a PHP Developer for a Romanian credit company known as 123Credit.ro.
                        Working there gave me a solid foundation on the professional application of all previous knowledge gained during
                        college as well as many importnant skills including maintaining web applications, website version control,
                        and effective collaboration with development team.</p>
                    <form method="get" action="src/assets/FaridResume.pdf">
                        <button type="submit" className="resumeButton">Download Resume</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}
export default AboutMe;
import "./Projects.css";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        nextArrow: <MdArrowForwardIos />,
        prevArrow: <MdArrowBackIosNew />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="projects" id="project">
            <Title
                title={t("project.titleSection.title")}
                desc={t("project.titleSection.desc")}
            />
            <Slider {...settings}>
                <div className="project-items">
                    <img
                        src="https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png"
                        alt=""
                    />
                    <h3 className="project-title">Project One</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.dreamhost.com/blog/wp-content/uploads/2022/07/Learn-React-Feature-730x485.jpeg"
                        alt=""
                    />
                    <h3 className="project-title">Project Two</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.crio.do/static/5d3a1b57e08ef286fed2ac80d41044e8/19f40/react.png"
                        alt=""
                    />
                    <h3 className="project-title">Project Three</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png"
                        alt=""
                    />
                    <h3 className="project-title">Project One</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.dreamhost.com/blog/wp-content/uploads/2022/07/Learn-React-Feature-730x485.jpeg"
                        alt=""
                    />
                    <h3 className="project-title">Project Two</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.crio.do/static/5d3a1b57e08ef286fed2ac80d41044e8/19f40/react.png"
                        alt=""
                    />
                    <h3 className="project-title">Project Three</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png"
                        alt=""
                    />
                    <h3 className="project-title">Project One</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.dreamhost.com/blog/wp-content/uploads/2022/07/Learn-React-Feature-730x485.jpeg"
                        alt=""
                    />
                    <h3 className="project-title">Project Two</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
                <div className="project-items">
                    <img
                        src="https://www.crio.do/static/5d3a1b57e08ef286fed2ac80d41044e8/19f40/react.png"
                        alt=""
                    />
                    <h3 className="project-title">Project Three</h3>
                    <div className="project-btns">
                        <Button text={"Github"} primary={true} width={120} />
                        <Button text={"Live Demo"} primary={true} width={120} />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Projects;

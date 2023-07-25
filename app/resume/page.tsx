import NavBar from "@/components/navbar";
import Link from "next/link";



export default function Resume() {
    return (
        <main className="  text-black pb-2 max-h-view ">
            <section className="bg-white min-h-screen overflow-x-hidden relative">
                <NavBar></NavBar>
                <div className=" text-center lg:max-w-7xl justify-center m-auto lg:text-lg bg-gradient-to-b from-slate-50 to-gray-200 rounded-3xl ">
                    <div className="flex flex-col gap-8 p-10 justify-items-center justify-center">

                        <div className=" flex justify-center ">
                            <h1 className="flex text-4xl font-semibold text-white bg-black w-fit ">Resume</h1>
                        </div>

                        <div className="flex justify-center align-middle">
                            <p className=" text-gray-800 ">I began my journey as a developer in February 2022 in the Systems for Internet course at UNIESP College in João Pessoa. During this period, I have been developing my skills in Web development. Currently, I am focused on Front-End technologies such as <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, and <b>Figma</b>, as well as <b>SQL</b>, <b>programming logic</b>, <b>OOP</b>, <b>Java</b>, and <b>Spring Boot</b>.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col p-10 gap-8 ">
                        <div className=" flex justify-center">
                            <h1 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit">About me</h1>
                        </div>

                        <p className=" text-gray-800">I am a dedicated and committed individual with a passion for learning new things and enhancing my skills, which drives me to constantly seek challenges and growth opportunities. I am outgoing and communicative, allowing me to easily interact with people from different backgrounds and cultures. In 2019, I embarked on a two-year language exchange in Dublin, Ireland, where I had the opportunity to develop my English language proficiency and interpersonal skills.
                        </p>
                    </div>

                    <div className="flex flex-col p-10 gap-8 ">
                        <div className=" flex justify-center">
                            <h2 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit">Education</h2>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                UNIESP Centro Universitário
                            </h3>
                            <p>
                                Studying Systems for Internet · (January 2022 - June 2024)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Berlitz English School Dublin - Ireland
                            </h3>
                            <p>
                                Advanced English Certificate. (Feb 2019 - Feb 2021)
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col p-10 gap-8" >
                        <div className="flex justify-center">
                            <h2 className="flex justify-center text-2xl font-semibold text-white bg-black w-fit ">Work experience</h2>
                        </div>

                        <h3 className="font-semibold">CIM - Confederação de Italianos no mundo</h3>
                        <span>Freelance Web Developer</span>
                        <span>January 2023 - Present</span>
                        <span>Rome - Italy</span>
                        <p>
                            I worked as a web developer with the goal of delivering innovative solutions through end-to-end web application development. Throughout this process, I engaged in requirements gathering in collaboration with stakeholders and proceeded with the implementation and deployment phases of the application. My main focus was to ensure the delivery of high-quality products, consistently pursuing technical excellence and user satisfaction.
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <h2 className="flex justify-center text-2xl font-semibold  text-white bg-black w-fit">Skill and Tools</h2>
                    </div>

                    <div className=" flex p-10  font-semibold text-center justify-evenly">
                        <div className="flex flex-col">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>TailwindCSS</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>Rest API</span>
                            <span>Git</span>
                            <span>Github</span>
                        </div>
                    </div>
                    <div className=" pb-20">
                        <h2 className="py-10 font-bold text-slate-800">Download my cv as PDF file.</h2>
                        <div>
                            <a className="bg-black p-4 rounded-md text-white hover:bg-dots-blue ease-in duration-150" href="https://drive.usercontent.google.com/download?id=1qKfIVqi-y_sxpqRZNDtj4vLkiuK354tB&export=download&authuser=0&confirm=t&uuid=dd466a8f-0ea4-4900-87e4-669c211cfb48&at=AC2mKKQn3aOgZEg25AXt9QGeO-rs:1690241135929">Download</a>
                        </div>

                    </div>



                </div>

            </section>

        </main>
    )
}


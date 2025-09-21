import Img from "../../src/assets/logo.png"
const Footer = () => {

    const buttonStyle = {
        background: "#ff73e8",
        backgroundImage: "linear-gradient(56deg, rgba(255, 115, 232, 1) 0%, rgba(255, 255, 255, 1) 37%, rgba(255, 255, 255, 1) 59%, rgba(255, 213, 0, 1) 100%)"
    };



    return (
        <div className="w-full h-fit pt-20 flex flex-col text-white items-center justify-between">
            <div style={buttonStyle} className="flex text-black h-fit py-10 w-[60%] bg-amber-500 relative top-25 rounded-2xl flex-col items-center justify-center">
                <h4 className="text-2xl mb-2 font-extrabold">Subscribe to our Newsletter</h4>
                <p className="text-[#bebebe]">Get the latest updates and news right in your inbox!</p>
                <div className="flex mt-5 gap-2">
                    <input className="border h-10 rounded-lg px-3 text-black to-black" type="text" placeholder="Enter your email" />
                    <button style={buttonStyle} className="  cursor-pointer text-black rounded-lg px-3" >Subscribe</button>
                </div>

            </div>

            <div className="pt-50 h-fit w-full flex flex-col bg-[#00001d] justify-center items-center">
                <div className="flex items-center justify-around">
                    <img className="h-20" src={Img} alt="" />
                </div>
                <div className="grid grid-cols-3 w-[80%] py-14 gap-20">
                    <div>
                        <h4 className="text-2xl mb-2">About</h4>
                        <p className="text-[#bebebe]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h4 className="text-2xl mb-2">Quick Links</h4>
                        <ul className="text-[#bebebe]">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl mb-2">Subscribe</h4>
                        <p className="text-[#bebebe]">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex mt-5">
                            <input className="bg-white h-10 rounded-l-2xl px-3 text-black to-black" type="text" placeholder="Enter your email" />
                            <button style={buttonStyle} className="text-black rounded-r-2xl px-3" >Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="w-[90%]" />
                <div className="flex items-center justify-center h-fit w-full text-center">
                    <p className="py-10 text-white">@2025 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
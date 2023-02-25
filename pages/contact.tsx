import Navbar from "@/components/layouts/Navbar"
import Footer from "@/components/layouts/Footer"
import Form from "@/components/layouts/Contact_form"
import Contact_form from "@/components/layouts/Contact_form"


export default function contact() {
    
    return (
        <>
            <Navbar />
            <div>
            <h1 className='color-primaryFont font-semibold text-5xl  py-12 rounded flex justify-center'>
						
                        Contact Us
                </h1>
                <div className="flex flex-row items-center text-3xl p-2 m-2 ">
                    <div className="w-1/2">
                        <p className="mx-12 my-2">If you have any questions about our services and delivery areas, contact us</p>
                        <br />
                        <h4 className="mx-12 my-2 font-semibold">Email</h4>
                        <p className="mx-12 my-2">supermarket@gmail.com</p>
                        <h4 className="mx-12 my-2 font-semibold">Phone</h4>
                        <p className="mx-12 my-2">86374 59289</p>
                        
                    </div>
                    <div className="w-1/2">
                        <Contact_form/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )


}
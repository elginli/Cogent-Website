import React from "react"
import HCaptcha from '@hcaptcha/react-hcaptcha'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [hCaptchaToken, setHCaptchaToken] = React.useState("")

    const onHCaptchaChange = (token) => {
        setHCaptchaToken(token)
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append("h-captcha-response", hCaptchaToken);
        formData.append("access_key", "487d4ed1-983f-4880-809d-19810f605fa3")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully")
            event.target.reset()
            setHCaptchaToken("")
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    };

    return(
        <div className="container-contact">
            <h1>Contact Us</h1>

            <div className="container-map">
                <iframe 
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9416873192986!2d-122.41364968855652!3d37.767965471870326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2f0c355a47%3A0x7ab5992b674c510f!2s1504%20Bryant%20St%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1722053975861!5m2!1sen!2sus" 
                    title="Google Maps Location of Our Office"
                    width="500" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            
                <div className="text-content">
                    <strong><p>License: 947959</p></strong>
                    <strong><p>Tel: 415-255-7300</p></strong>
                    <strong><p>Fax: 415-255-7300</p></strong>
                </div>
            </div>

            <form className="contactForm" onSubmit={onSubmit}>
                Name: <input type="text" name="name" required/>
                Email: <input type="email" name="email" required/>
                Message: <textarea name="message" required></textarea>
                <HCaptcha
                    sitekey="f50e3892-bc96-4e76-8296-86fa75d2b86c"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange} 
                /> 
                <button type="submit">Submit</button>
                <span>{result}</span>
            </form>
        </div>
    )
}

export default Contact;
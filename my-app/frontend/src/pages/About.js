import './About.css'

const About = () => {
    return(
        <div className='container-about'>

            <section>
                <h2>Who We Are</h2>
                    <p>
                    Cogent is a construction and consulting firm located in San Francisco, California. With 15 years in the industry, we have become a trusted name in both residential and commercial construction sectors. Our team of expert engineers, architects, and project managers is dedicated to delivering exceptional service from the initial concept through to completion.
                    </p>
            </section>

            <section>
                <h2>What We Do</h2>
                    <p>
                    <strong>Residential Construction:</strong> At Cogent, we understand that a home is more than just a place to live; it's a personal sanctuary. Our residential construction services range from custom home builds and renovations to expansions and refurbishments. We work closely with homeowners to ensure their needs are met and their expectations are exceeded, crafting spaces that are both beautiful and functional.
                    </p>
                    <p>
                    <strong>Commercial Construction:</strong> Our commercial construction services cater to a variety of sectors including retail, hospitality, education, and healthcare. We manage every aspect of the construction process, ensuring projects are completed on time, within budget, and to the highest standards of quality. Our portfolio includes everything from small office renovations to major commercial builds.
                    </p>
            </section>

            <section>
                <h2>Why Choose Us</h2>
                <ul>
                    <li>Experience and Expertise: Decades of industry presence have equipped us with the insights and skills needed to tackle any construction challenge.</li>
                    <li>Customer-Centric Service: We tailor our services to meet the unique needs and visions of each client, ensuring personalized attention throughout the construction process.</li>
                    <li>Quality and Integrity: We use only high-quality materials and workmanship, ensuring that every project is built to last and meets all regulatory requirements.</li>
                    <li>Sustainable Practices: Committed to environmental stewardship, we implement sustainable building practices that minimize environmental impact and enhance energy efficiency.</li>
                </ul>
            </section>
        </div>
    )
}

export default About;
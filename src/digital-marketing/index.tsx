import { FunctionComponent } from "react";
import style from "./index.module.scss";

const DigitalMarketing: FunctionComponent = () => {
    // const dmServices = [
    //     {
    //         title: "Search Engine Optimization",
    //         desc: "Attain the required website traffic and ranking on the Search Engine Page Results (SERP). Our SEO services are not just relevant for adding most searched keywords but further increase leads and conversion rates extensively.",
    //         img: "/SEO.png",
    //     },
    //     {
    //         title: "Social Media Marketing",
    //         desc: "Reach your target audience socially and spread your brand awareness across numerous daily users. Our creative young minds create engaging and viral campaigns to bring more followers.",
    //         img: "/social-media-marketing.png",
    //     },
    //     {
    //         title: "Paid Marketing Campaigns",
    //         desc: "Increase your business revenue with Paid Marketing Campaigns through platforms like Google, Facebook, LinkedIn, Instagram, etc. Rely on our expertise for campaigns with maximum engagement.",
    //         img: "/paid-marketing.png",
    //     },
    //     {
    //         title: "Content Marketing",
    //         desc: "Let the experts create the perfect content marketing strategy for your website, mobile app, and social media. Flawless content is key to improved brand visibility and lead generation.",
    //         img: "/Content-Writting.png",
    //     },
    //     {
    //         title: "Online Reputation Management",
    //         desc: "Improve and enhance your brand’s online reputation visible to customers. We create persuasive reviews of your company, products/services, and posts.",
    //         img: "/online-repution.png",
    //     },
    //     {
    //         title: "Conversion Rate Optimization",
    //         desc: "Convert visitors into potential customers and retain them with our CRO services. We optimize your pages to boost reliability and ease navigational flow.",
    //         img: "/Convert-rate-optimization - Copy.png",
    //     },
    //     {
    //         title: "Influencer Marketing",
    //         desc: "Extend your brand reach with the credibility of social media influencers. We bring more followers, likes, and comments to increase sales patterns.",
    //         img: "/Influencer-marketing.png",
    //     },
    //     {
    //         title: "App Store Optimization",
    //         desc: "Maximize your app reach and downloads with App Store Optimization. We help in ranking apps in App Stores leading to increased downloads.",
    //         img: "/App-store-optimization.png",
    //     },
    //     {
    //         title: "Email Marketing",
    //         desc: "Promote products, discount offers, and new launches by sending professional emails to existing and potential customers for successful campaigns.",
    //         img: "/email-management.png",
    //     },
    // ];
    const dmServices = [
        {
            title: "Search Engine Optimization",
            desc: "Attain the required website traffic and ranking on the Search Engine Page Results (SERP). Our SEO services are not just relevant for adding most searched keywords but further increase leads and conversion rates extensively.",
            img: "/SEO.png",
        },
        {
            title: "Social Media Marketing",
            desc: "Reach your target audience socially and spread your brand awareness across numerous daily users. Our creative young minds create engaging and viral campaigns to bring more followers.",
            img: "/social-media-marketing.png",
        },
          {
            title: "Email Marketing",
            desc: "Promote products, discount offers, and new launches by sending professional emails to existing and potential customers for successful campaigns.",
            img: "/email-management.png",
        },
          {
            title: "Influencer Marketing",
            desc: "Extend your brand reach with the credibility of social media influencers. We bring more followers, likes, and comments to increase sales patterns.",
            img: "/Influencer-marketing.png",
        },
        {
            title: "Paid Marketing Campaigns",
            desc: "Increase your business revenue with Paid Marketing Campaigns through platforms like Google, Facebook, LinkedIn, Instagram, etc. Rely on our expertise for campaigns with maximum engagement.",
            img: "/paid-marketing.png",
        },
        {
            title: "Content Marketing",
            desc: "Let the experts create the perfect content marketing strategy for your website, mobile app, and social media. Flawless content is key to improved brand visibility and lead generation.",
            img: "/Content-Writting.png",
        },
        {
            title: "Website Design & Development",
            desc: "Build modern, responsive, and user-friendly websites that enhance your brand identity and deliver seamless experiences across all devices.",
            img: "/Website Design.png",
        },
        {
            title: "Video Marketing & Reels Creation",
            desc: "Create engaging short videos, promotional reels, and creative visual content to attract audiences and boost your brand visibility on social media.",
            img: "/Reels-creation.png",
        },
      
        // {
        //     title: "App Store Optimization",
        //     desc: "Maximize your app reach and downloads with App Store Optimization. We help in ranking apps in App Stores leading to increased downloads.",
        //     img: "/App-store-optimization.png",
        // },
      
        // {
        //     title: "Whatsapp Marketing",
        //     desc: "Engage with your customers instantly through whatsapp . sen bulk messages ,offers update and build strong relationships to increase convertion and loyalty",
        //     img: "/whatsapp.png"
        // }
    ];
    return (
        <div className={style.dmPageWrapper} id="dm-services">
            <header className={style.hero}>
                <span className={style.badge}>Digital Marketing Services</span>
                <h1>Scale Your Business <span>Digitally</span></h1>
                <p>Expert marketing strategies to grow your brand's presence online.</p>
            </header>
            <section className={style.servicesSection}>
                <div className={style.grid}>
                    {dmServices.map((service, index) => (
                        <div key={index} className={style.card}>
                            <div className={style.cardText}>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                            <div className={style.imageWrapper}>
                                <img src={service.img} alt={service.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;
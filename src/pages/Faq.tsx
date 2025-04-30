
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
    return (
        <div className="font-abhaya flex flex-col items-center px-4 py-10 text-[#130c0e]">
            {/* Wedding Image */}
            <img
                src="/images/prewedding.jpg"
                alt="Wedding"
                className="w-full max-w-2xl mb-6"
            />

            {/* Wedding Title */}
            <h1 className="text-3xl font-medium uppercase tracking-[3px] text-[#515151] my-12">Wedding</h1>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-2xl">
                {/* Address to the Venue */}
                <AccordionItem value="address">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">What is the address to the venue?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                    Domaine de Baulieu, Route B14C, 13840 ROGNES EN PROVENCE
                    </AccordionContent>
                </AccordionItem>

                {/* Arrival Time */}
                <AccordionItem value="arrival-time">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">What time should I arrive?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Please arrive no later than <strong>3:50 PM</strong> or you will miss the ceremony.
                    </AccordionContent>
                </AccordionItem>

                {/* Transportation */}
                <AccordionItem value="transportation">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Will transportation be provided?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Yes! Transportation will be provided to and from the wedding venue. Pickup will be at <strong>Lobby at 3:45 PM</strong>.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="attire">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">What is the attire?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Formal Attire (Black tie optional). Ladies can wear long elegant dresses or elevated cocktail dresses. We love flowing ruffles and vibrant colors. Kindly refrain from wearing white. Gentlemen should wear a formal dark suit with a tie. Bow tie reserved for the groom.
                        <br />
                        <br />
                        <a href="" className="underline">Dress code inspiration</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="parking">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Is there parking on site ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Yes, free parking is available at the venue.
                        <br />
                        <br />
                        <a href="" className="underline">Dress code inspiration</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="plusone">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Can i bring a plus one ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        We unfortunately cannot accommodate additional guests. Due to limited capacity, we can only allow the people named on your invitation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="indoor">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Is the wedding indoors or outdoors ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Our ceremony and cocktail hour will be held outside (weather permitting). The reception will be held inside.
                    </AccordionContent>
                </AccordionItem>

                <img
                    src="/images/prewedding.jpg"
                    alt="Wedding"
                    className="w-full max-w-2xl mb-6 mt-12"
                />

                <h1 className="text-3xl font-medium uppercase tracking-[3px] text-center text-[#515151] my-12">Travel</h1>
                <AccordionItem value="indoor">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">What are the requirements to enter Marseille ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Along with bringing your passport, please fill out your CheckMig online forms before boarding your flights to France and when returning back to the U.S. Your airline will ask you for this.
                    </AccordionContent>
                </AccordionItem>
                <p className="text-center text-lg font-semibold my-16"><a href="https://france-visas.gouv.fr/en/your-arrival-in-france" className="underline">https://france-visas.gouv.fr/en/your-arrival-in-france</a></p>


                <img
                    src="/images/prewedding.jpg"
                    alt="Wedding"
                    className="w-full max-w-2xl mb-6"
                />

                <h1 className="text-3xl font-medium uppercase tracking-[3px] r text-[#515151] text-center my-12">Stay</h1>
                <AccordionItem value="safe">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Is Marseille safe ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Marseille is generally a safe city, and is considered one of the safest cities in France. However, as with any major city around the world, it's important to exercise common sense and take necessary precautions.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="room">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Will there be a room block ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Yes! We have a block of rooms for guests set up at Novotel and Click Clack. Please head to the travel tab for more details.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cruise">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">How do we get around Marseille ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        We recommend Uber. Drivers may request you to sit in the front seat which is normal in France. You can also ask the hotel, a restaurant or a security guard to call a cab for you.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="weather">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">What will the weather be like ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Around high 70s during the day and mid 50s in the evening
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="credit">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">ARE CREDIT/DEBIT CARDS ACCEPTED ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        In most restaurants and businesses yes! But, you will need some cash ( street restaurants / small shops / taxis / tips etc)
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accessible">
                    <AccordionTrigger className="text-[23px] uppercase tracking-[3px] ">Is Wi-Fi easily accessible ?</AccordionTrigger>
                    <AccordionContent className="text-lg font-normal tracking-[1px]">
                        Wi-Fi is [3px] ly available in malls and most accommodations. T-Mobile users may have free 4G access, while other carriers may require a daily fee.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    );
};

export default Faq;

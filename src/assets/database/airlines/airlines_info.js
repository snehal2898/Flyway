const airlines = [
    {
        id : 1,
        name : "Alaska",
        rating : "*****",
        information : `Alaska Airlines is more than just an airline. We're a team of people who are
                        passionate about creating an airline people love. From our roots connecting remote villages in 
                        the state of Alaska to our global reach today, much has changed over the last 92 years. But what 
                        hasn't is our commitment to the communities we serve and our desire to deliver genuine, caring service 
                        for our guests.

                        In everything we do, we're guided by our five core values: own safety, do the right thing, be kind-hearted, 
                        deliver performance, and be remarkable.
        
                        We're proud of our heritage and energized by our future. We can't wait to welcome you onboard and help you 
                        discover why we are more than just an airline`
    },

    {
        id : 2,
        name : "Indigo",
        rating : "*****",
        information : `IndiGo is India's largest and most preferred passenger airline and amongst the fastest growing airlines 
                        in the world.
                        We have a simple philosophy: offer fares that are affordable, flights that are on time, and provide 
                        a courteous and hassle-free travel experience across our unparalleled network. We show that low cost 
                        does not mean low quality. With our fleet of over 320 aircraft, we operate well over 1,900 daily flights, 
                        connecting over 110+ destinations (of which 32 international), welcoming 85+ million customers on board 
                        last year. We have an industry leading on-time performance and one of the highest customer NPS in the 
                        Indian market. At IndiGo, we will continue to extend our scope, by spreading our wings internationally, 
                        developing from a domestic carrier to a global aviation giant.`
    },

    {
        id : 3,
        name : "Emirates",
        rating : "****",
        information : `Emirates is one of two flag carriers of the United Arab Emirates (the other being Etihad Airways). 
                        Based in Garhoud, Dubai, the airline is a subsidiary of The Emirates Group, which is owned by the 
                        government of Dubai's Investment Corporation of Dubai. It is the largest airline in the Middle 
                        East, operating over 3,600 flights per week from its hub at Terminal 3 of Dubai International Airport. 
                        It operates to more than 150 cities in 80 countries across six continents on its fleet of nearly 300 
                        aircraft. Cargo activities are undertaken by Emirates SkyCargo.

                        Emirates is the world's fourth-largest airline by scheduled revenue passenger-kilometers flown. It is also 
                        the second-largest in terms of freight tonne-kilometers flown.`
    },

    {
        id : 4,
        name : "Priceline",
        rating : "****",
        information : `We help you search and compare the best flight, hotel and car rental prices from hundreds of airlines, 
                        agents and travel providers.

                        Priceline is a global flight search and travel deals website. We use innovative technology to make 
                        finding the best value flight, hotel and car rental prices quick and easy. Our extensive range of partners, 
                        great deals and travel content should make us the natural starting point for your travel research.
        
                        Priceline is managed by KAYAK, an independent subsidiary of Booking Holdings. Founded in the U.K., and 
                        launched in the U.S. in May 2003, we now see more than 120 million people visit our sites and apps globally 
                        each year, using our proprietary and independent technology to search, compare and explore the inventory of 
                        thousands of travel partners - from the smallest travel agents to the biggest airlines.
        
                        Whether you already know where and when you want to travel, or can be a bit flexible and are seeking some 
                        inspiration, Priceline is the perfect place to search for and plan the best trip. The Priceline Newsletter 
                        is also a great way to keep up with handpicked deals and vacation packages, delivered right to your inbox.`
    },

    {
        id : 5,
        name : "Vistara",
        rating : "***",
        information : `Tata SIA Airlines Limited, operating as Vistara, is an Indian full-service airline, based in Gurugram, 
                        with its hub at Indira Gandhi International Airport. The carrier, a joint venture between Tata Sons and 
                        Singapore Airlines, commenced operations on 9 January 2015 with its inaugural flight between Delhi and Mumbai. 
                        The airline had carried more than two million passengers by June 2016 and as of April 2023, has a 8.7% 
                        share of the domestic carrier market, making it the 2nd largest domestic airline, behind IndiGo. The 
                        airline serves 50[citation needed] destinations with a fleet of Airbus A320neo, Airbus A321neo and Boeing 
                        787-9 aircraft.
                        The airline was founded in 2013 as a joint venture (JV) between India's conglomerate Tata Sons and 
                        Singapore Airlines (SIA). The two companies had made a bid in the mid-1990s to launch a 
                        full-service carrier in India that was unsuccessful, being denied regulatory approval by the Indian 
                        government. With India opening up its airline sector for 49 percent foreign direct investment (FDI) in 
                        2012, Tata and SIA once again decided to float a JV airline company in India. The JV, Tata SIA Airlines 
                        Limited (TSAL), was envisaged as a premium full-service carrier to cater to the demands of high-end business 
                        travellers in India's civil aviation market dominated by low-cost carriers. India's Foreign Investment 
                        Promotion Board approved the JV in October 2013, allowing SIA to take a 49 percent stake in the airline.
                        The two parent companies initially pledged to invest a combined US$100mn as start-up capital, with Tata Sons 
                        owning 51 percent and Singapore Airlines owning the remaining 49 percent. This was part of Tata's second 
                        major foray into the aviation sector along with a minority stake in AirAsia India. The company's first 
                        venture, Tata Airlines, was established in the 1930s and later became the flag carrier Air India after 
                        nationalization`
    },

    {
        id : 6,
        name : "SpiceJet",
        rating : "***",
        information : `SpiceJet is an Indian low-cost airline headquartered in Gurgaon, Haryana. As of November 2023, it is the 
                        fourth largest airline in India by number of domestic passengers carried, with a market share of 6.2% and 
                        connects 73 destinations, including 60 Indian and 13 international from its bases at Delhi and Hyderabad.

                        Established as air taxi provider ModiLuft in 1994, the company was acquired by Indian entrepreneur Ajay 
                        Singh in 2004 and renamed to SpiceJet. The airline operated its first flight in May 2005. Indian media 
                        baron Kalanidhi Maran acquired a controlling stake in SpiceJet in June 2010 through Sun Group which was 
                        sold back to Ajay Singh in January 2015. The airline operates a fleet of Boeing 737 and Bombardier Dash 
                        8 aircraft. In 2004, the company was acquired by Ajay Singh and the airline planned to restart operations 
                        as SpiceJet following the low-cost model. SpiceJet leased two Boeing 737-800 aircraft in 2005 and planned 
                        to order 10 new aircraft for expansion. SpiceJet opened bookings on 18 May 2005 and the first flight was 
                        operated between Delhi and Mumbai on 24 May 2005. By July 2008, it was India's third-largest low-cost 
                        carrier in terms of market share after Air Deccan and IndiGo. Indian media baron Kalanidhi Maran acquired 
                        37.7% stake in SpiceJet in June 2010 through Sun Group. The airline ordered 30 Boeing 737-8 aircraft 
                        worth US$2.7 billion July 2010 and a further 15 Bombardier Q4 Dash short-haul aircraft worth US$446 million 
                        in December 2010`
    }
]

export default airlines;
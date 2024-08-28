import indigo_logo from '../images/booking/indigo_logo.png'
import alaska_logo from '../images/booking/alaska_logo.png'
import vistara_logo from '../images/booking/vistara_logo.png'
import spicejet_logo from '../images/booking/spicejet_logo.png'
import priceline_logo1 from '../images/booking/priceline_logo1.png'
import emirates_logo1 from '../images/booking/emirates_logo1.png'


const airlines = [
    {
        id : 1,
        title : "Alaska",
        departTime : "12:30",
        arriveTime : "14:50",
        timing : "0.2h 20m",
        nonStop : "Non-Stop",
        farePrice : 5092,
        logo : alaska_logo
    },

    {
        id : 2,
        title : "Indigo",
        departTime : "03:40",
        arriveTime : "05:45",
        timing : "0.2h 05m",
        nonStop : "Non-Stop",
        farePrice : 5398,
        logo : indigo_logo
    },

    {
        id : 3,
        title : "Emirates",
        departTime : "05:30",
        arriveTime : "07:35",
        timing : "0.2h 05m",
        nonStop : "Non-Stop",
        farePrice : 5407,
        logo : emirates_logo1
    },

    {
        id : 4,
        title : "Vistara",
        departTime : "20:10",
        arriveTime : "22:25",
        timing : "0.2h 15m",
        nonStop : "Non-Stop",
        farePrice : 7407,
        logo : vistara_logo
    },

    {
        id : 5,
        title : "SpiceJet",
        departTime : "21:10",
        arriveTime : "23:25",
        timing : "0.2h 35m",
        nonStop : "Non-Stop",
        farePrice : 8092,
        logo : spicejet_logo
    },

    {
        id : 6,
        title : "Priceline",
        departTime : "21:30",
        arriveTime : "23:50",
        timing : "0.2h 20m",
        nonStop : "Non-Stop",
        farePrice : 9092,
        logo : priceline_logo1
    },
]

export default airlines;
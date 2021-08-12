import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
}

/*
  So basically constructor aisa likha jata hai

    constructor(props){
        super(props);
        this.state={}  ===> Yahan pe this use karna compulsory hai nhi to errror dega.
    }

    Agar hum constructor banate hain, to hume state wahi pe banani padti hai.
    Aur props bhi wahi he milte hai aur usme likhne padte hain.

    Isiliye jab bhi hum class mai props use karte hain, to hum this.props likhte hain
    usko access karne ke liye.


    2. render ==> then render function works which creates a UI.
                Sirf tab call hota hai jab bhi state change hoti hai.

    3. conponentDidUpdate===> bas tab call hoga jab component re-render hoga.
                                Basically jab bhi state change hogi.

    4. ComponentDidMount ==> ye bolta hai ki component UI aa chuka hai(Did mount).
                            Ab iske bad jo hoga wo merepe karo.

                            Aur ye sirf ek he bar chalta hai jab bas starting mai UI render hoti hai
                            agar badme state change karenge to component re-render hoga bas. 

                            ComponentDidMount nhi chalega kyunki ye ek bar chal chuka hai

    5. ComponentWillUnmount===> component jab just hatne se pehle ye wala function call hota hai

                                Aur ye bas ek he bar chalta hai
                                
                                Agar kisi database se baat kar rahe ho to close that connection
*/
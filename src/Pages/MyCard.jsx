import { useContext, useEffect, useState } from "react";
import { AUthContext } from "../Autprovider/Authprovider";
import Mydata from "./Mydata";

const MyCard = () => {
    const { user } = useContext(AUthContext)
    const [item, setItem] = useState([])
    // console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)
            })
    }, [user])

    return (
        <div className="bg-orange-100">
            <h1 className="text-3xl text-center text-[#a86a60] py-5">My Products</h1>
            <div className="mx-auto w-[96%] pb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        item.map(items => <Mydata items={items} key={items._id}></Mydata>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCard;
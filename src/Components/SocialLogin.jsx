import { FaGoogle } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { AUthContext } from "../Autprovider/Authprovider";

const SocialLogin = () => {
    const { googleSignin, githubSignin } = useContext(AUthContext)

    // const handleSocialLogin = socialProvider =>{
    //     socialProvider()
    //     .then(result =>{
    //         console.log(result);
    //     }).catch(error =>{
    //        console.error(error);
    //     })
    // }
    return (
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => googleSignin()} className="p-3 rounded-sm">
                <FaGoogle className="text-xl text-[#a86a60]" />
            </button>
            <button
                onClick={() => githubSignin()} className="p-3 rounded-sm">
                <AiFillGithub className="text-2xl text-[#a86a60]" />
            </button>
        </div>
    );
};

export default SocialLogin;
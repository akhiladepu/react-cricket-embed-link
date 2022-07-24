import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    const data = [
        {
            title: "Sky Sports",
            link: "//stream.crichd.vip/update/skys2.php"
        },
        {
            title: "Fox Cricket",
            link: "//stream.crichd.vip/update/fox501.php"
        },
        {
            title: "SuperSports",
            link: "//stream.crichd.vip/update/sscricket.php"
        },

        {
            title: "Willow Cricket",
            link: "//stream.crichd.vip/update/willowcricket.php"
        },
        {
            title: "BT Sports",
            link: "//stream.crichd.vip/update/bt1.php"
        }
    ]
    return (
        <div className='flex flex-col md:flex-row justify-center'>
            {data.map(el => {
                return (
                    <Link to={el.link} >
                        <button className='px-4 py-2 mx-4 my-8 rounded-lg bg-white border-black border-2'>
                            {el.title}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
const CarouselComponent = ({})=>{
    const videoProperties = [
        {
            id: 1,
            title: "Video 1",
            src: "https://youtu.be/7IKYd8bj57g?si=QsBWwJjBbUKJhQgM",
            credit: "Video by cottonbro from Pexels"
        },
        {
            id: 2,
            title: "Video 2",
            src: "https://youtu.be/5cSzi2wLztw?si=yBuwxngnwrnaLiVJ",
            credit: "Video by cottonbro from Pexels"
        },
        {
            id: 3,
            title: "Video 3",
            src: "https://youtu.be/Nc3cuBDYeD4?si=Zu8c0huMVg5h5f99",
            credit: "Video by cottonbro from Pexels"
        }
    ];
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx(Carousel, {
            style: {
                maxWidth: "40rem",
                margin: "auto"
            },
            children: videoProperties.map((videoObj)=>{
                return /*#__PURE__*/ _jsxs(Carousel.Item, {
                    children: [
                        /*#__PURE__*/ _jsx(ReactPlayer, {
                            url: videoObj.src,
                            // pip={true}
                            controls: true
                        }),
                        /*#__PURE__*/ _jsxs(Carousel.Caption, {
                            children: [
                                /*#__PURE__*/ _jsx("h3", {
                                    children: videoObj.title
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: videoObj.credit
                                })
                            ]
                        })
                    ]
                }, videoObj.id);
            })
        })
    });
};
export default CarouselComponent;

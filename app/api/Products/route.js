import { NextRequest, NextResponse } from "next/server";

const Products = [
    {id:0,product:"Apple 13-inch MacBook Air: Apple M1 chip with 8-core CPU and 7-core GPU, 256GB",price:"39,900",category:"MacBook",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkjj5yw9rcwse4_tn",province:"กรุงเทพมหานคร"},
    {id:1,product:"Apple MacBook Air 13 : M2 chip 8C CPU/8C GPU/8GB/256GB (New 2022) by Studio 7",price:"39,899",category:"MacBook",thumnail:"https://down-th.img.susercontent.com/file/th-11134201-7r991-lrim23ksure386_tn",province:"สมุทรปราการ"},
    {id:2,product:"Apple 13-inch MacBook Air: Apple M1 chip with 8-core CPU and 7-core GPU, 256GB",price:"39,900",category:"MacBook",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkjj5yw9rcwse4_tn",province:"กรุงเทพมหานคร"},
    {id:3,product:"Apple MacBook Air 13 : M2 chip 8C CPU/8C GPU/8GB/256GB (New 2022) by Studio 7",price:"39,899",category:"MacBook",thumnail:"https://down-th.img.susercontent.com/file/th-11134201-7r991-lrim23ksure386_tn",province:"สมุทรปราการ"},
    {id:4,product:"Apple 13-inch MacBook Air: Apple M1 chip with 8-core CPU and 7-core GPU, 256GB",price:"39,900",category:"MacBook",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkjj5yw9rcwse4_tn",province:"กรุงเทพมหานคร"},
    {id:5,product:"Apple MacBook Air 13 : M2 chip 8C CPU/8C GPU/8GB/256GB (New 2022) by Studio 7",price:"39,899",category:"MacBook",thumnail:"https://down-th.img.susercontent.com/file/th-11134201-7r991-lrim23ksure386_tn",province:"สมุทรปราการ"},
    
];


export async function GET() {
    return NextResponse.json(Products)
}
import { NextRequest, NextResponse } from "next/server";

const Products = [
    {id:0,product:"Apple 13-inch MacBook Air: Apple M1 chip with 8-core CPU and 7-core GPU, 256GB",price:"39,900",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98o-lkjj5yw9rcwse4_tn",province:"กรุงเทพมหานคร"},
    {id:1,product:"Apple MacBook Air 13 : M2 chip 8C CPU/8C GPU/8GB/256GB (New 2022) by Studio 7",price:"39,899",thumnail:"https://down-th.img.susercontent.com/file/th-11134201-7r991-lrim23ksure386_tn",province:"สมุทรปราการ"},
    {id:2,product:"Apple MacBook Pro 14 : M3 Pro chip 11C CPU/14C GPU/18GB/512GB (2023) by Studio 7",price:"79,900",thumnail:"https://down-th.img.susercontent.com/file/th-11134201-7r98r-lrilsbec85jy2e",province:"กรุงเทพมหานคร"},
    {id:3,product:"Apple iPad Air รุ่นที่ 5 (Gen 5th) l iStudio by copperwired.",price:"23,900",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7qul8-ljzo3egsizom79",province:"สมุทรปราการ"},
    {id:4,product:"Apple iPad Air5 Wifi ชิป M1หน้าจอ 10.9 นิ้ว iStudio by SPVi",price:"25,900",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98w-lpixqcnsityq3f",province:"นนทบุรี"},
    {id:5,product:"Apple iPhone 15 I iStudio by SPVi",price:"28,600",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98q-lrabdfmuywu539",province:"สมุทรปราการ"},
    {id:6,product:"Apple iPhone11 หน้าจอ 6.1 นิ้ว iStudio by SPVi",price:"14,500",thumnail:"https://down-th.img.susercontent.com/file/th-11134207-7r98p-lrabdfmv34jh0a",province:"สมุทรปราการ"},
    {id:7,product:"Apple USB-C to Lightning Cable (1M)",price:"750",thumnail:"https://down-th.img.susercontent.com/file/d84932ea39de55cef69a49e276a56865",province:"สมุทรปราการ"},
    
];


export async function GET() {
    return NextResponse.json(Products)
}
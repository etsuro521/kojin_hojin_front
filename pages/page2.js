import Head from 'next/head'
import { use, useState } from 'react'
import Link from 'next/link'

const services = [
    {
        title: "----",
        subTitle: [
            { name: "----" }
        ]
    },
    {
        title: "建設業",
        subTitle: [
            { name: "総合工事業" },
            { name: "職別工事業（設備工事業を除く）" },
            { name: "設備工事業" },
        ]
    },
    {
        title: "製造業",
        subTitle: [
            { name: "食料品製造業" },
            { name: "飲料・たばこ・飼料製造業" },
            { name: "繊維工業" },
            { name: "木材・木製品製造業（家具を除く）" },
            { name: "家具・装備品製造業" },
        ]
    },
    {
        title: "情報通信業",
        subTitle: [
            { name: "通信業" },
            { name: "放送業" },
            { name: "情報サービス業" },
            { name: "インターネット附随サービス業" },
            { name: "映像・音声・文字情報制作業" },
        ]
    }
]
export default function Example() {
    const [service, setService] = useState(services[0]);
    const [subServices, setSubService] = useState(service.subTitle);

    const getSubServices = (title) => {
        const s = services.filter(s => s.title == title);
        setService(s)
        setSubService(s.subTitle);
    }
    return (
        <>
            <Head>
                <title>状況設定</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-8/12 my-5 mx-auto'>
                <div>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">状況設定</h3>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0 ">
                            <form action="#" method="POST">
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6 overflow-y-scroll h-96">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                事業所の位置
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>---</option>
                                                <option>---</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                従業員の有無
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                onChange={(event) => getSubServices(event.target.value)}
                                            >
                                                {services.map((item) => {
                                                    return (
                                                        <option key={item.title} value={item.title}>{item.title}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                従業員数
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                青色専従者
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                扶養者①
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                扶養者②
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                健康保険の加入
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                事業主年齢
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                青色申告の有無
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                電子申告の有無
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                配偶者
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {subServices.map((item) => {
                                                    console.log(item)
                                                    return (
                                                        <option key={item.name} value={item.name}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                概算の年額医療費
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <Link
                                            href="/page3"
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            シミュレーション
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

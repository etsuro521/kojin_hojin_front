import Head from 'next/head'
import { use, useState } from 'react'
import Link from 'next/link'
import { getServices } from '../lib/functions'

export default function Example() {
  const serviceMaster = getServices();

  const [serviceName, setServiceName] = useState("-----");
  const [subServices, setSubServices] = useState(["-----"]);
  const [subServiceName, setSubServiceName] = useState("-----");
  const [aboutTax, setAboutTax] = useState({ cost: 0, income: 0, taxableIncome: 0 })

  const getSubServices = (service) => {
    const selectedService = serviceMaster.filter(s => s.name == service)[0];
    setSubServices(selectedService.subServices);
    setServiceName(service);
  };

  const getAboutTax = () => {
    setAboutTax({ cost: 1, income: 1, taxableIncome: 1 })

  }

  return (
    <>
      <Head>
        <title>所得計算</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-900 w-full h-14'>

      </div>
      <div className='w-2/4 my-4 mx-auto'>
        <div className='formWrap'>
          <div className="px-4 sm:px-0 flex justify-center items-start flex-col">
            <h3 className="text-lg font-medium leading-6 text-gray-900 tracking-wide">所得計算</h3>
            <div className='flex justify-center items-start gap-x-2'>
              <div className=''>
                <p className="mt-1 text-xs text-gray-600">※国民年金の計算は前払いによる割引を考慮せず、<br />月16,590円で計算する</p>
                <p className="mt-1 text-xs text-gray-600">※役員報酬は定期同額給与として損金算入を前提する</p>
              </div>
              <div className=''>
                <p className="mt-1 text-xs text-gray-600">※法人成りの場合は一人社長であることを仮定し、<br />当期純利益を手取り金額に含めるとする</p>
                <p className="mt-1 text-xs text-gray-600">※23区で法人登記しているものとする</p>
                <p className="mt-1 text-xs text-gray-600">※住民税の控除金額は所得税の控除金額と同額とする</p>
              </div>
            </div>
          </div>

          <div className="shadow">
            <div className='px-6 py-3 my-4'>

              <div className="my-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  所得の計算方法
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>推定利益率</option>
                  <option>費用手入力</option>
                </select>
              </div>
              <h3 className="text-xm font-medium leading-6 text-gray-900 tracking-wide">①推定利益率</h3>
              <div className='my-4 flex items-center justify-center w-full gap-x-1.5'>
                <div className="flex-1">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    業種選択
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => getSubServices(event.target.value)}
                  >
                    {serviceMaster.map((service, index) => {
                      return (
                        <option key={index} value={service.name}>{service.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    詳細業種選択
                  </label>
                  <select
                    id="service"
                    name="service"
                    autoComplete="service"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >

                    {subServices.map((subService, index) => {
                      return (
                        <option key={index} value={subService}>{subService}</option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <div className="my-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  役員報酬取り扱い
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>推定利益率</option>
                  <option>費用手入力</option>
                </select>
              </div>

              <div className='my-3 flex items-center justify-center w-full gap-x-1.5'>
                <div className="flex-1">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    推定利益率
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    役員報酬額抜き利益率
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    役員報酬額
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

              <div className='my-4 flex items-center justify-center w-full gap-x-1.5'>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    役員報酬可能上限
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    年商（売上高）
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

              <h3 className="text-xm font-medium leading-6 text-gray-900 tracking-wide">②費用手入力</h3>
              <div className='my-4 flex items-center justify-center w-full gap-x-1.5'>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    売上原価(外注費)
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    業務委託費
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    交際費
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    広告宣伝費
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
              <div className='my-4 flex items-center justify-center w-full gap-x-1.5'>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    地代家賃
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    水道光熱費
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    通信費
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    その他
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
              <div className='my-4 flex items-center justify-center w-full gap-x-1.5'>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    (個人)従業員給与
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    (法人)役員報酬
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    社会保険料(法人)
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
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right">
              <Link
                href="/page2"
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                次へ
              </Link>
            </div>
          </div>
        </div>
        <div className='summaryWrap'>

        </div>
      </div>
    </>
  )
}
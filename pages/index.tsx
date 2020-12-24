import Head from 'next/head'
import { useEffect, useState } from 'react'
export default function Home() {
    const [ip, setIp] = useState('')
    const [data, setData] = useState({ search_ip: '', addr: '', detail: '' })
    const [loading, setLoading] = useState(false)

    const getIP = (search_ip: string = ip) => {
        setLoading(true)
        fetch(`/api/${search_ip}`)
            .then((r) => r.json())
            .then((data) => setData(data))
            .catch((err) => {
                setData((prev) => ({
                    ...prev,
                    search_ip: '获取异常, 请检查网络或者稍后再试'
                }))
                console.log(err)
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getIP()
    }, [])
    return (
        <div className='md:grid md:grid-cols-3 m-auto'>
            <Head>
                <title>IP Address - 纯真IP数据库</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta
                    name='description'
                    content='IP Address 获取你想要查询IP或域名的详细信息'
                />
            </Head>
            <div
                style={{ marginTop: '40%' }}
                className='md:col-start-2 space-y-12'
            >
                <div className='flex justify-center'>
                    <span className='text-2xl md:text-4xl font-medium'>
                        获取最新纯真IP
                    </span>
                </div>
                <div className='flex flex-col w-full md:flex-row justify-center md:space-x-4 md:space-y-0 space-y-4 p-2'>
                    <input
                        value={ip}
                        onChange={(e) => setIp(e.target.value)}
                        type='text'
                        className='p-2 border rounded w-full flex-grow block'
                        placeholder='请输入要查询的ip或域名'
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') getIP()
                        }}
                    ></input>
                    <button
                        className='justify-center p-2 md:px-8 md:py-2 whitespace-nowrap border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                        onClick={() => getIP()}
                    >
                        提交
                    </button>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    {!loading ? (
                        <>
                            {' '}
                            <div>{data.search_ip}</div>
                            <div>{data.addr}</div>
                            <div>{data.detail}</div>
                        </>
                    ) : (
                        <div className='space-y-2 w-1/3'>
                            <div className='w-1/2 h-5 bg-gray-200 animate-pulse duration-300 ease-in rounded'></div>
                            <div className='w-full h-5 bg-gray-200 animate-pulse duration-300 ease-in rounded'></div>
                            <div className='w-full h-5 bg-gray-200 animate-pulse duration-300 ease-in rounded'></div>
                        </div>
                    )}
                </div>
                <div>
                    <div className='rounded bg-gray-50 p-4 text-sm space-y-2'>
                        <div>Tips:</div>
                        <div className='space-x-4'>
                            <span>获取本机IP</span>
                            <span className='text-red-400 font-mono font-medium inline-block'>
                                curl ipa.vercel.app/api
                            </span>
                        </div>
                        <div className='space-x-4'>
                            <span>获取指定IP</span>
                            <span className='text-red-400 font-mono font-medium inline-block'>
                                curl ipa.vercel.app/api/ip地址
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex text-sm md:absolute bottom-2'>
                    相关网站：
                    <span className='text-indigo-600 space-x-2'>
                        <a
                            href='https://github.com/sedgwickz/ipaddr'
                            target='_blank'
                        >
                            本站源码
                        </a>
                        <a href='https://jsonhunter.vercel.app' target='_blank'>
                            JSONHunter在线爬虫
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

import { useEffect, useState } from "react";
//import fetch from "unfetch";

export default function Home() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState({ search_ip: "", addr: "", detail: "" });
  const getIP = () => {
    fetch("/api/ip/?ip=" + ip)
      .then((r) => r.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getIP();
  }, []);
  return (
    <div className="md:grid md:grid-cols-3 m-auto">
      <div style={{ marginTop: "40%" }} className="md:col-start-2 space-y-12">
        <div className="flex justify-center">
          <span className="text-2xl md:text-4xl font-medium">
            获取最新纯真IP
          </span>
        </div>
        <div className="flex flex-col w-full md:flex-row justify-center md:space-x-4 md:space-y-0 space-y-4 p-2">
          <input
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            type="text"
            className="p-2 border rounded w-full flex-grow block"
            placeholder="请输入要查询的ip或域名"
            onKeyDown={(e) => {
              if (e.key == "Enter") getIP();
            }}
          ></input>
          <button
            className="justify-center p-2 md:px-8 md:py-2 whitespace-nowrap border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={getIP}
          >
            提交
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div>{data.search_ip}</div>
          <div>{data.addr}</div>
          <div>{data.detail}</div>
        </div>
        <div className="flex text-sm absolute bottom-2">
          相关网站：
          <span className="text-indigo-600 space-x-2">
            <a href="https://jsonhunter.vercel.app" target="_blank">
              本站源码
            </a>
            <a href="https://jsonhunter.vercel.app" target="_blank">
              JSONHunter在线爬虫
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

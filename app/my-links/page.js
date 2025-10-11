"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MyLinksTable = () => {
    const [myLinks, setMyLinks] = useState([]);
    const [copied, setCopied] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const storedLinks = JSON.parse(sessionStorage.getItem("links")) || [];
        setMyLinks(storedLinks);
    }, []);

const handleDelete = (index) => {
    const updatedLinks = myLinks.filter((_, i) => i !== index); // selected link ko remove
    sessionStorage.setItem("links", JSON.stringify(updatedLinks)); // updated list save
    setMyLinks(updatedLinks); // state update
};

 
    const domain = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-black p-6">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
                Your Generated Links
            </h1>
            <p className="text-white mb-4">You have total: {myLinks.length} URLs</p>

            {myLinks.length === 0 ? (
                <p className="text-gray-300 text-center mt-10">
                    You haven’t generated any links yet.
                </p>
            ) : (
                <div className="overflow-x-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg">
                    <table className="min-w-full table-fixed bg-white/10 backdrop-blur-md rounded-lg shadow-lg text-white">
                        <thead className="sticky t top-0 bg-gradient-to-r from-red-500 to-green-400  backdrop-blur-md z-10">
                            <tr className="border-b border-white/20">
                                <th className="px-4 py-3 text-left w-1/12">Sr. No</th>
                                <th className="px-4 py-3 text-left w-3/12">Short URL</th>
                                <th className="px-4 py-3 text-left w-5/12">Original URL</th>
                                <th className="px-4 py-3 text-left w-3/12">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/20">
                            {myLinks.map((link, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-white/20 transition-colors duration-200"
                                >
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 break-all">{`${domain}/${link.shortUrl}`}</td>
                                    <td className="px-4 py-3 break-all">{link.url}</td>
                                    <td className="px-4 py-3 flex gap-2">
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(`${domain}/${link.shortUrl}`);
                                                setCopied(index);
                                                setTimeout(() => setCopied(false), 2000);
                                            }}
                                            className={`px-3 py-1 rounded-lg cursor-pointer font-semibold transition-colors duration-200 ${copied === index
                                                    ? "bg-green-500"
                                                    : "bg-blue-600 hover:bg-blue-500"
                                                }`}
                                        >
                                            {copied === index ? "Copied!" : "Copy"}
                                        </button>
                                             <button
                                            onClick={()=>handleDelete(index)}
                                            className={`px-3 py-1 rounded-lg cursor-pointer font-semibold transition-colors duration-200 bg-red-700 hover:bg-red-400`}
                                        >
                                            Remove
                                        </button>
                                        <Link
                                            href="/ClickCounter"
                                            className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 font-semibold transition-colors duration-200"
                                        >
                                            Count Clicks
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
};

export default MyLinksTable;

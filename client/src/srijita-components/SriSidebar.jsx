import React from 'react'
import { Link, useParams } from 'react-router-dom';

const topics={
    react:['intro','jsx','components'],
    express:['intro'],
    node:['intro'],
    mongodb:['intro'],
}

const SriSidebar = ({stack}) => {
  return (
    <div className="w-64 bg-gray-100 p-4 border-r h-full">
       <h2 className="text-xl font-semibold mb-4 capitalize">{stack} Topics</h2>
       <ul className="space-y-2">
        {topics[stack]?.map(topic=>(
            <li key={topic}>
                <Link to={`/srijita-dashboard/${stack}/${topic}`} className="text-blue-600 hover:underline capitalize">
                    {topic}
                </Link>
            </li>
        ))}

       </ul>
    </div>
  )
}

export default SriSidebar

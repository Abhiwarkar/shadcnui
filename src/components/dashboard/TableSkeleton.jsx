// components/dashboard/TableSkeleton.jsx
import React from 'react';
import { Skeleton } from '../ui/skeleton';

const TableSkeleton = ({ rows = 5 }) => {
  return (
    <div className="bg-white rounded-md shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-8 px-6 py-3 text-left">
                <Skeleton className="h-4 w-4 rounded" />
              </th>
              <th className="px-6 py-3 text-left">
                <Skeleton className="h-4 w-32" />
              </th>
              <th className="px-6 py-3 text-left">
                <Skeleton className="h-4 w-28" />
              </th>
              <th className="px-6 py-3 text-left">
                <Skeleton className="h-4 w-16" />
              </th>
              <th className="px-6 py-3 text-left">
                <Skeleton className="h-4 w-24" />
              </th>
              <th className="px-6 py-3 text-center">
                <Skeleton className="h-4 w-16 mx-auto" />
              </th>
              <th className="px-6 py-3 text-center">
                <Skeleton className="h-4 w-16 mx-auto" />
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array(rows).fill(0).map((_, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-4 w-4 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-5 w-full max-w-xs" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-5 w-40" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-5 w-16" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-5 w-24" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Skeleton className="h-8 w-16 mx-auto rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-5 ml-2" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination skeleton */}
      <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="flex gap-2 items-center">
          <Skeleton className="h-5 w-44" />
          <Skeleton className="h-8 w-16 rounded" />
          <Skeleton className="h-5 w-28" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-20 rounded" />
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;